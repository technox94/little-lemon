import chefs from "../assets/chefs.jpg";
import chefb from "../assets/chefb.jpg";
import React from "react";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-content">
          <h4>Little Lemon</h4>
          <h5>Chicago</h5>
          <p>
              Little Lemon opened in 1995 by two italian brothers, Adrian and
              Mario. Despite the city's diversity, the two brothers recognize,
              the lack of Mediterranean cuisine in Chicago, and were inspired to
              bring the flavors of their hometown in Italy to the people of
              Chicago. The twp brothers continue to oversee the Little Lemon
              restaurant, nearly thirty years later.
          </p>
        </div>

        <div className="owners">
          <img id="chefs" src={chefs} alt="two male owner" />
          <img id="chefb" src={chefb} alt="Chef" />
        </div>
      </div>
    </>
  );
};

export default About;