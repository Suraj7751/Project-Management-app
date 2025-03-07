import React from "react";
import { Menu, Search, Settings } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsDarkMode, setIsSidebarCollapsed } from "@/state";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  return (
    <div className="flex items-center justify-between bg-white px-4 py-4 dark:bg-black dark:px-4 dark:py-3">
      <div className="flex items-center gap-8">
        {!isSidebarCollapsed ? null : (
          <button
            onClick={() => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}
          >
            <Menu className="h-8 w-8 dark:text-white" />
          </button>
        )}

        <div className="relative flex h-10 w-[200px] items-center rounded bg-gray-100 dark:bg-gray-700">
          <Search className="absolute left-3 h-5 w-5 text-gray-500 dark:text-white" />
          <input
            className="w-full bg-transparent pl-10 pr-2 text-sm text-gray-900 placeholder-gray-500 focus:outline-none dark:text-white dark:placeholder-white"
            type="search"
            placeholder="Search ..."
          />
        </div>
      </div>

      <div className="flex items-center">
        <button
          onClick={() => dispatch(setIsDarkMode(!isDarkMode))}
          className={
            isDarkMode
              ? `rounded p-2 dark:hover:bg-gray-700`
              : `rounded p-2 hover:bg-gray-100`
          }
        >
          <span className="dark:text-white">{isDarkMode ? "🌙" : "☀️"}</span>
        </button>
        <a
          href="/settings"
          className="h-min w-min rounded p-2 hover:bg-gray-100"
        >
          <Settings className="h-6 w-6 cursor-pointer dark:text-white" />
        </a>
        <div className="ml-2 mr-5 hidden min-h-[2em] w-[0.1rem] bg-gray-200 md:inline-block"></div>
      </div>
    </div>
  );
};

export default Navbar;
