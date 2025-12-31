export default function Header() {
    return ( 
        <header className="header">
            <a href="#home" style={{ textDecoration: 'none', color: 'white' }}>
              <h1 className="header-h1">Dental Care Center</h1>
            </a>
            <nav className="navigation">
              <a href="#services">Services</a>
              <a href="#hours">Opening Hours</a>
              <a href="#contact">Contact</a>
            </nav>
        </header>
    )
}