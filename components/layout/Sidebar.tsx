"use client"; 

import { HiHome } from "react-icons/hi2";
import { Search } from 'lucide-react';
import { IoMdNotifications } from "react-icons/io";
import { SiGooglemessages } from "react-icons/si";
import { FaUserLarge } from "react-icons/fa6";
import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import { MdOutlineMessage } from "react-icons/md";
import { ModeToggle } from "../ModeToggle";
import { GrLogout } from "react-icons/gr";
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
