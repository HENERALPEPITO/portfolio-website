import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Hi, I&#39;m <span className="text-blue-600">Carl Benedict</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            A Computer Science Graduate and Full Stack Developer passionate about creating innovative software solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-center"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors text-center"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Profile Image */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/images/profile.jpg" 
            alt="Carl Benedict Profile"
            width={256}
            height={256}
            className="rounded-full shadow-lg"
            priority
          />
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="bg-white dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dengue Dash */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-lg">
              <div className="h-48 w-full relative mb-4">
                <Image
                  src="/images/DengueDash/home_page.png"
                  alt="Dengue Dash"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                Dengue Dash
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Web-based analytics dashboard for dengue case prediction using LSTM models
              </p>
              <Link
                href="/projects#dengue-dash"
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
              >
                Learn More →
              </Link>
            </div>

            {/* One Too Many */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-lg">
              <div className="h-48 w-full relative mb-4">
                <Image
                  src="/images/OneTooMany/OneTooMany.png"
                  alt="One Too Many"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                One Too Many
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Minimalist twin-stick bullet-hell shooter exploring digital corruption themes.
              </p>
              <Link
                href="/projects#one-too-many"
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
              >
                Learn More →
              </Link>
            </div>

            {/* Isko Vote */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-lg">
              <div className="h-48 w-full relative mb-4">
                <Image
                  src="/images/IskoVote/VotingResults.png"
                  alt="Isko Vote"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                Isko Vote
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                University-wide election platform with secure voting and results tracking.
              </p>
              <Link
                href="/projects#isko-vote"
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ... keep rest of your content the same ... */}
    </div>
  );
}
