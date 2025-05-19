import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

export default function Matches() {
    return (
        <div className="fixed inset-0 bg-[url('/backdrops/main_backdrop.jpg')] bg-cover bg-no-repeat bg-center z-[-1]">
            {/* Background layer stays fixed */}
            <div className="absolute inset-0 bg-[rgba(255,255,255,0.1)] backdrop-blur-xs z-0" />

            {/* Scrollable content */}
            <div className="relative z-10 h-screen overflow-y-scroll">
                <Navbar />
                <div className="min-h-screen p-4 mt-20 md:mt-25 lg:mt-30">
                    {/* Title */}
                    <div>
                        <h1 className="text-3xl md:text-5xl font-semibold text-center text-white">Qualifiers</h1>
                    </div>

                    {/* Week 1 */}
                    <div className="flex justify-center mt-8">
                        <div className="bg-white rounded-lg text-black font-semibold p-1 md:p-4 shadow-md">
                            <div>
                                <h1 className="text-2xl md:text-4xl font-semibold text-center text-black border-b-2 border-black">Week 1</h1>
                            </div>
                            <div className="flex justify-center p-4">
                                <div className="flex flex-row gap-4 text-sm md:text-xl md:gap-8 md:px-8">
                                    <div className="flex flex-col">
                                        <h2 className="text-[#fc3434]">Day:</h2>
                                        <h2>Monday</h2>
                                        <h2>Tuesday</h2>
                                        <h2>Thursday</h2>
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className="text-[#fc3434]">Date:</h2>
                                        <h2>14/10/2024</h2>
                                        <h2>15/10/2024</h2>
                                        <h2>17/10/2024</h2>
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className="text-[#fc3434]">Degree:</h2>
                                        <h2>Mathematics</h2>
                                        <h2>Engineering</h2>
                                        <h2>Accounting</h2>
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className="text-[#fc3434]">Time:</h2>
                                        <h2 className="whitespace-nowrap">12 PM</h2>
                                        <h2>1 PM</h2>
                                        <h2>1 PM</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Week 2 */}
                    <div className="flex justify-center mt-8">
                        <div className="bg-white rounded-lg text-black font-semibold p-1 md:p-4 shadow-md">
                            <div>
                                <h1 className="text-2xl md:text-4xl font-semibold text-center text-black border-b-2 border-black">Week 2</h1>
                            </div>
                            <div className="flex justify-center p-4">
                                <div className="flex flex-row gap-4 text-sm md:text-xl md:gap-8 md:px-8">
                                    <div className="flex flex-col">
                                        <h2 className="text-[#fc3434]">Day:</h2>
                                        <h2>Tuesday</h2>
                                        <h2>Wednesday</h2>
                                        <h2>Friday</h2>
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className="text-[#fc3434]">Date:</h2>
                                        <h2>24/10/2024</h2>
                                        <h2>25/10/2024</h2>
                                        <h2>27/10/2024</h2>
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className="text-[#fc3434]">Degree:</h2>
                                        <h2>Comp Sci</h2>
                                        <h2>Business</h2>
                                        <h2>Law</h2>
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className="text-[#fc3434]">Time:</h2>
                                        <h2 className="whitespace-nowrap">2 PM</h2>
                                        <h2>2 PM</h2>
                                        <h2>1 PM</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Week 3 */}
                    <div className="flex justify-center mt-8">
                        <div className="bg-white rounded-lg text-black font-semibold p-1 md:p-4 shadow-md">
                            <div>
                                <h1 className="text-2xl md:text-4xl font-semibold text-center text-black border-b-2 border-black">Week 3</h1>
                            </div>
                            <div className="flex justify-center p-4">
                                <div className="flex flex-row gap-4 text-sm md:text-xl md:gap-8 md:px-8">
                                    <div className="flex flex-col">
                                        <h2 className="text-[#fc3434]">Day:</h2>
                                        <h2>Monday</h2>
                                        <h2>Tuesday</h2>
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className="text-[#fc3434]">Date:</h2>
                                        <h2>30/10/2024</h2>
                                        <h2>1/11/2024</h2>
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className="text-[#fc3434]">Degree:</h2>
                                        <h2 className="whitespace-nowrap">Art & Media</h2>
                                        <h2 className="whitespace-nowrap">Human Sciences</h2>
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className="text-[#fc3434]">Time:</h2>
                                        <h2>4 PM</h2>
                                        <h2 className="whitespace-nowrap">12 PM</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* USL CUP */}
                    <div className="flex justify-center mt-8 mb-4">
                        <div className="bg-white rounded-lg text-black font-semibold p-1 md:p-4 shadow-md">
                            <div>
                                <h1 className="text-2xl md:text-4xl font-semibold text-center text-black border-b-2 border-black">USL CUP</h1>
                            </div>
                            <div className="flex justify-center p-4">
                                <div className="flex flex-row gap-4 text-sm md:text-xl md:gap-8 md:px-8">
                                    <div className="flex flex-col">
                                        <h2 className="text-[#fc3434]">Day:</h2>
                                        <h2>Friday</h2>
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className="text-[#fc3434]">Date:</h2>
                                        <h2>15/11/2024</h2>
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className="text-[#fc3434]">Event:</h2>
                                        <h2 className="whitespace-nowrap">Final Showdown</h2>
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className="text-[#fc3434]">Time:</h2>
                                        <h2>1PM</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        </div>
    );
}