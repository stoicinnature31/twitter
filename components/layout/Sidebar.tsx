"use client"; 

import { Search } from 'lucide-react';
import { FaUserLarge } from "react-icons/fa6";
import { GrLogout } from "react-icons/gr";
import { HiHome } from "react-icons/hi2";
import { IoMdNotifications } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
import { ModeToggle } from "../ModeToggle";
import SidebarItem from "./SidebarItem";
import SidebarLogo from "./SidebarLogo";
import SidebarTweetbutton from "./SidebarTweetButton";



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
      icon: MdOutlineMessage,
      href: "/messages",
    },
    {
      label: "Profile",
      icon: FaUserLarge,
      href: "/profile",
    },
  ];
  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
        <div className="flex flex-col items-end">
            <div className="space-y-2 lg:w-[230px]">
                <SidebarLogo />
                {
                  items.map((i)=>(
                    <SidebarItem key={i.href} href={i.href} label={i.label} icon={i.icon}/>
                  ))
                }
                <SidebarItem label="Theme" icon={ModeToggle} href="#" />             
                <SidebarItem label="Logout" icon={GrLogout} onClick={()=>{}} />
                <SidebarTweetbutton/>             
            </div>
        </div>
    </div>
  );
};

export default Sidebar;
