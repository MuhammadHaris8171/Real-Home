import { BsCart4 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger and Close Icons
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import proHomezLogo from "../../assets/images/Real Home2.jpg";
import { useState, useEffect } from "react";
import styles from "./Header.module.css"; // Import CSS Module

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const location = useLocation();
  useEffect(() => {
    const cartData = localStorage.getItem("cart");
  const cartItems = cartData ? JSON.parse(cartData) : [];
    setCartCount(cartItems.length);
  }, [location]); //
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Check if token exists
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/"); // Redirect to home page after logout
  };

  return (
    <header className={styles.head}>
      <div className={styles.container}>
        <div className={styles.navbar}>
         

          {/* Desktop Navigation */}
          <nav className={styles.navLinks}>
            <NavLink to="/real-estate" className={styles.navbarNavLink}>
              Real Estate
            </NavLink>
            <NavLink to="/home-products" className={styles.navbarNavLink}>
              Home Products
            </NavLink>
            <NavLink to="/vendors" className={styles.navbarNavLink}>
              Vendors
            </NavLink>
            <NavLink to="/contact" className={styles.navbarNavLink}>
              Contact
            </NavLink>
              {/* <NavLink to="/feed" className={styles.navbarNavLink}>
              Time Line
            </NavLink> */}
          </nav>

           {/* Logo */}
           <Link to="/" className={styles.logo}>
            <img src={proHomezLogo} alt="ProHomez Logo" className={styles.headerLogo} />
          </Link>

          {/* Right Side (Icons + Login) */}
          <div className={styles.rightSection}>
            {!isLoggedIn ? (
              <>
                <NavLink to="/login" className={styles.navbarNavLink}>
                  Login
                </NavLink>
                <NavLink to="/vendor-registration" className={styles.navbarNavLink}>
                  Become Pro Vendor
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/vendor-dashboard" className={styles.navbarNavLink}>
                  Vendor Dashboard
                </NavLink>
                <button onClick={handleLogout} className={styles.navbarNavLink}>
                  Logout
                </button>
              </>
            )}
            <NavLink to="/" className={styles.navbarNavLink}>
             <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="url(#grad1)"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style={{ stopColor: "var(--main-primary-color)", stopOpacity: 1 }} />
      <stop offset="100%" style={{ stopColor: "var(--main-secondary-color)", stopOpacity: 1 }} />
    </linearGradient>
  </defs>
  <path d="M12.1 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
           2 6 4 4 6.5 4c1.74 0 3.41 1.01 4.1 2.09C11.09 
           5.01 12.76 4 14.5 4 17 4 19 6 19 8.5c0 3.78-3.4 
           6.86-8.55 11.54L12.1 21.35z" />
</svg>

            </NavLink>
            
            <NavLink to="/cart" className={`${styles.navbarNavLink} ${styles.cartContainer}` }>
            {cartCount > 0 && (
                <span className={styles.cartBadge}>{cartCount}</span>
              )}
                <BsCart4 className={styles.cartIcon} />
            </NavLink>

            {/* Hamburger Icon for Mobile */}
            <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes /> : <FaBars/>}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {/* Mobile Menu */}
{menuOpen && (
  <div className={styles.mobileMenu}>
    <NavLink to="/real-estate" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>
      Real Estate
    </NavLink>
    <NavLink to="/home-products" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>
      Home Products
    </NavLink>
    <NavLink to="/vendors" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>
      Vendors
    </NavLink>
    <NavLink to="/contact" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>
      Contact
    </NavLink>
      {/* <NavLink to="/feed" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>
       Time Line
    </NavLink> */}

    {!isLoggedIn ? (
      <>
        <NavLink to="/login" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>
          Login
        </NavLink>
        <NavLink to="/vendor-registration" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>
          Become Pro Vendor
        </NavLink>
      </>
    ) : (
      <>
        <NavLink to="/vendor-dashboard" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>
          Vendor Dashboard
        </NavLink>
        <button onClick={handleLogout} className={styles.mobileNavLink}>
          Logout
        </button>
      </>
    )}

    {/* 🛒 Cart & Wishlist Icons in Mobile Menu */}
    <div className={styles.mobileIcons}>
      <NavLink to="/" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>
        <FaRegHeart />
      </NavLink>
    </div>
  </div>
  
)}
<NavLink to="/cart" className={`${styles.mobileNavLink1} ${styles.cartContainer}`} onClick={() => setMenuOpen(false)}>
{cartCount > 0 && (
                <span className={styles.cartBadge1}>{cartCount}</span>
              )}
        <BsCart4 />
      </NavLink>
      </div>
    </header>
  );
}

export default Header;
