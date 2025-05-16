import Navbar from '../components/navbar';

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
          <h1 className="text-center text-white text-4xl font-bold px-4 sm:text-5xl md:text-6xl lg:text-8xl">
            University Super League
          </h1>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full bg-white h-[40vh] flex justify-center items-center py-8">
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
      <div className="bg-[#fc3434] w-full h-[33vh] md:h-screen">
        <div className=" w-full h-[33vh] md:h-screen bg-[url('/brackets/main_bracket.svg')] bg-contain bg-no-repeat bg-center bg-transparent" />
      </div>

    </div>
  );
}
