import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div className="index-container">
    <img src="/public/static/images/twoexc.jpg" />
    <h1>Welcome</h1>    
    <hr/>
    <p>
      Reimer's Excavaion is an excavation and line boring service provider and is a supplier for HDPE pipe and fittings. We are located on Center Rd. in Spanish Lookout, Belize. Contact us now so we can work together on your next project. 
    </p>
    <ul className="feature">
      <Link className="feature-link" to="/services"><h3>Excavation</h3>
      <li>        
        <img src="/public/static/images/exclongroad.jpg" alt="excavator on long road"/>
      </li>
      </Link>
      <Link className="feature-link" to="/services">
      <li>
        <h3>Line Boring</h3>
        <img src="/public/static/images/Photo 05-04-18, 5 05 00 PM (1).jpg" alt="line boring"/>
      </li>
      </Link>
      <Link className="feature-link" to="/services">
      <li>
        <h3>HDPE Pipe</h3>
        <img src="/public/static/images/hdpe-pipes-500x500.jpg" alt="hdpe"/>
      </li>
      </Link>
    </ul>
    
  </div>
)

export default IndexPage
