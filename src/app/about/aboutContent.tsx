"use client"; // Client logic stays here

import { useState } from "react";
import Image from "next/image";
import PageHeader from "@/components/pageHeader";
import AboutDisplay from "./aboutDisplay";

const AboutContent = () => {
  const [activeTab, setActiveTab] = useState("story");

  const tabContent = {
    story: {
      text1:
        "Arena Software and Security Systems is a well organized web development & security services providing company located in Abu Dhabi, UAE, which is registered under Abu Dhabi chamber of commerce and Telecommunication Regulatory Authority (TRA).",
      text2:
        "Arena means a particular environment. It means right-sized function sets delivered at the right level of integration with the right interfaces. It means with low cost infrastructure we can bring innovative competitively priced solutions to the region and we are ready to respond quickly to meet your business challenges. As the name suggests we are primarily engaged in bringing best services and support.",
    },
    mission: {
      text1:
        "Our mission is to deliver reliable, innovative, and efficient security solutions that enhance safety, productivity, and convenience while creating a smarter and more secure environment for our clients.",
      text2:
        "Along with the diverse demand of our clients and the in-depth expertise of ARENA's eagled specialists, we take the pride to tailor the best technology practices and simple user-friendly security system taking into the account. This will help our clients to interact with work free and smart environment.",
    },
    vision: {
      text1:
        "Our motto is to become the pioneer, in providing innovative Technology and world class Security System.",
      text2:
        "A vision that re-boost our energy to be a key spot of the latest services convergence across UAE in the areas of access control system, Security System, Intercom System and IT Solutions. Ultimately to reach at the top of others and get the technologies to world class Security System in the region.",
    },
  };

  return (
    <main>
      <PageHeader
        description="Grow your skills with expert-led lessons designed to help you achieve your goals — anytime, anywhere."
        subTitle="About Us"
      >
        Who We Are
      </PageHeader>

      <AboutDisplay />

      <section className="py-16 lg:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* LEFT CONTENT */}
            <div className="flex flex-col space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1]">
                Empowering Learners to Build Skills for the Future
              </h1>

              {/* CUSTOM TABS */}
              <div className="flex items-center p-1.5 bg-gray-50 rounded-full w-fit border border-gray-100">
                {["story", "vision", "mission"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all capitalize ${
                      activeTab === tab
                        ? "bg-[#7C5CFC] text-white shadow-md"
                        : "text-gray-500 hover:text-slate-900"
                    }`}
                  >
                    {tab === "story" ? "Our Story" : tab}
                  </button>
                ))}
              </div>

              {/* TAB CONTENT TEXT */}
              <div className="space-y-6 max-w-xl">
                <p className="text-lg text-gray-600 leading-relaxed">
                  {tabContent[activeTab as keyof typeof tabContent].text1}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {tabContent[activeTab as keyof typeof tabContent].text2}
                </p>
              </div>
            </div>

            {/* RIGHT IMAGE GRID */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-[2.5rem]">
                  <Image
                    fill
                    src="/images/about/about.png"
                    alt="Laptop"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 md:h-56 w-full overflow-hidden rounded-[2.5rem]">
                  <Image
                    fill
                    src="/images/about/about.png"
                    alt="Student"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-12">
                <div className="relative h-48 md:h-56 w-full overflow-hidden rounded-[2.5rem]">
                  <Image
                    fill
                    src="/images/about/about.png"
                    alt="Typing"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-[2.5rem]">
                  <Image
                    fill
                    src="/images/about/about.png"
                    alt="Learning"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutContent;
