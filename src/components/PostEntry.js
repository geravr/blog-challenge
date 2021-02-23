import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

// React Bootstrap
import { Badge } from "react-bootstrap"

// Components
import Layout from "./Layout"
import Seo from"./Seo"

// Styles
import style from "./PostEntry.module.scss"


/*************** Query ***************/
export const query = graphql`
query($slug: String!)
{
  contentfulPost(slug: {eq: $slug }) {
    title
    author
    content {
      raw
    }
    description
    image {
      fluid(maxWidth: 980) {
        ...GatsbyContentfulFluid
      }
    }
    slug
    createdAt
  }
}
`
/*************** Component ***************/
const PostEntry = ({ data }) => {
  const { title, description, image, author, content } = data.contentfulPost
  const contentText = JSON.parse(content.raw)
  return (
    <Layout>
      <Seo title={title} description={description} />
      <Img fluid={image.fluid} alt={title} className={style.image} />
      <h1 className="mt-2 mb-0">{title}</h1>
      <Badge pill variant="secondary">{author}</Badge>
      <p className="my-3">{documentToReactComponents(contentText)}</p>
    </Layout>
  );
}

export default PostEntry;