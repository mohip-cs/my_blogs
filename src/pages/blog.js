import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Card } from 'antd';
import "bootstrap/dist/css/bootstrap.min.css";


const indexPage = props => {
    console.log(props);
    const { 
        data: { allWpPost },
    } = props;
    return (

        <Layout >
            <Seo title="Index" />
            <h1>Blogs</h1>
            <div className="row row-cols-3" style={{display: 'flex'}}>
            {
                allWpPost.nodes.map(element => {
                    console.log(element);
                    
                    return (
                        <Card
                        className="col"
                            style={{ width: 300 , padding: '10px', border: '2px solid gray', backgroundColor: 'rgb(199, 199, 199', borderRadius: '10px', margin: '5px'}}
                            cover={ 
                                 (element.featuredImage == null)
                                    ? <div> Something went wrong </div>
                                    :
                                <img style={{height: '200px'}}
                                        alt="example"
                                        src={element.featuredImage.node.sourceUrl}
                                />
                            }
                        key={element.id}
                        >
                        <h3 style={{textAlign: 'center'}}>{element.title}</h3>
                        <div dangerouslySetInnerHTML={{__html: element.excerpt}} />
                        <Link style={{display: 'flex', textDecoration: 'none'}}  to={`/${element.slug}`}> 
                            <button style={{ backgroundColor: 'gray', borderRadius: '15px', border: '2px', margin: '0 auto' }} >Read More ...</button>
                        </Link>
                        </Card>
                    )

                })
            }
            </div>
        </Layout>

    )
}

export default indexPage

export const pageQuery = graphql`
    {
        allWpPost {
            nodes {
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
                link
            }
        }
    }
`
