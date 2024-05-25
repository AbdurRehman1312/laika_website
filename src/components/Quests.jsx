import React, { useState } from "react";
import Button from "./Button";
import * as images from "../assets";
import ButtonImage from "./ButtonImage";
import { Link } from "react-router-dom";

const Quests = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };
  const [activeTab, setActiveTab] = useState("tweetToEarn");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  const renderContent = () => {
    switch (activeTab) {
      case "tweetToEarn":
        return (
          <>
            <div className="lg:w-[60%] mx-auto lg:py-14">
              <h2 className="text-white text-center lg:w-[80%] mx-auto px-2">Participate in the Laika ecosystem by <span className="font-bold">interacting on the Testnet </span>to earn <span className="font-bold">LAIKA Points.</span>Quests are available for 48 hours, so stay tuned! </h2>
              <div className="flex md:flex-row flex-col justify-around mt-20 gap-10">
                <div className="flex flex-col justify-center items-center gap-8">
                  <h2 className="text-white font-bold text-center">
                    Swap DOGE to USDT on <br /> Wufiswap testnet
                  </h2>
                  <a href="http://testnet.wufiswap.com/" target="_blank" className="flex justify-center lg:w-[80%]" onClick={scrollToTop}>
                    <ButtonImage
                      name="Go to Wufiswap"
                      img="wufi"
                      style=" px-8 bg_gradient5"
                      imgStyle="w-8 h-8"
                      includeHoverEffect={false}
                    />
                  </a>
                </div>
                <div className="flex flex-col justify-center items-center gap-8">
                  <h2 className="text-white font-bold text-center">
                    Provide liquidity in the DOGE/ <br />USDT liquidity pool
                  </h2>
                  <a href="http://testnet.wufiswap.com/" target="_blank" className="flex justify-center lg:w-[80%]" onClick={scrollToTop}>
                    <ButtonImage
                      name="Go to Wufiswap"
                      img="wufi"
                      style=" px-8 bg_gradient5"
                      imgStyle="w-8 h-8"
                      includeHoverEffect={false}
                    />
                  </a>
                </div>
              </div>
            </div>
          </>
        );
      case "supportLaika":
        return (
          <>
            <div className="py-10">
              <div className="flex flex-col md:flex-row gap-10 lg:gap-0 justify-between mx-auto w-[80%]">
                <div className="lg:w-[50%] md:w-[100%] w-full">
                  <div className="flex flex-col gap-6">
                    <h2 className="text-white font-semibold">
                      Join the Laïka Discord and climb Roles
                    </h2>
                    <p className="text-white">
                      The Laïka Discord server serves as the central hub for community engagement and interaction. You can join discussions, participate in events, and collaborate with fellow community members. By actively engaging on Discord and completing specific tasks, you'll be able to earn XP and level up their roles, unlocking access to exclusive channels and perks.
                    </p>
                    <div className="lg:w-[35%] md:w-[65%] w-full">
                      <ButtonImage
                        name="Join Laïka Discord"
                        img="discord"
                        style="bg_gradient5 cursor-pointer"
                        imgStyle="w-10"
                        includeHoverEffect={false}
                      />
                    </div>
                  </div>
                </div>
                <div className="lg:w-[40%] md:w-[100%] w-full mt-16 lg:mt-0">
                  <div className="bg-[#0e131c] p-6 rounded-[20px]">
                    <div>
                      <img src={images.laikaDiscord} alt="" className="w-full" />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-2 lg:gap-0 bg-[#161616] items-center text-white font-semibold justify-between p-3 rounded-b-[20px]">
                      <h1>Laïka Discord Community</h1>
                      <a href="" className="py-2 px-9 rounded-[5px] text-white bg-[#2544a7]" target="_blank">Join</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-10 lg:gap-0 items-center flex-col md:flex-row mx-auto lg:w-[80%] w-full mt-20 px-4">
                <div className="lg:w-[40%] md:w-[60%] w-full">
                  <div className="bg-[#0e131c] p-6 py-10 rounded-[20px]">
                    <div className="flex flex-col gap-3 justify-center items-center">
                      <div>
                        <img src={images.logolaika} alt="" className="w-[50%] mx-auto" />
                      </div>
                      <h2 className="text-white font-semibold text-xl">X</h2>
                      <div>
                        <img src={images.logozealy} alt="" className="w-[50%] mx-auto" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-[40%] md:w-[60%] w-full my-10 lg:my-0 ">
                  <div className="flex flex-col gap-6">
                    <h2 className="text-white font-semibold">
                      Explore our Zealy Quests
                    </h2>
                    <p className="text-white">
                      Discord Sputnik 1 Zealy Quests, a series of challenges designed to encourage community participation and engagement. Quests range from inviting friends to join the Laïka community to completing daily tasks on X.
                    </p>
                    <div className="lg:w-[50%] md:w-[70%] w-full">
                      <Button
                        name="Go to Zealy "
                        style="w-[50%] bg_gradient5 cursor-pointer"
                        imgStyle=" h-8"
                        includeHoverEffect={false}
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </>
        );

    }
  };
  return (
    <>
      <section className="my-8 md:my-32">
        <div className="w-full rounded-[20px]">
          <div className="flex justify-around md:flex-row flex-col  gap-3 md:gap-3 lg:gap-0 xl:gap-0 bg-dark-gradient2 py-10 md:py-5 lg:py-0 h-[40vh] xl:h-[60px] lg:h-[70px] md:h-[90px] text-center items-center rounded-t-[20px]">
            <button
              className={`text-white  ${activeTab === "tweetToEarn"
                ? "opacity-100 font-semibold"
                : "opacity-25 font-extralight "
                }`}
              onClick={() => handleTabClick("tweetToEarn")}
            >
              Testnet Quests
            </button>
            <button
              className={`text-white   ${activeTab === "supportLaika"
                ? "opacity-100 font-semibold"
                : "opacity-25 font-extralight"
                }`}
              onClick={() => handleTabClick("supportLaika")}
            >
              Social Interactions
            </button>
          </div>
          <div className="bg-dark-gradient py-12 rounded-b-[20px]">
            {renderContent()}
          </div>
        </div>
      </section>
    </>
  );
};

export default Quests;
