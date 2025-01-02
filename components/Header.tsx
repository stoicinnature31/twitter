
"use client"

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { MdArrowBackIos } from "react-icons/md";

interface HeaderProps {
  label?: string;
  showbackArrow?: Boolean;
}

const Header: React.FC<HeaderProps> = ({ label, showbackArrow }) => {
  const router = useRouter();

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);
  return (
    <div className="border-b border-neutral-800 p-5">
        <div className="flex flex-row items-center gap-2">
            {
                showbackArrow && (
                    <MdArrowBackIos onClick={handleBack} color="white" size={20} className="cursor-pointer hover:opacity-70 transition"/>
                )
            }
            <h1 className="text-xl font-semibold text-white">{label}</h1>
        </div>
    </div>
  )
};

export default Header;
