"use client";

import React, { useState } from "react";
import Image from "next/image";

import booking_story from "../assets/booking_story.svg";
export default function CityGallery() {
  return (
    <div className="pt-20">
      <div className="grid grid-cols-2">
        <div className="pt-20 px-24">
          <Image src={booking_story} alt="tick" />
        </div>
        <div className="flex flex-col justify-start items-start">
          <h2 className="text-3xl font-bold text-green-800">Booking a stay</h2>
          <p className="text-black font-normal text-lg pt-8">
            Booking a stay on Tramona is quick and easy, whether you're
            submitting a request for a deal or booking instantly.
          </p>

          <div className="pt-6">
            <h3 className="text-base font-semibold text-black">
              1. Submit a request
            </h3>
            <ul className="list-disc list-inside text-black font-normal text-base mt-4">
              <li>
                Hosts will then send you one-of-a-kind offers directly in your
                requests tab.
              </li>
              <li>
                Review unique deals from hosts and choose the one that best fits
                your needs.
              </li>
              <li>
                Travelers can message them and see the listings details and
                cancellation policy there.
              </li>
              <li>
                Once booked, the stay will appear in your 'Stays' tab for easy
                access.
              </li>
            </ul>
          </div>

          <div className="pt-6">
            <h3 className="text-base font-semibold text-black">
              2. Book it now
            </h3>
            <ul className="list-disc list-inside text-black font-normal text-base mt-4">
              <li>
                Scroll through one-of-a-kind prices hosts offer exclusively on
                Tramona.
              </li>
              <li>
                Simply select your preferred stay, confirm your booking, and
                you're all set!
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 pt-24">
        <div className="flex flex-col justify-start items-start">
          <h2 className="text-3xl font-bold text-green-800">
            Security and Trust
          </h2>
          <p className="text-black font-normal text-lg pt-8">
            We prioritize your security and peace of mind. Tramona employs
            industry-standard security measures to protect your data and ensure
            secure transactions. Our verification processes help build a
            trustworthy community for both hosts and travelers.
          </p>

          <div className="pt-6">
            <ul className="list-disc list-inside text-black font-normal text-base mt-4">
              <li>100% Rebooking Guarantee for travellers</li>
              <li>$500,000 Protection for hosts per booking</li>
              <li>24/7 Customer support</li>
            </ul>
            <div className="pt-12">
              <button className="border border-green-900 w-auto rounded-lg px-4 py-2 text-white bg-green-900 hover:bg-green-800">
                Learn more about security
              </button>
            </div>
          </div>
        </div>
        <div className="pt-20 px-24">
          <Image src={booking_story} alt="tick" />
        </div>
      </div>
    </div>
  );
}
