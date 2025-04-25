/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Genius Lyrics Scraper",
    description:
      "A web scraper that extracts lyrics from Genius.com and displays them in a user-friendly format.",
    url: "https://github.com/chishxd/Chinmay/blob/main/GeniusScraper.py",
  },
  {
    title: "To-Do List App",
    description:
      "A simple to-do list app built with React and Node.js, allowing users to manage their tasks efficiently.",
    url: "https://github.com/chishxd/Chinmay/blob/main/ToDo.py",
  },
  {
    title: "Job Listing web scrapers",
    description:
      "Two web scrapers that extract job listings from python.com/jobs and pythonjobs.com, respectively.",
    url: "https://github.com/chishxd/Chinmay",
  },
  {
    title: "Number Guessing Game",
    description:
      "A simple number guessing game built with Python, where users try to guess a randomly generated number. Also Implemented A stake system.",
    url: "https://github.com/chishxd/Chinmay/blob/main/number_guesser.py",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
