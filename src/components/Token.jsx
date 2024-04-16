import React from "react";
import * as images from "../assets";
import Button from "./Button";
import { Link } from "react-router-dom";
const Token = () => {
  return (
    <section id="laikatoken" className="my-8 sm:my-2 lg:my-4">
      <Link className="text-primary hover:opacity-65">
        {">"} $LAIKA Token
      </Link>
      <div className="flex flex-col justify-center items-center gap-2 sm:gap-4 lg:gap-5 text-center h-[70vh] sm:h-[60vh] lg:h-[50vh]">
        <h1 className="text-white font-semibold text-4xl sm:text-5xl lg:text-6xl">
          Discover <span className="text-gradient">$LAIKA</span> Token
        </h1>
        <p className="text-dimGrey text-center w-full sm:w-[80%] lg:w-[65%]">
          Designed to optimize and enhance the Dogecoin ecosystem, $LAIKA is at
          the heart of our mission to address and resolve the inherent
          challenges faced by DOGE. $LAIKA not only rewards validators, securing
          the network, but also empowers holders with a stake in the future
          development and governance of the platform through DAO. While Doge
          remains the primary token for transaction fees, $LAIKA will also be
          utilized to pay fees in the future, further integrating its role
          within the Laïka ecosystem.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-16 lg:gap-20">
        <div className="col-span-1 md:col-span-11 lg:col-span-5">
          <div className="flex flex-col justify-center bg-dark-gradient h-auto md:h-[370px] rounded-[20px] p-5">
            <div className="w-full flex flex-col gap-4">
              <img src={images.heart} alt="" className="w-[45px] h-[45px] md:mb-6" />
              <h2 className="text-white text-lg md:text-xl font-semibold">
                Engage with Laika to earn meme points
              </h2>
              <p className="text-dimGrey text-justify">
                Earn meme points by actively engaging with Laïka, transforming
                your contributions into valuable rewards within the Dogecoin
                ecosystem.
              </p>
            </div>
            <div className="flex justify-end w-full mt-8 md:mt-16">
              <button className="bg-transparent text-white font-semibold border border-white py-2 px-3 rounded-[5px]">
                Discover Laika Quests
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-12 lg:col-span-7">
          <div className="flex flex-col gap-4 pb-7 border-b border-gray-600 border-dashed">
            <div className="bg-darkGrey h-[50px] w-[50px] rounded-[8px] flex justify-center items-center">
              <img
                src={images.file}
                alt=""
                className="w-[25px] h-[25px] object-contain"
              />
            </div>
            <h2 className="text-white font-semibold text-lg md:text-xl">
              Explore $LAIKA Docs
            </h2>
            <p className="text-dimGrey text-justify">
              Explore our Laika documentation for an overview of our Layer 2
              solution and $LAIKA token information, enhancing Dogecoin's
              efficiency and scalability. Dive into the details that shape our
              ecosystem's future.{" "}
            </p>
            <Button name="See Docs" style="w-[35%] md:w-[35%] lg:w-[15%]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-white font-semibold text-lg md:text-xl">
                Sign up to our Waitlist
              </h2>
              <p className="text-dimGrey">
                Stay up to date about $LAIKA release.
              </p>
              <div className="relative lg:w-[90%] xl:w-[70%]">
                <input
                  className="bg-dark-gradient text-white px-3 h-[35px] rounded-[5px] w-full focus:outline-none"
                  type="text"
                  placeholder="jonh@doge.wtf..."
                />
                <button className="absolute right-[5px] top-[11.7%]">
                  <img src={images.inputsend} alt="" className="w-7 h-7" />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-white font-semibold text-lg md:text-xl flex gap-2">
                Spread some <img src={images.dog} className="w-6 h-6" alt="" />{" "}
              </h2>
              <p className="text-dimGrey">Spread some what?</p>
              <div className="bg-dark-gradient py-3 px-4 rounded-[10px] sm:w-[70%] xl:w-[50%] md:w-[80%] w-full text-center text-lg">
                🦴🦴🦴🦴🦴🦴
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Token;
