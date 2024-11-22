import React from "react";
import { FaFacebook, FaGithub, FaTwitterSquare, FaYoutube } from "react-icons/fa";

const footerPoints = [
  "Quarter 1 : CS-101: Object-Oriented Programming us....",
  "Quarter 2 : W2-201: Developing Planet-Scale Web....",
  "Quarter 3 : CS-101: Object-Oriented Programming us....",
];

const footerPoints2 = [
  "Web 3 and Metaverse",
  "Cloud-Native Computing",
  "Artificial Intelligence (AI) and Deep Learning",
  "Ambient Computing and IoT",
  "Genomics and Bioinformatics",
  "Network Programmability and Automation",
];

const Footer = () => {
  return (
    <footer className="bg-neutral-200 w-full h-full mt-28 overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-12 max-w-screen-xl mx-auto">
        {/* Left Side Content */}
        <div>
          <h2 className="font-bold text-2xl sm:text-3xl mt-4">Compulsory Courses</h2>
          {footerPoints.map((item, i) => (
            <div key={i} className="text-neutral-700">
              <h3 className="font-semibold text-base sm:text-xl mt-4">{item}</h3>
            </div>
          ))}
        </div>

        {/* Right Side Content */}
        <div>
          <h2 className="font-bold text-2xl sm:text-3xl mt-4">Specialization Tracks</h2>
          {footerPoints2.map((item, i) => (
            <div key={i} className="text-neutral-700">
              <h3 className="font-semibold text-base sm:text-xl mt-4">{item}</h3>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div>
          <h1 className="font-bold text-2xl sm:text-3xl mt-4">Social Links</h1>
          {/* Social Icons */}
          <div className="mt-6 flex gap-4 sm:gap-6 text-[#D46A8E] hover:scale-110 transition-transform">
            <a href="https://www.facebook.com/panaverse.dao/" target="blank">
            <FaFacebook size={40} />
            </a>

            <a href="https://github.com/panaverse" target="blank">
            <FaGithub size={40} />
            </a>

            <a href="https://x.com/Panaverse_edu" target="blank">
            <FaTwitterSquare size={40} />
            </a>
            
            <a href="https://www.youtube.com/@panaverse" target="blank">
            <FaYoutube size={40} />
            </a>
            
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
