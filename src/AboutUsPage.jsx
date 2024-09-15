import React from "react";
import June from './images/June.png';


const AboutUsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
          <p className="text-lg text-gray-600 mt-4">
            Learn more about our mission, values, and the amazing team behind
            our success.
          </p>
        </header>

        {/* Mission Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600">
          Health Orbit's goal is to create a healthcare-focused marketplace where 
          individuals can buy, sell, or donate medical equipment at reduced costs. By 
          providing a platform for exchanging expensive and often underutilized healthcare 
          equipment, we aim to improve accessibility for those in need, while simultaneously 
          reducing medical waste and promoting sustainability in the healthcare industry. 
          This platform allows users to connect with others in their community to find affordable 
          solutions for their medical equipment needs.
          </p>
        </section>

        {/* Team Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vivian Zou */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src="https://media.licdn.com/dms/image/v2/D4E03AQE44Ge22zfd8Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721857091379?e=2147483647&v=beta&t=gqxRAUcoSEWzH3rzaJGt4Dv5mEkUAYA4BlqLaDg9yfE"
                alt="Vivian Zou"
              />
              <h3 className="text-xl font-medium text-gray-800 mt-4 text-center">
              Vivian Zou
              </h3>
              <p className="text-gray-500 mt-2 text-center">
                Vivian Zou is a computer science and mathematics major at Northeastern University.
                She is passionate about using cs for social change!
              </p>
            </div>
            {/* June Mwenda */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src= {June}
                alt="June Mwenda"
              />
              <h3 className="text-xl font-medium text-gray-800 mt-4 text-center">
              June Mwenda
              </h3>
              <p className="text-gray-500 mt-2 text-center">
                June Mwenda is a computer science student at Howard University! She loves using her
                computer science to improve society
              </p>
            </div>
            {/* Nafisa Mohamed */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src="https://media.licdn.com/dms/image/v2/D4E03AQEFo-wBArfxvg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1671910227256?e=1732147200&v=beta&t=T4c5w6W8S5J1tg0elNRBq1oekqX-boQFSTdJhjVxib4"
                alt="Nafisa Mohamed"
              />
              <h3 className="text-xl font-medium text-gray-800 mt-4 text-center">
              Nafisa Mohamed
              </h3>
              <p className="text-gray-500 mt-2 text-center">
                Nafisa is a computer science student at Smith College. She is passionate about 
                using computer science to uplife underrepresented groups of people.
              </p>
            </div>
            {/* Rhea Kallely */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src="https://media.licdn.com/dms/image/v2/D4D03AQGthkLz-OnClQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1699391613744?e=1732147200&v=beta&t=JlH1loBgaftcAntglOoN9qIajiExO8apjjWcTjLi2Lo"
                alt="Rhea Kallely"
              />
              <h3 className="text-xl font-medium text-gray-800 mt-4 text-center">
              Rhea Kallely
              </h3>
              <p className="text-gray-500 mt-2 text-center">
                Rhea Kallely is a computer science and business administration student at Northeastern 
                University! Using tech for social good is very important to her!
              </p>
            </div>


          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
