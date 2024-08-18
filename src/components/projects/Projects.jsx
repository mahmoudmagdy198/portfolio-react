import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaGithub } from "react-icons/fa6";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Link } from "react-router-dom";
import SliderButtons from "../ui/SliderButtons";

function Projects() {
  const projects = [
    {
      num: "01",
      category: "frontend",
      title: "PJ 1",
      decription: "Movies-react searching movies and know what's new",
      stack: [{ name: "react" }, { name: "redux" }, { name: "bootstrap" }],
      image: "",
      github: "",
    },
    {
      num: "02",
      category: "frontend",
      title: "PJ 2",
      decription: "NetFlix clone",
      stack: [{ name: "html" }, { name: "css" }],
      image: "",
      github: "",
    },
  ];

  const handleSlide = (swiper) => {
    const current = swiper.activeIndex;
    setProject(projects[current]);
  };

  const [project, setProject] = useState(projects[0]);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
        }}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                <div className="text-8xl leading-none font-extrabold text-transparent font-outline">
                  {project.num}
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-blue-500 transition-all duration-500 capitalize">
                  {project.category} project
                </h2>
                <p className="text-white/50">{project.decription}</p>
                <ul className="flex gap-5">
                  {project.stack.map((e, index) => (
                    <li key={index} className="text-xl text-blue-500">
                      {e.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  ))}
                </ul>
                <div className="border border-gray-700/50"></div>
                <div>
                  <Link to={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-zinc-700 flex items-center justify-center group">
                          <FaGithub className="text-3xl text-white group-hover:text-blue-500" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[50%]">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="xl:h-[520px] mb-12"
                onSlideChange={handleSlide}
              >
                {projects.map((e, index) => (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[480px] relative group flex justify-center items-center bg-white/50">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <img src="" alt="" className="object-cover" />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <SliderButtons
                  containerStyle="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none xl:mt-5"
                  btnStyle="bg-blue-500 text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center"
                />
              </Swiper>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Projects;
