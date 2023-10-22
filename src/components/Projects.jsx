import React from "react";
import { projects } from "../data/projects.js";
import {AiFillGithub} from "react-icons/ai";



export default function Projects() {
    return (
        <div name="projects" className="w-full bg-indigo-300 text-gray-800 mt-60 sm:mb-40">
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center'>
                <div className="flex items-center flex-col justify-center">
                    <p className="text-4xl font-bold inline border-b-4 border-blue-800 ">
                        My Projects
                    </p>
                    <a href="https://www.github.com/Ohadbarz">
                        <AiFillGithub size={30} />
                    </a>
                    <p className="py-4">These are some the projects I've worked on</p>
                    <div className="flex w-full mt-10">
                        <div className="grid-none lg:grid sm:grid-cols-2 md:grid-cols-3 gap-20 mx-auto gap-x-40">
                            {projects.map((item, index) => (
                                <div
                                    key={index}
                                    style={{ backgroundImage: `url(${item.img})` }}
                                    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto bg-no-repeat bg-cover bg-center h-[350px] w-[350px] hover:!bg-[linear-gradient(_to_right,white,_hsla(10,90%,10%,0.3)_)]"
                                >
                                    <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-black tracking-wider">
                  {item.name}
                </span>
                                        <p className="font-bold text-md">{item.description}</p>
                                        <h1 className="text-xs font-bold">{item.frameworks}</h1>
                                        <div className="pt-8 text-center">
                                            <a href={item.link} target="_blank" rel="noreferrer">
                                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg hover:bg-blue-800 hover:text-white">
                                                    View In Github
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
