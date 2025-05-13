
import React from "react";

export default function StrongerMindsHome() {
  return (
    <div className="bg-white text-black min-h-screen font-sans">
      <header className="flex flex-col items-center py-12 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">
          <span className="text-6xl italic font-extrabold">S</span>tronger <span className="text-black font-extrabold">M</span>inds
        </h1>
        <p className="text-xl max-w-2xl">
          Corporate mentorship reimagined. A platform connecting professionals with mentors to grow, lead, and thrive in today’s workplace.
        </p>
      </header>

      <section className="py-16 px-6 bg-gray-100 text-black text-center">
        <h2 className="text-3xl font-semibold mb-8">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div>
            <h3 className="font-bold text-xl">1. Sign Up</h3>
            <p>Create your mentee or mentor profile.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl">2. Browse Mentors</h3>
            <p>Explore professionals by expertise, industry, and ratings.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl">3. Connect</h3>
            <p>Schedule sessions, chat securely, and track growth.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl">4. Thrive</h3>
            <p>Reach new heights with expert support and feedback.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Coming Soon: The Stronger Minds App</h2>
        <p className="mb-6 max-w-xl mx-auto">
          A mentorship platform designed like TaskRabbit — intuitive, effective, and built for your career. Get notified when we launch.
        </p>
        <form className="max-w-sm mx-auto">
          <input type="email" placeholder="Your email" className="p-2 border border-gray-400 w-full mb-2" />
          <button type="submit" className="bg-black text-white py-2 px-4 w-full">Notify Me</button>
        </form>
      </section>

      <section className="py-12 px-6 bg-gray-100 text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>Email us at <a href="mailto:info@strongerminds.ca" className="underline">info@strongerminds.ca</a></p>
      </section>

      <footer className="py-6 text-center text-sm border-t border-gray-300">
        &copy; {new Date().getFullYear()} Stronger Minds. All rights reserved.
      </footer>
    </div>
  );
}
