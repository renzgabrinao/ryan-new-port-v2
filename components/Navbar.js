import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="relative z-50 flex justify-between w-full py-3 font-normal border-b-2 text-rg-white font-satoshi text-step1">
      <Link href="/">Home</Link>
      <Link href="/">Works</Link>
      <Link href="/">About</Link>
    </div>
  );
};

export default Navbar;
