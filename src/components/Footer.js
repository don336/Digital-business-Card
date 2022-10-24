import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer'>
        <FaTwitter className='icons'/>
        <FaFacebook className='icons'/>
        <FaInstagram className='icons'/>
        <FaGithub className='icons'/>
    </div>
  )
}

export default Footer