import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

// React Bootstrap
import { Col, Card } from "react-bootstrap"

// Styles
import style from "./PostCard.module.scss"

const PostCard = ({ post }) => {
  const { title, description, slug, image } = post.node
  return (
    <Col md={6} lg={4} className="my-3">
      <Card className={style.card}>
        <Link to={`/${slug}`}>
          <Card.Img as={Img} variant="top" fluid={image.fluid} className={style.img} />
        </Link>
        <Card.Body>
          <Link to={`/${slug}`}>
            <Card.Title>{title}</Card.Title>
          </Link>
          <Card.Text>
            {description}
        </Card.Text>
        </Card.Body>
      </Card>
    </Col>
   );
}

export default PostCard;