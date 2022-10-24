import React from 'react'
import person from "../Assets/person.jpg"
import{FaLinkedin, FaMailBulk}from'react-icons/fa'

function Profile() {
  return (
    <div className='person-info'>
      <img src={person} alt="PERSON" />
      <h1>Laura Smith</h1>
      <h3>Frontend Developer</h3>
      <h4>laurasmith.websn</h4>
      <div className="social-media">
        <button className='btn-light'><FaMailBulk/>Email</button>
        <button className='btn-primary'><FaLinkedin/>LinkedIn</button>
      </div>
    </div>
  )
}

export default Profile