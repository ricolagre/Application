import React from "react";
import Sidebar from "../components/Sidebar";

interface Props {
  children: React.ReactNode;
}

const SidebarLayout = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <Sidebar />
      </aside>
      <main className="flex-grow p-6">{children}</main>
    </div>
  );
};

export default SidebarLayout;