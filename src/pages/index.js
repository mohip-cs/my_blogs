import React from "react"
import { graphql } from "gatsby"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
// import { Card } from 'antd';
import "bootstrap/dist/css/bootstrap.min.css";


const Homepage = props => {
  const { 
    data: { allWpPage },
  } = props;
  console.log(allWpPage);
    return (

        <Layout >
            <Seo title="Index" />
            <h1>{ allWpPage.nodes[0].title }</h1>
            
            
        </Layout>

    )
}

export default Homepage

export const pageQuery = graphql`
    {
      allWpPage(filter: {title: {eq: "Home"}}) {
        nodes {
          title
          content
        }
      }
    }
`
