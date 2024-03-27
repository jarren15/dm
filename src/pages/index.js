import React from "react";
import { graphql } from "gatsby";
import Header from "../components/Header";
import { useSpring, animated } from "@react-spring/web";
import { Layout } from "../components/Layout";
import { Hero } from "../components/home/Hero";
import SkillSection from "../components/home/SkillSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as fontawesomeSolidSVGIcons from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from "react-player";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image";
import { ButtonGroup } from "../components/ButtonGroup";
import { Link } from "gatsby";
import CarouselSection from "../components/home/CarouselSection";
import ContactSection from "../components/home/ContactSection";

import { Container } from "../components/Container";

export default function Home({ data }) {
  const skills = data.allSanitySkills.nodes
  return (
    <>
      <Hero />
      <SkillSection skills={skills} />
      <CarouselSection />
      <ContactSection />
      <Container>{/* <ReactPlayer url="https://youtube.com/shorts/hMMonB61rw8?si=s5krSGCrN4BIUuOM" playing={true} muted={true} /> */}</Container>
    </>
  );
}

export const Head = () => <title>All About Dianne</title>;

export const pageQuery = graphql`
  query MyQuery {
    allSanitySkills(sort: { _createdAt: DESC }) {
      nodes {
        title
      }
    }
  }
`;
