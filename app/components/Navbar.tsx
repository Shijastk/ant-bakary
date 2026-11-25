"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, ShoppingBag, User, X } from "lucide-react";
const links = ["Home", "Menu", "About Us", "Our Story", "Blog", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="bg-yellow-500">
        <Link href="/" className="font-script text-[44px] leading-none text-primary">
          Antis
        </Link>

        <ul className="hidden items-center gap-10 lg:flex">
          {links.map((l, i) => (
            <li key={l}>
              <a
                href="#"
                className={`text-[15px] font-medium transition-colors hover:text-primary ${
                  i === 0 ? "text-ink" : "text-ink/85"
                }`}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5 sm:gap-7">
          <button aria-label="Account" className="hidden text-ink transition-colors hover:text-primary sm:block">
            <User className="size-[22px]" strokeWidth={1.7} />
          </button>
          <button aria-label="Cart" className="relative text-ink transition-colors hover:text-primary">
            <ShoppingBag className="size-[22px]" strokeWidth={1.7} />
            <span className="absolute -right-1.5 -top-1.5 grid size-[15px] place-items-center rounded-full bg-pink text-[9px] font-bold text-white">
              2
            </span>
          </button>
          <a href="#" className="btn btn-primary hidden h-10 px-6 text-sm sm:inline-flex">
            Order Now
          </a>
          <button
            aria-label="Toggle menu"
            className="text-ink lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-white lg:hidden">
          <ul className="container-x flex flex-col py-3">
            {links.map((l) => (
              <li key={l}>
                <a href="#" className="block py-3 font-medium text-ink hover:text-primary">
                  {l}
                </a>
              </li>
            ))}
            <li className="pt-2 sm:hidden">
              <a href="#" className="btn btn-primary h-11 w-full text-sm">
                Order Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
