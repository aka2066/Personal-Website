import Image from "next/image";
import Link from 'next/link';
import HeroSection from '../components/HeroSection';
import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Home icon in top left */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="#" className="text-xl font-bold hover:text-blue-600 transition flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.1L1 12h3v9h7v-6h2v6h7v-9h3L12 2.1z" />
          </svg>
        </Link>
      </div>

      {/* Navigation Menu */}
      <Navigation />

      {/* Animated Hero Section with Polaroid Images */}
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              I am a Software Engineer with expertise in Full Stack Web Development, Data Science, and AI technologies. 
              My background in Computer Engineering provides me with a strong foundation for building complex systems 
              and solving challenging technical problems.
            </p>
            <p className="text-lg mb-6">
              Currently at AskBubs in Los Angeles, I engineer AI-powered systems using Python, Node.js, and Next.js, 
              integrating OpenAI and Gemini LLM APIs with LangChain for content refinement. I design and deploy 
              sequential AI Agents that automate text processing and scale to serve thousands of users.
            </p>
            <p className="text-lg">
              My experience spans from developing portable ground control systems for the Department of Defense to 
              creating AI frameworks for NASA. I thrive in fast-paced environments and consistently deliver 
              high-performance, well-architected solutions under tight deadlines.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          
          <div className="max-w-4xl mx-auto">
            {/* Experience Item 1 */}
            <div className="mb-12 border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold mb-2">Software Engineer</h3>
              <h4 className="text-xl text-gray-600 dark:text-gray-400 mb-2">AskBubs</h4>
              <p className="text-gray-500 dark:text-gray-400 mb-4">Jan 2023 - Present | Los Angeles, CA</p>
              
              <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
                <li>Engineered an AI-powered text enhancement pipeline leveraging Python, Node.js, and Next.js, integrating OpenAI and Gemini LLM APIs with LangChain to drive seamless and dynamic content refinement for users.</li>
                <li>Designed and deployed sequential AI Agents for CoAuthor.ai to automate text processing, delivering polished outputs without user intervention and scaling the product to serve 10,000+ users.</li>
                <li>Developed and optimized API endpoints to coordinate multi-step LLM transformations, ensuring reliability through rigorous testing with Langfuse and Postman.</li>
              </ul>
            </div>
            
            {/* Experience Item 2 */}
            <div className="mb-12 border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold mb-2">Software Engineer</h3>
              <h4 className="text-xl text-gray-600 dark:text-gray-400 mb-2">LeNgineer</h4>
              <p className="text-gray-500 dark:text-gray-400 mb-4">Jan 2021 - Dec 2022 | Titusville, FL</p>
              
              <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
                <li>Led the development of a portable ground control system and a UAV command and control center for a Department of Defense (DoD) contract, designed in Autodesk Inventor to ensure robust and efficient operations.</li>
                <li>Collaborated as part of a three-person engineering team on a NASA SBIR Phase 1 contract to develop Multidisciplinary Instrument Tool and Analysis (MITA), an AI framework integrating machine learning algorithms, ETL pipelines, data processing, and communication protocols.</li>
                <li>Constructed MITA's user interface using React, Node, Express, Rest APIs, and AWS alongside a live data pipeline to process unstructured data by integrating a telemetry server and cloud storage to display insights on Open MCT.</li>
              </ul>
            </div>

            {/* Experience Item 3 */}
            <div className="mb-12 border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold mb-2">Computer Engineering Intern</h3>
              <h4 className="text-xl text-gray-600 dark:text-gray-400 mb-2">Lennovation</h4>
              <p className="text-gray-500 dark:text-gray-400 mb-4">Jan 2020 - Dec 2020 | Titusville, FL</p>
              
              <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
                <li>Engineered drone technologies incorporating LiDAR for 3D scans via computer vision, with performance assessed using CFD simulations in SolidWorks, streamlining structural assessments and construction workflows.</li>
                <li>Maintained a robust flight data pipeline by ingesting transactional data across multiple primary data services, leveraging continuous integration and continuous delivery (CI/CD) practices.</li>
                <li>Established an efficient method for computer workstation setup, including commercial cloud configuration, network mapping, and data management, reducing setup time and improving reliability.</li>
                <li>Researched, created, and developed proof-of-concept (PoC) prototypes and testing tools using Arduino and Raspberry Pi for prototyping, testing, measurement, and troubleshooting.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Skill Category 1 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Web Development</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Full Stack Web Development</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>JavaScript / TypeScript</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>React / Next.js</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Node.js / Express</span>
                </li>
              </ul>
            </div>
            
            {/* Skill Category 2 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">AI & Machine Learning</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>AI Agents / LLM Integration</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Machine Learning</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Deep Learning</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Computer Vision</span>
                </li>
              </ul>
            </div>
            
            {/* Skill Category 3 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Programming Languages</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Python</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Java</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>C</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Git</span>
                </li>
              </ul>
            </div>
            
            {/* Skill Category 4 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Data & Databases</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Data Science</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Data Analysis / Engineering</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>MongoDB / PostgreSQL</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>MySQL / SQL</span>
                </li>
              </ul>
            </div>
            
            {/* Skill Category 5 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Cloud & DevOps</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>AWS</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Azure</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>GCP</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>ETL Pipelines</span>
                </li>
              </ul>
            </div>
            
            {/* Skill Category 6 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Engineering Skills</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>AutoCAD / SolidWorks</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>AutoDesk Inventor</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Raspberry Pi / Arduino</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Troubleshooting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {/* Education Section */}
      <section id="education" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          
          <div className="max-w-3xl mx-auto border-l-4 border-blue-600 pl-6">
            <h3 className="text-2xl font-bold mb-2">Bachelor of Science in Computer Engineering</h3>
            <h4 className="text-xl text-gray-600 dark:text-gray-400 mb-4">University of Central Florida</h4>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 - SignFlex */}
            <div className="bg-white dark:bg-gray-900 overflow-hidden rounded-lg shadow-lg">
              <div className="h-48 bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">SignFlex</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  A wearable glove that translates American Sign Language (ASL) gestures into text and speech in real time. Developed as a Senior Design project at UCF.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">Android Native</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">Bluetooth</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">TensorFlow</span>
                </div>
                <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
                  <li>Designed and prototyped a wearable ASL translation device</li>
                  <li>Developed a mobile and desktop application to display recognized signs</li>
                  <li>Used computer vision with TensorFlow to enhance recognition accuracy</li>
                </ul>
                <div className="flex gap-4">
                  <a href="https://github.com/aka2066/SignFlex" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
            
            {/* Project 2 - Autonomous Intelligent Systems Lab */}
            <div className="bg-white dark:bg-gray-900 overflow-hidden rounded-lg shadow-lg">
              <div className="h-48 bg-green-100 dark:bg-green-900 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Autonomous Intelligent Systems Research</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Research work under Dr. Chinwendu Enyioha at UCF, focused on advanced control and robotics applications for distributed optimization and control of networked dynamic systems.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">MATLAB</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">Control Systems</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">Robotics</span>
                </div>
                <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
                  <li>Led translation of MATLAB code to Python for advanced control applications</li>
                  <li>Developed modular Python classes for grid creation and obstacle avoidance</li>
                  <li>Improved documentation and debugging processes for cross-language development</li>
                </ul>
                <div className="flex gap-4">
                  <a href="https://github.com/aka2066/UCF-Research" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
            
            {/* Project 3 - AI Text Enhancement */}
            <div className="bg-white dark:bg-gray-900 overflow-hidden rounded-lg shadow-lg">
              <div className="h-48 bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">AI-Powered Text Enhancement Pipeline</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  An AI system that enhances and refines text using advanced language models. Built at AskBubs to serve thousands of users with automated text processing.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">LangChain</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">OpenAI API</span>
                </div>
                <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
                  <li>Engineered an AI-powered text enhancement pipeline</li>
                  <li>Designed sequential AI Agents for automated text processing</li>
                  <li>Developed and optimized API endpoints for multi-step LLM transformations</li>
                </ul>
                <div className="flex gap-4">
                  <a href="https://github.com/aka2066/AI-Text-Enhancement" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
            
            {/* Project 4 - NASA MITA */}
            <div className="bg-white dark:bg-gray-900 overflow-hidden rounded-lg shadow-lg">
              <div className="h-48 bg-red-100 dark:bg-red-900 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Multidisciplinary Instrument Tool and Analysis (MITA)</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  An AI framework developed for NASA SBIR Phase 1 contract that integrates machine learning algorithms, ETL pipelines, and data processing to evaluate complex systems.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">Express</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">AWS</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">Machine Learning</span>
                </div>
                <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
                  <li>Collaborated on NASA SBIR Phase 1 contract within a three-person engineering team</li>
                  <li>Constructed UI using React, Node, Express, and REST APIs</li>
                  <li>Built live data pipeline to process unstructured data with cloud storage integration</li>
                </ul>
                <div className="flex gap-4">
                  <a href="https://github.com/aka2066/NASA-MITA" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>
          
          <div className="max-w-md mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-md p-8">
            <p className="text-center mb-6">
              Located in Orlando, FL. Feel free to reach out if you have any questions or would like to work together!
            </p>
            
            <div className="flex justify-center space-x-6">
              <a href="mailto:ryan.rahrooh@outlook.com" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300" title="Email me">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a href="https://github.com/ryanrahrooh" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300" title="GitHub Profile">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/ryan-rahrooh" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300" title="LinkedIn Profile">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="tel:4078858302" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300" title="Call me">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-white text-center">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Ryan Rahrooh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
