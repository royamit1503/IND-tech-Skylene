"use client";

import { AnimatedBeamMultipleOutputDemo } from "@/components/demos/animated-beam-demo";
import { AnimatedShinyTextDemo } from "@/components/demos/animated-shiny-text-demo";
import BoxRevealDemo from "@/components/demos/box-reveal-demo";
import { CoverDemo } from "@/components/demos/cover-demo";
import { ScrollBasedVelocityDemo } from "@/components/demos/scroll-based-velocity-demo";
import { WordPullUpDemo } from "@/components/demos/word-pull-up-demo";
import BoxReveal from "@/components/magicui/box-reveal";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import Image from "next/image";
import Link from "next/link";
import { PiCheckBold } from "react-icons/pi";
import { Link as ScrollLink, Element } from "react-scroll";
import { IconStarFilled } from "@tabler/icons-react";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/demos/shooting-stars-demo";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import { useEffect, useState } from "react";

const WhatsAppButton = () => {
  const phoneNumber = "919508260355";
  const message =
    "Hello, I'm interested in your services! plss provide me more details about it";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.515 5.392 1.521 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.612-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
    </a>
  );
};

const services = [
  {
    icon: "/images/s_6.png",
    title: "Website Design & Development",
    description:
      "We build beautiful, fast, and mobile-friendly websites that help your business stand out online.",
  },
  {
    icon: "/images/s_1.png",
    title: "Search Engine Optimization (SEO)",
    description:
      "Get found on Google and bring more people to your website with our smart SEO solutions.",
  },
  {
    icon: "/images/s_5.png",
    title: "Content Creation",
    description:
      "We create content — blogs, visuals & social posts — that truly speak to your audience.",
  },
  {
    icon: "/images/s_3.png",
    title: "Social Media Marketing",
    description:
      "Let’s turn your followers into loyal customers with engaging posts and smart social campaigns.",
  },
  {
    icon: "/images/s_4.png",
    title: "Email Marketing",
    description:
      "Send emails people love opening — and watch engagement and sales grow.",
  },
  {
    icon: "/images/s_2.png",
    title: "PPC Advertising",
    description:
      "Reach the right people fast and make every click count with our targeted ad strategies.",
  },
];

