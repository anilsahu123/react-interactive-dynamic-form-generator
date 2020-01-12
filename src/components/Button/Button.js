import React from "react";

import classes from "./Button.module.css";

const button = props => (
  <div className={classes.center}>
    <button
      disabled={props.disabled}
      className={[classes.Button, classes[props.btnType]].join(" ")}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  </div>
);

export default button;
