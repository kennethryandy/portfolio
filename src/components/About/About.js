import React from "react";
//material-ui
import aboutStyles from "./aboutStyles";
import { Typography } from "@material-ui/core";
import Card from "./Card/Card";

function About() {
  const classes = aboutStyles();
  return (
    <div className={classes.about} id="about">
      <div className={classes.appBarSpacer} />
      <div className={classes.info}>
        <Typography variant="h4">About Me</Typography>
        <Typography variant="body1" className={classes.aboutMe}>
          "Hello, my name is Kenneth Ryan Dy a web developer. As I enjoy
          exploring new things I never back down from any challenges that comes.
          Seeking ideas and concepts are my favorite part of being a developer.
          I constantly learning to shrapen my skills that I already have."
        </Typography>
      </div>
      <Typography variant="h5">Skills & Tools</Typography>
      <Card />
    </div>
  );
}

export default About;
