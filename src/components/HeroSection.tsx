'use client'

import Image from 'next/image';
import React from 'react'
import { TypeAnimation} from 'react-type-animation'

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12">
      <div className="col-span-7 place-self-center text-center sm:text-left">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Hello, Im{" "}
          </span>

          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Angella Mulikatete",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "a Developer",
              1000,
              "a Web2 Developer",
              1000,
              "and also a Web3 Developer",
              1000,
            ]}
            wrapper="span"
            speed={40}
            style={{ fontSize: "1em", display: "block" }}
            repeat={Infinity}
          />
        </h1>
        <p className="text-[#ADB7BE] lg:text-xl mb-6 text-base container sm:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          consequatur quasi eveniet error magnam eos quisquam! Dolor in aliquam
          nesciunt nemo architecto aut, eaque, ullam, aliquid quos natus
          voluptatem velit.
        </p>
        <div>
          <button className="px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
            Hire Me
          </button>
          <button className="px-1 py-1 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white  mt-3">
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
              Download CV
            </span>
          </button>
        </div>
      </div>
      <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className="lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full bg-[#181818]">
          <Image
            src="/assets/img1.jpg"
            alt="hero-image"
            width={300}
            height={300}
            className="relative rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection
