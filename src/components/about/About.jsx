import React from "react";
import {FaGithub} from "react-icons/fa";
import { RiNpmjsLine } from "react-icons/ri";
import hero from "../../assets/hero.jpg";

const About = () => {
  return (
    <section className="relative py-16 px-6 lg:px-12 lg:py-24 text-gray-900 min-h-screen max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center">
        {/* Left Side: Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left lg:pr-8 mb-12 lg:mb-0">
          <h2 className="text-3xl font-bold mb-6">
            About Google Generative AI
          </h2>
          <p className="text-md lg:text-lg mb-8 max-w-lg mx-auto lg:mx-0 text-justify">
            Google Generative AI offers advanced AI models designed to generate
            high-quality and contextually relevant content from textual prompts.
            These models are capable of producing diverse outputs such as text,
            images, and more, making them ideal for various applications
            including content creation, analysis, and enhancement.
          </p>
          <p className="text-md lg:text-lg mb-8 max-w-lg mx-auto lg:mx-0 text-justify">
            With the Google Generative AI npm package, developers can easily
            integrate these powerful models into their applications. The package
            provides a straightforward interface for interacting with Google's
            AI models, enabling quick setup and efficient use in production
            environments.
          </p>
        </div>
        {/* Right Side: Image and Links */}
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
          <div className="w-full flex justify-center mb-6 lg:mb-12">
            <img
              src={hero}
              alt="Google Generative AI"
              className="w-full h-auto max-w-md rounded-lg shadow-xl object-cover"
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 w-full lg:w-auto  mx-auto items-center lg:items-start">
            <a
              href="https://www.npmjs.com/package/@google/generative-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg p-3 lg:p-4 transition duration-300 w-full max-w-xs lg:max-w-sm text-center lg:text-left whitespace-nowrap"
            >
              <RiNpmjsLine className="text-xl lg:text-2xl mr-2" />
              NPM
            </a>
            <a
              href="https://github.com/google-gemini/generative-ai-js"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-gray-800 hover:bg-gray-900 text-white rounded-lg shadow-lg p-3 lg:p-4 transition duration-300 w-full max-w-xs lg:max-w-sm text-center lg:text-left whitespace-nowrap"
            >
              <FaGithub className="text-xl lg:text-2xl mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
