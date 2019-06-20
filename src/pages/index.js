import React from 'react'
import Layout from '../components/Layout';
import { Link, graphql, StaticQuery } from 'gatsby'

export default () => (
  <Layout>
    <h1>test</h1>
    <StaticQuery
      query={graphql`
        query MyQuery {
          allMarkdownRemark(
            filter: {
              frontmatter: {
                templateKey: {
                  eq: "blog-post"
                }
              }
            }
          ) {
            edges {
              node {
                id
                frontmatter {
                  title
                }
                fields {
                  slug
                }
              }
            }
          }
        }
    `}
      render={(data, count) => {
        console.log(data);
        return (
          <>
            {data.allMarkdownRemark.edges.map(edge => (
              <Link to={edge.node.fields.slug}>
                {edge.node.frontmatter.title}
              </Link>
            ))}
          </>
        );
      }}
    />
    <h2>Footer</h2>
  </Layout>
);
