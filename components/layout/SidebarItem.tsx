import { IconType } from "react-icons";

interface SidebarItemProps {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
  active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({label, href, icon : Icon, onClick, active}) => {
  return (
    <div className="flex flex-row items-center">
        {/* for mobile */}
        <div className="relative h-14 flex items-center justify-center p-4 hover:bg-slate-800 hover:bg-opacity-10 cursor-pointer lg:hidden">
            <Icon className="w-8 h-8"/>
            {/* {label} */}
            </div>
        {/* for desktop */}
        <div className="relative hidden lg:flex items-center justify-center gap-4 p-4  hover:bg-slate-800  hover:bg-opacity-10 cursor-pointer">
            <Icon className="w-7 h-7 text-foreground"/>
            <p className="hidden lg:block text-white text-xl">{label}</p>
        </div>
    </div>
  );
};

export default SidebarItem;
