import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-wrap">
          <ul className="left">
            <li>
              <a href="/">Logo Here</a>
            </li>
          </ul>
          <ul className="right">
            <li>
              <a href="/">
                <div className="shoping_cart">
                  <i className="fas fa-cart-plus"></i>
                  <span className="cart_count"> 0 </span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
