import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";
import prisma from "./prismadb";

const ServerAuth = async (req: NextApiRequest) => {
  const session = await getSession({ req });

  if (!session?.user?.email) throw new Error("You are not signed in");

  const currentUser = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!currentUser) throw new Error("You are not signed in");

  return { currentUser };
};

export default ServerAuth;
