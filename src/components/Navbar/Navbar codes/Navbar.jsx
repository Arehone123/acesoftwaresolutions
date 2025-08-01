import React, { useState } from "react";
import acelogo from "../Navbar assets/ace logo.png";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (
        <>
            <style>{`
        @media (max-width: 768px) {
          .nav-links {
            display: ${isMobileMenuOpen ? "flex" : "none"};
            flex-direction: column;
            background: white;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            padding: 1rem 2rem;
            box-shadow: 0 10px 20px rgba(0,0,0,0.05);
            z-index: 999;
          }

          .hamburger {
            display: block;
            cursor: pointer;
          }
        }

        @media (min-width: 769px) {
          .hamburger {
            display: none;
          }
        }

        .hamburger div {
          width: 25px;
          height: 3px;
          background-color: #333;
          margin: 5px 0;
          transition: 0.4s;
        }

        .nav-link {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: #0891b2;
        }
      `}</style>

            <nav
                style={{
                    position: "fixed",
                    top: 0,
                    width: "100%",
                    background: "rgba(255,255,255,0.95)",
                    backdropFilter: "blur(10px)",
                    zIndex: 1000,
                    padding: "1rem 0",
                    boxShadow: "0 2px 20px rgba(0,0,0,0.1)",
                    transition: "all 0.3s ease",
                }}
            >
                <div
                    style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "0 2rem",
                        position: "relative",
                    }}
                >
                    {/* Logo */}
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <img
                            src={acelogo}
                            alt="Ace Logo"
                            style={{ height: "60px", width: "auto" }}
                            onError={(e) => (e.target.style.display = "none")}
                        />
                        <span
                            style={{
                                fontSize: "1.5rem",
                                fontWeight: 700,
                                color: "black",
                            }}
                        >
              Ace Softwares
            </span>
                    </div>

                    {/* Hamburger Icon */}
                    <div className="hamburger" onClick={toggleMenu}>
                        <div />
                        <div />
                        <div />
                    </div>

                    {/* Navigation Links */}
                    <ul
                        className="nav-links"
                        style={{
                            display: "flex",
                            listStyle: "none",
                            gap: "2rem",
                            margin: 0,
                            padding: 0,
                        }}
                    >
                        <li>
                            <a href="#home" className="nav-link">Home</a>
                        </li>
                        <li>
                            <a href="#features" className="nav-link">About Us</a>
                        </li>
                        <li>
                            <a href="#about" className="nav-link">Services</a>
                        </li>
                        <li>
                            <a href="#pricing" className="nav-link">Software Solutions Form</a>
                        </li>
                        <li>
                            <a href="#contact" className="nav-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
