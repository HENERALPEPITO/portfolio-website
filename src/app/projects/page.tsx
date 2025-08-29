"use client";
import Slider from "react-slick";

export default function Projects() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000, // 1 second
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  // Tech stack badge
  const TechTag = ({ icon, name }: { icon: string; name: string }) => (
    <div className="flex items-center bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-medium mr-2 mb-2 shadow-sm">
      <span className="mr-1">{icon}</span> {name}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4 max-w-2xl space-y-10">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          My Projects
        </h1>

        {/* Dengue Dash */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <div className="h-96 bg-gray-200 dark:bg-gray-700">
            <Slider {...sliderSettings}>
              <img src="/images/DengueDash/home_page.png" alt="Dengue Dash Home" className="w-full h-96 object-contain" />
              <img src="/images/DengueDash/account_details.png" alt="Account Details" className="w-full h-96 object-contain" />
              <img src="/images/DengueDash/signup_page_1.png" alt="Signup 1" className="w-full h-96 object-contain" />
              <img src="/images/DengueDash/signup_page_2.png" alt="Signup 2" className="w-full h-96 object-contain" />
              <img src="/images/DengueDash/login_page.png" alt="Login" className="w-full h-96 object-contain" />
              <img src="/images/DengueDash/user_dashboard.png" alt="User Dashboard" className="w-full h-96 object-contain" />
            </Slider>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Dengue Dash</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A comprehensive web-based analytics dashboard for dengue case prediction,
              integrating machine learning models with health data management systems.
            </p>
            <div className="flex flex-wrap">
              <TechTag icon="🐍" name="Django" />
              <TechTag icon="⚛️" name="Next.js" />
              <TechTag icon="🎯" name="Tailwind CSS" />
              <TechTag icon="📊" name="Chart.js" />
              <TechTag icon="📮" name="Postman" />
              <TechTag icon="✅" name="Zod" />
            </div>
          </div>
        </div>

        {/* Voting Isko System */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <div className="h-96 bg-gray-200 dark:bg-gray-700">
            <Slider {...sliderSettings}>
              <img src="/images/IskoVote/VotingResults.png" alt="Voting Results" className="w-full h-96 object-contain" />
              <img src="/images/IskoVote/candidate.png" alt="Candidate Page" className="w-full h-96 object-contain" />
              <img src="/images/IskoVote/Category.png" alt="Category" className="w-full h-96 object-contain" />
              <img src="/images/IskoVote/OngoingElection.png" alt="Ongoing Election" className="w-full h-96 object-contain" />
              <img src="/images/IskoVote/IskoHomePage.png" alt="Isko Home" className="w-full h-96 object-contain" />
            </Slider>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Voting Isko System</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Online voting platform for campus elections with secure authentication and results dashboard.
            </p>
            <div className="flex flex-wrap">
              <TechTag icon="🌐" name="HTML" />
              <TechTag icon="🎨" name="CSS" />
              <TechTag icon="🐘" name="PHP" />
              <TechTag icon="📜" name="JavaScript" />
              <TechTag icon="🗄️" name="MySQL" />
            </div>
          </div>
        </div>

        {/* IsKlutter */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <div className="h-96 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <iframe
              className="w-full h-96"
              src="https://www.youtube.com/embed/D0yLCDDIEgU"
              title="IsKlutter Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">IsKlutter</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Mobile marketplace for students with bidding system and messaging features.
            </p>
            <div className="flex flex-wrap">
              <TechTag icon="📱" name="React Native" />
              <TechTag icon="🔥" name="Firebase" />
              <TechTag icon="🎨" name="Gluestack UI" />
            </div>
          </div>
        </div>

        {/* One Too Many */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <div className="h-96 bg-gray-200 dark:bg-gray-700">
            <Slider {...sliderSettings}>
              <img src="/images/OneTooMany/OneTooMany.png" alt="One Too Many Screenshot 1" className="w-full h-96 object-contain" />
              <img src="/images/OneTooMany/OneTooMany2.png" alt="One Too Many Screenshot 2" className="w-full h-96 object-contain" />
              <img src="/images/OneTooMany/OneTooMany3.png" alt="One Too Many Screenshot 3" className="w-full h-96 object-contain" />
              <img src="/images/OneTooMany/OneTooMany4.png" alt="One Too Many Screenshot 4" className="w-full h-96 object-contain" />
              <img src="/images/OneTooMany/OneTooMany5.png" alt="One Too Many Screenshot 5" className="w-full h-96 object-contain" />
            </Slider>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">One Too Many</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Top-down twin-stick bullet-hell shooter with complex enemy AI and progression system.
            </p>
            <div className="flex flex-wrap">
              <TechTag icon="🎮" name="Unity" />
              <TechTag icon="💻" name="C#" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
