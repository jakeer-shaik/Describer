import React from "react";
import { FaImage, FaInfoCircle } from "react-icons/fa";
import hero from "../../assets/hero1.jpg";

const Hero = () => {
  return (
    <section className="relative py-16 px-6 lg:px-12 lg:py-24 flex flex-col-reverse lg:flex-row items-center mx-auto max-w-7xl">
      <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-gray-800">
          Empower Your Digital Experience
        </h1>
        <p className="text-md md:text-lg lg:text-xl mb-10 max-w-lg mx-auto lg:mx-0 text-gray-600">
          Discover our tools for generating insightful information and checking
          images effortlessly.
        </p>
        <div className="flex flex-col gap-6 lg:gap-8 w-full md:w-auto">
          <a
            href="/information"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg p-6 flex items-start space-x-4 transition duration-300"
          >
            <FaInfoCircle className="text-4xl" />
            <div className="text-left">
              <h2 className="text-xl font-semibold">Info Generator</h2>
              <p className="mt-1 text-sm">
                Generate detailed information and insights with ease.
              </p>
            </div>
          </a>
          <a
            href="/image-info"
            className="bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-lg p-6 flex items-start space-x-4 transition duration-300"
          >
            <FaImage className="text-4xl" />
            <div className="text-left">
              <h2 className="text-xl font-semibold">Image Analyser</h2>
              <p className="mt-1 text-sm">
                Analyze and check your images with advanced tools.
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center items-center">
        <img
          src={hero}
          alt="Hero Image"
          className="w-full h-auto max-w-xl rounded-lg shadow-xl object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
