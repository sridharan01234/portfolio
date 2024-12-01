"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import {
  FaCode,
  FaReact,
  FaServer,
  FaDatabase,
  FaTools,
  FaRobot,
  FaPython,
  FaJs,
  FaPhp,
  FaAngular,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiDjango,
  SiFastapi,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiMysql,
  SiFirebase,
  SiJenkins,
  SiKubernetes,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
} from "react-icons/si";

const tabs = {
  about: {
    title: "About",
    content: {
      intro:
        "Motivated Full Stack Developer with a Bachelor’s degree in Information Technology, specializing in Python, AI, and machine learning. Skilled in developing scalable web applications and solving complex problems.",
      highlights: [
        "3+ years of full-stack development experience",
        "Proficient in Python, JavaScript, and PHP",
        "Expertise in AI/ML model training and deployment",
        "Passionate about clean code, scalability, and Agile practices",
      ],
    },
  },
  experience: {
    title: "Experience",
    content: {
      current: {
        role: "Software Engineer",
        company: "Aspire Systems",
        period: "Mar 2023 - Present",
        achievements: [
          "Built and maintained an email marketing platform for 50K+ users",
          "Developed RESTful APIs supporting real-time analytics",
          "Optimized API response time by 40%, improving performance",
          "Integrated Amazon S3, reducing storage costs by 30%",
          "Created a custom rich text editor for email design",
        ],
      },
      previous: {
        role: "Software Development Intern",
        company: "Tech Solutions Ltd",
        period: "May 2022 - Feb 2023",
        achievements: [
          "Developed and maintained REST APIs using Django",
          "Implemented automated testing, achieving 80% coverage",
          "Collaborated with UI/UX team for frontend development",
        ],
      },
    },
  },
  skills: {
    title: "Skills",
    content: {
      technical: [
        {
          category: "Languages",
          items: ["Python", "JavaScript", "PHP", "TypeScript", "SQL"],
        },
        {
          category: "Frontend",
          items: ["React", "Angular", "Next.js", "Redux", "Tailwind CSS"],
        },
        {
          category: "Backend",
          items: ["Node.js", "Django", "FastAPI", "Express.js", "GraphQL"],
        },
        {
          category: "Database",
          items: ["MongoDB", "PostgreSQL", "Redis", "MySQL", "Firebase"],
        },
        {
          category: "Tools & Platforms",
          items: ["Git", "Docker", "AWS", "Jenkins", "Kubernetes"],
        },
        {
          category: "AI/ML",
          items: [
            "Model Training",
            "Data Analysis",
            "TensorFlow",
            "PyTorch",
            "Scikit-learn",
          ],
        },
      ],
    },
  },
  projects: {
    title: "Projects",
    content: [
      {
        title: "Email Marketing Platform",
        description:
          "A platform enabling users to manage campaigns and track performance.",
        tech: ["JavaScript", "Node.js", "MongoDB", "AWS S3"],
        highlights: [
          "Developed rich text editor for email design",
          "Integrated Amazon S3 for media storage",
          "Optimized for high performance with large datasets",
        ],
      },
    ],
  },
  contact: {
    title: "Contact",
    content: {
      location: "Salem, Tamil Nadu",
      phone: "8438773480",
      email: "Sridharan01234@gmail.com",
      links: {
        LinkedIn: "linkedin.com/in/sridharan",
        GitHub: "github.com/sridharan",
        LeetCode: "leetcode.com/sridharan",
      },
    },
  },
  education: {
    title: "Education",
    content: [
      {
        degree: "Bachelor of Technology in Information Technology",
        institution: "Bannari Amman Institute of Technology",
        period: "July 2019 - April 2023",
      },
    ],
  },
};

const categoryIcons = {
  Languages: <FaCode className="text-xl sm:text-2xl" />,
  Frontend: <FaReact className="text-xl sm:text-2xl" />,
  Backend: <FaServer className="text-xl sm:text-2xl" />,
  Database: <FaDatabase className="text-xl sm:text-2xl" />,
  "Tools & Platforms": <FaTools className="text-xl sm:text-2xl" />,
  "AI/ML": <FaRobot className="text-xl sm:text-2xl" />,
};

