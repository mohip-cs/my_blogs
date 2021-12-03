import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

import Timeline from "../components/timeline"
export default function BlogPost({ data }) {
  const post = data.allWpPost.edges[0].node
  console.log(post)
  return (
    <Layout>
      <div>
        <h1>{post.title}</h1>
        { (post.featuredImage == null)
              ? <div> Something went wrong </div>
              :  <img style={{height: '400px', width: '100%'}}
              alt="Something went wrong"
              src={post.featuredImage.node.sourceUrl}/>
          }
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
          <Timeline Timeline={post.testTimeline} ></Timeline>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
            title
            excerpt
            id
            featuredImage {
                node {
                    sourceUrl
                }
            }
            content
            slug
            testTimeline {
              myTimeline {
                content
                date
                subTitle
                title
                image {
                  sourceUrl
                }
              }
            }
        }
      }
    }
  }
`