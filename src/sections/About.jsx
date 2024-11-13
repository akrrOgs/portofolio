import Globe from "react-globe.gl";
import Button from "../components/Button";
import { useState } from "react";

const About = () => {
  const [hasCopy, setHasCopy] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("abrahamrenzha64@gmail.com");

    setHasCopy(true);

    setTimeout(() => {
      setHasCopy(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <p className="grid-headtext">Hi, I'm Abraham</p>
            <p className="grid-subtext">
              I am a Fresh Graduate from Fajar University from the class of
              2020, majoring in Informatics Engineering, with a period of 1 year
              and 6 months I studied and developed my skills in frontend and
              backend development.
            </p>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in Javascript/Typescript with a focus on React and
                Next.Js ecosystems.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>

            <div>
              <p className="grid-headtext">
                I live in Indonesia in a city known as Makassar
              </p>
              <p className="grid-subtext">
                When I was still a student, I worked on several projects from
                home and did an internship at PT. Brilyan as IT Support.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">My passion for Coding</p>
              <p className="grid-subtext">
                I like solving problems and building things through code.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact Me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopy ? "/assets/tick.svg" : "/assets/copy.svg"}
                  alt="Copy"
                />
                <p className="lg:text-xl md:text-lg font-medium text-gray_gradient text-white">
                  abrahamrenzha64@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
