import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa6";
import Socials from "../socials/Socials";
import Photo from "../socials/Photo";
import Stats from "../socials/Stats";

function Home() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleteing] = useState(false);
  const toRotate = ["Web Developer", "Front-End Developer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleteing(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleteing(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <>
      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row justify-between items-center xl:pt-8 xl:pb-24">
            {/** text */}

            <div className="text-center xl:text-left order-2 xl:order-none">
              <h1 className="h1 mb-6">
                Hi! I'm <br />{" "}
                <span className="text-blue-500">Mahmoud Desoki</span>
              </h1>

              <h2 className="h2 mb-5">
                {" "}
                {text}
                <motion.span
                  intial={{ opacity: 1 }}
                  animate={{
                    opacity: 0,
                    transition: {
                      duration: 0.4,
                      ease: "linear",
                      repeat: Infinity,
                      repeatDelay: 1,
                    },
                  }}
                  className="border-r-4 border-white-600"
                />
              </h2>
              <p className="max-w-[500px] mb-9 text-white/80">
                Passionate and skilled front-end developer with hands-on
                experience in building responsive and dynamic web applications,
                <br /> I am proficient in many programming languages and
                technologies
              </p>
              {/** btns and socials */}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button
                  variant="cv"
                  size="lg"
                  className="flex gap-2 items-center"
                >
                  <span>Download CV</span>
                  <FaDownload />
                </Button>
                <div className="mb-8 xl:mb-0">
                  <Socials
                    containerStyle="flex gap-6"
                    iconStyle="w-9 h-9 border border-blue-500 rounded-full flex justify-center items-center text-blue-500/80 hover:text-white/80 hover:bg-blue-500 hover:transition-all duration-500"
                  />
                </div>
              </div>
            </div>
            {/** photo */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
        <Stats />
      </section>
    </>
  );
}

export default Home;
