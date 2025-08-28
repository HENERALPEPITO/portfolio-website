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
            A Computer Science student and Full Stack Developer passionate about creating innovative software solutions
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
        <div className="md:w-1/2">
          {/* Profile Placeholder */}
          <div className="w-64 h-64 mx-auto bg-gray-200 dark:bg-gray-800 rounded-full"></div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="bg-white dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Project Card */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-lg">
              <div className="h-48 bg-gray-200 dark:bg-gray-600 rounded-lg mb-4"></div>
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
          </div>
        </div>
      </section>

      {/* Summary, Work Experience, Projects, Skills, Education */}
      <main className="container mx-auto px-4 py-20 flex-1">
        {/* Summary */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Summary</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Computer Science student with a keen interest in integrating artificial intelligence
            into innovative software solutions. Skilled at addressing complex challenges through
            creative problem-solving, adaptable in roles as a team leader, collaborator, or
            independent contributor.
          </p>
        </section>

        {/* Work Experience */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Work Experience</h2>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Software Engineer Intern</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">Seaversity | June 2024 - August 2024</p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Developed and maintained the LMS education tool using Laravel, Vue, and Next.js</li>
              <li>Collaborated with the development team to implement new features</li>
              <li>Assisted in integration of back-end and front-end components</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Full Stack Web Developer</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">Tawselato | Apr 2021 - Jul 2022</p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Developed and maintained logistics platform using Django, React, and Tailwind CSS</li>
              <li>Implemented tracking and payment features</li>
              <li>Collaborated in system optimization and integration</li>
            </ul>
          </div>
        </section>

        {/* Projects, Skills, Education (same as you had, but properly nested inside <main>) */}
        {/* ... copy over your project cards and education here ... */}
      </main>

      {/* Contact CTA */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Let&#39;s Work Together</h2>
          <p className="text-xl mb-8 opacity-90">
            Have a project in mind? Let&#39;s discuss how I can help.
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-colors inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Carl Benedict L Elipan. All rights reserved.
      </footer>
    </div>
  );
}
