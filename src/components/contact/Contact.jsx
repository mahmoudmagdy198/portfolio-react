import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { motion } from "framer-motion";
import { FaPhone, FaLocationDot, FaEnvelope } from "react-icons/fa6";

function Contact() {
  const info = [
    {
      icon: <FaEnvelope />,
      title: "E-mail",
      decription: "mahmoud.magdy11198@gmail.com",
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      decription: "01007136498",
    },
    {
      icon: <FaLocationDot />,
      title: "Address",
      decription: "Haram , Egypt",
    },
  ];
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
        }}
        className=" py-12 "
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            <div className="xl:w-[54%] order-2 xl:order-none">
              <form
                action=""
                className="flex flex-col gap-6 p-10 bg-zinc-800 rounded-xl"
              >
                <h3 className="text-4xl text-blue-500">Contact with me</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input type="first name" placeholder="First name" />
                  <Input type="last name" placeholder="Last name" />
                  <Input type="email" placeholder="Email" />
                  <Input type="phone" placeholder="Phone number" />
                </div>
                <Textarea className="h-[200px]" placeholder="Your message.." />
                <Button
                  size="md"
                  className="max-w-40 py-3 bg-blue-500 hover:bg-blue-500/70"
                >
                  send
                </Button>
              </form>
            </div>
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((e, index) => (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-zinc-800 text-blue-500 rounded-md flex items-center justify-center">
                      <div className=" text-[28px]">{e.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/50">{e.title}</p>
                      <h3 className="text-xl">{e.decription}</h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Contact;
