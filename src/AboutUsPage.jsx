import React from "react";

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
            Our mission is to provide the best services for our customers,
            always striving for excellence in everything we do. We aim to
            innovate and set trends in the industry, focusing on quality,
            integrity, and customer satisfaction.
          </p>
        </section>

        {/* Team Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Example Team Member */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src="https://via.placeholder.com/150"
                alt="Team Member"
              />
              <h3 className="text-xl font-medium text-gray-800 mt-4 text-center">
                John Doe
              </h3>
              <p className="text-gray-600 text-center">CEO & Founder</p>
              <p className="text-gray-500 mt-2 text-center">
                John is the visionary behind the company, with over 10 years of
                experience in the industry.
              </p>
            </div>

            {/* Add more team members as needed */}
          </div>
        </section>

        {/* Values Section */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">
            Our Values
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-600">
            <li>
              <span className="font-semibold text-gray-800">Integrity:</span> We
              believe in doing the right thing, always.
            </li>
            <li>
              <span className="font-semibold text-gray-800">Innovation:</span>{" "}
              Constantly pushing boundaries and exploring new ideas.
            </li>
            <li>
              <span className="font-semibold text-gray-800">
                Customer Satisfaction:
              </span>{" "}
              Our customers' happiness is our top priority.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
