import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Container } from "./Container";
import Logo from "../images/logo.svg";
import { Link } from "gatsby";

export default function Header({ location }) {
  const renderLinks =
    location.pathname === "/" ? (
      <>
        <li>
          <AnchorLink to="/#section6">About me</AnchorLink>
        </li>
        <li>
          <AnchorLink to="/">Projects</AnchorLink>
        </li>
        <li>
          <AnchorLink to="/#carousel">Carousel</AnchorLink>
        </li>
        <li>
          <AnchorLink to="/">Service packages</AnchorLink>
        </li>
        <li>
          <AnchorLink to="/">Contact me</AnchorLink>
        </li>
      </>
    ) : (
      <>
        <li>
          <AnchorLink to="/">Home</AnchorLink>
        </li>
      </>
    );

  return (
    <header className="bg-customBackground-2">
      <Container>
        <div className="flex justify-between py-4">
          <Link to="/">
            <img src={Logo} alt="" className="max-w-56" />
          </Link>

          <nav className="leading-6 font-semibold">
            <ul className="flex space-x-8">{renderLinks}</ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
