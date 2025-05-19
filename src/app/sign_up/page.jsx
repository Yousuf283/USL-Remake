import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

export default function sign_up() {
    return (
        <div className="fixed inset-0 bg-[url('/backdrops/main_backdrop.jpg')] bg-cover bg-no-repeat bg-center z-[-1]">
            {/* Background layer stays fixed */}
            <div className="absolute inset-0 bg-[rgba(255,255,255,0.1)] backdrop-blur-xs z-0" />

            {/* Scrollable content */}
            <div className="relative z-10 h-screen overflow-y-scroll">
                <Navbar />
                <div className="min-h-screen p-4 mt-30">
                   
                </div>
                <Footer />
            </div>
        </div>
    );
}
