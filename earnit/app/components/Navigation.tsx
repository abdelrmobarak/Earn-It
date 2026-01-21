"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/parent/tasks", label: "Parents" },
  { href: "/child/tasks", label: "Kids" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-transparent">
      <div className="mx-auto mt-4 flex max-w-5xl items-center justify-between rounded-full border border-zinc-200 bg-white/90 px-5 py-2 shadow-sm backdrop-blur">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold text-zinc-900">Earn It</span>
        </Link>
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
          >
            Log in
          </Link>
          <Link
            href="/login"
            className="rounded-full bg-teal-500 px-4 py-2 text-sm font-medium text-white hover:bg-teal-600"
          >
            Sign up
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-600 hover:bg-zinc-100 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="text-xl">{menuOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {menuOpen && (
        <div className="mx-auto mt-3 max-w-5xl rounded-3xl border border-zinc-100 bg-white px-4 py-4 shadow-sm md:hidden">
          <div className="flex flex-col gap-3">
            <hr className="my-2 border-zinc-100" />
            <Link
              href="/login"
              className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-50"
              onClick={() => setMenuOpen(false)}
            >
              Log in
            </Link>
            <Link
              href="/login"
              className="rounded-full bg-teal-500 px-4 py-2 text-center text-sm font-medium text-white hover:bg-teal-600"
              onClick={() => setMenuOpen(false)}
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
