import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle="About Page">
        <h1>Welcome to my About</h1>

        <p>
          Hi there! I'm the proud creator of this site, which I built with
          Gatsby.
        </p>
      </Layout>
    </main>
  );
};

export const Head = () => <title>About Me</title>;

export default AboutPage;
