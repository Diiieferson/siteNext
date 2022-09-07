import Link from "next/link";

const linkStyle = {
  marginRight: 15
}

const Menu = () => (
  <div>
    <nav>
      <div className="max-width">
        <div className="logo" >
          <a href="/" >HomePage</a>
        </div>
        <ul className="menu">
          <li><a href="/" className="menu-btn">Home</a></li>
          <li><a href="/sobre" className="menu-btn">Sobre</a></li>
          <li><a href="/contato" className="menu-btn">Contato</a></li>
          <li><a href="/signup" className="menu-btn">SignUp</a></li>
        </ul>
        <div className="menu-btn">
          Menu
        </div>
      </div>
    </nav>

  </div>
);

export default Menu;