'use client'

import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { LuCirclePlus } from "react-icons/lu";

const SidebarTweetbutton = () => {
    const RegisterModal = useRegisterModal();
    const onClick = useCallback(()=>{
        RegisterModal.onOpen();
    }, [RegisterModal])
    const router = useRouter()
    return (
        <div onClick={onClick}>
            <div className="mt-6 lg:hidden h-14 w-14 p-4 flex items-center justify-center rounded-full bg-sky-500 hover:bg-opacity-80 transition cursor-pointer">
                <LuCirclePlus className="w-8 h-8"/>
            </div>

            <div onClick={onClick} className="mt-6 hidden lg:block px-4 py-2 bg-sky-500 hover:bg-opacity-90 cursor-pointer transition">
                <p className="hidden lg:block text-center font-semibold text-white text-[20px]">Post</p>
            </div>
        </div>
    );
}
 
export default SidebarTweetbutton;