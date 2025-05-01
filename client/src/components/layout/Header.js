import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAuth } from '../../context/Auth';
import toast from 'react-hot-toast';
import SearchInput from '../forms/SearchInput';
import useCategory from '../../hooks/useCategory';
import { useCart } from '../../context/Cart';
import { Badge } from 'antd';
import logo from '../../assests/logo.png';

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory();

  const handleLogout = () => {
    setAuth({ ...auth, user: null, token: '' });
    localStorage.removeItem('auth');
    toast.success('Logout Successfully');
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      document.querySelector('.navbar').classList.add('scrolled');
    } else {
      document.querySelector('.navbar').classList.remove('scrolled');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm py-3">
        <div className="container-fluid">
          {/* Logo Section */}
          <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
            <img src={logo} alt="Logo" className="logo-img" />
            <span className="brand-name">Anoos Fashions</span>
          </Link>

          {/* Navbar Toggle Button for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* Navbar Links Section */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
              {/* Search Input (Mobile-Friendly) */}
              <li className="nav-item d-flex align-items-center d-lg-none">
                <SearchInput />
              </li>

              {/* Home Link */}
              <li className="nav-item">
                <NavLink to="/" className="nav-link">Home</NavLink>
              </li>

              {/* Categories Dropdown */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/categories"
                  data-bs-toggle="dropdown"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/categories">
                      All Categories
                    </Link>
                  </li>
                  {categories?.map((c) => (
                    <li key={c._id}>
                      <Link className="dropdown-item" to={`/category/${c.slug}`}>
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {/* Authentication Links */}
              {!auth?.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link">Register</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">Login</NavLink>
                  </li>
                </>
              ) : (
                <li className="nav-item dropdown">
                  <span
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {auth?.user?.name}
                  </span>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink
                        to={`/dashboard/${auth?.user?.role === 1 ? 'admin' : 'user'}`}
                        className="dropdown-item"
                      >
                        Dashboard
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/login" onClick={handleLogout} className="dropdown-item">
                        Logout
                      </NavLink>
                    </li>
                  </ul>
                </li>
              )}

              {/* Cart Badge */}
              <li className="nav-item d-flex align-items-center">
                <Badge count={cart?.length} showZero>
                  <NavLink to="/cart" className="nav-link">Cart</NavLink>
                </Badge>
              </li>

              {/* Search bar (Desktop only) */}
              <li className="nav-item d-none d-lg-block">
                <SearchInput />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
