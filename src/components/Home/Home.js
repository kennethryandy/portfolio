import React, { useState } from "react";
import Typed from "react-typed";
//material-ui
import homeStyles from "./homeStyles";
import { IconButton, Typography } from "@material-ui/core";
import ToggleOffIcon from "@material-ui/icons/ToggleOffOutlined";
import ToggleOnIcon from "@material-ui/icons/ToggleOnOutlined";

function Home() {
  const classes = homeStyles();
  const [toggled, setToggle] = useState(false);
  return (
    <div className={classes.home} id="home">
      <Typography className={classes.name} variant="h1">
        Hey! I'm Kenneth.
      </Typography>
      <div className={classes.intro}>
        <Typography
          className={classes.introText}
          component="div"
          variant="body1"
        >
          <Typed
            startDelay={500}
            strings={[
              "I build websites and apps.",
              "I build experience.",
              "Creative ideas.",
              "Problem solver.",
            ]}
            typeSpeed={35}
            backSpeed={45}
            backDelay={800}
            loop
          />
        </Typography>
      </div>
      <div className={classes.iconContainer}>
        <IconButton
          id="icon"
          href="#projects"
          className={classes.iconButton}
          onClick={() => {
            setToggle(!toggled);
            setTimeout(() => {
              setToggle(false);
            }, 500);
          }}
        >
          {!toggled ? (
            <ToggleOffIcon className={classes.toggleIcon} color="primary" />
          ) : (
            <ToggleOnIcon className={classes.toggleIcon} color="primary" />
          )}
        </IconButton>
      </div>
    </div>
  );
}

export default Home;
