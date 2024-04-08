"use client"

import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { GrAppsRounded } from "react-icons/gr";
import { LuNewspaper } from "react-icons/lu";
import { LuWallet } from "react-icons/lu";
import { SlBell } from "react-icons/sl";
import { FaPlus } from "react-icons/fa6";

const NavbarDesktop = () => {
  const [showAdditionalCode, setShowAdditionalCode] = useState(false);
  const [additionalSpaceHeight, setAdditionalSpaceHeight] = useState("290px");
  const [additionalSpaceWidth, setAdditionalSpaceWidth] = useState("104px");

  const toggleAdditionalSpace = () => {
    setShowAdditionalCode(!showAdditionalCode);
    setAdditionalSpaceHeight(showAdditionalCode ? "290px" : "400px");
  };

  const toggleAdditionalSpaceWidth = () => {
    setShowAdditionalCode(!showAdditionalCode);
    setAdditionalSpaceWidth(showAdditionalCode ? "104px" : "256px");

    const handleClick = () => {
        setButtonWidth("w-[256px]");
    }

  };

  return (
    <nav style={{ width: additionalSpaceWidth }} className="w-[104px] h-screen rounded-[28px] border border-transparent ml-10 border-gradient">
      <div className=" w-[100%] h-[100%] rounded-[28px] navbar-color navbar-blur-1 flex flex-col">
        <div className="flex flex-col justify-start items-center border-b border-b-[#cc8b8b21] pb-[15px]">
          <div className="w-[52px] h-[12px] flex flex-row justify-between items-center mt-6">
            <div className="rounded-full w-3 h-3 bg-[#FF5A52]" />
            <div className="rounded-full w-3 h-3 bg-[#E6C02A]" />
            <div className="rounded-full w-3 h-3 bg-[#53C22B]" />
          </div>
          <div className="mt-[30px]">
            <img src="/assets/avatar.svg" alt="" />
          </div>
          <button onClick={toggleAdditionalSpaceWidth} className="border w-6 h-6 flex justify-center items-center border-[#662525] rounded-full text-[#B86E9F] absolute -right-[10px] top-[77px] bg-[#0f090cd3]">
            <FaAngleRight size={16} />
          </button>
        </div>
        <div
          className="flex flex-col items-center justify-between mb-5"
          style={{ height: additionalSpaceHeight }}
        >
          <div className="flex flex-col items-center mt-4">
            <p className="uppercase text-white/50 text-[11px]">main</p>
            <button
              onClick={toggleAdditionalSpace}
              className=" my-5 w-[56px] h-[56px] flex justify-center items-center rounded-xl border border-[#6625254e] bg-[#cc8b8b33] hover:bg-[#cc8b8b97] hover:duration-200 active:duration-200 active:bg-[#b86e9f8c] text-white backdrop-blur-xl hover:backdrop-blur-xl active:backdrop-blur-xl"
            >
              <GrAppsRounded size={24} />
            </button>
            {showAdditionalCode && (
              <div className="h-[124px] w-[158px] border-gradient rounded-2xl border border-transparent relative -right-[100px]">
                <div className="navbar-color navbar-blur-1 w-full h-full rounded-2xl flex flex-col items-center text-white/50">
                  <div className="flex justify-start items-center w-[95%] h-[95%] pl-4 my-1 hover:text-white hover:rounded-[12px] hover:border-[#6625254e] hover:bg-[#cc8b8b97] hover:transition-colors active:duration-200 active:bg-[#b86e9f8c]">
                    <a href="/">Project</a>
                  </div>
                  <div className="flex justify-start items-center w-[95%] h-[95%] pl-4 my-1 hover:text-white hover:rounded-[12px] hover:border-[#6625254e] hover:bg-[#cc8b8b97] hover:transition-colors hover:duration-200 active:duration-200 active:bg-[#b86e9f8c]">
                    <a href="/">Revenue</a>
                  </div>
                  <div className="flex justify-start items-center w-[95%] h-[95%] pl-4 my-1 hover:text-white hover:rounded-[12px] hover:border-[#6625254e] hover:bg-[#CC8B8B97] hover:transition-colors hover:duration-200 active:duration-200 active:bg-[#b86e9f8c]">
                    <a href="/">Insights</a>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col justify-between items-center h-[150px]">
            <div className="text-white/50 hover:text-white hover:duration-150">
              <LuNewspaper size={24} />
            </div>
            <div className="text-white/50 hover:text-white hover:duration-150">
              <LuWallet size={24} />
            </div>
            <div className="text-white/50 hover:text-white hover:duration-150">
              <SlBell size={24} />
            </div>
          </div>
        </div>
        <div className="flex justify-between flex-col items-center h-full mb-10">
          <div className="flex flex-col items-center border-t border-t-[#cc8b8b21] pt-5">
            <p className="text-white/40 text-[11px] uppercase">team me...</p>
            <p className="text-white/40 text-[11px] uppercase hidden">
              team members
            </p>
            <div className="h-[196px] flex flex-col justify-around">
              <div>
                <img src="/assets/profil1.svg" alt="" />
                <div className="w-[6px] h-[6px] bg-[#7FBA7A] rounded-full relative bottom-2 -right-5" />
              </div>
              <div>
                <img src="/assets/profil2.svg" alt="" />
                <div className="w-[6px] h-[6px] bg-[#250D0E] rounded-full border border-[#9F9595] relative bottom-2 -right-5" />
              </div>
              <div>
                <img src="/assets/profil3.svg" alt="" />
                <div className="w-[6px] h-[6px] bg-[#7FBA7A] rounded-full relative bottom-2 -right-5" />
              </div>
            </div>
          </div>
          <button className=" backdrop-blur-xl shadow-lg shadow-[#a8510530] w-[48px] h-[48px] bg-[#E0822D] rounded-xl flex justify-center items-center text-white">
            <FaPlus size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
