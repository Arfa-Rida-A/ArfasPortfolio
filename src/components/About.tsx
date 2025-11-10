import { GraduationCap, Code, Heart, Globe, Brain } from 'lucide-react';
import { Card } from './ui/card';

export function About() {
  const skills = {
    languages: ['Java', 'C++', 'Python', 'C', 'HTML/CSS'],
    role: 'Software Developer',
    expertise: {
      webDevelopment: ['React', 'Tailwind CSS', 'Modern Web Standards', 'Responsive Design'],
      aiMl: ['Machine Learning', 'Artificial Intelligence', 'Data Analysis', 'Algorithm Design']
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 via-slate-100 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl text-center mb-12 text-gray-900">
          About Me
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Education */}
          <Card className="p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <GraduationCap className="text-blue-600" size={24} />
              </div>
              <h3 className="ml-4 text-gray-900">Education</h3>
            </div>
            <p className="text-gray-700 mb-2">Bachelor of Engineering</p>
            <p className="text-gray-600">Computer Science and Engineering</p>
            <p className="text-gray-500">Class of 2022</p>
          </Card>

          {/* Skills */}
          <Card className="p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <Code className="text-green-600" size={24} />
              </div>
              <h3 className="ml-4 text-gray-900">Role</h3>
            </div>
            <p className="text-gray-700 mb-4">{skills.role}</p>
            <div className="space-y-3">
              <div>
                <p className="text-gray-600 mb-2">Programming Languages</p>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Interests */}
          <Card className="p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Heart className="text-purple-600" size={24} />
              </div>
              <h3 className="ml-4 text-gray-900">Interests</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Design Systems</li>
              <li>• UI/UX Excellence</li>
              <li>• Clean Code Architecture</li>
              <li>• Continuous Learning</li>
            </ul>
          </Card>
        </div>

        {/* Detailed Skills */}
        <div className="bg-gradient-to-br from-white to-blue-50 rounded-lg p-8 shadow-lg border border-blue-100">
          <h3 className="text-2xl mb-6 text-gray-900">Technical Expertise</h3>
          <div className="space-y-8">
            {/* Programming Languages */}
            <div>
              <h4 className="text-gray-700 mb-4 text-center">Programming Languages</h4>
              <div className="flex flex-wrap gap-3 justify-center">
                {skills.languages.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-3 bg-blue-50 text-blue-700 rounded-lg border border-blue-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Web Development */}
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg p-6 border border-indigo-200 shadow-sm">
              <div className="flex items-center justify-center mb-4">
                <Globe className="text-indigo-600 mr-2" size={24} />
                <h4 className="text-gray-900">Web Development</h4>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                {skills.expertise.webDevelopment.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white text-indigo-700 rounded-lg shadow-sm border border-indigo-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* AI & Machine Learning */}
            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-lg p-6 border border-emerald-200 shadow-sm">
              <div className="flex items-center justify-center mb-4">
                <Brain className="text-emerald-600 mr-2" size={24} />
                <h4 className="text-gray-900">Artificial Intelligence & Machine Learning</h4>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                {skills.expertise.aiMl.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white text-emerald-700 rounded-lg shadow-sm border border-emerald-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Professional Role */}
            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-2">Professional Role</p>
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-lg border border-green-200 shadow-sm">
                {skills.role}
              </span>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-8 text-center max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-sm border border-slate-200">
          <p className="text-gray-700 leading-relaxed">
            I'm a software developer with a Bachelor of Engineering in Computer Science 
            and Engineering. My expertise spans multiple programming languages including 
            Java, C++, Python, C, and HTML/CSS. I believe that exceptional software comes 
            from the marriage of precise design and flawless execution. With a keen eye 
            for detail and a commitment to excellence, I craft digital solutions that are 
            both efficient and elegant. My approach combines thoughtful problem-solving 
            with robust technical implementation to deliver results that exceed expectations.
          </p>
        </div>
      </div>
    </section>
  );
}