import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import twitter from "../assets/twitter.png"
import youtube from "../assets/youtube.png" 

const Footer = () => {
  return (
    <footer>
        <div className="social-icon">
          <img src={facebook} alt="facebook" />  
          <img src={instagram} alt="instagram" />
          <img src={twitter} alt="twitter" />
          <img src={youtube} alt="youtube" />
        </div>
        <div className="terms">
            <p>Condition of Use</p>
            <p>Privacy & Policy</p>
            <p>Press Room</p>
        </div>
        <p>&copy; 2021 MovieBox By Adriana Eke Prayudha</p>
    </footer>
  )
}

export default Footer
