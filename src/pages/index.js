import React from "react"
import { graphql, useStaticQuery } from "gatsby"

// React Bootstrap
import { Row, Col } from "react-bootstrap";

// Components
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PostCard from "../components/PostCard"

const IndexPage = () => {

  /*************** Query ***************/
  const { allContentfulPost: { edges: posts } } = useStaticQuery(graphql`
  {
    allContentfulPost {
      edges {
        node {
          id
          title
          description
          slug
          image {
            fluid(maxWidth: 348) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
  `)

  return (
    <Layout>
      <Seo title="Blog - challenge"/>
      <Row>
        <Col sm={12}>
          <h1>Bienvenido a mi blog</h1>
          <p>Una espacio donde aprenderemos juntos, para ser mejores desarrolladores cada día</p>
          <h3>Últimas entradas</h3>
        </Col>
        {posts.map(post => {
          return (
            <PostCard post={post.node} key={post.node.id} />
          )
        })}
      </Row>
    </Layout>
  )
}

export default IndexPage
