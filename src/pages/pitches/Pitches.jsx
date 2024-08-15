import './pitch.css'
import edutech from '../../assets/dutech.jpg'
import fintech from '../../assets/fintech.jpg'
import agricTech from '../../assets/agritech.jpg'
import block from '../../assets/blockchain.jpg'
import robofarm from '../../assets/agrit.jpg'
import heatech from '../../assets/heateck.jpg'
export function Pitches() {
  return (
    <div className="pitches_container">
      <div className="heading_pitch">Pitches</div>
      <div className="pitches">
        <div className="pitch_card">
          <img src={edutech} alt="" />
          <div className="pitch_content">
            <div className="title">
              <h3>EduTrack</h3>
              <p>Status: <span>Approved</span></p>
            </div>
            <div className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla doloremque in minus quas ipsam, tempore ipsum repellendus eum ab temporibus?</div>
            <button className='pitch_btn'>Invest in Pitch</button>
          </div>
        </div>
        <div className="pitch_card">
          <img src={fintech} alt="" />
          <div className="pitch_content">
            <div className="title">
              <h3>SaveKash</h3>
              <p>Status: <span>Approved</span></p>
            </div>
            <div className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla doloremque in minus quas ipsam, tempore ipsum repellendus eum ab temporibus?</div>
            <button className='pitch_btn'>Invest in Pitch</button>
          </div>
        </div>
        <div className="pitch_card">
          <img src={agricTech} alt="" />
          <div className="pitch_content">
            <div className="title">
              <h3>FarmWatch</h3>
              <p>Status: <span>Approved</span></p>
            </div>
            <div className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla doloremque in minus quas ipsam, tempore ipsum repellendus eum ab temporibus?</div>
            <button className='pitch_btn'>Invest in Pitch</button>
          </div>
        </div>
        <div className="pitch_card">
          <img src={block} alt="" />
          <div className="pitch_content">
            <div className="title">
              <h3>CitCoin</h3>
              <p>Status: <span>Approved</span></p>
            </div>
            <div className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla doloremque in minus quas ipsam, tempore ipsum repellendus eum ab temporibus?</div>
            <button className='pitch_btn'>Invest in Pitch</button>
          </div>
        </div>
        <div className="pitch_card">
          <img src={robofarm} alt="" />
          <div className="pitch_content">
            <div className="title">
              <h3>RoboFarm</h3>
              <p>Status: <span>Approved</span></p>
            </div>
            <div className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla doloremque in minus quas ipsam, tempore ipsum repellendus eum ab temporibus?</div>
            <button className='pitch_btn'>Invest in Pitch</button>
          </div>
        </div>
        <div className="pitch_card">
          <img src={heatech} alt="" />
          <div className="pitch_content">
            <div className="title">
              <h3>DailDoc</h3>
              <p>Status: <span>Approved</span></p>
            </div>
            <div className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla doloremque in minus quas ipsam, tempore ipsum repellendus eum ab temporibus?</div>
            <button className='pitch_btn'>Invest in Pitch</button>
          </div>
        </div>
      </div>
    </div>
  )
}