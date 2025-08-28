export default function TechStack() {
  const technologies = {
    frontend: [
      { name: 'HTML', icon: '🌐' },
      { name: 'CSS', icon: '🎨' },
      { name: 'Tailwind CSS', icon: '🎯' },
      { name: 'React', icon: '⚛️' },
      { name: 'React Native', icon: '📱' },
      { name: 'Vue', icon: '💚' },
      { name: 'Flutter', icon: '🦋' },
    ],
    backend: [
      { name: 'Django', icon: '🐍' },
      { name: 'Laravel', icon: '🔥' },
      { name: 'Node.js', icon: '💻' },
    ],
    databases: [
      { name: 'Supabase', icon: '⚡' },
      { name: 'Firebase', icon: '🔥' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'SQL', icon: '📊' },
    ],
    languages: [
      { name: 'Python', icon: '🐍' },
      { name: 'JavaScript', icon: '💛' },
      { name: 'TypeScript', icon: '💙' },
      { name: 'Java', icon: '☕' },
      { name: 'C++', icon: '⚙️' },
      { name: 'C#', icon: '🎮' },
      { name: 'R', icon: '📈' },
    ],
    other: [
      { name: 'Machine Learning', icon: '🤖' },
      { name: 'Deep Learning', icon: '🧠' },
      { name: 'Unity', icon: '🎮' },
      { name: 'AWS', icon: '☁️' },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">Tech Stack</h1>

        {Object.entries(technologies).map(([category, techs]) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 capitalize text-gray-800 dark:text-white">
              {category.replace('_', ' ')}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {techs.map((tech) => (
                <div
                  key={tech.name}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-4xl mb-3">{tech.icon}</div>
                  <h3 className="text-gray-900 dark:text-white font-medium">{tech.name}</h3>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Skills Overview */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Core Competencies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Frontend Development</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>Responsive Web Design</li>
                <li>Modern UI/UX Implementation</li>
                <li>Cross-platform Mobile Development</li>
                <li>State Management</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Backend Development</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>RESTful API Design</li>
                <li>Database Design & Optimization</li>
                <li>Authentication & Authorization</li>
                <li>Server-side Performance</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">AI & Machine Learning</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>Deep Learning Models</li>
                <li>Time Series Analysis</li>
                <li>Data Preprocessing</li>
                <li>Model Deployment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
