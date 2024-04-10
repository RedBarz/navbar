"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { GrAppsRounded } from "react-icons/gr";
import { LuNewspaper, LuWallet } from "react-icons/lu";
import { SlBell } from "react-icons/sl";
import { FaPlus } from "react-icons/fa6";

const NavbarDesktop = () => {
  const [hidden, setHidden] = useState("");
  const [reverseHidden, setReverseHidden] = useState("hidden");
  const [additionalSpaceWidth, setAdditionalSpaceWidth] = useState("256px");
  const [showAdditionalCode, setShowAdditionalCode] = useState(false);
  const [iconWidth, setIconWidth] = useState("");
  const [iconHeight, setIconHeight] = useState("");
  const [mainIcon, setMainIcon] = useState("w-[208px]");
  const [right, setRight] = useState("-right-[218px]");
  const [textCenter, setTextCenter] = useState("");
  const [duration, setDuration] = useState("");
  const animateRef = useRef(null);

  useEffect(() => {
    const typeSplit = new SplitType(animateRef.current, {
      types: "lines, words, chars",
      tagName: "span",
    });

    gsap.from(animateRef.current.querySelectorAll(".char"), {
      y: "100%",
      opacity: 0,
      duration: 0.5,
      ease: "power1.out",
      stagger: 0.1,
    });

    return () => {
      typeSplit.revert();
    };
  }, []);

  const toggleAdditionalSpaceWidth = () => {
    setShowAdditionalCode(!showAdditionalCode);
    setAdditionalSpaceWidth(showAdditionalCode ? "256px" : "104px");
    setHidden((prevHidden) => (prevHidden === "" ? "hidden" : ""));
    setReverseHidden((prevReverseHidden) =>
      prevReverseHidden === "hidden" ? "" : "hidden"
    );
    setIconWidth((prevIconWidth) => (prevIconWidth === "" ? "w-[60px]" : ""));
    setIconHeight((prevIconHeight) =>
      prevIconHeight === "" ? "h-[60px]" : ""
    );
    setMainIcon((prevMainIcon) =>
      prevMainIcon === "w-[208px]" ? "w-[57px]" : "w-[208px]"
    );
    setRight((prevRight) =>
      prevRight === "-right-[218px]" ? "-right-[66px]" : "-right-[218px]"
    );
    setTextCenter((prevTextCenter) =>
      prevTextCenter === "" ? "text-center" : ""
    );
    setDuration((prevDuration) =>
      prevDuration === "" ? "duration-300" : "duration-300"
    );
  };

  return (
    <nav
      style={{ width: additionalSpaceWidth }}
      className={`${duration} rounded-[28px] w-[256px] border border-transparent h-screen border-gradient ml-2`}
      
    >
      <div className="w-full h-full rounded-[28px] navbar-color navbar-blur1 p-6 flex flex-col">
        <div className="w-full h-[129px] border-b border-[#66252542] flex flex-col ">
          <div className="flex flex-row justify-between w-[52px] h-3 pb-[39px]">
            <div className="w-[12px] h-[12px] rounded-full bg-[#FF5A52] hover:bg-[#ff5b529a] cursor-pointer" />
            <div className="w-[12px] h-[12px] rounded-full bg-[#E6C02A] hover:bg-[#e6c02a9a] cursor-pointer" />
            <div className="w-[12px] h-[12px] rounded-full bg-[#53C22B] hover:bg-[#53C22B9a] cursor-pointer" />
          </div>
          <div className="flex flex-row justify-start items-center">
            <div>
              <img src="/assets/avatar.svg" alt="" />
            </div>
            <div className="ml-2">
              <p className={`${hidden} text-white/60 uppercase text-[11px]`}>
                Product Designer
              </p>
              <p className={`${hidden} zoom-text text-white text-[14px]`} ref={animateRef}>
                Shreya Babulkar
              </p>
            </div>
          </div>

          <div className={`${right} relative -right-[218px] bottom-9`}>
            <button
              onClick={toggleAdditionalSpaceWidth}
              className={`${hidden} ${duration} text-[#AB638C] bg-[#0f090cd3] backdrop-blur-3xl rounded-full border border-[#662525]`}
            >
              <FaAngleLeft size={24} />
            </button>
            <button
              onClick={toggleAdditionalSpaceWidth}
              className={`${reverseHidden} ${duration} text-[#AB638C] bg-[#0f090cd3] backdrop-blur-3xl rounded-full border border-[#662525]`}
            >
              <FaAngleRight size={24} />
            </button>
          </div>
        </div>
        <div className={`${mainIcon} w-[208px] h-[382px] mt-5`}>
          <p
            className={`${textCenter} text-white/60 uppercase text-[11px] mb-[10px] ml-[6px]`}
          >
            Main
          </p>
          <div className="border-b border-[#66252542]">
            <div
              className={`${iconWidth} ${iconHeight} ${duration}  mb-[10px] flex flex-row justify-start py-4 px-5 rounded-xl items-center border border-[#6625254e] shadow-xl bg-[#cc8b8b33] hover:bg-[#cc8b8b97] hover:duration-200 active:duration-200 active:bg-[#b86e9f8c] text-white backdrop-blur-xl hover:backdrop-blur-xl active:backdrop-blur-xl hover:cursor-pointer `}
            >
              <GrAppsRounded size={32} />
              <p className={`${hidden} pl-[10px]`}>Dashboard</p>
            </div>
            <div
              className={`${iconWidth} ${iconHeight} ${duration} mb-[10px] flex flex-row justify-start py-4 px-5 rounded-xl items-center border border-[#6625254e] shadow-xl bg-[#cc8b8b33] hover:bg-[#cc8b8b97] hover:duration-200 active:duration-200 active:bg-[#b86e9f8c] text-white backdrop-blur-xl hover:backdrop-blur-xl active:backdrop-blur-xl hover:cursor-pointer `}
            >
              <LuNewspaper size={32} />
              <p className={`${hidden} pl-[10px]`}>Contracts</p>
            </div>
            <div
              className={`${iconWidth} ${iconHeight} ${duration} mb-[10px] flex flex-row justify-start py-4 px-5 rounded-xl items-center border border-[#6625254e] shadow-xl bg-[#cc8b8b33] hover:bg-[#cc8b8b97] hover:duration-200 active:duration-200 active:bg-[#b86e9f8c] text-white backdrop-blur-xl hover:backdrop-blur-xl active:backdrop-blur-xl hover:cursor-pointer `}
            >
              <LuWallet size={32} />
              <p className={`${hidden} pl-[10px]`}>Payments</p>
            </div>
            <div
              className={`${iconWidth} ${iconHeight} ${duration} mb-[10px] flex flex-row justify-start py-4 px-5 rounded-xl items-center border border-[#6625254e] shadow-xl bg-[#cc8b8b33] hover:bg-[#cc8b8b97] hover:duration-200 active:duration-200 active:bg-[#b86e9f8c] text-white backdrop-blur-xl hover:backdrop-blur-xl active:backdrop-blur-xl hover:cursor-pointer `}
            >
              <SlBell size={32} />
              <p className={`${hidden} pl-[10px]`}>Notifications</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-around h-full">
          <div className="w-full flex flex-row justify-between items-center">
            <p
              className={`${reverseHidden}  uppercase text-white/60 text-[11px] ml-2`}
            >
              team me...
            </p>
            <p
              className={` ${hidden} uppercase text-white/60 text-[11px] ml-2 mt-[10px]`}
            >
              Team members
            </p>
            <button
              className={`${hidden} text-white/60 hover:text-white mt-[7px]`}
            >
              <FaPlus size={12} />
            </button>
          </div>
          <div>
            <div className="flex flex-row items-center justify-start">
              <div className="py-4 px-2">
                <img src="/assets/profil1.svg" alt="" />
                <div className="w-[6px] h-[6px] bg-[#7FBA7A] rounded-full relative bottom-2 -right-5" />
              </div>
              <p
                className={`${hidden} text-white/60 ml-[10px] hover:text-white cursor-pointer`}
              >
                Esther Howard
              </p>
            </div>
            <div className="flex flex-row items-center justify-start">
              <div className="py-4 px-2">
                <img src="/assets/profil2.svg" alt="" />
                <div className="w-[6px] h-[6px] bg-[#250D0E] rounded-full border border-[#9F9595] relative bottom-2 -right-5" />
              </div>
              <p
                className={`${hidden} text-white/60 ml-[10px] hover:text-white cursor-pointer`}
              >
                Jacob Jones
              </p>
            </div>
            <div className="flex flex-row items-center justify-start">
              <div className="py-4 px-2">
                <img src="/assets/profil3.svg" alt="" />
                <div className="w-[6px] h-[6px] bg-[#7FBA7A] rounded-full relative bottom-2 -right-5" />
              </div>
              <p
                className={`${hidden} text-white/60 ml-[10px] hover:text-white cursor-pointer`}
              >
                Cody Fisher
              </p>
            </div>
          </div>
          <div>
            <button
              className={`${reverseHidden} text-white flex flex-row items-center justify-around w-[48px] h-[48px] bg-[#E0822D] hover:bg-[#e0802db6] shadow-md shadow-[#e0802d45] rounded-xl`}
            >
              <FaPlus size={14} />
            </button>
          </div>
        </div>
        <div
          className={`${hidden} w-[208px] h-[181px] border-gradient rounded-[28px]`}
        >
          <div className="w-[208px] h-[181px] navbar-color border border-transparent rounded-[28px] p-4 flex flex-col justify-around">
            <p className="text-white text-[16px] text-center">Let's start!</p>
            <p className="text-white/60 text-[13px] text-center">
              Creating or adding new tasks couldn't be easier
            </p>
            <button className="text-white flex flex-row items-center justify-around w-full px-4 py-[11px] bg-[#E0822D] hover:bg-[#e0802db6] shadow-md shadow-[#e0802d45] rounded-xl">
              <FaPlus size={14} />
              <p className="text-[14px]">Add New Task</p>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDesktop;