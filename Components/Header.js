import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header>
            <div className="container mx-auto flex flex-col flex-wrap p-5 md:flex-row justify-between items-center">
            <Link href="/">
                <a className="font-bold text-2xl">
                   <span className="text-green-600">UP</span><span className="text-yellow-300">town</span>
                </a>
            </Link>
            <nav className="flex flex-wrap flex-col md:flex-row m-2">
                <Link href="/">
                    <a className="mx-2">Home</a>
                </Link>
                <Link href="/about">
                    <a className="mx-2">About</a>
                </Link>
                <Link href="/recipes">
                    <a className="mx-2">Recipes</a>
                </Link>
                <Link href="/contact">
                    <a className="mx-2">Contact</a>
                </Link>
            </nav>
            </div>
        </header>
    )
}
