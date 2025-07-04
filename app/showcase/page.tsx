import { BlurFadeDemo } from "@/components/demos/blur-fade-demo";
import Footer from "@/components/footer";
import WordFadeIn from "@/components/magicui/word-fade-in";
import ShowcaseNavbar from "@/components/showcase-navbar";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import ContactForm from "@/components/ContactForm";
import { ArrowDown } from "lucide-react";

const Showcase = () => {
  return (
    <div
      className="overflow-hidden inset-0 -z-10 min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(/images/showcaseback.jpg)` }} // Path corrected for subdirectory
    >
      <div className="bg-white/80 backdrop-blur-sm">
        <ShowcaseNavbar />

        <section className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
          {/* Hero Section */}
          <div className="flex flex-col items-center justify-center relative min-h-[70vh] py-16">
            <WordFadeIn
              className="text-4xl pt-10 lg:text-6xl font-bold max-w-4xl mx-auto text-center z-20 leading-tight text-gray-800"
              words="Empowering Brands With Impactful Design And Code"
            />

            <p className="text-center text-lg md:text-xl mt-6 md:w-3/5 mx-auto text-gray-600">
              Explore how we transform ideas into stunning digital experiences
              that drive results and leave a lasting impression
            </p>

            <div className="animate-bounce mt-10">
              <ArrowDown className="w-8 h-8 text-blue-500" />
            </div>
          </div>

          {/* Projects Showcase */}
          <div className="py-24">
            <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-900">
              Our Creative Highlights
              <br />
              <span className="text-blue-600">Real Work With Real Results</span>
            </h2>
            <BlurFadeDemo />
          </div>

          {/* CTA Section */}
          <div className="py-20">
            <LetsMakeThingsHappenSection />
          </div>

          {/* Contact Form Section */}
          <div className="py-20">
            <h3 className="text-3xl font-semibold text-center text-gray-800 mb-10">
              Got An Idea Worth Building?
              <br />
              Share It With Us And Let us Turn It Into Reality
            </h3>
            <ContactForm />
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Showcase;
