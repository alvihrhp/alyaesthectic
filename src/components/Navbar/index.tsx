"use client";
import React, { useState } from "react";
/** Next Component */
import Image from "next/image";
/** Image */
import Logo from "@/assets/logo-and-text.svg";
/** Libraries */
import cx from "classnames";

type Link = {
  name: string;
  active: boolean;
};

export default function Navbar() {
  const [links, setLinks] = useState<Link[]>([
    {
      name: "Home",
      active: true,
    },
    {
      name: "About",
      active: false,
    },
    {
      name: "Service",
      active: false,
    },
    {
      name: "Article",
      active: false,
    },
    {
      name: "Contact",
      active: false,
    },
  ]);

  return (
    <nav className="w-full py-[1.5rem] px-[5rem] bg-white flex flex-wrap justify-between items-center sticky top-0 z-30">
      <Image src={Logo} alt="logo-alya-esthetic" />
      <div className="flex flex-wrap gap-x-[32px] items-center">
        {links.map((link: Link, linkIdx: number) => (
          <span
            key={linkIdx}
            className={cx("font-medium text-xl/[1.5rem] text-neutral")}
          >
            <a href="#">{link.name}</a>
          </span>
        ))}
        <button
          type="button"
          className="py-[1rem] px-[1.5rem] bg-primary rounded-full text-white text-xl/[1.5rem] font-semibold"
        >
          Booking
        </button>
      </div>
    </nav>
  );
}
