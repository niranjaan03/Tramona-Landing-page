import React from "react";
import Image from "next/image";
import FooterPartImg from "../assets/FooterPartImg.svg";
import TickIcon from "../assets/TickIcon.svg";
import LocationIcon from "../assets/LocationIcon.svg";
import Calender from "../assets/Calender.svg";
import Users from "../assets/Users.svg";

export default function Footer() {
  return (
    <div className="py-16">
      <section className="bg-emerald-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">
            Ready to Experience Tramona
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-emerald-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
              Name Your Own Price
            </button>
            <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition">
              Book Now
            </button>
            <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition">
              Become a Host
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
