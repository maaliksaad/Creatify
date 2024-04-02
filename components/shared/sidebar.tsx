"use client";
import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <aside className="sidebar">
      <div className="flex flex-col gap-4 sixe-full">
        <Link href="/">
          <Image
            src="assets/images/logo-text.svg"
            alt="creatify"
            width={180}
            height={28}
          />
        </Link>

        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathName;

                return (
                  <li
                    key={link.label}
                    className={`sidebar-nav_element group ${
                      isActive
                        ? "bg-purple-gradient text-white"
                        : "text-gray-700"
                    }`}
                  >
                    <Link className="sidebar-link" href={link.route}>
                      <Image
                        src={link.icon}
                        alt={link.label}
                        height={24}
                        width={24}
                        className={`${isActive && "brightness-200"} `}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathName;

                return (
                  <li
                    key={link.label}
                    className={`sidebar-nav_element group ${
                      isActive
                        ? "bg-purple-gradient text-white"
                        : "text-gray-700"
                    }`}
                  >
                    <Link className="sidebar-link" href={link.route}>
                      <Image
                        src={link.icon}
                        alt={link.label}
                        height={24}
                        width={24}
                        className={`${isActive && "brightness-200"} `}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton afterSignOutUrl="/" showName />
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in">Log In</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
