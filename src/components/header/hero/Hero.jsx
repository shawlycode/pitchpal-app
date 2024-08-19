import '../hero/hero.css'

import bg from '../../../assets/group.png'


export function Hero() {
  return (
    <header>
      <div className="header_container">
        <div className="left-container">
          {/* <div className='logo-header'><h2>PITCHPAL<span>.</span></h2></div> */}
          <h1>The #1 Startup Pitch <br />
            Platform in Africa</h1>
          <p>Let's build it together</p>
          <button className='btn1'>Apply Now</button>
          <div className="up_box"><h3>Entrepreneurs</h3></div>
          <div className="up_box2"><h3>Investors</h3></div>
        </div>
        <div className="right-container"></div>
      </div>
    </header>
  )
}