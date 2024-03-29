"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoMdBug } from "react-icons/io";

const NavBar = () => {
  const link = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  const currentPath = usePathname();

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <IoMdBug />
      </Link>
      <ul className="flex space-x-6">
        {link.map((link) => (
          <Link
            key={link.href}
            className={classNames({
              "text-zinc-900": currentPath === link.href,
              "text-zinc-500": currentPath !== link.href,
              "hover:text-zinc-800 transition-colors": true,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
