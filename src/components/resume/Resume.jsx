import React from "react";
import { motion } from "framer-motion";
import { ScrollArea } from "../ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

import { FaHtml5, FaCss3, FaJs, FaNodeJs } from "react-icons/fa6";
import {
  SiTailwindcss,
  SiReact,
  SiRedux,
  SiMongodb,
  SiFirebase,
  SiPhp,
} from "react-icons/si";

function Resume() {
  const about = {
    title: "About me",
    description: `Enthusiastic and driven Computer Science student at Cairo University, with a strong background in front-end development, artificial intelligence, cybersecurity, I have developed and maintained web applications using cutting-edge technologies , 
I excel in problem-solving, project planning, and working collaboratively in agile environments,I am eager to contribute to innovative projects and further develop my skills in a dynamic and challenging setting. My goal is to leverage my technical expertise and passion for technology to create impactful solutions and grow as a software developer.`,
    info: [
      {
        fieldName: "Name",
        value: "Mahmoud Desoki",
      },
      {
        fieldName: "University",
        value: "Cairo Faculty of Science",
      },
      {
        fieldName: "Experience",
        value: "1+ years",
      },
      {
        fieldName: "Email",
        value: "mahoud.magdy11198@gmail.com",
      },
      {
        fieldName: "Nationality",
        value: "Egyptian",
      },
      {
        fieldName: "Languages",
        value: "Arabic , English",
      },
    ],
  };

  const experience = {
    title: "My experience",
    description: `Passionate and skilled front-end developer with hands-on experience in building responsive and dynamic web applications, With a strong focus on creating user-friendly interfaces and seamless user experiences, Experienced in collaborating with cross-functional teams and contributing to projects that leverage cutting-edge technologies,
     Eager to apply my technical expertise and creative problem-solving skills to develop innovative solutions in a dynamic and fast-paced environment.`,
    info: [
      {
        name: "Black Horse",
        position: "Full-Stack Developer Intern",
        duration: "summer 2024",
      },
      {
        name: "Kemet AI company",
        position: "Front-End Developer Intern",
        duration: "summer 2023",
      },
      {
        name: "E-commerce Site",
        position: "Freelance",
        duration: "summer 2022",
      },
      {
        name: "Movie-Details Site",
        position: "Freelance",
        duration: "summer 2022",
      },
    ],
  };

  const education = {
    title: "My education",
    description: ` Computer Science student at Cairo University, Passionate and skilled front-end developer with hands-on experience in building responsive and dynamic web applications, With a strong focus on creating user-friendly interfaces and seamless user experiences, Experienced in collaborating with cross-functional teams and contributing to projects that leverage cutting-edge technologies,
     Eager to apply my technical expertise and creative problem-solving skills `,
    info: [
      {
        name: "Black Horse",
        degree: "Full-Stack Developer Course",
        duration: "summer 2024",
      },
      {
        name: "Web Development",
        degree: "MERN Stack Course",
        duration: "summer 2022",
      },
      {
        name: "Mobile Development",
        degree: "Android Development Course",
        duration: "summer 2020",
      },
      {
        name: "java Development",
        degree: "Java Fundamentals Course",
        duration: "2019",
      },
    ],
  };

  const skills = {
    title: "My Skills",
    description: `Passionate and skilled front-end developer with hands-on experience in building responsive and dynamic web applications using React, Redux, and JavaScript. Proficient in HTML, CSS, and modern JavaScript frameworks, with a strong focus on creating user-friendly interfaces and seamless user experiences. Experienced in collaborating with cross-functional teams and contributing to projects that leverage cutting-edge technologies. Eager to apply my technical expertise and creative problem-solving skills to develop innovative solutions in a dynamic and fast-paced environment.`,
    info: [
      {
        icon: <FaHtml5 />,
        name: "html5",
      },
      {
        icon: <FaCss3 />,
        name: "css3",
      },
      {
        icon: <FaJs />,
        name: "javascript",
      },
      {
        icon: <FaNodeJs />,
        name: "nodejs",
      },
      {
        icon: <SiReact />,
        name: "react",
      },
      {
        icon: <SiRedux />,
        name: "redux",
      },
      {
        icon: <SiMongodb />,
        name: "mongodb",
      },
      {
        icon: <SiFirebase />,
        name: "firebase",
      },
      {
        icon: <SiTailwindcss />,
        name: "tailwind",
      },
      {
        icon: <SiPhp />,
        name: "php",
      },
    ],
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto">
          <Tabs
            defaultValue="about"
            className="flex flex-col xl:flex-row gap-[60px]"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="about">About me</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
            </TabsList>

            <div className="min-h-[70vh] w-full">
              <TabsContent
                value="about"
                className="w-full text-center xl:text-left"
              >
                <div className="flex flex-col gap-[30px]">
                  <h3 className="h3 font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/50 mx-auto xl:mx-0">
                    {about.description}
                  </p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((e, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/50">{e.fieldName}</span>
                        <span className="text-xl">{e.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="education" className="w-full">
                <div className="flex  flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="h3 font-bold">{education.title}</h3>
                  <p className="max-w-[600px] text-white/60  mx-auto xl:mx-0">
                    {education.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.info.map((e, index) => (
                        <li
                          key={index}
                          className="bg-zinc-800  h-[184px] py-6  px-10 rounded-xl  flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <h3 className="max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {e.degree}
                          </h3>
                          <p>{e.duration}</p>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-blue-500"></span>
                            <p className="text-white/50">{e.name}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value="experience" className="w-full">
                <div className="flex  flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="h3 font-bold">{experience.title}</h3>
                  <p className="max-w-[600px] text-white/60  mx-auto xl:mx-0">
                    {experience.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.info.map((e, index) => (
                        <li
                          key={index}
                          className="bg-zinc-800  h-[184px] py-6  px-10 rounded-xl  flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <h3 className="max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {e.position}
                          </h3>
                          <p>{e.duration}</p>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-blue-500"></span>
                            <p className="text-white/50">{e.name}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value="skills" className="w-full">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="h3 font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/50 mx-auto xl:mx-0">
                      {skills.description}
                    </p>
                  </div>
                  <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                    {skills.info.map((e, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-zinc-800 rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-blue-500 transition-all duration-300">
                                {e.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{e.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </>
  );
}

export default Resume;
