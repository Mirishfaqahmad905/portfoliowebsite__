import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import './Contact.css';
import { FaInstagramSquare } from "react-icons/fa";
const ContactList = () => {
  return (
    <div className='contact_form' id='contact'>
         <div className="container_contacts" id='contact'>
             <a href="" className="contact_link"> <span style={{}}><FaFacebook/></span> </a>
                <a href="" className="contact_link"><FaInstagramSquare/></a>
                <a href="https://github.com/Mirishfaqahmad905/todolist" className="contact_link"><FaGithub/></a>
                <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" className="contact_link"><FaLinkedin/></a>
         </div>
    </div>
  )
}

export default ContactList