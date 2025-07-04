import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";

const features = [
  {
    icon: `/icons/fast.svg`,
    title: `Rapid Deployment`,
    description: `Most projects launch in just 1-2 weeks.`,
  },
  {
    icon: `/icons/design.svg`,
    title: `Cutting-Edge Design & Dev`,
    description: `We sculpt and code your site using the latest tech.`,
  },
  {
    icon: `/icons/scalable.svg`,
    title: `Future-Proof Scalability & Care`,
    description: `All creations grow with you, seamlessly maintained.`,
  },
  {
    icon: `/icons/team.svg`,
    title: `Elite Expert Team`,
    description: `Our dedicated specialists are ready to assist you.`,
  },
  {
    icon: `/icons/safe.svg`,
    title: `Fortified Security`,
    description: `Robust practices safeguard your invaluable data.`,
  },
  {
    icon: `/icons/analytics.svg`,
    title: `Insightful Performance Tracking`,
    description: `Monitor your journey with integrated analytics.`,
  },
  {
    icon: `/icons/flexible.svg`,
    title: `Dynamic, Intuitive Solutions`,
    description: `Adaptable websites that are powerful yet manageable.`,
  },
  {
    icon: `/icons/support.svg`,
    title: `Always-On Client Support`,
    description: `Benefit from 24/7 dedicated support for our clients.`,
  },
  {
    icon: `/icons/money.svg`,
    title: `Transparent & Value-Driven Pricing`,
    description: `Exceptional quality at client-friendly rates.`,
  },
];

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div
      className={`mt-20 py-10 md:py-20 rounded-[40px] bg-zinc-900 flex flex-col items-center justify-center relative w-full px-6 md:px-0`}
    >
      {" "}
      {/* Changed bg-neutral-900 to bg-zinc-900 */}
      <h2
        className={`relative flex-col z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 via-white to-white flex items-center gap-2 `}
      >
        Our Commitment to Excellence.
        <p
          className={`md:text-center mx-auto text-xl md:text-2xl text-gray-200`}
        >
          We pledge unparalleled quality, delivered with industry-leading speed.
        </p>
      </h2>
      {/* Features Grid */}
      <div
        className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 z-40 xl:w-4/5 2xl:w-[68%] mx-auto `}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className={`
              flex flex-col p-10 bg-neutral-800 rounded-xl cursor-pointer
              transition-all duration-300 ease-in-out
              hover:scale-[1.02] hover:bg-neutral-700 hover:border hover:border-neutral-600
            `}
          >
            <button
              className={`w-16 p-4 animate-shine flex items-center justify-center rounded-md bg-gradient-to-br from-neutral-700 to-neutral-800 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50`}
            >
              <Image
                src={feature.icon}
                width={32}
                height={32}
                alt={`icon for ${feature.title}`}
                className={`w-8 h-8`}
              />
            </button>

            <h3 className={`text-xl font-bold mt-4 text-white`}>
              {feature.title}
            </h3>
            <p className={`text-gray-200`}>{feature.description}</p>
          </div>
        ))}
      </div>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
