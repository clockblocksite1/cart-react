import React from "react";
import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import Haeder from "./Header";

export default function Layout() {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
        <Sidebar/>
      <div className="p-4">
        <Haeder/>
        <div>
        <Outlet />
      </div>
      </div>
    </div>
  );
}