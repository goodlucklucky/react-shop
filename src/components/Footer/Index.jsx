import React from "react";
import NewsLetter from "./components/NewsLetter";
import FooterLinks from "./components/FooterLinks";
import GitLinks from "./components/GitLink";
import "./Footer.css";

const footer = () => {
  return (
    <React.Fragment>
      <NewsLetter />
      <FooterLinks />
      <GitLinks />
    </React.Fragment>
  );
};

export default footer;
