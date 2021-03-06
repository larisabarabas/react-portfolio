import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
      <h1>Learn to design and code modern apps</h1>
      <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.</p>
      <Link to="/page-2/">Watch this video</Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
