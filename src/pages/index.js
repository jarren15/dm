import React from "react";
import { graphql } from "gatsby";
import Header from "../components/Header";
import { useSpring, animated } from "@react-spring/web";
import { Layout } from "../components/Layout";
import { Hero } from "../components/home/Hero";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPenNib } from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from "react-player";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import { Link } from "gatsby";

import { Container } from "../components/Container";

export default function Home({
  data: {
    allSanitySkills: { nodes },
  },
}) {
  const [springs, api] = useSpring(() => ({
    from: {
      flex: 1,
    },
  }));
  console.log("check", nodes);

  const allPosts = nodes.map((post, i) => {
    return (
      <li className="text-3xl font-bold underline" key={i}>
        {post.title}
      </li>
    );
  });

  return (
    <Layout>

      <Hero />
      <Container>
        

        <AnchorLink to="/#section6">Section 6</AnchorLink>

        <ReactPlayer url="https://youtube.com/shorts/hMMonB61rw8?si=s5krSGCrN4BIUuOM" playing={true} muted={true} />

        <div id="section1" style={{ height: "100vh" }} className="bg-customBackground-1">
          Section 1
        </div>
        <div id="" style={{ height: "100vh", backgroundColor: "#f4f4f4" }}>
          Section 2
        </div>
        <div id="" style={{ height: "100vh" }}>
          Section 3
        </div>
        <div id="" style={{ height: "100vh", backgroundColor: "#f4f4f4" }}>
          Section 4
        </div>
        <div id="" style={{ height: "100vh" }}>
          Section 5
        </div>
        <div id="" style={{ height: "100vh", backgroundColor: "#f4f4f4" }}>
          Section 6
        </div>
        <div id="section6" style={{ height: "100vh" }}>
          Section 7
        </div>
      </Container>
    </Layout>
  );
}

export const Head = () => <title>Dianne's Portfolio</title>;

export const pageQuery = graphql`
  query MyQuery {
    allSanitySkills {
      nodes {
        title
      }
    }
  }
`;
