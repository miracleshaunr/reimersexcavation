import React from 'react'
import Link from 'gatsby-link'
import exc1 from './exc1.jpg'
import exc2 from './exc2.jpg'
import linebore1 from './linebore1.jpg'
import hdpe1 from './hdpe1.jpg'


const IndexPage = () => (
  <div className="index-container">
    <img src={exc1} />
    <h1>Welcome</h1>    
    <hr/>
    <p>
      Reimer's Excavaion is an excavation and line boring service provider and is a supplier for HDPE pipe and fittings. We are located on Center Rd. in Spanish Lookout, Belize. Contact us now so we can work together on your next project. 
    </p>
    <ul className="feature">
      <Link className="feature-link" to="/services"><h3>Excavation</h3>
      <li>        
        <img src={exc2} alt="excavator on long road"/>
      </li>
      </Link>
      <Link className="feature-link" to="/services">
      <li>
        <h3>Line Boring</h3>
        <img src={linebore1} alt="line boring"/>
      </li>
      </Link>
      <Link className="feature-link" to="/services">
      <li>
        <h3>HDPE Pipe</h3>
        <img src={hdpe1} alt="hdpe"/>
      </li>
      </Link>
    </ul>
    
  </div>
)

export default IndexPage
