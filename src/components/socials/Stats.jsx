import React from "react";
import CountUp from "react-countup";
function Stats() {
  const stats = [
    {
      num: 1,
      text: "Years of experience",
    },
    {
      num: 4,
      text: "Projects completed",
    },
    {
      num: 6,
      text: "Technologies mastered",
    },
    {
      num: 30,
      text: "Code commits",
    },
  ];
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((state, index) => (
            <div
              className="flex-1 flax gap-4 items-center justify-center xl:justify-start"
              key={index}
            >
              <CountUp
                end={state.num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-sans"
              />
              <p
                className={`${
                  state.text.length < 15 ? "mx-w-[100px]" : "max-w-[150px]"
                } leading-snug text-white/80`}
              >
                {state.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
