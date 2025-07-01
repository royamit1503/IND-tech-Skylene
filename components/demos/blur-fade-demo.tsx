import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import Link from "next/link";

const works = [
  {
    background: "bg-gray-200",
    imageUrl: "/images/business1.webp",
    title: "Ecommerse Website",
    link: "https://curious-sawine-79d9eb.netlify.app/",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/business2.webp",
    title: "University web design",
    link: "https://amitroydemo.netlify.app/",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/business3.webp",
    title: "Animal NGO service",
    link: "https://rainbow-muffin-cb43c7.netlify.app/",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/business4.webp.png",
    title: "Skylene Digital Services",
    link: "http://localhost:3000/",
  },


];

export function BlurFadeDemo() {
  return (
    <section id="photos">
      <div className="grid md:grid-cols-2 gap-8 mt-10 justify-items-center">
        {works.map(({ imageUrl, title, link }, idx) => (
          <BlurFade
            key={title}
            delay={0.25 + idx * 0.05}
            inView
            className={`rounded-lg ${works[idx].background} p-4`}
          >
            <Link href={link} target="_blank" rel="noreferrer">
              <Image
                height={10000}
                width={10000}
                className="
                h-5/6 w-full object-cover rounded-lg"
        
              
       
                src={imageUrl}
                alt={`Random stock image ${idx + 1}`}
              />
              <h3 className="text-lg font-semibold p-4">{title}</h3>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
