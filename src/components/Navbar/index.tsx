"use client";
import React, { useState } from "react";
/** Next Component */
import Image from "next/image";
/** Image */
import Logo from "@/assets/logo-and-text.svg";
/** Libraries */
import cx from "classnames";


import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

type Link = {
  name: string;
  active: boolean;
  href: string;
};

export default function Navbar() {
  const [links, setLinks] = useState<Link[]>([
    {
      name: "Home",
      active: true,
      href:"/"
    },
    {
      name: "About",
      active: false,
      href:"#about"
    },
    {
      name: "Service",
      active: false,
      href:"#service"
    },
    {
      name: "Article",
      active: false,
      href:"#article"
    },
    {
      name: "Contact",
      active: false,
      href:"#footer"
    },
  ]);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (

    <header>
      <nav className="w-full md:py-[1.5rem] py-[1.5rem] px-[1.2rem] md:px-[5rem] bg-white flex flex-wrap justify-between items-center sticky top-0 z-30" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Alya Aesthetic</span>
            <Image src={Logo} alt="logo-alya-esthetic" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {links.map((link: Link, linkIdx: number) => (
            <a key={linkIdx} href={link.href} className={cx("font-medium text-xl/[1.5rem] text-neutral")}>
              {link.name}
            </a>
          ))}
        </div>
        <button
          type="button"
          className="py-[1rem] ml-6 px-[1.5rem] bg-primary rounded-full text-white text-xl/[1.5rem] font-semibold"
        >
          Booking
        </button>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Alya Aesthetic</span>
              <Image src={Logo} alt="logo-alya-esthetic" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6 space-y-2">
                {links.map((link: Link, linkIdx: number) => (
                  <a key={linkIdx} href={link.href} className={cx("font-medium text-xl/[1.5rem] text-neutral")}>
                    {link.name}
                  </a>
                ))}
              </div>
              <button
                type="button"
                className="py-[1rem] ml-6 px-[1.5rem] bg-primary rounded-full text-white text-xl/[1.5rem] font-semibold"
              >
                Booking
              </button>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
