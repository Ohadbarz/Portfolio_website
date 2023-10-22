import Profile from "../assets/profile.jpg";
import React from "react";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";
import {AiOutlineDownload} from "react-icons/ai";

export default function HeroSection() {
    return (
        <div name="home" className="max-w-[1000px] bg-indigo-300 mx-auto px-8 flex flex-col justify-center mt-14">
            <p className="text-white mt-28 font-bold md:text-2xl">Hi, My Name Is</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#e0e0eb] ">
                Ohad Barzilay
                <span className="waving-hand">👋</span>
            </h1>
            <h2 className="text-4xl sm:text-6xl font-bold text-[#8892b0] ">
                I'm a Software Engineer
            </h2>
            <div className="flex flex-row gap-5 sm:gap-10 py-10">
                <p className="text-gray-700 py-4 text-base sm:text-lg max-w-full sm:max-w-[700px] font-bold flex justify-center">
                    Computer Science graduate with a specialization in Data Science from Ben Gurion University.
                    Highly  motivated  and  versatile  Software  Engineer, a  passion  for  innovation and problem-solving.
                    I am truly passionate about this field and wish to continue to grow and learn. I continuously strive for excellence by staying updated with the latest industry
                    trends. A natural leader and team player, I excel in fostering collaboration and delivering creative solutions to complex challenges.
                </p>
                <img src={Profile}
                    className="object-contain h-36 w-24 md:h-48 md:w-36 max-w-xl hover:scale-105 transition-transform rounded-lg cursor-pointer filter grayscale hover:grayscale-0 ml-auto"
                    alt="Profile"
                />
            </div>
            <div className="flex flex-col sm:flex-row">
                <Link to="projects" smooth={true} duration={500}>
                    <button className="text-black font-bold group border-2 px px-6 py-3 ml-5 my-2 flex items-center hover:bg-blue-800 hover:border-blue-800">
                        View My Work
                        <span className="group-hover:rotate-90 group-hover:mb-4 duration-300">
                            <HiArrowNarrowRight className="ml-2" />
                        </span>
                    </button>
                </Link>
                <a href="https://drive.google.com/uc?export=download&id=1biO9EkE_OB3zV0C5GCvonInwj_h363Ck">
                    <button className="text-black font-bold group border-2 px px-6 py-3 ml-5 my-2 flex items-center hover:bg-blue-800 hover:border-blue-800">
                        Download My Resume
                        <span className="group-hover:mt-2 duration-300">
                            <AiOutlineDownload size={20} className="ml-2" />
                        </span>
                    </button>
                </a>
                <Link to="contact" smooth={true} duration={500}>
                    <button className="text-black font-bold group border-2 px px-6 py-3 ml-5 my-2 flex items-center hover:bg-blue-800 hover:border-blue-800">
                        Contact Me
                        <span className="group-hover:rotate-90 group-hover:mb-4 duration-300">
                            <HiArrowNarrowRight className="ml-2" />
                        </span>
                    </button>
                </Link>
            </div>
        </div>

    );
}