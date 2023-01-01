import React from "react";
import "./tech.css";
import reactimg from "./react.png";
import html from "./html.png";
import css from "./css.png";
import bootstrap from "./bootstrap.png";
import github from "./github.png";
import js from "./js.png";
import mongo from "./mongo.png";

const Techy = () => {
  const techno = [
    {
      id: 1,
      src: reactimg,
      title: "React.JS",
    },
    {
      id: 2,
      src: html,
      title: "HTML",
    },
    {
      id: 3,
      src: css,
      title: "CSS",
    },
    {
      id: 4,
      src: bootstrap,
      title: "BootStrap",
    },
    {
      id: 5,
      src: github,
      title: "Github",
    },
    {
      id: 6,
      src: js,
      title: "JavaScript",
    },
    {
      id: 7,
      src: mongo,
      title: "MongoDB",
    },
  ];
  return (
    <div>
      <h2>Technologies</h2>
      <div className="tech">
        {techno.map(({ id, src, title }) => (
          <div key={id} className="technology">
            <img src={src} alt="" />
            <p>{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Techy;
