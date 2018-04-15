import React from 'react'
import Link from 'gatsby-link'

const Services = () => (
  <div className="services-container">
    <section id="excavation">
      <header>Excavation Services</header>
      <hr/>
      <img src="/static/images/exclongroad.jpg" alt="excavator on long road"/>
      
      <p>Reimer's Excavation offers a variety of earthwork & excavation services throughout Belize. From sanitary sewer piping services and detention systems to clearing a property or laying pipe, our experienced in excavation will successfully complete any project on time and within budget.</p>

      <ul className="services">
      
        <li className="serv"><h4>Underground Piping</h4></li>
        
        <li className="serv"><h4>Soil Erosion</h4></li>
        
        <li className="serv"><h4>Sitework</h4></li>
        
        <li className="serv"><h4>Earthwork</h4></li>
        
        <li className="serv"><h4>Site/Land Clearing</h4></li>
        
      </ul>
      
    </section>
    <section id="lineboring">
      <header>Line Boring</header>
      <hr/>
      <img src="/static/images/Photo 05-04-18, 5 05 00 PM (1).jpg" alt="line boring"/>
      <p>Line boring is a welding/machining process to repair bores that have been worn out, over sized, and irregular shaped.  We are able to build up the inside diameter of the bore with by welding and machine to the proper size.  Once finished, the bore will have a slip fit or press fit to accept new bushing or pins.  The process can be done vertical or horizontal in your shop, on job site, or at our shop. Many typical repairs are on heavy equipment bucket pins, loader arms, excavator booms and center pins.</p>
    </section>
    <section id="hdpe">
      <header>HDPE Pipe & Fittings</header>
      <hr/>
      <ul className="hpde-pipe">
        <li>
        <p>High density polyethylene (HDPE), is a polyethylene thermoplastic that is made from petroleum. It has higher strength rating than PVC, is harder, and can withstand higher temperatures.
            HDPE pipes are convenient to use in underground piping because they are found to dampen and absorb shock waves minimizing surges that can affect the system. They also have the best joint pressure resistance and are also more abrasion and heat resistant.</p>
        </li>
      </ul>
      <img src="/static/images/hdpe-pipes-500x500.jpg" alt="hdpe pipe"/>
    </section>
  </div>
)

export default Services
