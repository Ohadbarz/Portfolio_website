import React from "react";
import { skills_1, skills_2, skills_3, skills_4 } from "../data/skills.js"
const Skills = () => {
    return (
        <div>
            <div name="skills" className="w-full bg-indigo-300 text-gray-800 mt-60">
                <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center'>
                    <div className="flex items-center flex-col justify-center">
                        <p className="text-4xl font-bold inline border-b-4 border-blue-800 ">
                            Skills
                        </p>
                        <p className="py-4">These are the technologies I've worked with</p>
                        <div className="flex flex-wrap w-full mt-20 gap-10 sm:ml-52">
                            <div className="md:w-1/3 block max-w-sm p-6 bg-indigo-300 border border-gray-200 rounded-lg shadow">
                                {skills_1.map(s =>
                                    <li className="font-bold cursor-default" key={s.id}>{s.name}</li>
                                )}
                            </div>
                            <div className="md:w-1/3  block max-w-sm p-6 bg-indigo-300 border border-gray-200 rounded-lg shadow">
                                {skills_2.map(s =>
                                    <li className="font-bold cursor-default" key={s.id}>{s.name}</li>
                                )}
                            </div>
                            <div className="md:w-1/3  block max-w-sm p-6 bg-indigo-300 border border-gray-200 rounded-lg shadow">
                                {skills_3.map(s =>
                                    <li className="font-bold cursor-default" key={s.id}>{s.name}</li>
                                )}
                            </div>
                            <div className="md:w-1/3  block max-w-sm p-6 bg-indigo-300 border border-gray-200 rounded-lg shadow">
                                {skills_4.map(s =>
                                    <li className="font-bold cursor-default" key={s.id}>{s.name}</li>
                                )}
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;