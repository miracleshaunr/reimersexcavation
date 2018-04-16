import React from 'react'
import Link from 'gatsby-link'
import exc1 from './exc1.jpg'
import exc2 from './exc2.jpg'
import exc3 from './exc3.jpg'
import hdpe1 from './hdpe1.jpg'
import hdpe2 from './hdpe2.jpg'
import hdpe3 from './hdpe3.jpg'
import hdpe4 from './hdpe4.jpg'
import hdpe5 from './hdpe5.jpg'
import hdpe6 from './hdpe6.jpg'
import hdpe7 from './hdpe7.jpg'
import linebore1 from './linebore1.jpg'
import linebore2 from './linebore2.jpg'
import linebore3 from './linebore3.jpg'
import linebore4 from './linebore4.jpg'
import linebore5 from './linebore5.jpg'


const Gallery = () => (
  <div className="gallery-container">
   <div className="grid">
    <div className="cell">
        <img src={exc1} alt="exc1"/>
    </div>
    <div className="cell">
        <img src={exc2} alt="exc2"/>
    </div>
    <div className="cell">
        <img src={exc3} alt="exc3"/>
    </div>
    <div className="cell">
        <img src={hdpe1} alt="1"/>
    </div>
    <div className="cell">
        <img src={hdpe2} alt="2"/>
    </div>
    <div className="cell">
        <img src={hdpe3} alt="3"/>
    </div>
    <div className="cell">
        <img src={hdpe4} alt="4"/>
    </div>
    <div className="cell">
        <img src={hdpe5} alt="5"/>
    </div>
    <div className="cell">
        <img src={hdpe6} alt="6"/>
    </div>
    <div className="cell">
        <img src={hdpe7} alt="7"/>
    </div>
    <div className="cell">
        <img src={linebore1} alt="8"/>
    </div>
    <div className="cell">
        <img src={linebore2} alt="9"/>
    </div>
    <div className="cell">
        <img src={linebore3} alt="10"/>
    </div>
    <div className="cell">
        <img src={linebore4} alt="11"/>
    </div>
    <div className="cell">
        <img src={linebore5} alt="12"/>
    </div>
   </div>
  </div>
)

export default Gallery