function NumberTicker({ value }: { value: number }) {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const duration = 2000; // Animation duration in ms
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuad(progress);
      const newValue = Math.floor(easedProgress * value);

      setCurrentValue(newValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  const easeOutQuad = (t: number) => {
    return t * (2 - t);
  };

  return <span>{currentValue}</span>;
}

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* WhatsApp Button */}
      <WhatsAppButton />

      {/* Background Image */}
      <div className="fixed inset-0 -z-50">
        <Image
          src="/images/backfull.png"
          alt="Background"
          fill
          className="object-cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Navbar */}
      <Element
        name="top"
        className="sticky top-3 z-50 mx-4 md:mx-auto xl:w-4/5 2xl:w-[68%] 
    bg-blue-50/70 backdrop-blur-sm border border-blue-100 shadow-lg 
    rounded-xl transition-all duration-300"
      >
        <div className="flex items-center justify-between px-4 md:px-8 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/logo.webp"
              alt="Logo"
              width={1000}
              height={1000}
              className="w-24"
            />
          </Link>

          {/* Center Navigation */}
          <div className="hidden md:flex gap-x-10 text-gray-700 font-medium text-[15px]">
            <Link
              href="/showcase"
              className="hover:text-blue-600 hover:scale-105 transition-all duration-300"
            >
              Projects
            </Link>
            <ScrollLink
              to="services"
              smooth={true}
              duration={500}
              className="hover:text-blue-600 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              What We Do
            </ScrollLink>
            <ScrollLink
              to="process"
              smooth={true}
              duration={500}
              className="hover:text-blue-600 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              Our Approach
            </ScrollLink>
            <ScrollLink
              to="guarentees"
              smooth={true}
              duration={500}
              className="hover:text-blue-600 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              Our Promise
            </ScrollLink>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-x-4">
            <a href="tel:9508260355" className="hidden lg:flex">
              <button className="text-sm font-medium text-gray-700 hover:text-blue-600 transition duration-300">
                9508260355
              </button>
            </a>

            <Link
              href="/meeting"
              className="py-2 px-4 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 
        rounded-md shadow-sm hover:shadow-md transition-all duration-300"
            >
              Talk With Us
            </Link>
          </div>
        </div>
      </Element>

      <main className="md:pb-10">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14">
          <AnimatedShinyTextDemo />

          <h1>
            <CoverDemo />
          </h1>
          <p
            className="md:text-center
           text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-500"
          >
            Share your vision — we’ll shape it into a plan with pricing in
            minutes.
          </p>

          <div
            className="
                 flex 
                  md:justify-center 
                  items-center 
                  gap-x-4
                   "
          >
            <Link
              href="/meeting"
              className="py-3 
            px-10
            md:px-16 md:text-xl hover:bg-[#abcbff]  rounded-[6px] border-2  border-black  dark:border-white   bg-[#121212]   text-white   transition   duration-200   hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
            >
              Connect & Create
            </Link>
            <Link
              href={"/showcase"}
              className="
              bg-white
   py-3 
   px-10
   md:px-16
      md:text-xl
        border-4
        border-black
        rounded-[6px]
        hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
            >
              Digital Journey
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-left md:justify-items-center md:mx-auto mt-10 md:mt-16">
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Design
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Development
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Marketing
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Strategy
              </p>
            </BoxReveal>
          </div>

          <div className="max-w-6xl mx-auto px-4">
            <div className="md:flex items-center justify-center gap-y-4 my-10 gap-x-28">
              <div className="md:w-2/5 text-center md:text-left">
                <h1 className="text-2xl font-medium text-gray-600 md:w-4/5 mx-auto md:mx-0 transition-all duration-300 hover:text-blue-500 hover:scale-105">
                  Helping ambitious brands scale smarter, faster
                </h1>

                <div className="flex items-center justify-center md:justify-start gap-4 my-6 group">
                  <div className="text-4xl font-bold text-blue-500 transition-all duration-300 group-hover:text-blue-600 group-hover:scale-110">
                    <NumberTicker value={10} />+
                  </div>
                  <div className="text-gray-500 transition-all duration-300 group-hover:text-gray-700 group-hover:font-medium">
                    Happy Clients
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Element name="services">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto ">
          <h1>
            <WordPullUpDemo />
          </h1>
          <p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
            Designed with one goal — making your business stand out.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col justify-between h-full space-y-4 text-center bg-gray-100 p-4 cursor-pointer hover:scale-105 transition-transform rounded-md"
              >
                <Image
                  src={service.icon}
                  width={10000}
                  height={10000}
                  className="object-contain bg-gray-100 p-4 w-full h-40 rounded-md"
                  alt="image"
                />
                <h1 className="text-xl font-medium">{service.title}</h1>
                <p className="text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Element>

      <section className="py-20">
        <ScrollBasedVelocityDemo />
      </section>

      <Element name="process">
        <main className="md:px-0 mx-6 md:mx-auto">
          <h1 className="text-3xl md:text-5xl md:text-center font-medium flex items-center gap-x-2 mx-auto justify-center">
            From{" "}
            <span className="text-blue-500 flex gap-x-1 items-center">
              {" "}
              <Image
                src={"/icons/squiggle.svg"}
                width={10000}
                height={10000}
                className="w-6"
                alt="image"
              />
              Vision to
              <Image
                src={"/icons/star.svg"}
                width={10000}
                height={10000}
                className="w-6 mb-8"
                alt="image"
              />
            </span>{" "}
            Reality
          </h1>

          <p
            className="text-center 
          py-4 md:w-1/2 mx-auto 
          text-xl md:text-2xl text-gray-500"
          >
            Everything we do is focused on making your brand more visible.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 mx-auto">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <AnimatedBeamMultipleOutputDemo />
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 md:ml-0">
              <BoxRevealDemo />
            </div>
          </div>
        </main>
      </Element>

      <section>
        <main className="md:flex items-center justify-center space-y-6 md:space-y-0 md:gap-x-20 xl:w-4/5 2xl:w-[68%] mx-auto px-6 md:px-0">
          <Image
            src="/Images/Amit.jpg"
            width={500}
            height={500}
            className="md:w-1/3 rounded-md"
            alt="Amit Kumar Ray"
          />
          <div className="flex flex-col gap-y-5 md:w-1/2">
            <h1 className="text-lg md:text-2xl ">
              &quot;I am Amit Kumar Ray, a BCA student at Vestor College, Patna.
              I interned at UPTOSKILLS, working on real-world projects that
              sharpened my skills. Now, as a founder, I blend my academic
              learning and hands-on experience to build impactful digital
              solutions.. &quot;
            </h1>
            <div className="flex items-center gap-x-1">
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
            </div>

            <span className="text-xl font-medium">
              Amit Kumar Ray <br />
              Founder, skylene digital services
            </span>
          </div>
        </main>
      </section>

      <Element name="guarentees">
        <ShootingStarsAndStarsBackgroundDemo />
      </Element>

      <section className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <LetsMakeThingsHappenSection />
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6 md:px-0 xl:w-4/5 2xl:w-[68%] mx-auto">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Form Illustration */}
            <div className="md:w-1/2 bg-blue-50 p-10 flex items-center justify-center">
              <Image
                src="/images/contact-form.png"
                width={500}
                height={500}
                alt="Contact us"
                className="w-full h-auto max-w-md"
              />
            </div>

            {/* Form */}
            <div className="md:w-1/2 p-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form and we&apos;ll get back to you soon
              </p>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                  Thank you! Your message has been sent successfully. We&apos;ll
                  contact you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
                  There was an error submitting your form. Please try again or
                  contact us directly.
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-lg border border-blue-100"
              >
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">
                  Let &apos; s Build Something Great Together 🚀
                </h3>

                {/* Full Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition placeholder-gray-400"
                    placeholder="e.g. Amit Roy"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition placeholder-gray-400"
                    placeholder="e.g. you@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition placeholder-gray-400"
                    placeholder="+91 9876543210"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition placeholder-gray-400"
                    placeholder="Tell us a bit about your project, idea or goal..."
                  ></textarea>
                </div>

                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300 transform hover:scale-[1.02] shadow-md ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 md:px-0 relative overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/footer.jpg"
            alt="Footer background"
            fill
            className="object-cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        </div>

        <div className="xl:w-4/5 2xl:w-[68%] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
            {/* Logo and contact info */}
            <div className="flex flex-col gap-y-4">
              <div className="relative w-28 h-28 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 p-2 group hover:bg-white/20 transition-all duration-300">
                <Image
                  src={"/logo/logo.webp"}
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  alt="Company Logo"
                />
              </div>
              <p className="text-white/90">
                Driving Growth. Delivering Impact. Powered by Skylene
              </p>

              {/* Social Media Icons */}
              <div className="flex gap-4 mt-2">
                {[
                  {
                    name: "Instagram",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    ),
                    url: "https://www.instagram.com/skylene_official?igsh=bzhqaWhhb2psZHRj",
                  },
                  {
                    name: "Facebook",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    ),
                    url: "https://www.facebook.com/share/1FGMhqeT7c/",
                  },
                  {
                    name: "LinkedIn",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    ),
                    url: "https://www.linkedin.com/in/amit-kumar-rayhw?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                  },
                  {
                    name: "Email",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    ),
                    url: "mailto:amitkumar9304730@gmail.com",
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <span className="group-hover:text-blue-300 transition-colors duration-300">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="block py-1.5 text-white/80 hover:text-blue-300 hover:pl-2 transition-all duration-300 border-l-2 border-transparent hover:border-blue-400"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/showcase"
                    className="block py-1.5 text-white/80 hover:text-blue-300 hover:pl-2 transition-all duration-300 border-l-2 border-transparent hover:border-blue-400"
                  >
                    Showcase
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById("services");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="block py-1.5 text-white/80 hover:text-blue-300 hover:pl-2 transition-all duration-300 border-l-2 border-transparent hover:border-blue-400 w-full text-left"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById("process");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="block py-1.5 text-white/80 hover:text-blue-300 hover:pl-2 transition-all duration-300 border-l-2 border-transparent hover:border-blue-400 w-full text-left"
                  >
                    Process
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">
                Services
              </h3>
              <ul className="space-y-3">
                {[
                  "Web Design + Development",
                  "SEO",
                  "Content Creation",
                  "Social Media Marketing",
                ].map((service) => (
                  <li key={service}>
                    <span className="block py-1.5 text-white/80 hover:text-blue-300 hover:pl-2 transition-all duration-300 border-l-2 border-transparent hover:border-blue-400 cursor-default">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">
                Contact Us
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="tel:9508260355"
                    className="flex items-center gap-3 py-1.5 text-white/80 hover:text-blue-300 hover:pl-2 transition-all duration-300 border-l-2 border-transparent hover:border-blue-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span>9508260355</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:amitkumar9304730@gmail.com"
                    className="flex items-center gap-3 py-1.5 text-white/80 hover:text-blue-300 hover:pl-2 transition-all duration-300 border-l-2 border-transparent hover:border-blue-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <span>amitkumar9304730@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-white/70">
            <p className="text-sm">© 2025 All Rights Reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-sm hover:text-blue-300 hover:underline underline-offset-4 decoration-white/30 hover:decoration-blue-300 transition-all duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm hover:text-blue-300 hover:underline underline-offset-4 decoration-white/30 hover:decoration-blue-300 transition-all duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
