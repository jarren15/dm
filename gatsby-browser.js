import React from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "./src/styles/tailwind.css";
import "./src/styles/globals.scss";
import { Layout } from "./src/components/Layout";

export const wrapPageElement = ({ element, props }) => {
  
  return (
    <Layout location={props.location}>
      {element}
    </Layout>
  );
};
