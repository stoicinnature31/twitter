import { ReactNode } from "react";
import Sidebar from "./layout/Sidebar";
import FollowBar from "./layout/FollowBar";

interface LayoutProps {
  children: ReactNode;
}

const OuterLayer: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen bg-background">
      <div className="container h-full mx-auto xl:px-30 max-w-6xl">
        <div className="grid grid-cols-4 h-full">
          <Sidebar />
          <div className="col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800">
            {children}
          </div>
          <FollowBar />
        </div>
      </div>
    </div>
  );
};

export default OuterLayer;
