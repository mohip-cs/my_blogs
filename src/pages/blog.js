import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Card, Pagination, Select } from 'antd';
import "bootstrap/dist/css/bootstrap.min.css";
import 'antd/dist/antd.css';

const { Option } = Select;

const BlogPage = props => {

    const BlogPost = useStaticQuery(graphql`    
    query MyBlogQuery{
        allWpPost  {
            nodes {
              title
              excerpt
              id
              featuredImage {
                node {
                  sourceUrl
                }
              }
              categories {
                nodes {
                  slug
                  name
                }
              }
              content
              slug
              link
            }
            totalCount
          }
          allWpCategory {
            nodes {
              count
              name
              slug
            }
          }
    }`
    )
   
    const postPerPage = 9;
    var card = []; 
    var count = 0;
    const { 
        allWpPost, allWpCategory 
    } = BlogPost;
    const [category,setCategory] = useState('all');
    const [totelPost,settotelPost] = useState(allWpPost.totalCount);
    const SelectChangeHandler = (value) => {
        setCategory(value);
        settotelPost(allWpCategory.nodes.find(n=> n?.slug === value)?.count);
    }
    allWpPost.nodes.map( (post) => {
        const arr = post.categories.nodes.map(n => {return( n?.slug ) } );
        if ( arr.includes(category) ) {
            card[count] = post;
            count++;
        }
        return null
    } )
    
    const [posts,setPosts] = useState(allWpPost.nodes.slice(0, postPerPage))
    const pageChangeHandler = (value) => {
        var start = (value-1)* postPerPage;
        var end = value * postPerPage;
        var posts = card.slice(start, end);
        setPosts(posts);
    } 

    return (
        <Layout >
            <Seo title="Index" />
            <h1 style={{display: 'inline-block'}}>Blogs</h1>
            <div  style={{display: 'inline-block', float: 'right'}}>
            <Select defaultValue="All" style={{ width: 120 }} onChange={SelectChangeHandler}>
            { allWpCategory.nodes.map(category => {
                return (
                    <Option value={category.slug}>{category.name}</Option>
                )
            }
            )}
            </Select>
            </div>
            <div className="row row-cols-3" style={{display: 'flex'}}>
            {
                posts.map(element => {
                    return (
                            <Link style={{display: 'flex'}}  to={`/${element.slug}`}> 
                            <Card
                            className="col"
                            style={{ padding: '10px', border: '2px solid gray', backgroundColor: 'rgb(199, 199, 199', borderRadius: '10px', margin: '5px'}}
                            cover={ 
                                (element.featuredImage == null)
                                ? <div> Something went wrong </div>
                                :
                                <img style={{height: '350px'}}
                                alt="example"
                                src={element.featuredImage.node.sourceUrl}
                                />
                            }
                            key={element.id}
                            >
                        <h3 style={{textAlign: 'center'}}>{element.title}</h3>
                        <div dangerouslySetInnerHTML={{__html: element.excerpt}} />
                            
                        </Card>
                        </Link>
                    )
                })
            }
            </div>
        <Pagination defaultCurrent={1} pageSize={postPerPage} onChange={pageChangeHandler} total={totelPost} />
        </Layout>
    )
}

export default BlogPage


