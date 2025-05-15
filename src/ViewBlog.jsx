import React from "react";
import { Button } from "./Components/Button";
 
 
 
 
export default function Blog() {
  return (
    <div className="w-full text-gray-900">
      {/* Header */}
      <header className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-12 bg-white gap-8">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold">Welcome</h1>
          <p className="text-lg md:text-xl">To Travelling Soul Blog</p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Hi there, I am Mithesh and this is where I write about my backpacking adventures. From <strong>travel guides</strong> and <strong>itineraries</strong> to digital nomad resources and <strong>inspirational articles</strong>, I will help you travel the world and live your life to the fullest through engaging travel content, inspiring <strong>travel videos</strong>, stunning <strong>photography</strong>, and so much more. Join me as I share with you the way to the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button className="bg-green-400 text-black hover:bg-green-300">
              READ MY BLOG
            </Button>
            <Button variant="outline">WATCH MY VIDEOS</Button>
          </div>
        </div>
 
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
              src="src/assets/istockphoto-1155613377-612x612.jpg"
 
            alt="travel man"
            className="w-60 sm:w-70 h-auto rounded-full object-cover "
          />
        </div>
      </header>
       {/* Discover the World */}
      <section className="px-6 py-16 bg-gray-100 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          DISCOVER <span className="text-green-500">THE WORLD</span>
        </h2>
       
       
        <div className="mt-4 text-xs md:text-sm text-gray-600 space-x-2">
          <span>Asia</span>
          <span>&bull;</span>
          <span>Africa</span>
          <span>&bull;</span>
          <span>Europe</span>
          <span>&bull;</span>
          <span>Oceania</span>
          <span>&bull;</span>
          <span>South America</span>
        </div>
 
        <div className="mt-6">
          <Button variant="outline">EXPLORE DESTINATIONS</Button>
        </div>
      </section>
    </div>
  );
}
 