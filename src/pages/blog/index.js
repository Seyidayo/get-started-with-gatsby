import React from "react";
import Layout from "../../components/layout";
import { useStaticQuery, graphql, Link } from "gatsby";

const BlogPage = () => {
  const blogPosts = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          slug
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
          }
        }
      }
    }
  `);
  return (
    <Layout pageTitle="My posts">
      <p>Cool posts come here</p>
      {blogPosts.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  );
};

export default BlogPage;
