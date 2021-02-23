exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic('No existen resultados ', result.errors)
  }

  const posts = result.data.allContentfulPost.edges

  posts.forEach(post => {
    actions.createPage({
      path: post.node.slug,
      component: require.resolve('./src/components/PostEntry.js'),
      context: {
        slug: post.node.slug
      }
    })
  })
}