import React from "react";
import classNames from "classnames";
import WorkImg from './../Share/Logo Work5 (1).png'
import { DASHBOARD_SIDEBAR_LINKS } from "../lib/const/navigation";
import { Link, useLocation } from "react-router-dom";

const linkClasses = 'flex items-center gap-2 font-light px-3 py-2 rounded-sm text-base';
const activeLineClasses = 'absolute bg-indigo-600 w-1 h-14 left-0 transition-all shadow-line'; 

export default function Sidebar() {
    const { pathname } = useLocation();
    const activeLink = DASHBOARD_SIDEBAR_LINKS.find(item => pathname === item.path || pathname.startsWith(`${item.path}/`));

    return (
        <div className="w-48 h- top-38 left-38 bg-white text-gray-700 relative">
            <div className="gap-2 px-1 py-3 ml-3">
                <img src={WorkImg} alt="" />
            </div>
            <div className="flex-1 relative mt-6">
                {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                    <SiderLink
                        key={item.key}
                        item={item}
                        isActive={activeLink && activeLink.key === item.key}
                    />
                ))}
            </div>
        </div>
    );
}

function SiderLink({ item, isActive }) {
    return (
        <Link
            to={item.path}
            className={classNames(isActive ? "text-gray-900 font-bold" : "text-gray-500", linkClasses, "h-16 relative")}
            style={{ color: isActive ? "#343434" : "" }} 
        >
            <span className="text-xl mb-1">{item.icon}</span>
            {item.label}
            {isActive ? (
                <div className={activeLineClasses} style={{ top: 0 }}></div>
            ) : null}
        </Link>
    );
}