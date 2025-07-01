import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative py-12 px-6 md:px-0 border-t border-gray-200 overflow-hidden">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: "url('/images/proback.jpg')" }} // Ensure this image path is correct
      ></div>
      {/* Dark overlay for better text readability on light images */}
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Increased opacity slightly for more contrast */}

      <div className="xl:w-4/5 2xl:w-[68%] mx-auto relative z-10 text-white">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
          {/* Links section - 3 columns */}
          <div className="grid grid-cols-3 gap-8 w-full md:w-auto">
            <div className="space-y-3">
              <h3 className="font-bold text-lg mb-3 text-indigo-300">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="relative inline-block hover:text-indigo-100 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-indigo-100 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="relative inline-block hover:text-indigo-100 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-indigo-100 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="relative inline-block hover:text-indigo-100 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-indigo-100 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-lg mb-3 text-indigo-300">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="relative inline-block hover:text-indigo-100 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-indigo-100 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="relative inline-block hover:text-indigo-100 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-indigo-100 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="relative inline-block hover:text-indigo-100 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-indigo-100 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-lg mb-3 text-indigo-300">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="relative inline-block hover:text-indigo-100 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-indigo-100 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="relative inline-block hover:text-indigo-100 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-indigo-100 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="relative inline-block hover:text-indigo-100 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-indigo-100 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact info and founder section */}
          <div className="space-y-6 min-w-[250px]">
            {/* Contact info */}
            <div className="space-y-2">
              <p className="text-lg font-medium text-white hover:text-indigo-100 transition-colors duration-300 cursor-pointer">
                +91 95082 60355
              </p>
              <p className="text-lg font-medium text-white hover:text-indigo-100 transition-colors duration-300 cursor-pointer">
                skylene.official.services@gmail.com
              </p>
            </div>

            {/* Founder section */}
            <div className="flex items-center gap-4 group">
              <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-indigo-300 group-hover:border-indigo-100 transition-colors duration-300">
                <Image
                  src="/logo/Amit.jpg"
                  alt="Founder - Amit Kumar"
                  width={64}
                  height={64}
                  className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <p className="font-bold text-white group-hover:text-indigo-100 transition-colors duration-300">
                  Amit Roy
                </p>
                <p className="text-sm text-indigo-200 font-medium group-hover:text-indigo-50 transition-colors duration-300">
                  Founder & CEO
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="mt-12 border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm font-medium text-gray-300">
              © {new Date().getFullYear()} Skylene. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="relative inline-block text-gray-300 hover:text-indigo-100 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-indigo-100 after:transition-all after:duration-300 hover:after:w-full"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="relative inline-block text-gray-300 hover:text-indigo-100 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-indigo-100 after:transition-all after:duration-300 hover:after:w-full"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="relative inline-block text-gray-300 hover:text-indigo-100 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-indigo-100 after:transition-all after:duration-300 hover:after:w-full"
              >
                Cookie Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;