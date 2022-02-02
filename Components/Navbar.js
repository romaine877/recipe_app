import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center p-7 mx-5">

      <Link href="/">
      <p className="rounded-lg shadow-md p-7 font-bold text-green-600 hover:shadow-lg hover:bg-green-600 hover:text-yellow-300 transition ease-in">UPTOWN</p>
      </Link>
      <nav className="space-x-7">
        <Link href="/">
          <a className="p-5 rounded-lg font-bold text-green-600  hover:bg-green-600 hover:text-yellow-300 transition ease-in">Home</a>
        </Link>
        <Link href="/about">
          <a className="p-5 rounded-lg font-bold text-green-600  hover:bg-green-600 hover:text-yellow-300 transition ease-in">About</a>
        </Link>
        <Link href="/recipes">
          <a className="p-5 rounded-lg font-bold text-green-600  hover:bg-green-600 hover:text-yellow-300 transition ease-in">Recipes</a>
        </Link>
        <Link href="/contact">
          <a className="p-5 rounded-lg font-bold text-green-600  hover:bg-green-600 hover:text-yellow-300 transition ease-in">Contact</a>
        </Link>
      </nav>
    </header>
  );
}
