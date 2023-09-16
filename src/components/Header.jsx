import tv from "../assets/tv.png"
import Search from "./Search"
import Menu from "../assets/Menu.png" 

const Header = () => {
  return (
    <nav>
       <div className="logo">
        <img src={tv} alt="logo" />
        <h2>MovieBox</h2>
       </div>
       <Search/>
       <div className="menu">
        <p>Sign In</p>
        <img src={Menu} alt="menu" />
       </div>
    </nav>
  )
}

export default Header
