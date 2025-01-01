"use client"; 

import { HiHome } from "react-icons/hi2";
import { Search } from 'lucide-react';
import { IoMdNotifications } from "react-icons/io";
import { SiGooglemessages } from "react-icons/si";
import { FaUserLarge } from "react-icons/fa6";
import SidebarLogo from "./SidebarLogo";


document.body.append('<i data-lucide="search"></i>');  

const Sidebar = () => {
  const items = [
    {
      label: "Home",
      icon: HiHome,
      href: "/",
    },
    {
      label: "Search",
      icon: Search,
      href: "/search",
    },
    {
      label: "Notifications",
      icon: IoMdNotifications,
      href: "/notifications",
    },
    {
      label: "Messages",
      icon: SiGooglemessages,
      href: "/messages",
    },
    {
      label: "Profile",
      icon: FaUserLarge,
      href: "/profile",
    },
    {
      label: "Home",
      icon: HiHome,
      href: "/",
    },
    {
      label: "Home",
      icon: HiHome,
      href: "/",
    },
    {
      label: "Home",
      icon: HiHome,
      href: "/",
    },
  ];
  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
        <div className="flex flex-col items-end">
            <div className="space-y-2 lg:w-[230px">
                <SidebarLogo/>
            </div>
        </div>
    </div>
  );
};

export default Sidebar;
