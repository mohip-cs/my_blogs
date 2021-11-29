import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header =  (siteTitle, propTypes) => {
  const topMenu = useStaticQuery(graphql`    
  query MyMenuQuery {
    wpMenuItem {
      menu {
        node {
          menuItems {
            nodes {
              label
            }
          }
        }
      }
    }
  }`)
  const { wpMenuItem } = topMenu
  console.log(wpMenuItem);
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
          {siteTitle}
        </Link>
      </h1>
      <ul style={{ margin: 0, display: 'inline-block', listStyleType: 'none' }}>
        <li style={{ display: "inline", margin: '10px' }}>
          <Link style={{
            color: `white`,
            textDecoration: `none`,
          }} to="/blog"> Blogs </Link>
        </li>
      </ul>
    </div>
  </header>
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

/* export const pageQuery = graphql`
    {
      wpMenuItem {
        menu {
          node {
            menuItems {
              nodes {
                label
              }
            }
          }
        }
      }
    }
` */