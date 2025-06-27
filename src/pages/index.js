import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <h1>Welcome to my Gatsby website</h1>
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
          src="../images/1.jpg"
        />
      </Layout>
    </main>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
