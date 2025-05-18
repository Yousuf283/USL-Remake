'use client';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import '../styles/navbar.css';
import { useEffect } from 'react';

export default function Navbar() {
    useEffect(() => {
        const navbars = document.querySelectorAll('.navbar');
        if (navbars.length === 0) {
            console.warn('No elements with class "navbar" found!');
            return;
        }

        let isBlack = false;

        function updateThemeOnScroll() {
            const scrollTop = window.scrollY || window.pageYOffset;
            const viewportHeight = window.innerHeight;

            if (scrollTop >= viewportHeight * 1.4) {
                if (!isBlack) {
                    isBlack = true;
                    navbars.forEach(navbar => {
                        const links = navbar.querySelectorAll('a');
                        navbar.classList.remove('bg-black');
                        navbar.classList.add('bg-white');

                        links.forEach(link => {
                            link.classList.remove('text-white');
                            link.classList.add('text-black');
                        });
                    });
                }
            } else {
                if (isBlack) {
                    isBlack = false;
                    navbars.forEach(navbar => {
                        const links = navbar.querySelectorAll('a');
                        navbar.classList.remove('bg-white');
                        navbar.classList.add('bg-black');

                        links.forEach(link => {
                            link.classList.remove('text-black');
                            link.classList.add('text-white');
                        });

                    });
                }
            }
        }

        updateThemeOnScroll();

        window.addEventListener('scroll', updateThemeOnScroll, { passive: true });

        return () => window.removeEventListener('scroll', updateThemeOnScroll);
    }, []);
    return (
        <nav className='absolute'>
            {/* Small Screen Navbar */}
            <div className="fixed top-0 left-0 w-full flex items-center justify-between p-8 z-50 bg-transparent md:hidden">
                {/* Left - Logo */}
                <div className="flex items-center ml-8">
                    <Image
                        src="/logos/logo.png"
                        alt="Logo"
                        width={32}
                        height={32}
                    />
                </div>

                {/* Center - Title */}
                <div className="text-3xl font-semibold text-white">
                    USL
                </div>

                {/* Right - Hamburger Menu */}
                <button className="p-2 rounded-md hover:bg-gray-900 transition mr-8">
                    <Menu className="w-6 h-6" fill='white' />
                </button>
            </div>

            {/* Medium and Up Navbar */}
            <div className="hidden md:flex fixed top-0 left-0 w-full items-center justify-between p-8 z-50 bg-transparent">
                {/* Left - Logo & Title */}
                <div className="navbar flex items-center ml-8 bg-black rounded-lg px-4 py-3">
                    <a href='/' className='flex items-center space-x-4'>
                        <Image
                            src="/logos/logo.png"
                            alt="Logo"
                            width={32}
                            height={32}
                        />
                        <h1 className='font-bold text-4xl'>USL</h1>
                    </a>
                </div>

                {/* Center - Links */}
                <div className="navbar text-lg font-semibold mr-8 transition-colors duration-300 z-10 bg-black rounded-lg px-4 py-3">
                    <a href="/" className="nav-links p-2 text-white">
                        HOME
                    </a>
                    <a href="/" className="nav-links p-2 text-white">
                        MATCHES
                    </a>
                    <a href="/" className="usl-cup-link nav-links p-2 text-white">
                        2024 USL CUP
                    </a>
                    <a href="/" className="nav-links p-2 text-white">
                        SIGN UP
                    </a>
                </div>
            </div>
        </nav>
    );
}
