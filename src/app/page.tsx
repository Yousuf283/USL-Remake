import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-screen bg-[url('/backdrops/main_backdrop.jpg')] bg-cover bg-no-repeat bg-center">

        {/* Blur overlay */}
        <div className="absolute inset-0 bg-[rgba(255,255,255,0.1)] backdrop-blur-xs z-0" />

        {/* Main content */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className='text-center text-white py-8 px-4'>
            <h1 className="mt-15 mb-7 font-bold text-4xl px-4 sm:text-5xl md:text-6xl lg:text-8xl">
              LEAD YOUR DEGREE TO THE CHAMPIONSHIPS
            </h1>
            <h2 className='mb-7 text-md md:text-xl lg:text-2xl'>In the first ever University Super League</h2>
            <button className='bg-transparent'>
              <a href='/sign_up' className='text-base md:text-md lg:text-lg border border-white p-2 hover:bg-[#fc3434] rounded-md'>Sign Up</a>
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full bg-white h-auto flex justify-center items-center py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
            What We're About
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            A league of all degrees in the university, with each degree having its own domestic tournament to qualify for the championship! The best team from each major will compete to see which degree prevails in the first edition of the annual University Super League.
          </p>
        </div>
      </div>

      {/*Bracket*/}
      <div className="bg-[#fc3434] w-full h-auto overflow-hidden">
        {/* Mobile (SVG as image) */}
        <img
          src="/brackets/main_bracket.svg"
          className="w-full h-full block align-bottom object-contain"
          alt="Bracket"
          style={{ imageRendering: 'pixelated', display: 'block' }}
        />
      </div>

      <Footer />
    </div>
  );
}
