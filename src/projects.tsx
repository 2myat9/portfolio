import React from "react";
import "./app.css";
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";

// icons
import discordIcon from "./images/discord.ico";
import linkedinIcon from "./images/linkedin.ico";
import emailIcon from "./images/mail.ico";

export const Projects = () => {
  return (
    <>
      <div className="page-container">
        <div className="content-container">
          <div className="project-heading">
            <div>
              <p>These are my projects.</p>
            </div>
          </div>
          <div className="body">
            <div className="body-content">
              <p>
                <ul>
                  <li>
                    <a
                      href="https://github.com/mokyn/Evergreen-MVP"
                      target="_blank"
                      className="link"
                    >
                      Evergreen MVP (Summer '21)
                    </a>
                    : Hired by my college to build a Minimum Viable Product to
                    prototype the core features of a web app aimed at educating
                    kids about urban forests in entertainning ways. Used React
                    Typescript and Tailwind to write reusable UI components, and
                    used Firebase to work with user data.
                  </li>
                  <li>
                    <a
                      href="https://fancy-certificate.netlify.app/"
                      target="_blank"
                      className="link"
                    >
                      Fancy Certificate
                    </a>
                    : a web page for celebrating a special occasion with an
                    interactive 3-D card that delightfully displays your image
                    and message. Written using React and CSS.
                  </li>
                  <li>
                    <a
                      href="https://github.com/2myat9"
                      target="_blank"
                      className="link"
                    >
                      More fun stuff
                    </a>
                    : a site that recommends a random Ghibli film, a site for
                    bird-watching, a clock app that will inspire you, and more
                    can be accessed through my Github repos.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="footer">
            <div className="footer-content">
              <p>Conect with me ?</p>
              <p>
                <span>
                  <Tooltip
                    html={
                      <div className="">
                        <img src={emailIcon} alt="discord icon" />
                      </div>
                    }
                    followCursor={true}
                    position="bottom"
                    theme="light"
                    size="small"
                    arrow={true}
                    inertia={true}
                    animation="perspective"
                  >
                    <a
                      href="mailto:2myat9@gmail.com"
                      className="link"
                      target="_blank"
                    >
                      Email
                    </a>
                  </Tooltip>
                </span>
                ,{" "}
                <span>
                  <Tooltip
                    html={
                      <div className="">
                        <img src={linkedinIcon} alt="discord icon" />
                      </div>
                    }
                    followCursor={true}
                    position="bottom"
                    theme="light"
                    size="small"
                    arrow={true}
                    inertia={true}
                    animation="perspective"
                  >
                    <a
                      href="https://www.linkedin.com/in/htoomyat/"
                      target="_blank"
                      className="link"
                    >
                      LinkedIn
                    </a>
                  </Tooltip>
                </span>
                ,{" "}
                <span>
                  <Tooltip
                    html={
                      <div className="">
                        <img src={discordIcon} alt="discord icon" />
                      </div>
                    }
                    followCursor={true}
                    position="bottom"
                    theme="light"
                    size="small"
                    arrow={true}
                    inertia={true}
                    animation="perspective"
                  >
                    <a
                      href="https://discordapp.com/users/409335295734054912/"
                      target="_blank"
                      className="link"
                    >
                      Discord
                    </a>
                  </Tooltip>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
