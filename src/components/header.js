import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const Header = () => {

    const topMenu = useStaticQuery(graphql`    
  query MyMenuQuery {
    wpMenuItem {
      menu {
        node {
          count
          menuItems {
            nodes {
              label
              order
            }
          }
        }
      }
    }
    allSite {
        nodes {
          siteMetadata {
            title
          }
        }
      }
  }`)
    const { wpMenuItem, allSite } = topMenu
    return (
        <>
            <header
                style={{
                    background: `rebeccapurple`,
                    marginBottom: `1.45rem`,
                }}
            >
                <div
                    style={{
                        margin: `0 auto`,
                        maxWidth: 960,
                        padding: `1.45rem 1.0875rem`,
                    }}
                >
                    <h1 style={{ margin: 0, display: 'inline-block' }}>
                        <Link
                            to="/"
                            style={{
                                color: `white`,
                                textDecoration: `none`,
                            }}
                        >
                            {allSite.nodes[0].siteMetadata.title}
                        </Link>
                    </h1>
                    <ul style={{ margin: 0, display: 'inline-block', listStyleType: 'none' }}>
                        <li style={{ display: "inline", margin: '10px' }}>
                            <Link style={{
                                color: `white`,
                                textDecoration: `none`,
                            }} to="/"> Home </Link>
                        </li>
                        {wpMenuItem.menu.node.menuItems.nodes.map(element => {
                            return (
                                <>
                                    <li key={element.order} style={{ display: "inline", margin: '10px' }}>
                                        <Link style={{
                                            color: `white`,
                                            textDecoration: `none`,
                                        }} to="/blog"> {element.label} </Link>
                                    </li>
                                </>)
                        })}
                        <li style={{ display: "inline", margin: '10px' }}>
                            <Link style={{
                                color: `white`,
                                textDecoration: `none`,
                            }} to="/blog"> Blogs </Link>
                        </li>

                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header
