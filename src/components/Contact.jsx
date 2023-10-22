import React from "react";
import {AiOutlinePhone, AiOutlineMail} from "react-icons/ai";
import { useRef } from "react";
import {BsFillSendFill} from "react-icons/bs";
import emailjs from '@emailjs/browser';


export default function Contact() {
    const contactRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_7yomf1g',
            'template_ptm819g',
            contactRef.current, 'LeqcWAScUno9ueYEk')
            .then((result) => {
                console.log(result.text);
                alert("Your message has been sent successfully. I'll get back to you soon!")
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (

        <>
            <section name="contact" className="bg-indigo-300 py-20 sm:px-40 overflow-hidden">
                <div className="container mt-20">
                    <div className="sm:flex flex-wrap -mx-4 lg:justify-between">
                        <div className="px-4 lg:w-1/2 xl:w-6/12">
                            <div className="mb-12">
                <span className="block mb-4 text-base font-semibold text-primary">
                </span>
                                <h2 className="mb-6 text-[32px] font-bold uppercase text-dark sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                                    GET IN TOUCH
                                </h2>
                                <div className="mb-8 flex w-full max-w-[370px]">
                                </div>
                                <div className="mb-8 flex w-full max-w-[370px]">
                                    <div className="mr-6 flex w-full max-w-[60px] items-center justify-center rounded">
                                        <AiOutlinePhone size={30} />
                                    </div>
                                    <div className="w-full">
                                        <h4 className="mb-1 text-xl font-bold text-dark">
                                            Phone Number
                                        </h4>
                                        <p className="text-base text-body-color">
                                            +972 54-641-2695
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-8 flex w-full max-w-[370px]">
                                    <div className="mr-6 flex w-full max-w-[60px] items-center justify-center rounded">
                                        <AiOutlineMail size={30} />
                                    </div>
                                    <div className="w-full">
                                        <h4 className="mb-1 text-xl font-bold text-dark">
                                            Email Address
                                        </h4>
                                        <p className="text-base text-body-color">
                                            Ohadbr17@gmail.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 w-3/4 lg:w-1/2 xl:w-5/12">
                            <div className="p-8 bg-white rounded-lg shadow-lg sm:p-12">
                                <form onSubmit={sendEmail} ref={contactRef}>
                                    <ContactInputBox
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        required={true}
                                    />
                                    <ContactInputBox
                                        type="text"
                                        name="email"
                                        placeholder="Your Email"
                                        required={true}
                                    />
                                    <ContactInputBox
                                        type="text"
                                        name="phone"
                                        placeholder="Your Phone"
                                        required={true}
                                    />
                                    <ContactTextArea
                                        row="6"
                                        name="message"
                                        placeholder="Your Message"
                                        defaultValue=""
                                    />
                                    <div>
                                        <button
                                            className="text-black font-bold group border-2 px px-6 py-3 my-2 flex items-center transition-colors duration-500 ease-in-out border-blue-800 hover:bg-blue-800 hover:border-blue-800"
                                            type={"submit"}
                                        >
                                            Send Message
                                            <BsFillSendFill className="ml-3" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};



const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
    return (
        <>
            <div className="mb-6">
        <textarea
            rows={row}
            placeholder={placeholder}
            name={name}
            className="border-[f0f0f0] w-full resize-none rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
            defaultValue={defaultValue}
        />
            </div>
        </>
    );
};

const ContactInputBox = ({ type, placeholder, name, required }) => {
    return (
        <>
            <div className="mb-6">
                <input
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    className="border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
                    required={required}
                />
            </div>
        </>
    );
};
