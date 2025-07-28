import React from "react";
import yourLogo from "../About us Assets/ace logo.jpg";

const AboutUs = () => {
    return (
        <div
            className="about-us-section"
            style={{
                width: "100%",
                backgroundColor: "white",
                fontFamily: "Poppins, sans-serif",
                padding: "40px 20px",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: "40px",
                boxSizing: "border-box",
                borderRadius: "5px",
                border: "2px solid black",
                maxWidth: "1200px",
                margin: "0 auto"
            }}
        >
            {/* Text Content */}
            <div style={{ flex: "1", minWidth: "500px", maxWidth: "600px" }}>
                <h1 style={{ fontSize: "2.9rem", lineHeight: "2.5", textAlign: "center", position: "relative", color: "Black" }}>
                    About Ace Softwares
                </h1>

                <p style={{ lineHeight: "1.8", fontSize: "1rem", color: "#333" }}>
                    Ace Software is a subgroup of Ace The Academia with a vision to empower South Africans to transform their lives through Technology and education.
                    We aim to build robust and innovative software solutions for Businesses and also every citizen of South Africa to empower them and to drive digital transformation in South Africa fast.
                </p>
            </div>

            {/* Logo */}
            <div style={{ flex: "0 0 auto", minWidth: "200px", textAlign: "center" }}>
                <img
                    src={yourLogo}
                    alt="Ace the Academia Logo"
                    style={{ width: "100%", maxWidth: "400px", height: "auto" }}
                    onError={(e) => (e.target.style.display = "none")}
                />
            </div>
        </div>
    );
};

export default AboutUs;