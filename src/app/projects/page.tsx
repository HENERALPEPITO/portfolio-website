"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Projects() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">My Projects</h1>

        {/* Featured Project - Dengue Dash */}
        <div id="dengue-dash" className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            <div className="h-96 bg-gray-200 dark:bg-gray-700">
              <Slider {...sliderSettings}>
                <img src="portfolio images/Dengue Dash/home_page.png" alt="Dengue Dash Home" />
                <img src="portfolio images/Dengue Dash/account_details.png" alt="Account Details" />
                <img src="portfolio images/Dengue Dash/signup_page_1.png" alt="Signup 1" />
                <img src="portfolio images/Dengue Dash/signup_page_2.png" alt="Signup 2" />
                <img src="portfolio images/Dengue Dash/login_page.png" alt="Login" />
                <img src="portfolio images/Dengue Dash/user_dashboard.png" alt="User Dashboard" />
              </Slider>
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4">Dengue Dash</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                A comprehensive web-based analytics dashboard for dengue case prediction,
                integrating machine learning models with health data management systems.
              </p>
            </div>
          </div>
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Isko Vote */}
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            <div className="h-64 bg-gray-200 dark:bg-gray-700">
              <Slider {...sliderSettings}>
                <img src="portfolio images/Dengue Dash/VotingResults.png" alt="Voting Results" />
                <img src="portfolio images/Dengue Dash/candidate.png" alt="Candidate Page" />
                <img src="portfolio images/Dengue Dash/Category.png" alt="Category" />
                <img src="portfolio images/Dengue Dash/OngoingElection.png" alt="Ongoing Election" />
                <img src="portfolio images/Dengue Dash/IskoHomePage.png" alt="Isko Home" />
              </Slider>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Isko Vote</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Online voting platform for campus elections with secure authentication and results dashboard.
              </p>
            </div>
          </div>

          {/* IsKlutter - YouTube Video */}
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            <div className="h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <iframe
                className="w-full h-64"
                src="https://www.youtube.com/embed/D0yLCDDIEgU"
                title="IsKlutter Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">IsKlutter</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Mobile marketplace for students with bidding system and messaging features.
              </p>
            </div>
          </div>

          {/* One Too Many */}
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            <div className="h-64 bg-gray-200 dark:bg-gray-700">
              <Slider {...sliderSettings}>
                <img src="portfolio images/OneTooMany/OneTooMany.png" alt="One Too Many Screenshot 1" />
                <img src="portfolio images/OneTooMany/OneTooMany2.png" alt="One Too Many Screenshot 2" />
                <img src="portfolio images/OneTooMany/OneTooMany3.png" alt="One Too Many Screenshot 3" />
                <img src="portfolio images/OneTooMany/OneTooMany4.png" alt="One Too Many Screenshot 4" />
                <img src="portfolio images/OneTooMany/OneTooMany5.png" alt="One Too Many Screenshot 5" />
              </Slider>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">One Too Many</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Top-down twin-stick bullet-hell shooter with complex enemy AI and progression system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
