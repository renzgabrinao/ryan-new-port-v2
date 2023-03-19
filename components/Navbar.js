import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute left-0 z-50 flex justify-between w-full px-4 py-3 font-normal tracking-tighter bottom-10 text-rg-white font-satoshi text-step1 md:top-0">
      <Link href="/">Home</Link>
      <Link href="/">Works</Link>
      <Link href="/">About</Link>
    </nav>
  );
};

export default Navbar;
