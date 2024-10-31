import React from "react";
import Image from "next/image";
import LocationIcon from "../assets/LocationIcon.svg";
import Calender from "../assets/Calender.svg";
import Users from "../assets/Users.svg";
import Frame from "../assets/Frame.svg";

export default function PricingSection() {
  return (
    <>
      <section className="py-16">
        <h2 className="text-2xl text-black md:text-4xl font-semibold mb-8">
          Tramona was started with one simple goal: to help people travel more.
        </h2>
        <div className="flex flex-col gap-6">
          <p className="text-gray-600 text-xl font-normal mb-8">
            When scrolling through Airbnb, not being able to afford to travel as
            much as i wanted to. I noticed something far too many hosts had in
            common. They had a lot of vacancies and when hosts have vacancies,
            no one wins.
          </p>
          <p className="text-gray-600 text-xl font-normal mb-8">
            Here’s how Tramona makes it happen
          </p>
          <p className="text-gray-600 text-xl font-normal mb-8">
            Inspired by how the hotel industry operates—where brands like
            Marriott and Hilton offload vacancies on sites like Priceline and
            Hotwire—we asked ourselves: Why can't Airbnb hosts do the same? We
            wanted to create a place where Airbnb hosts could fill their vacant
            nights at better prices, while not disconting on their main booking
            channels. Making travel more affordable for everyone.
          </p>
        </div>
        <h1 className="text-green-800 font-bold text-6xl leading-tight">
          Welcome to Tramona, the best deals on Airbnbs, Anywhere
        </h1>
        <div className="pt-12">
          <div className="grid grid-cols-3 gap-20 bg-[#DEEEFB] p-6">
            <div className="flex flex-col gap-3">
              <p className="font-bold text-3xl text-black">
                Name your own price
              </p>
              <p className="font-normal text-base text-black pl-2">
                Send a request to every host in SEATTLE |
              </p>
              <p className="font-normal text-base text-black px-4">
                Travelers enter
              </p>
              <ol className="list-decimal list-inside font-medium text-black text-base">
                <li>Where you want to go</li>
                <li>How much you want to spend</li>
                <li>Amount of guests</li>
                <li>Your dates</li>
              </ol>
              <p className="font-bold text-black text-base whitespace-nowrap pt-3">
                Hosts accept, deny or counter offer
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <p className="font-bold text-3xl text-black">Link insert </p>
              <p className="font-normal text-base text-black px-4">
                Already have a property you like?
              </p>

              <p className=" font-medium text-black text-base">
                Insert the link directly into Tramona and we will request a
                discounted rate directly to the host and all their the next door
                neighbors with a vacancy.
              </p>
              <p className="font-bold text-black text-base whitespace-nowrap pt-[70px]">
                See who will give you the best deal
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <p className="font-bold text-3xl text-black">Instant Booking</p>
              <p className="font-normal text-base text-black px-4">
                Best prices on empty nights
              </p>
              <p className=" font-medium text-black text-base">
                When hosts have vacancies they offer a discounted rate Via our
                book it now page.
              </p>
              <p className="font-bold text-black text-base pt-[90px]">
                1 of a kind prices you cant find anywhere else
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
