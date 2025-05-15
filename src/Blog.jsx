


import React from "react";

const cards = [
  { title: "The Travelling Soul", img: "/src/assets/download.jpeg" },
  { title: "The Life in Motion", img: "/src/assets/images (3).jpeg" },
  { title: "The Fashionista", img: "/src/assets/shopaholic-fashionista-flat-color-faceless-character-vector.jpg" },
  { title: "The Tasty Trails", img: "/src/assets/How-To-Make-Your-Career-As-A-Food-Blogger-In-India-ProiDeators.jpg" },
];

function Blog() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <div className="bg-white rounded-full shadow-md px-8 py-3 flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto mt-6 mb-8">
        <div className="text-2xl font-bold text-black">Divya</div>
        <div className="mt-3 sm:mt-0 flex space-x-5 text-gray-700 font-medium text-sm sm:text-base">
          <a href="#" className="hover:text-purple-600 transition">Blogs</a>
          <a href="#" className="hover:text-purple-600 transition">Links</a>
          <a href="#" className="hover:text-purple-600 transition">Teams</a>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-4xl mx-auto mb-10 px-4">
        <input
          type="text"
          placeholder="Search here..."
          className="w-full px-6 py-3 rounded-full shadow-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 text-black placeholder-black"
        />
      </div>

      {/* Card Grid */}
      <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 pb-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-40 sm:h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-gray-800 font-semibold text-lg mb-3 text-center">
                {card.title}
              </h3>
              <button className="w-full py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition duration-200">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
