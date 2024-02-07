"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Blog",
    path: "/blog",
  },
];
const Navbar = () => {
  const temp = usePathname();
  const isAdmin = true;
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <div className="w-full flex justify-between items-center border-b-2 border-black py-3">
      <div>
        <Link href={"/"}>
          <h1 className="text-3xl font-bold">Logo</h1>
        </Link>
      </div>
      <div className="flex gap-10 text-xl">
        {" "}
        <ul className="flex gap-3">
          {Links.map((e) => (
            <Link
              key={e.name}
              href={e.path}
              className={`${
                temp == e.path && `bg-white`
              } transition-all duration-300`}
            >
              {e.name}
            </Link>
          ))}
        </ul>
        <ul className="flex gap-3">
          {isAdmin && (
            <Link href={"/admin"}>
              <li>Admin</li>
            </Link>
          )}
          {isAuthenticated ? (
            <button onClick={() => setIsAuthenticated(!isAuthenticated)}>
              Logout
            </button>
          ) : (
            <Link href={"/login"}>
              <button>Login</button>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
