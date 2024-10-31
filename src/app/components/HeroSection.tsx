"use client";

import React from "react";
import Image from "next/image";
import heroBanner from "../assets/heroBanner.svg";

export default function HeroSection() {
  return (
    <div>
      <section className="mx-auto">
          <div className="relative h-full">
            <Image
              src={heroBanner}
              alt="location"
              className="w-full  object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
          </div>

          <div className="absolute inset-0 container mx-auto py-24 px-20 grid grid-cols-5">
            <div className="relative col-span-3 text-white py-6 z-10">
              <h1 className="uppercase font-semibold text-3xl leading-10 mb-8">
                How it works
              </h1>
              <h1 className="text-4xl md:text-6xl font-bold leading-10 mb-8">
                Get 1 of a kind deals when hosts have empty nights
              </h1>
              <p className="font-medium text-4xl mb-8">
                Discover exclusive discounts
              </p>
              <button className="bg-white text-black font-bold px-6 py-3 rounded-3xl hover:bg-gray-100 transition">
                Host? Learn about hosting
              </button>
            </div>
            <div className="col-span-2"></div>
          </div>
      </section>
    </div>
  );
}
