import React from "react";

import styles from "./Button.module.css";

function Button({
  name,
  onClick,
  primaryColor,
  inverted,
  wrapperClass,
  id,
  withIcon,
  IconComp,
  iconClass,
  hoverBgColor,
  hoverColor,
  disabled,
}) {
  return (
    <button
      disabled={disabled === true}
      id={id}
      className={
        styles.Button +
        " " +
        (inverted ? styles.Inverted : "") +
        " " +
        wrapperClass
      }
      style={{
        "--main-color": primaryColor,
        "--main-hover-bg-color": hoverBgColor
          ? hoverBgColor
          : "rgb(238, 243, 255)",
        "--main-hover-color": hoverColor ? hoverColor : primaryColor,
      }}
      onClick={onClick}
    >
      {withIcon && <IconComp className={styles.Icon + " " + iconClass} />}{" "}
      {name}
    </button>
  );
}

export default Button;
