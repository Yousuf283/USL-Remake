import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa';

const LogoSection = () => (
    <div className="flex flex-row items-center py-2 justify-center md:justify-start">
        <Image src="/logos/logo.png" alt="Logo" width={32} height={32} />
        <h1 className="text-2xl text-white ml-2">
            University Super League
        </h1>
    </div>
);

const InfoLinks = () => (
    <div className="flex flex-col items-center py-2 md:items-start">
        <h1 className="text-xl text-white border-b-2 border-[#cc445c]">Additional Information</h1>
        <div className="flex flex-col items-center md:items-start p-2 space-y-2 mt-2">
            <a href="#" className="text-white hover:underline">Terms Of Service</a>
            <a
                href="https://www.google.com/maps/place/Finsbury+Leisure+Centre/@51.5259571,-0.0978597,17z"
                target="_blank"
                className="text-white hover:underline"
                rel="noopener noreferrer"
            >
                Location
            </a>
        </div>
    </div>
);

const SocialLinks = () => (
    <div className="flex flex-col items-center py-2 md:items-start">
        <h1 className="text-xl text-white">Follow Us</h1>
        <div className="flex gap-4 p-2 border-t-2 border-[#cc445c]">
            <a href="https://www.instagram.com/universitysuper/?igsh=OGQ5ZDc2ODk2ZA%3D%3D"
               className="rounded-md bg-[linear-gradient(45deg,_#feda75,_#fa7e1e,_#d62976,_#962fbf,_#4f5bd5)] p-2">
                <FaInstagram className="w-6 h-6 text-white hover:text-pink-500" />
            </a>
            <a href="https://www.tiktok.com/@universitysuperleague?lang=en"
               className="rounded-md bg-black p-2">
                <FaTiktok className="w-6 h-6 text-white hover:text-gray-400" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61564807807931"
               className="rounded-md bg-[#1877F2] p-2">
                <FaFacebookF className="w-6 h-6 text-white hover:text-blue-300" />
            </a>
            <a href="https://www.linkedin.com/company/university-super-league/about/"
               className="rounded-md bg-[#0072b1] p-2">
                <FaLinkedinIn className="w-6 h-6 text-white hover:text-blue-400" />
            </a>
        </div>
    </div>
);

export default function Footer() {
    return (
        <footer className="bg-[#201c24] h-auto">
            {/* Mobile Layout */}
            <div className="md:hidden">
                <LogoSection />
                <InfoLinks />
                <SocialLinks />
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex justify-center py-4">
                <div className="flex flex-row gap-12 items-start">
                    <LogoSection />
                    <InfoLinks />
                    <SocialLinks />
                </div>
            </div>
        </footer>
    );
}
