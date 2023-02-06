import React, { useState } from 'react'
import FirstPage from './FirstPage'
import AboutMe from '../AboutMe'
import MySkills from './MySkills'
import Profile from './Profile'
import Projects from './Projects'
import ContactMe from './ContactMe'
import Footer from './Footer'
import LinkQua from './LinkQua'


function Index() {
 const [showLink, setShowLink] = useState(false)
  return (
    <div style={{position: "relative"}}>
   <FirstPage setShowLink ={setShowLink}/>
   <AboutMe />
   <MySkills />
   <Profile />
   <Projects />
   <ContactMe />
   <Footer />
   {showLink && <LinkQua setShowLink ={setShowLink}/>}
    </div>
  )
}

export default Index