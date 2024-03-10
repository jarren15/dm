import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import classNames from "classnames";

export const AnchorButton = ({ to, variant, children }) => {
  const classes = classNames("rounded-full px-4 py-2 font-semibold text-sm shadow-sm inline-block", {
    "bg-button-primary-default hover:bg-button-primary-hover text-white": variant === "primary",
  });

  return (
    <AnchorLink to={to} className={classes}>
      {children}
    </AnchorLink>
  );
};
