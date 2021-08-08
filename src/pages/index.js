import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Getting started with Gatsby">
      <p>This is just an introductory project following the Gatsby Tutorial</p>
      <StaticImage
        alt="A random picture from picsum"
        src="https://picsum.photos/400.webp?grayscale"
      />
    </Layout>
  );
};

export default IndexPage;
