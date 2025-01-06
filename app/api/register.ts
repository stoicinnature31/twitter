import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import prisma from "@/libs/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { email, name, username, password } = req.body;

    // ✅ Validation
    if (!email || !name || !username || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // ✅ Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(409).json({ error: "User already exists with this email" });
    }

    // ✅ Hash Password
    const hashedPassword = await bcrypt.hash(password, 10); // Use a higher saltRounds value (10 is standard)

    // ✅ Create New User
    const user = await prisma.user.create({
      data: { email, username, name, hashedPassword },
    });

    return res.status(201).json({ message: "User created successfully", user });
  } catch (error: any) {
    console.error("User Registration Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
