import React from "react";
import "../../tailwind.generated.css";
import classes from "./Hero.module.css";

function Hero() {
  return (
    <div className={classes.Hero}>
      <div className="font-sans py-6 px-12 h-full flex flex-col content-between justify-center items-center md:justify-around sm:flex-row gap-30">
        <div className="self-center md:text-center p-4">
          <h1>Nourish Your Body</h1>
          <h2>Embrace Wellness</h2>
          <p className="text-base">
            Proper nutrition fuels your body, mind, and soul. By choosing
            balanced meals, you can enhance energy levels, boost immunity, and
            feel your best. A wholesome diet is not just about avoiding illness
            but thriving every day. It's a commitment to self-care and long-term
            health. Make the choice to nourish yourself, and your body will
            reward you with vitality and happiness.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
