import React from "react";
import requests from "../utils/requests";
import { useRouter } from "next/router";
export const Nav = () => {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="position-relative flex px-10 sm:px-16 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll overflow-y-hidden  scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            onClick={() => router.push(`/?genre=${key}`)}
            key={key}
            className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
          >
            {title}
          </h2>
        ))}
        <div className="absolute top-0 right-0 h-10 w-24 bg-gradient-to-l from-[#06202A]" />
      </div>
    </nav>
  );
};
