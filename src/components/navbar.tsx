import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import '../styles/navbar.css';

export default function Navbar() {
    return (
        <nav className="absolute w-full">
            {/* Small Screen Navbar */}
            <div className="fixed top-0 left-0 w-full flex items-center justify-between p-4 z-50 bg-white rounded-b-lg shadow-sm md:hidden">
                <div className="flex items-center ml-8">
                    <Image
                        src="/logos/logo.png"
                        alt="Logo"
                        width={32}
                        height={32}
                    />
                </div>

                <div className="text-3xl font-semibold text-black">USL</div>

                <button className="p-2 rounded-md hover:bg-[#fc3434] transition mr-8">
                    <Menu className="w-6 h-6 text-black" />
                </button>
            </div>

            {/* Medium and Up Navbar */}
            <div className="hidden md:flex fixed top-0 left-0 w-full items-center justify-between p-4 z-50 bg-white rounded-b-lg shadow-lg">
                <div className="flex items-center ml-8 px-4 py-3">
                    <Link href="/" className="flex items-center space-x-4">
                        <Image
                            src="/logos/logo.png"
                            alt="Logo"
                            width={24}
                            height={24}
                            className="lg:hidden"
                        />
                        <Image
                            src="/logos/logo.png"
                            alt="Logo"
                            width={32}
                            height={32}
                            className="hidden lg:block"
                        />
                        <h1 className="font-bold text-3xl text-black">USL</h1>
                    </Link>
                </div>

                <div className="text-lg font-semibold text-black mr-8 transition-colors duration-300 rounded-lg px-4 py-3">
                    <Link href="/" className="p-2 nav-links">HOME</Link>
                    <Link href="/matches" className="p-2 nav-links">MATCHES</Link>
                    <Link href="/usl_cup" className="usl-cup-link p-2 nav-links">2024 USL CUP</Link>
                    <Link href="/sign_up" className="p-2 nav-links">SIGN UP</Link>
                </div>
            </div>
        </nav>
    );
}
