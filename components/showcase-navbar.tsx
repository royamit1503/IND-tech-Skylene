import Image from "next/image";
import Link from "next/link";

const ShowcaseNavbar = () => {
  return (
    <div
      className="
      overflow-hidden
      top-5
      sticky
      md:mx-auto
      transform 
      z-50
      xl:w-4/5 
      2xl:w-[68%]
      flex 
      items-center
      justify-between
      py-3
      px-6
      md:px-8
      mx-6
      shadow-md
      rounded-lg
      border border-gray-200
      bg-amber-50 bg-opacity-70
      backdrop-blur-sm
      "
    >
      <Link href="/" className="hover:scale-105 transition-transform duration-200">
        <Image
          src="/logo/logo.webp"
          alt="Bird Logo"
          width={1000}
          height={1000}
          className="w-28 hover:opacity-90 transition-opacity"
        />
      </Link>

      <div className="absolute left-1/2 transform -translate-x-1/2 w-max">
        <div className="hidden md:flex gap-x-8 2xl:gap-x-10 items-center text-gray-800 font-medium text-base">
          <Link
            href="/showcase"
            className="
            hover:text-amber-700
            transition-colors
            duration-200
            relative
            group
          "
          >
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            href="/" 
            className="hover:text-amber-700 transition-colors duration-200 relative group"
          >
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            href="/" 
            className="hover:text-amber-700 transition-colors duration-200 relative group"
          >
            Process
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            href="/" 
            className="hover:text-amber-700 transition-colors duration-200 relative group whitespace-nowrap"
          >
            Guarantees
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-x-4">
        <a href="tel:9508260355" className="hidden xl:flex items-center">
          <button className="px-3 py-1 rounded-md flex items-center gap-x-2 hover:bg-amber-100 transition-colors duration-200 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            9508260355
          </button>
        </a>

        <Link
          href={"/meeting"}
          className="
          py-2 
          px-5
          text-sm
          rounded-md
          border border-amber-700
          bg-gradient-to-r from-amber-600 to-amber-500
          text-white 
          font-medium
          transition-all
          duration-300
          hover:shadow
          hover:scale-[1.02]
          active:scale-95
          relative
          overflow-hidden
          group
          whitespace-nowrap
          "
        >
          <span className="relative z-10">Book a call</span>
          <span className="absolute inset-0 bg-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </Link>
      </div>
    </div>
  );
};

export default ShowcaseNavbar;