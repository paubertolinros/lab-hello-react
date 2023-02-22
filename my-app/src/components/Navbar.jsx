import ironhackLogoXs from '../images/ironhackLogoXs.png'
import menuTop from '../images/menuTop.png'

const Navbar = () => {
  return (  
    <ul className="navbar-icon-burguer">
      <li><img src={ironhackLogoXs} alt="Ironhack logo"/></li> 
      <li><img src={menuTop} alt="burguer menu icon"/></li>
    </ul>
  )
}
export default Navbar;