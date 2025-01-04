'use client'

import useLoginModal from "@/hooks/useLoginModal";
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import useRegisterModal from "@/hooks/useRegisterModal";

const LoginModal = () => {
    const LoginModal = useLoginModal();
    const RegisterModal = useRegisterModal();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // OnSubmit Function

    const onSubmit = useCallback(async ()=>{
        try {
            setIsLoading(true);
            // Add Login

            LoginModal.onClose();
        } catch (error) {
            console.log(error);
            
        } finally{
            setIsLoading(false);
        }
    },[LoginModal])

    //  onToggle Function
const onToggle = useCallback(() => {
    if(isLoading) return;

    LoginModal.onClose();
    RegisterModal.onOpen();
}, [isLoading, RegisterModal, LoginModal])


    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} value={email} disabled={isLoading}/>
            <Input type="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} value={password} disabled={isLoading}/>
        </div>
    )

    const footerContent = (
        <div className="text-white text-center mt-4">
            <p>First Time in Twitter? <span className="text-blue-700 cursor-pointer hover:underline" onClick={onToggle}> Create an account</span></p>
        </div>
    )
    return ( 
        <Modal isOpen= {LoginModal.isOpen} onClose={LoginModal.onClose} title="Sign in" actionLabel="Sign in" disabled={isLoading} onSubmit={onSubmit} body={bodyContent} footer={footerContent}/>
     );
}
 
export default LoginModal;