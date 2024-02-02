"use client";

import React from "react";
import {
  Home,
  LayoutDashboard,
  BarChart,
  Copy,
  Bookmark,
  Users,
  Settings,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-hot-toast";
import { usePathname, useRouter } from "next/navigation";

export default function AsideElement() {
  const router = useRouter();
  const logout = () => {
    try {
      axios.get("/api/users/log_out");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  const path=usePathname();
  return (
    <aside className="flex h-screen w-16 flex-col items-center overflow-y-auto border-r bg-white py-8">
      <nav className="flex flex-1 flex-col items-center space-y-6">
        <Link href={"/"}>
          <img src="" alt="" />
        </Link>
        <Link
          href={"/account"}
          className={"rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none "+(path==='/acount' ? "text-blue-500":'')}
        >
          <LayoutDashboard size={24} />
        </Link>

        <Link
          href={"/analytics"}
          className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none"
        >
          <BarChart size={24} />
        </Link>

        <Link
          href={"/"}
          className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none"
        >
          <Copy size={24} />
        </Link>

        <Link
          href={"/"}
          className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none"
        >
          <Bookmark size={24} />
        </Link>

        <Link
          href={"/"}
          className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none"
        >
          <Users size={24} />
        </Link>
      </nav>

      <div className="flex flex-col items-center space-y-6">
        <Link
          href={"/"}
          className="rounded-lg bg-gray-100 p-1.5 text-gray-700 transition-colors duration-200 focus:outline-none"
        >
          <Settings size={24} />
        </Link>
        <button onClick={logout}>
          <LogOut size={24} />
        </button>
      </div>
    </aside>
  );
}
