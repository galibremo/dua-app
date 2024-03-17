import React from "react";
import { CiSearch } from "react-icons/ci";

export default function Header() {
  return (
    <div className="flex item-center justify-between relative w-full mb-3">
      <div className="flex items-center">
        <h1 className="text-xl sm:text-2xl">Duas Page</h1>
      </div>
      <div className="flex justify-between w-[600px]">
        <div className="relative">
          <form className="p-2 rounded-md flex items-center">
            <input
              type="text"
              placeholder="Search by Dua Name"
              className="p-3 rounded-md w-[350px]"
            />
            <button type="submit">
              <CiSearch className="bg-slate-100 rounded-md w-10 h-10 p-3 absolute right-[12px] top-[14px]" />
            </button>
          </form>
        </div>
        <div className="flex items-center">
          <div className="flex items-center">
            <img
              src="https://duaruqyah.com/assets/settings/profile.svg"
              alt=""
              className="rounded-full cursor-pointer"
            />
            <svg
              className="ml-2 mr-2 cursor-pointer"
              width="10"
              height="7"
              viewBox="0 0 10 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.79241 5.97063C5.3921 6.49064 4.6079 6.49064 4.20759 5.97063L1.04322 1.85999C0.537025 1.20243 1.00579 0.25 1.83563 0.25L8.16437 0.250001C8.99421 0.250001 9.46298 1.20243 8.95678 1.86L5.79241 5.97063Z"
                fill="#868686"
              ></path>
            </svg>
          </div>
          <div>
            <img
              src="https://duaruqyah.com/assets/tab/home/settings.svg"
              alt=""
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
