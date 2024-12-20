/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// Sidebar.js
import React, { useEffect, useState } from "react";
import {
  BarChart2,
  Users,
  CreditCard,
  Menu,
  X,
  List,
  Edit,
  FilePlus,
  Target,
  Home,
  Code2,
  Cloud,
  Book,
  Settings,
  Phone,
  LogOut,
} from "lucide-react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import SelectNav from "../components/Select";

const navigationItems = [
  { name: "Repositories", icon: Home, href: "/" },
  { name: "AI Code Review", icon: Code2, href: "#" },
  { name: "Cloud Security", icon: Cloud, href: "#" },
  { name: "How to Use", icon: Book, href: "#" },
  { name: "Settings", icon: Settings, href: "#" },
];
const navigationItemsSm = [
  { name: "Repositories", icon: Home, href: "/" },
  { name: "AI Code Review", icon: Code2, href: "#" },
  { name: "Cloud Security", icon: Cloud, href: "#" },
  { name: "How to Use", icon: Book, href: "#" },
  { name: "Settings", icon: Settings, href: "#" },
  { name: "Support", icon: Phone, href: "#" },
  { name: "Logout", icon: LogOut, href: "#" },
];

const DownNav = [
  { name: "Support", icon: Phone, href: "#" },
  { name: "Logout", icon: LogOut, href: "#" },
];

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [current, setCurrent] = useState("Repositories");
  const location = useLocation();

  // Close sidebar on route change (mobile)
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location]);

  //   // Update page title
  //   useEffect(() => {
  //     document.title = current ? `${current} - KnowledgePulse` : "KnowledgePulse";
  //   }, [current]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Navigation Bar */}
      <div className="sticky top-0 z-40 lg:hidden">
        <div className="flex items-center justify-between bg-white px-4 py-2 shadow-md">
          <Link to="/" className="text-xl font-bold text-gray-800">
            <img src="/Frame 9.png" alt="" />
          </Link>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="rounded-md p-2 text-gray-600 hover:bg-gray-100"
          >
            {isSidebarOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Sidebar - Desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-[242px] lg:flex-col">
        <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5">
          <div className="flex flex-shrink-0 items-center px-4 pt-1">
            <Link to="/" className="text-xl font-bold text-gray-800">
              <img src="/Frame 9.png" alt="" />
            </Link>
          </div>
          <div className="px-4 pt-2">
            <SelectNav className="w-[202px]" />
          </div>
          <nav className="mt-5 flex-1 space-y-1 px-4">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setCurrent(item.name)}
                className={`group flex items-center px-4 rounded-[8px]  font-medium h-12 w-52 text-lg ${
                  current === item.name
                    ? "bg-[#1570EF] text-white"
                    : "text-gray-900 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <item.icon
                  className={`mr-3 h-5 w-5 flex-shrink-0 ${
                    current === item.name
                      ? "text-white"
                      : "text-gray-900 group-hover:text-gray-500"
                  }`}
                />
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="h-[130px] flex flex-col space-y-1 px-4">
            {DownNav.map((item) => (
              <Link
                key={item.name}
                to={item.name === "Logout" ? "/" : item.href}
                onClick={() => setCurrent(item.name)}
                className={`group flex items-center px-4 rounded-[8px]  font-medium h-12 w-52 text-lg ${
                  current === item.name
                    ? `${current === "Logout" ? "bg-red-500 text-white" : "bg-neutral-100 text-black"} `
                    : "text-gray-900 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <item.icon
                  className={`mr-3 h-5 w-5 flex-shrink-0 ${
                    current === item.name
                      ? ` ${current === "Logout" ? "text-white" : " text-black"}`
                      : "text-gray-900"
                  }`}
                />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-gray-600 bg-opacity-75"
            onClick={() => setIsSidebarOpen(false)}
          />
          <div className="fixed inset-y-0 max-h-[456px] h-full left-0 flex w-full flex-col bg-white">
            <div className="flex h-16 items-center justify-between px-4">
              <Link to="/" className="text-xl font-bold text-gray-800">
                <img src="/Frame 9.png" alt="" />
              </Link>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="rounded-md p-2 text-gray-600 hover:bg-gray-100"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="px-4 pt-2">
              <SelectNav className="w-full" />
            </div>
            <nav className="mt-4 flex-1 space-y-1 px-4">
              {navigationItemsSm.map((item) => (
                <Link
                  key={item.name}
                  to={item.name === "Logout" ? "/" : item.href}
                  onClick={() => setCurrent(item.name)}
                  className={`group flex items-center px-4 rounded-[8px]  font-medium h-10 w-full text-[16px] ${
                    current === item.name
                      ? `${current === "Logout" ? "bg-red-500 text-white" : "bg-[#1570EF] text-white"}`
                      : "text-gray-900 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <item.icon
                    className={`mr-3 h-5 w-5 flex-shrink-0 ${
                      current === item.name
                        ? "text-white"
                        : "text-gray-900 group-hover:text-gray-500"
                    }`}
                  />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex flex-1 flex-col lg:pl-64">
        <main className="flex-1">
          <div className="py-6">
            <div className="max-w-7xl  mx-4 bg-[#FFFFFF] border rounded-xl">
              <Header current={current} />
              <main className=" h-full ">
                <Outlet />
              </main>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Layout;
