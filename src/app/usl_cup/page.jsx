import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

export default function usl_cup() {
    return (
        <div>
            <Navbar/>
            {/* Hero Section */}
            <div className="relative w-full h-screen bg-[url('/backdrops/main_backdrop.jpg')] bg-cover bg-no-repeat bg-center">
                {/* Blur overlay */}
                <div className="absolute inset-0 bg-[rgba(255,255,255,0.1)] backdrop-blur-xs z-0" />
                {/* Main content */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <h1 className="text-center text-white text-4xl font-bold px-4 sm:text-5xl md:text-6xl lg:text-8xl">
                        USL CUP
                    </h1>
                </div>
            </div>
            <Footer />
        </div>
    );
}
