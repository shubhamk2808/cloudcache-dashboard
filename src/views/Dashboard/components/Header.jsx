import React from "react";
import { Button } from "rizzui";
import { handleLogoClick } from "../../../utils";

const Header = () => {

  return (
    <header className="container !block mx-auto py-4 sm:py-6">
      <div className="flex sm:flex-row items-center justify-between gap-4">
        <div className="text-red-500 font-bold text-xl sm:text-2xl">
          <img
            src="https://cloudcacheconsulting.com/public/images/cloudlogo.png"
            onClick={handleLogoClick}
          />
        </div>
        <nav className="space-x-2 sm:space-x-3">
          <Button
            variant="outline"
            className="bg-transparent text-white border-white/20 rounded-full px-4 sm:px-6 text-sm hover:bg-white hover:text-black"
          >
            Sign Up
          </Button>
          <Button
            variant="solid"
            className="rounded-full bg-white text-black hover:bg-white/90 px-4 sm:px-6 text-sm"
          >
            Log In
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
