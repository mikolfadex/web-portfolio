import React from 'react'

const LinkQua = ({setShowLink}) => {
  return (
    <div className='links-q'>

<div className='first'>
<div><i class="fa-regular fa-circle-play"></i> &nbsp;&nbsp; My Reels</div>

<div>
<div></div>
<div></div>
<div></div>
</div>

</div>

        <div className='middle'>
          <div className='linkss'>
        <i class="fa-brands fa-linkedin"></i>
     <i class="fa-brands fa-github"></i>
    <i class="fa-brands fa-twitter"></i>
    <i class="fa-brands fa-telegram"></i>
    <i class="fa-brands fa-facebook"></i>
    <i class="fa-brands fa-instagram"></i>
    </div>

    <div className='queues'>
      <div className='nested'>
      <button className='logo-button2'><i class="fa-solid fa-mug-saucer"></i>thedammysvi<i class="fa-solid fa-eye"></i>w</button>
      </div>
      <div className='note'>
        <marquee>
        I design and develop services for customers specializing and
         creating stylish, modern websites, proficient in html css 
         javascript Reactjs, rest API, widows and mac OS operating 
         system. over the last few years, I have focused on web, 
         graphics design, video editing and music creation. 
        My passion is to design digital user experience through 
        user friendly and meaningful interaction.
      </marquee>
      </div>
    </div>
        </div>

        <div className='last'>
          <div onClick={() => setShowLink(false)}>  <i class="fa-solid fa-xmark"></i></div>
          <div>
            <nav>
        <i class="fa-solid fa-user-graduate"></i></nav>
        </div>
        </div>
    </div>
  )
}

export default LinkQua