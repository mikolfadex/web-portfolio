import React from 'react'

function FirstPage({setShowLink}) {
  return (


    <section id="home">

    <div className='members'>
      
<div className='header'>
  <button className='logo-button'><i class="fa-solid fa-mug-saucer"></i>thedammysvi<i class="fa-solid fa-eye"></i>w</button>
  <a href="#home"><button>Home</button></a>
  <a href="#about"><button>About me</button></a>
  <a href="#skill"><button>My skills</button></a>
<a href="#profile"><button>My profile</button></a>
<a href="#project"><button>My projects</button></a>
  <button className='for-icon' onClick={() => setShowLink(true)}><i class="fa-sharp fa-solid fa-link"></i></button>
  <a href="#contact"><button className='for-icon'><i class="fa-regular fa-envelope"></i></button></a>
</div>

     
<div className='content-wrap'>

  <div>
Awolaja Damilola Michael
</div>

<div>
Web Developer. Hardware Repair.
</div>

</div>


    </div>

    </section>
  )
}

export default FirstPage