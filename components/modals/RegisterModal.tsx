"use client";

import useRegisterModal from "@/hooks/useRegisterModal";
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import useLoginModal from "@/hooks/useLoginModal";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";

const RegisterModal = () => {
  const LoginModal = useLoginModal();
  const RegisterModal = useRegisterModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // OnSubmit Function

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      if (!email || !password || !name || !username) {
        toast.error("Please fill in all fields");
        return;
      }
      console.log(`Email: ${email} , Password: ${password} , Name: ${name}, UserName: ${username}`);
      
  
      await axios.post("/api/register", {
        email,
        password,
        username,
        name,
      });
  
      toast.success("Account Created Successfully!");
  
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
  
      if (response?.error) {
        toast.error(response.error);
      } else {
        RegisterModal.onClose();
      }
    } catch (error) {
      console.log("Error: ",error);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, [RegisterModal, email, password, username, name]);
  

  //  onToggle Function
  const onToggle = useCallback(() => {
    if (isLoading) return;

    RegisterModal.onClose();
    LoginModal.onOpen();
  }, [isLoading, RegisterModal, LoginModal]);
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        type="text"
        placeholder="Enter Your Full Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={isLoading}
      />
      <Input
        type="text"
        placeholder="Enter Your Username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        disabled={isLoading}
      />
      <Input
        type="email"
        placeholder="Enter Your Email Address"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
      />
      <Input
        type="password"
        placeholder="Enter Your Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading}
      />
    </div>
  );

  const footerContent = (
    <div className="text-white text-center mt-4">
      <p>
        Already have an account?{" "}
        <span
          className="text-blue-700 cursor-pointer hover:underline"
          onClick={onToggle}>
          {" "}
          Sign in
        </span>
      </p>
    </div>
  );
  return (
    <Modal
      isOpen={RegisterModal.isOpen}
      onClose={RegisterModal.onClose}
      title="Create an account"
      actionLabel="Register"
      disabled={isLoading}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
