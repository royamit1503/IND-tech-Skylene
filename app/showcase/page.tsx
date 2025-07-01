import { BlurFadeDemo } from "@/components/demos/blur-fade-demo";
import Footer from "@/components/footer";
import WordFadeIn from "@/components/magicui/word-fade-in";
import ShowcaseNavbar from "@/components/showcase-navbar";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import { ArrowDown } from "lucide-react";

const Showcase = () => {
  return (
    <div className="overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <ShowcaseNavbar />
      
      <section className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center relative min-h-[60vh]">
          <WordFadeIn
            className="text-4xl pt-10 lg:text-6xl font-bold max-w-4xl mx-auto text-center z-20 leading-tight"
            words="Design & Code That Helps Your Business Grow"
          />
          
          <p className="text-center text-lg md:text-xl my-8 md:w-3/5 mx-auto text-gray-600">
            Have a look at some of our recent projects that delivered real results.
          </p>

          <div className="animate-bounce mt-12">
            <ArrowDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>

        {/* Projects Showcase */}
        <div className="py-20">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
            Featured <span className="text-amber-600">Projects</span>
          </h2>
          <BlurFadeDemo />
        </div>

        {/* CTA Section */}
        <div className="py-20">
          <LetsMakeThingsHappenSection />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Showcase;