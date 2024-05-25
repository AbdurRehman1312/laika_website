import React, { useState, useEffect } from "react";
import * as images from "../assets";
import ButtonImage from "./ButtonImage";
import { Link } from "react-router-dom";

const Sputnik = () => {
  const scrollToTop = () => window.scrollTo({ top: 0 });

  // Store the initial countdown duration (49 hours in seconds)
  const countdownDuration = 49 * 60 * 60;

  // Helper function to get the remaining time from now to the end time
  const getRemainingTime = endTime => {
    const now = Date.now();
    const remainingTime = Math.floor((endTime - now) / 1000);
    return remainingTime > 0 ? remainingTime : 0;
  };

  const [time, setTime] = useState(() => {
    const endTime = localStorage.getItem('endTime');
    return endTime ? getRemainingTime(endTime) : countdownDuration;
  });

  useEffect(() => {
    const existingEndTime = localStorage.getItem('endTime');
    const endTime = existingEndTime || Date.now() + countdownDuration * 1000;

    if (!existingEndTime) {
      localStorage.setItem('endTime', endTime);
    }

    const interval = setInterval(() => {
      setTime(getRemainingTime(endTime));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = () => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  return (
    <>
      <section className="">
        <div className="flex justify-start mt-20 ml-2">
          <Link className="text-primary hover:opacity-65">
            {">"} Sputnik 1 Program
          </Link>
        </div>
        <div className="my-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-28">
            <div className="flex flex-col justify-evenly gap-10 mx-3">
              <h1 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold lg:leading-[50px] xl:leading-[50px] ">
                Explore Laïka through
                <br />
                <span className="text-gradient font-extrabold">Sputnik I</span>{" "}
                Incentive <br />
                Campaign
              </h1>
              <p className="text-dimGrey text-base md:text-base xl:text-lg">
                Join the Sputnik I Campaign by completing Testnet and Social Tasks to become an early adopter of the Laïka Network. Engage in various activities such as swapping, providing liqui dity, minting NFTs, voting and much more. Tasks will be released gradually; visit this page regularly to ensure you don't miss out LAIKA Points.
              </p>
              <Link to={"/faucets"} className="flex lg:w-[80%]" onClick={scrollToTop}>
                <ButtonImage
                  name="Go to Faucets"
                  img="faucetdrop"
                  style="py-3"
                  imgStyle="w-5 h-5"
                />
              </Link>
            </div>
            <div className="flex flex-col">
              <div className="bg-[#0f1a27] pt-5 rounded-t-[10px] flex flex-col gap-6 items-center">
                <div className="flex items-center justify-between px-3 sm:gap-2  w-full">
                  <div className="flex items-center gap-8 sm:gap-0">
                    <div className="bg-dark-gradient  flex justify-center py-3 px-2 rounded-[5px]">
                      <img src={images.sparrow} alt="" className="w-4 sm:w-5" />
                    </div>
                    <div className="text-white tracking-wider pl-0 sm:pl-6 font-thin text-sm text-right lg:text-center sm:text-base">
                      <span className="font-bold"> Claim 5 DOGE  </span> by using {" "}<a href="http://laikachain.dog/faucets" className="underline cursor-pointer">faucet</a>
                    </div>
                  </div>
                </div>
                <div className="bg-[#0c121f] pt-5 w-full rounded-t-[10px] flex flex-col gap-6 items-center">
                  <div className="flex items-center justify-between px-3 sm:gap-2 w-full">
                    <div className="flex gap-7 sm:gap-0  items-center">
                      <div className="bg-dark-gradient  flex justify-center py-1  px-2 rounded-[5px]">
                        <img src={images.refresh} alt="" width={21} className="w-6 sm:w-5" />
                      </div>
                      <div className="text-white tracking-wider pl-0 sm:pl-6 font-normal text-sm text-right lg:text-center sm:text-base">
                        <span className="font-thin"> Wow! Now, go to <a href="http://testnet.wufiswap.com/" className="underline cursor-pointer">Wufiswap</a> and <span className="font-bold">swap 0.1 DOGE to USDT</span></span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#090d17] pt-5 rounded-t-[10px] flex flex-col gap-6 items-center w-full">
                    <div className="flex items-center justify-between px-3 sm:gap-2 w-full">

                      <div className="flex items-center">
                        <div className="bg-dark-gradient flex justify-center py-2  px-2 rounded-[5px]">
                          <img src={images.swap} alt="" width={21} className="w-5 sm:w-5" />
                        </div>
                        <div className="text-white tracking-wider pl-0 sm:pl-6 font-thin text-sm text-right lg:text-center sm:text-base">
                          <span className="font-bold"> Provide liquidity <span className="font-thin">in the DOGE/USDT liquidity pool</span></span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#060910] py-5 rounded-t-[10px] flex flex-col gap-6 items-center w-full">
                      <div className="flex items-center justify-between py-3 w-full">
                        <div className="text-white tracking-wider pl-4 sm:pl-5 font-thin text-sm  w-[70%] sm:w-full text-left sm:text-base">
                          <span className="font-bold"> Earn <span className="text-gradient font-extrabold">Laika points</span> with new quests every 48 hours</span>
                        </div>
                        <div className="flex flex-col items-center text-white pr-5 md:pr-7">
                          <p className="timer text-base lg:text-lg">{formatTime()}</p>
                          <p className="font-thin text-center text-xs md:text-lg text-nowrap">Before end</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sputnik;
