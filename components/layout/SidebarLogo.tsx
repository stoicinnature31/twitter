"use client"; 

import { useRouter } from "next/navigation";
import { FaTelegramPlane } from "react-icons/fa";

const SidebarLogo = () => {
    const router = useRouter();
    return ( 
    <div onClick={()=> router.push('/')} className="rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg-blue-500 hover:bg-opacity-10 cursor-pointer transition">
        <FaTelegramPlane size={30} className="text-sky-500"/>        
    </div> 
    );
}
 
export default SidebarLogo;