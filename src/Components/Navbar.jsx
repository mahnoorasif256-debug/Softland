import React , {useState , useEffect} from 'react';


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 10);
    f();
    window.addEventListener('scroll', f);
    return () => window.removeEventListener('scroll', f);
  }, []);


//  ${scrolled ? styles.scrolled : ''}
  return (
<>
<nav className={`header navbar navbar-expand-lg ${scrolled ? 'scrolled' : ''}`}>
  <div className="container-lg">
    <a className="navbar-brand fs-2 fw-bold sitename" href="#">SoftLand</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto gap-3 mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">About</a>
        </li>
         <li className="nav-item">
          <a className="nav-link" href="#features">Features</a>
        </li>
         <li className="nav-item">
          <a className="nav-link" href="#pricing">Pricing</a>
        </li>
      <li className="nav-item dropdown">
  <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown <i style={{fontSize: '10px'}} className="fa-solid fa-chevron-down"></i>
  </a>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Dropdown 1</a></li>
    
    {/* Nested Dropdown */}
    <li className="dropdown-submenu dropend">
      <a className="dropdown-item" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Deep Dropdown  <i style={{fontSize: '10px'}} className="fa-solid fa-chevron-down"></i>
      </a>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">Deep Dropdown 1</a></li>
        <li><a className="dropdown-item" href="#">Deep Dropdown 2</a></li>
        <li><a className="dropdown-item" href="#">Deep Dropdown 3</a></li>
        <li><a className="dropdown-item" href="#">Deep Dropdown 4</a></li>
        <li><a className="dropdown-item" href="#">Deep Dropdown 5</a></li>
      </ul>
    </li>

    <li><a className="dropdown-item" href="#">Dropdown 2</a></li>
    <li><a className="dropdown-item" href="#">Dropdown 3</a></li>
    <li><a className="dropdown-item" href="#">Dropdown 4</a></li>
  </ul>
</li>
       <li className="nav-item">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
    
    </div>
  </div>
</nav>



</>
  )
}

export default Navbar