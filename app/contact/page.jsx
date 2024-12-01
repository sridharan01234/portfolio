'use client';
import { useState } from 'react';
import { FaLinkedin, FaGithub, FaCode, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
        console.error('Error submitting form:', error);
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
  };

  return (
    <main className={`min-h-screen bg-white text-gray-800 p-4 sm:p-8 ${inter.className}`}>
      <div className="max-w-4xl mx-auto">
        <h1 className={`${poppins.className} text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500`}>
          Get In Touch
        </h1>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Information Section */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* Contact Info Card */}
            <div className="bg-white p-5 sm:p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <h2 className={`${poppins.className} text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-indigo-600`}>
                Contact Information
              </h2>
              
              <div className="flex flex-col gap-4">
                <a 
                  href="mailto:sridharan01234@gmail.com"
                  className="flex items-center space-x-3 text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                >
                  <FaEnvelope className="text-xl flex-shrink-0" />
                  <span className="font-medium text-sm sm:text-base break-all">sridharan01234@gmail.com</span>
                </a>

                <a 
                  href="tel:+918438773480"
                  className="flex items-center space-x-3 text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                >
                  <FaPhone className="text-xl flex-shrink-0" />
                  <span className="font-medium text-sm sm:text-base">+91 8438773480</span>
                </a>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="bg-white p-5 sm:p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <h2 className={`${poppins.className} text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-indigo-600`}>
                Social Links
              </h2>
              <div className="flex justify-center sm:justify-start space-x-8">
                <a 
                  href="https://linkedin.com/in/sridharan" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link p-2"
                >
                  <FaLinkedin className="text-2xl sm:text-3xl text-gray-600 hover:text-indigo-600 transition-colors duration-300" />
                </a>
                <a 
                  href="https://github.com/sridharan" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link p-2"
                >
                  <FaGithub className="text-2xl sm:text-3xl text-gray-600 hover:text-indigo-600 transition-colors duration-300" />
                </a>
                <a 
                  href="https://leetcode.com/sridharan" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link p-2"
                >
                  <FaCode className="text-2xl sm:text-3xl text-gray-600 hover:text-indigo-600 transition-colors duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white p-5 sm:p-6 rounded-lg shadow-lg border border-gray-100">
            <h2 className={`${poppins.className} text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-indigo-600`}>
              Send Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors duration-300"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors duration-300"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors duration-300 resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`${poppins.className} w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-600 text-center font-medium">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 text-center font-medium">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
