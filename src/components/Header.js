import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Container } from "./Container";
import Logo from "../images/logo.svg";

export default function Header() {
  return (
    <header className="bg-customBackground-2">
      <Container>
        <div className="flex justify-between py-4">
          <img src={Logo} alt="" className="max-w-56" />
          <nav className="leading-6 font-semibold">
            <ul className="flex space-x-8">
              <li>
                <AnchorLink to="/#section6">About me</AnchorLink>
              </li>
              <li>
                <AnchorLink to="/">Projects</AnchorLink>
              </li>
              <li>
                <AnchorLink to="/">Service packages</AnchorLink>
              </li>
              <li>
                <AnchorLink to="/">Contact me</AnchorLink>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
