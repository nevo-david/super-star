import Image from "next/image";
import { mainPageDetails } from "@github20k/helpers/main.page.details";
import Link from "next/link";
import NewsletterComponent from "@github20k/components/blog/newsletter.component";

const HeroComponent = () => {
  return (
    <div className="relative lg:h-screen bg-hero-sm bg-cover bg-center sm:bg-hero-lg sm:bg-cover xl:bg-contain sm:bg-[-42rem] lg:bg-center bg-no-repeat text-white pb-80 lg:pb-0">
      <div className="max-w-base mx-auto h-full lg:flex items-end justify-between px-6 pb-[3%] pt-[40%] sm:pt-[25%] md:pt-[20%] lg:pt-[12%]">
        <div className="flex flex-col min-h-full text-center lg:text-left">
          <h1 className="text-brand-white-primary font-bold text-5xl !leading-[1.1] md:text-7xl xl:text-8xl md:pl-5">
            {mainPageDetails.header.title}
          </h1>

          <p className="max-w-xl lg:max-w-2xl mx-auto lg:ml-0 text-brand-white-light font-medium text-lg leading-8 md:text-xl md:leading-snug xl:text-2xl lg:mt-auto pt-6 md:pt-12 px-4">
            {mainPageDetails.header.description}
          </p>

          <div className="flex max-w-xl lg:max-w-2xl mx-auto lg:ml-0 text-brand-white-light font-medium text-lg leading-8 md:text-xl md:leading-snug xl:text-2xl pt-10 px-4">
            <NewsletterComponent showText={false} hideBottom={true} />
          </div>
        </div>
        <div className="max-w-md xl:max-w-lg mx-auto pb-12 pt-40 md:pt-32">
          <div className=" bg-brand-main/70 flex items-start gap-6 rounded-lg border border-brand-yellow p-5 xl:px-8 lg:pt-9 md:pb-10">
            <div className="relative w-16 h-16 xl:w-28 xl:h-28 rounded-full shrink-0 ">
              <Link href={mainPageDetails.header.github} target="_blank">
                <Image
                  className="object-contain"
                  src="/assets/david.png"
                  fill
                  alt={mainPageDetails.header.myName}
                />
              </Link>
            </div>
            <div className="flex-1 pt-1">
              <p className="font-home-baukasten text-brand-white-primary capitalize text-lg xl:text-2xl leading-none">
                <Link href={mainPageDetails.header.github} target="_blank">
                  {mainPageDetails.header.myName}{" "}
                  <Image
                    className="inline-block mb-1"
                    src="/github.svg"
                    width="22"
                    height="22"
                    alt="GitHub"
                  />
                </Link>
              </p>
              <p className="text-sm md:text-base xl:text-lg xl:leading-6 font-medium text-brand-white-medium mt-3">
                <Link href={mainPageDetails.header.github} target="_blank">
                  {mainPageDetails.header.profileDescription}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
