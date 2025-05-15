export default function Home() {
  return (
    <div className="relative">
      <div className="w-full h-screen bg-[url('/backdrops/main_backdrop.jpg')] bg-cover bg-no-repeat bg-center">
        <div className="absolute inset-0 bg-[rgba(255,255,255,0.1)] backdrop-blur-xs z-0" />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-center text-white text-4xl font-bold px-4 sm:text-5xl md:text-6xl lg:text-8xl">
            University Super League
          </h1>
        </div>
      </div>
    </div>
  );
}
