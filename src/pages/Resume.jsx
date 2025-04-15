import React from 'react';
import profilePic from '../assets/react.svg'; // Replace or remove as needed

export default function Resume() {
  return (
    <section className="bg-white px-6 md:px-20 py-16 text-black flex justify-center">
      <div className="max-w-6xl w-full grid md:grid-cols-3 gap-12 text-center md:text-center">
        {/* Left column */}
        <div className="md:col-span-2 space-y-14">
          {/* Resume title */}
          <div>
            <h2 className="text-4xl font-bold mb-2">Resume</h2>
            <p className="text-sm text-gray-600">My journey so far</p>
          </div>

          {/* Work Experience */}
          <div>
            <h3 className="text-xl font-semibold mb-6 inline-block bg-black text-white px-4 py-1 rounded">
              Work Experience
            </h3>
            <div className="space-y-6 text-sm text-center">
              <div>
                <p className="font-semibold text-base">Senior Software Engineer – Freshworks</p>
                <p className="text-gray-600">Oct 2022 – July 2024</p>
                <p className="mt-1">Built CRM features, optimized builds, implemented access scopes.</p>
              </div>
              <div>
                <p className="font-semibold text-base">Software Developer – Oracle</p>
                <p className="text-gray-600">Apr 2021 – Sept 2022</p>
                <p className="mt-1">Customized B2B storefront, secured login flow, built templates.</p>
              </div>
              <div>
                <p className="font-semibold text-base">Software Developer – ADP</p>
                <p className="text-gray-600">Aug 2018 – Mar 2021</p>
                <p className="mt-1">Payroll modules, React UIs, backend testing with JUnit.</p>
              </div>
            </div>
          </div>

          {/* Internship */}
          <div>
            <h3 className="text-xl font-semibold mb-6 inline-block bg-black text-white px-4 py-1 rounded">
              Internship
            </h3>
            <div className="text-sm">
              <p className="font-semibold text-base">GNU Guix – Outreachy Intern</p>
              <p className="text-gray-600">May 2018 – July 2018</p>
              <p className="mt-1">Enhanced Guix CLI with colored logs and improved build experience.</p>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-6 inline-block bg-black text-white px-4 py-1 rounded">
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-gray-800 justify-items-center">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>Hibernate</span>
              <span>J2EE</span>
              <span>JPA</span>
              <span>JSP</span>
              <span>JDBC</span>
              <span>React</span>
              <span>Redux</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
              <span>MongoDB</span>
              <span>MySQL</span>
              <span>PostgreSQL</span>
              <span>Oracle DB</span>
              <span>Azure</span>
              <span>AWS</span>
              <span>GCP</span>
              <span>Git</span>
              <span>Scrum</span>
              <span>Agile</span>
              <span>System Design</span>
              <span>DSA</span>
            </div>
          </div>

          {/* Resume Download */}
          <div className="text-center">
            <a
              href="/Sahithi_Yarlaggada_Resume.pdf"
              download
              className="inline-block px-6 py-2 border border-black hover:bg-black hover:text-white rounded text-sm"
            >
              Download Resume (PDF)
            </a>
          </div>
        </div>

        {/* Right column – Profile Picture */}
        <div className="flex justify-center items-start mt-6 md:mt-0">
          <img
            src={profilePic}
            alt="Sahithi"
            className="rounded-full w-48 h-48 object-cover grayscale shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
