import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";
import { footer } from "../../apis";

export default function Footer() {
  const { email, address, headText, para } = footer;
  return (
    <div
      className="w-full  mt-16 h-full object-cover text-gray-200 py-8 max-w-[1450px] mx-auto px-3 md:px-16 font-montserrat "
      style={{ backgroundImage: "url(/overlayFooter.png)" }}
    >
      <div className="grid sm:grid-cols-2 items-center gap-14 w-[90%] mx-auto sm:w-full">
        <div>
          <h1 className="text-3xl uppercase font-bold">
            <FaHamburger className="inline-block text-4xl mb-2 mr-1" />
            {headText}
          </h1>
          <p>{para}</p>
        </div>
        <div>
          <h3 className="text-lg capitalize"><HiLocationMarker className="inline-block text-3xl mb-1 mr-1"/>{address}</h3>
          <h3 className="text-lg capitalize mt-2 ml-1"><MdEmail className="inline-block text-2xl mb-1 mr-1"/>{email}</h3>
        </div>
      </div>
      <div className="flex flex-wrap justify-between mt-8 w-[90%] mx-auto sm:w-full">
        <h1 className="capitalize">all rights reserved by burger lover</h1>
        <div className="mt-2 sm:mt-0">
          <BsFacebook  className="inline-block text-[1.4rem] hover:text-blue-500 mr-3"/>
         <RiInstagramFill  className="inline-block text-[1.6rem] hover:text-orange-500 mr-3"/> <AiFillTwitterCircle  className="inline-block text-[1.6rem] hover:text-blue-500 mr-3"/>
          <RiWhatsappFill  className="inline-block text-[1.7rem] hover:text-green-500 mr-3"/>
        </div>
      </div>
    </div>
  );
}
