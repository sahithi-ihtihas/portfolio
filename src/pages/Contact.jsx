import React from 'react';

export default function Contact() {
  return (
    <section className="bg-white px-6 md:px-20 py-20 text-black flex justify-center">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 text-center md:text-left">
        {/* Left - Form */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-center md:text-left">Contact</h2>
          <p className="text-gray-600 text-sm text-center md:text-left">
            Let me know if you are interested in my services or collaboration. I will reply as soon as possible.
          </p>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border border-gray-300 rounded text-sm"
            />
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded text-sm"
            />
            <textarea
              placeholder="Tell me"
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded text-sm"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 text-sm"
            >
              Send
            </button>
          </form>
        </div>

        {/* Right - Contact Info */}
        <div className="flex flex-col justify-center items-center md:items-start text-sm space-y-2">
          <span className="font-bold text-lg underline underline-offset-4">Let’s talk</span>
          <a href="mailto:sahithiyarlagadda79@gmail.com" className="text-gray-800 hover:underline">
            sahithiyarlagadda79@gmail.com →
          </a>
        </div>
      </div>
    </section>
  );
}
