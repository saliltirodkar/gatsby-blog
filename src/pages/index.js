import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <h1>Welcome to my Gatsby website</h1>
      </Layout>
    </main>
  );
};

export const Head = () => <title>Home page</title>;

export default IndexPage;
