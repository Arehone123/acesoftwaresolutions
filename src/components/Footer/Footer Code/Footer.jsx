import React from "react";
import yourLogo from "../Footer assets/ace logo.png"

const Footer = () => {
    return (
        <footer
            style={{
                backgroundColor: "black",
                color: "#fff",
                padding: "40px 20px",
                fontFamily: "Poppins, sans-serif",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "40px",
            }}
        >
            {/* Logo + Tagline */}
            <div style={{ flex: "1", minWidth: "200px" }}>
                <img
                    src={yourLogo}
                    alt="Ace the Academia Logo"
                    style={{ width: "150px", height: "auto", marginBottom: "15px" }}
                    onError={(e) => (e.target.style.display = "none")}
                />
                <p>Bringing Digital Transformation to your door step</p>
            </div>

            {/* Quick Links */}
            <div style={{ flex: "1", minWidth: "200px" }}>
                <h3 style={{ marginBottom: "10px" }}>Quick Links</h3>
                <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
                    <li><a href="/" style={{ color: "#fff", textDecoration: "none" }}>Home</a></li>
                    <li><a href="/about" style={{ color: "#fff", textDecoration: "none" }}>About Us</a></li>
                    <li><a href="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</a></li>
                    <li><a href="/programs" style={{ color: "#fff", textDecoration: "none" }}>Programs</a></li>
                </ul>
            </div>

            {/* Contact Info or Address */}
            <div style={{ flex: "1", minWidth: "200px" }}>
                <h3 style={{ marginBottom: "10px" }}>Contact</h3>
                <p>Email: info@acetheacademia.co.za</p>
                <p>Phone: +27 60 123 4567</p>
                <p>South Africa</p>
            </div>

            {/* Copyright */}
            <div style={{ width: "100%", textAlign: "center", marginTop: "30px", fontSize: "0.9rem" }}>
                <hr style={{ borderColor: "#ffffff33", marginBottom: "15px" }} />
                &copy; {new Date().getFullYear()} Ace the Academia. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
