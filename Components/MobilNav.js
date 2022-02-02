import Link from "next/link";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";

export default function MobileNav() {
    const [mobilNavOpen, setMobilNavOpen] = useState(false);

    const toggleMobilNav = () => {
        setMobilNavOpen(!mobilNavOpen);
    }
  return (
      <div className="md:hidden">

          { mobilNavOpen ?
        (<div className='h-screen w-screen fixed backdrop-blur-md inset-0 z-10' onClick={toggleMobilNav}>
            <div className='top-5 right-5 rounded-xl bg-gray-200 fixed flex flex-col p-5 m-5 text-center shadow-2xl' onClick={(e)=> e.stopPropagation()}>
            <Link href="/">
                      <a className="mx-2 p-5 hover:text-cyan-700 uppercase font-semibold antialiased transition ease-in-out duration-400">Home</a>
                  </Link>
                  <Link href="/about">
                      <a className="mx-2 p-5 hover:text-cyan-700 uppercase font-semibold antialiased transition ease-in-out duration-400">About</a>
                  </Link>
                  <Link href="/recipes">
                      <a className="mx-2 p-5 hover:text-cyan-700 uppercase font-semibold antialiased transition ease-in-out duration-400">Recipes</a>
                  </Link>
                  <Link href="/contact">
                      <a className="mx-2 p-5 hover:text-cyan-700 uppercase font-semibold antialiased transition ease-in-out duration-400">Contact</a>
                  </Link>
            </div>
        </div>)
        :
        <HiMenu onClick={toggleMobilNav} className="text-4xl"/>
          }
      </div>
  );
}
