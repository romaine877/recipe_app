import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header>
            <div className="container md:py-10 mx-auto flex flex-col flex-wrap md:flex-row justify-between items-center">
            <Link href="/">
                <a className="font-bold text-2xl">
                   <span className="text-green-600 hover:text-yellow-300 transition ease-in-out duration-1000">UP</span><span className="text-yellow-300 hover:text-green-600">TOWN</span>
                </a>
            </Link>
            <nav className="flex flex-wrap flex-col items-center md:flex-row m-2">
                <Link href="/">
                    <a className="mx-2 hover:text-cyan-700 uppercase font-semibold antialiased transition ease-in-out duration-400">Home</a>
                </Link>
                <Link href="/about">
                    <a className="mx-2 hover:text-cyan-700 uppercase font-semibold antialiased transition ease-in-out duration-400">About</a>
                </Link>
                <Link href="/recipes">
                    <a className="mx-2 hover:text-cyan-700 uppercase font-semibold antialiased transition ease-in-out duration-400">Recipes</a>
                </Link>
                <Link href="/contact">
                    <a className="mx-2 hover:text-cyan-700 uppercase font-semibold antialiased transition ease-in-out duration-400">Contact</a>
                </Link>
            </nav>
            </div>
        </header>
    )
}
