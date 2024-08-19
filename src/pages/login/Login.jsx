
import '../login/login.css'
import lgoin_img from '../../assets/form-picture.jpg'



export function Login() {
  return (
    <div className="login_container">
      <div className="container">
        <div className="img-container">
          <img src={lgoin_img} alt="" />
        </div>
        <div className="form_container">
          <h2>Login</h2>
          <form>
            <input type="text" placeholder='Enter your email or username' />
            <input type="text" placeholder='Enter your password' />
            <button className='login_btn'>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}