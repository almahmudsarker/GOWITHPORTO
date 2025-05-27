import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <div 
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: "url('/GOWITHPORTO Banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black/20" /> */}
        {/* blur  */}
        <div className="absolute inset-0 bg-white/1 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="font-extrabold text-5xl md:text-6xl mb-6 leading-tight">
            Plan Smarter, Travel Better with AI
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Invest €5 today in AI-powered trip planning and save €1000+ on your next adventure.
            Get personalized itineraries, hidden gems, and local insights instantly.
          </p>
          <Link to="/create-trip">
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg">
              Start Planning Your Dream Trip
            </Button>
          </Link>
          <p className="mt-6 text-sm text-gray-300">
            Join thousands of happy travelers who transformed their journeys with our AI
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