const itemIcons = {
  // Languages
  Python: <FaPython className="mr-1" />,
  JavaScript: <FaJs className="mr-1" />,
  PHP: <FaPhp className="mr-1" />,
  TypeScript: <SiTypescript className="mr-1" />,

  // Frontend
  React: <FaReact className="mr-1" />,
  Angular: <FaAngular className="mr-1" />,
  "Next.js": <SiTypescript className="mr-1" />,
  "Tailwind CSS": <SiTailwindcss className="mr-1" />,

  // Backend
  "Node.js": <FaNodeJs className="mr-1" />,
  Django: <SiDjango className="mr-1" />,
  FastAPI: <SiFastapi className="mr-1" />,
  GraphQL: <SiGraphql className="mr-1" />,

  // Database
  MongoDB: <SiMongodb className="mr-1" />,
  PostgreSQL: <SiPostgresql className="mr-1" />,
  Redis: <SiRedis className="mr-1" />,
  MySQL: <SiMysql className="mr-1" />,
  Firebase: <SiFirebase className="mr-1" />,

  // Tools & Platforms
  Git: <FaGitAlt className="mr-1" />,
  Docker: <FaDocker className="mr-1" />,
  AWS: <FaAws className="mr-1" />,
  Jenkins: <SiJenkins className="mr-1" />,
  Kubernetes: <SiKubernetes className="mr-1" />,

  // AI/ML
  TensorFlow: <SiTensorflow className="mr-1" />,
  PyTorch: <SiPytorch className="mr-1" />,
  "Scikit-learn": <SiScikitlearn className="mr-1" />,
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [{ name: "Contact", href: "/contact" }];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600">ST.</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300
                             px-3 py-2 text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white/95 backdrop-blur-md shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600
                           hover:bg-blue-50 rounded-md transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        </div>

        {/* Animated Circles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800">
              Hi, I&apos;m <span className="text-blue-600">Sridharan</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
              Full Stack Developer specializing in building exceptional digital
              experiences
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex justify-center gap-4"
            >
              <Link
                href="#projects"
                className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium
                         hover:bg-blue-700 transition-colors duration-300 shadow-lg"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 bg-white text-blue-600 rounded-full font-medium
                         hover:bg-gray-50 transition-colors duration-300 shadow-lg"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </div>

      {/* Bento Grid Section */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
          {/* About Card - Large */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="col-span-2 row-span-1 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
              {tabs.about.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 break-words">
              {tabs.about.content.intro}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {tabs.about.content.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-2 min-w-0" // Added min-w-0 for proper flex behavior
                >
                  <span className="text-blue-500 mt-1 flex-shrink-0">→</span>
                  <span className="text-gray-600 text-xs sm:text-sm break-words flex-1">
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="col-span-1 row-span-2 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
              {tabs.experience.title}
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-semibold text-gray-800 break-words">
                  {tabs.experience.content.current.role}
                </span>
                <span className="text-blue-600 break-words">
                  {tabs.experience.content.current.company}
                </span>
                <span className="text-xs sm:text-sm text-gray-600">
                  {tabs.experience.content.current.period}
                </span>
              </div>
              <div className="space-y-2">
                {tabs.experience.content.current.achievements.map(
                  (achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-2 min-w-0" // Added min-w-0 for proper flex behavior
                    >
                      <span className="text-purple-500 mt-1 flex-shrink-0">
                        •
                      </span>
                      <span className="text-gray-600 text-xs sm:text-sm break-words flex-1">
                        {achievement}
                      </span>
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* Skills Cards with Icons */}
          {tabs.skills.content.technical.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ delay: index * 0.1 }}
              className="col-span-1 bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-5 pattern-dots pattern-gray-800 pattern-bg-white pattern-size-4" />

              <div className="relative p-4 sm:p-6 flex flex-col h-full">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 text-center flex items-center justify-center gap-2">
                  <span className="text-teal-600">
                    {categoryIcons[skill.category]}
                  </span>
                  <span>{skill.category}</span>
                </h3>

                <div className="flex-grow flex items-center justify-center">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skill.items.map((item, i) => (
                      <motion.span
                        key={i}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "rgba(255, 255, 255, 0.9)",
                        }}
                        className="inline-flex items-center px-3 py-1.5 bg-white/70 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium text-gray-700 transition-all duration-200 shadow-sm hover:shadow"
                      >
                        {itemIcons[item] && (
                          <span className="text-teal-600">
                            {itemIcons[item]}
                          </span>
                        )}
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="col-span-2 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {tabs.projects.content.map((project, index) => (
              <div key={index} className="space-y-3 sm:space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 break-words">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-white/60 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium text-gray-700"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start space-x-2 min-w-0"
                    >
                      <span className="text-orange-500 mt-1 flex-shrink-0">
                        •
                      </span>
                      <span className="text-gray-600 text-xs sm:text-sm break-words flex-1">
                        {highlight}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-800 mb-16"
          >
            Key Features & Expertise
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "💻",
                title: "Full Stack Development",
                description:
                  "End-to-end application development with modern technologies",
              },
              {
                icon: "🤖",
                title: "AI/ML Solutions",
                description: "Building intelligent systems and ML models",
              },
              {
                icon: "⚡",
                title: "Performance Optimization",
                description: "Improving application speed and efficiency",
              },
              {
                icon: "🔒",
                title: "Security First",
                description: "Implementing robust security practices",
              },
              {
                icon: "📱",
                title: "Responsive Design",
                description: "Creating seamless experiences across devices",
              },
              {
                icon: "🔄",
                title: "Agile Practices",
                description: "Efficient project management and delivery",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
