export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">About Me</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                I&#39;m a Computer Science student with a passion for creating innovative software solutions. 
                My journey in technology has led me to explore various domains, from web development to 
                artificial intelligence and game development.
              </p>
              
              <h2 className="text-2xl font-bold mb-4">Education</h2>
              <div className="mb-6">
                <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
                <p className="text-gray-600 dark:text-gray-300">University of the Philippines Visayas</p>
                <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300">
                  <li>Honor Roll 2021-2022</li>
                  <li>College Scholar Second Semester (2023-2024)</li>
                  <li>University Scholar First Semester (2024-2025)</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Professional Experience</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold">Software Engineer Intern</h3>
              <p className="text-gray-600 dark:text-gray-300">Seaversity | June 2024 - August 2024</p>
              <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300">
                <li>Developed and maintained LMS education tools</li>
                <li>Worked with Laravel, Vue, and Next.js</li>
                <li>Collaborated on feature implementation and bug fixes</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold">Full Stack Web Developer</h3>
              <p className="text-gray-600 dark:text-gray-300">Tawselato | Apr 2021 - Jul 2022</p>
              <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300">
                <li>Built logistics platform using Django and React</li>
                <li>Implemented order tracking and payment features</li>
                <li>Optimized system performance and user experience</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">AGRIVISION HACKATHON</h3>
              <p className="text-gray-600 dark:text-gray-300">Champion (2024)</p>
            </div>
            {/* Add more achievement cards here */}
          </div>
        </div>
      </div>
    </div>
  );
}
