import React from 'react'
import Link from 'gatsby-link'

const Contact = () => (
  <div className="contact-container">
    <h1>Let's Talk!</h1>
    <hr/>
    <div className="contact-grid">
        <div className="contact-info">
            <ul>
                <li>
                    <header>Reimer's Excavation</header>
                </li>
                <li>
                    P.O. Box 755 Center Rd. <br/>
                    Spanish Lookout, BZ C.A.
                </li>
                <li>
                    Phone: (501) 675-5442
                </li>
                <li>
                    Email: reimersexcavation@gmail.com
                </li>
            </ul>
            <iframe src="https://www.google.com/maps/d/embed?mid=1JsNI0o8lPxnBZn9zTLerE_wOTy3ajbp-" width="640" height="300"></iframe>
        </div>
        <form action="https://formspree.io/miracle.shaunr@gmail.com"
        method="POST">
            <input type="text" name="name" placeholder="Name" id="name" required/>
            <input type="email" name="_replyto" placeholder="Email" id="email"required/>
            <input type="text" name="subject" placeholder="Subject" id="subject" required/>
            <textarea placeholder="Message" name="message" id="message" cols="30" rows="10" required></textarea>
            <button type="submit" value="Send">Send</button>
        </form>
    </div>
  </div>
)

export default Contact
