import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="absolute top-0 left-0 right-0 z-50 p-4 flex justify-center items-center">
      <div className="flex items-center gap-8">
        <Link to="/">
          <img className="w-40 h-24" src="/GOWITHPORTO LOGO.png" alt="logo" />
        </Link>
        {/* <Link to="/create-trip">
          <Button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20">
            GOWITH-AI
          </Button>
        </Link> */}
      </div>
    </div>
  );
};

export default Header;
