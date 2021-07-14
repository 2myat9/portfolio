import React from "react";
import { Tooltip } from "react-tippy";
import "./app.css";
import "react-tippy/dist/tippy.css";

// images
import htooImg from "./images/htoo.jpg";
import discordIcon from "./images/discord.ico";
import linkedinIcon from "./images/linkedin.ico";
import emailIcon from "./images/mail.ico";

export const App = () => {
  return (
    <>
      <div className="page-container">
        <div className="content-container">
          <div className="heading">
            <div className="heading-content">
              <p>
                Hi, I'm{" "}
                <span className="htoo">
                  <Tooltip
                    html={<img className="htoo-img" src={htooImg} alt=""></img>}
                    followCursor={true}
                    position="right"
                    animation="perspective"
                    inertia={true}
                    theme="light"
                    size="small"
                  >
                    Htoo
                  </Tooltip>
                </span>
                .
              </p>
              <p>A front-end web developer.</p>
            </div>
          </div>
          <div className="body">
            <div className="body-content">
              <p>
                I write{" "}
                <span className="react">
                  <Tooltip
                    html={
                      <div className="tooltip">
                        Proficiency : ◾ ◾ ◾ ◽ ◽
                      </div>
                    }
                    followCursor={true}
                    position="top"
                    theme="light"
                    size="small"
                    arrow={true}
                    inertia={true}
                    animation="perspective"
                  >
                    React Typescript
                  </Tooltip>
                </span>{" "}
                and{" "}
                <span className="python">
                  <Tooltip
                    html={
                      <div className="tooltip">
                        Proficiency : ◾ ◾ ◾ ◽ ◽
                      </div>
                    }
                    followCursor={true}
                    position="top"
                    theme="light"
                    size="small"
                    arrow={true}
                    inertia={true}
                    animation="perspective"
                  >
                    Python
                  </Tooltip>
                </span>
                .
              </p>
              <p>
                <span>
                  <Tooltip
                    html={<div className="tooltip">Spoiler: Fun!</div>}
                    followCursor={true}
                    position="bottom"
                    theme="light"
                    size="small"
                    inertia={true}
                    animation="perspective"
                  >
                    <a href="" className="link here">
                      Here
                    </a>
                  </Tooltip>
                </span>{" "}
                are some things I have built.
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
                    <a href="" className="link">
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
                    <a href="" className="link">
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
                    <a href="" className="link">
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
