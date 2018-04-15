import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
    <div className="header">
    <section>
      <ul>
        <li className="flex-top ft1">
          <svg className="svg" width="16" height="16" viewBox="0 0 32 32">
          <title>location2</title>
            <path d="M16 0c-5.523 0-10 4.477-10 10 0 10 10 22 10 22s10-12 10-22c0-5.523-4.477-10-10-10zM16 16.125c-3.383 0-6.125-2.742-6.125-6.125s2.742-6.125 6.125-6.125 6.125 2.742 6.125 6.125-2.742 6.125-6.125 6.125zM12.125 10c0-2.14 1.735-3.875 3.875-3.875s3.875 1.735 3.875 3.875c0 2.14-1.735 3.875-3.875 3.875s-3.875-1.735-3.875-3.875z"></path>
          </svg> Spanish Lookout, Belize
        </li>
        <li className="flex-top ft2">
        <svg className="svg "width="16" height="16" viewBox="0 0 32 32">
          <title>mail2</title>
          <path d="M26.667 0h-21.333c-2.934 0-5.334 2.4-5.334 5.334v21.332c0 2.936 2.4 5.334 5.334 5.334h21.333c2.934 0 5.333-2.398 5.333-5.334v-21.332c0-2.934-2.399-5.334-5.333-5.334zM26.667 4c0.25 0 0.486 0.073 0.688 0.198l-11.355 9.388-11.355-9.387c0.202-0.125 0.439-0.198 0.689-0.198h21.333zM5.334 28c-0.060 0-0.119-0.005-0.178-0.013l7.051-9.78-0.914-0.914-7.293 7.293v-19.098l12 14.512 12-14.512v19.098l-7.293-7.293-0.914 0.914 7.051 9.78c-0.058 0.008-0.117 0.013-0.177 0.013h-21.333z"></path>
          </svg> reimersexcavation@gmail.com
          </li>
        <li className="flex-top ft3">
          <svg className="svg" width="16" height="16" viewBox="0 0 32 32">
          <title>phone</title>
          <path d="M22 20c-2 2-2 4-4 4s-4-2-6-4-4-4-4-6 2-2 4-4-4-8-6-8-6 6-6 6c0 4 4.109 12.109 8 16s12 8 16 8c0 0 6-4 6-6s-6-8-8-6z"></path>
          </svg> : (501) 675-5442</li>
      </ul>
    </section>
    <header className="main-header">
      <div className="brand-header">
        <img height="60px" src="/static/images/reimersexcavationlogo.svg" alt="logo"/>
        <h1>Reimer's Excavation</h1>
      </div>
    </header>
    <nav>
      <ul>
        <Link 
        activeStyle={{
          background: '#2c2c2c',
          color: '#f6ee31'
        }}
        className="link" to="/home"><li>Home</li></Link>
        <Link activeStyle={{
          background: '#2c2c2c',
          color: '#f6ee31'
        }} 
        className="link" to="/services"><li>Services</li></Link>
        <Link activeStyle={{
          background: '#2c2c2c',
          color: '#f6ee31'
        }} 
        className="link" to="/gallery"><li>Gallery</li></Link>
        <Link activeStyle={{
          background: '#2c2c2c',
          color: '#f6ee31'
        }}  
        className="link" to="/contact"><li>Contact</li></Link>
      </ul>
    </nav>
  </div>
)

export default Header
