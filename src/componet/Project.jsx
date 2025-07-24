import React from 'react';
import pokemon from "../img/pokemon.jpg";
import food4 from "../img/food4.jpg";
import weather from "../img/weather.jpg";

function Project() {
  let data = [
    {
      name: "Weather App",
      code: "",
      photo: weather,
      description: {
        tech: "React, JavaScript, CSS Modules, OpenWeatherMap API",
        summary:
          "A real-time weather forecasting application that allows users to search any city and view both current conditions and upcoming forecasts.",
        features: [
          "Search for any city and view location-specific weather data",
          "Displays current temperature, sky condition, humidity, wind speed, and visibility",
          "Shows sunrise and sunset times",
          "Forecast for the next 4 time slots (3-hour intervals)",
          "Built with React functional components and useState/useEffect hooks",
          "Modular architecture with separate components for report and forecast",
        ],
      },
    },
    {
      name: "Pokédex App",
      code: "",
      photo: pokemon,
      description: {
        tech: "HTML, CSS, JavaScript, PokeAPI",
        summary:
          "An interactive Pokédex application that fetches and displays Pokémon data using the PokeAPI.",
        features: [
          "Fetches and displays a list of 640 Pokémon using the PokeAPI",
          "Displays each Pokémon with its name, number, and SVG image",
          "Search functionality to filter Pokémon by name or number",
          "Radio buttons to switch between number-based and name-based search",
          "Responsive layout with real-time filtering",
          "Clean UI structure using vanilla JavaScript DOM manipulation",
        ],
      },
    },
    {
      name: "Foodies App",
      code: "https://github.com/Hardeep-Singh12/foodies",
      photo: food4,
      description: {
        tech: "React, JavaScript, Tailwind CSS, React Router DOM, JWT Auth, Netlify",
        summary:
          "A responsive restaurant menu web application that allows users to browse items, navigate pages using routing, and experience secure login with JWT authentication.",
        features: [
          "Multi-page routing using React Router DOM",
          "Responsive menu layout with Tailwind CSS",
          "JWT-based user authentication for secure access",
          "Deployed on Netlify for public access",
          "Dynamic UI with reusable components",
          "Clean code structure and modern frontend practices",
        ],
      },
    },
  ];

  return (
    <div className='flex flex-col justify-center items-center bg-black text-white pb-16 px-4'>
      <h1 className='my-10 font-bold text-4xl sm:text-6xl'>Projects</h1>

      <div className='flex flex-wrap justify-center gap-8'>
        {data.map((item, index) => (
          <div
            key={index}
            className="border-2 border-amber-700 w-full sm:w-[400px] rounded-lg overflow-hidden bg-black text-white p-4 group hover:border-pink-400 transition-all duration-500"
          >
            {/* Project Image */}
            <img
              src={item.photo}
              alt={item.name}
              className="w-full h-48 object-cover rounded-md mb-3"
            />

            {/* Project Name */}
            <h2 className="text-xl font-bold text-amber-500 text-center">{item.name}</h2>

            {/* Tech */}
            <p className="text-sm mt-2 text-center">
              <span className="text-amber-600 font-bold">Tech:</span> {item.description.tech}
            </p>

            {/* Summary (Always visible on mobile) */}
            <div className="mt-3 text-gray-300 text-sm block sm:hidden">
              <p>
                <span className="text-amber-600 font-bold">Summary:</span> {item.description.summary}
              </p>
              <ul className="list-disc ml-5 mt-2 text-[13px]">
                {item.description.features.slice(0, 3).map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Hover-based content for larger screens */}
            <div className="hidden sm:group-hover:block sm:text-sm sm:mt-3 sm:text-gray-300 transition-opacity duration-300">
              <p>
                <span className="text-amber-600 font-bold">Summary:</span> {item.description.summary}
              </p>
              <ul className="list-disc ml-5 mt-2 text-[13px]">
                {item.description.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* View Code Button */}
            {/* {item.code && (
              <a
                href={item.code}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center mt-4 text-blue-400 underline hover:text-blue-600"
              >
                View Code
              </a>
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
