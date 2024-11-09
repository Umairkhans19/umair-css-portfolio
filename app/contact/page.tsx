import React from 'react'
import cssStyle from "./contact.module.css"

console.log(cssStyle,"CSS-Style")

const ContactPage = () => {
  return (
    <div>
       <h2 className={cssStyle.yellow}> Contact me</h2>
       <p className={cssStyle.black}>

            <b>
            email:  umairkhans19@yahoo.com
            </b>
           </p>
           <p>
           <b>
            mobile: 0332-2416891
            </b>
           </p>
           <p>
            <b>
              shah faisal colony,karachi.
            </b>
           </p>
    </div>
  )
}

export default ContactPage