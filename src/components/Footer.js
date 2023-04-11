import React from "react"
const Footer = () => {
  return(
    <footer>
            <div>
            <img
              src={require("../assets/footer-logo.png")}
              alt="Little Lemon logo" className="footer-logo"
            ></img>
            </div>
            <nav className="Navi">
                <h3>Navigation</h3>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
            </nav>
            <nav className="Contact">
                <h3>Contact</h3>
            <ul>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
            </nav>
            <nav className="socials">
                <h3>Social Media Links</h3>
            <ul>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
            </nav>
        </footer>
    )
}

export default Footer