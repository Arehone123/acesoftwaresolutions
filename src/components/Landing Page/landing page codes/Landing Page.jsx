import React from "react";
import IpfiKwinda from "/src/components/Landing Page/landing page assets/ipfi.jpg";
import AnitaJohn from "/src/components/Landing Page/landing page assets/Nita.jpg";
import Funanani from "/src/components/Landing Page/landing page assets/funi.jpg";

const LandingPage = () => {
    return (
        <>
            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }

                .landing-container {
                    background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%);
                    position: relative;
                    overflow: hidden;
                }

                .landing-container::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: radial-gradient(circle at 20% 50%, rgba(255, 195, 0, 0.1) 0%, transparent 50%),
                                radial-gradient(circle at 80% 20%, rgba(255, 195, 0, 0.05) 0%, transparent 50%);
                    pointer-events: none;
                }

                .text-content {
                    animation: slideInLeft 1s ease-out;
                    position: relative;
                    z-index: 2;
                }

                .main-heading {
                    font-size: 3.5rem;
                    font-weight: 700;
                    margin-bottom: 2rem;
                    background: linear-gradient(45deg, #FFC300, #FFE066);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .welcome-text {
                    animation: fadeInUp 1s ease-out 0.3s both;
                    font-size: 1.4rem;
                    margin-bottom: 1rem;
                    position: relative;
                }

                .quality-text {
                    animation: fadeInUp 1s ease-out 0.6s both;
                    font-size: 1.4rem;
                    font-weight: 500;
                }

                .images-container {
                    animation: slideInRight 1s ease-out 0.4s both;
                    position: relative;
                    z-index: 2;
                }

                .main-image {
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    filter: brightness(0.9) contrast(1.1);
                    box-shadow: 0 10px 30px rgba(255, 195, 0, 0.2);
                }

                .main-image:hover {
                    transform: scale(1.02);
                    filter: brightness(1) contrast(1.2);
                    box-shadow: 0 15px 40px rgba(255, 195, 0, 0.3);
                }

                .side-image {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    filter: brightness(0.85) contrast(1.1);
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
                }

                .side-image:hover {
                    transform: translateX(-5px) scale(1.05);
                    filter: brightness(1) contrast(1.2);
                    box-shadow: 0 12px 35px rgba(255, 195, 0, 0.2);
                }

                .floating-element {
                    animation: float 3s ease-in-out infinite;
                }

                .text-content::before {
                    content: '';
                    position: absolute;
                    top: -20px;
                    left: -20px;
                    width: 100px;
                    height: 100px;
                    background: radial-gradient(circle, rgba(255, 195, 0, 0.1) 0%, transparent 70%);
                    border-radius: 50%;
                    animation: float 4s ease-in-out infinite reverse;
                }
            `}</style>

            <div className="landing-container" style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: "white",
                padding: "40px 60px",
                boxSizing: "border-box",
                fontFamily: "'Poppins', sans-serif",
                margin: "40px"
            }}>
                {/* Left Side: Text */}
                <div className="text-content" style={{
                    flex: 1,
                    paddingRight: "40px",
                    maxWidth: "600px"
                }}>
                    <h1 className="main-heading">
                        Welcome to Ace Softwares
                    </h1>
                    <p className="welcome-text" style={{
                        lineHeight: "1.6",
                        color: "#f0f0f0",
                        marginBottom: "1.5rem"
                    }}>
                        Welcome to the Ace Software Solutions application site.
                    </p>
                    <p className="quality-text floating-element" style={{
                        lineHeight: "1.6",
                        color: "#e0e0e0",
                        background: "linear-gradient(45deg, transparent, rgba(255, 195, 0, 0.1), transparent)",
                        padding: "15px 0",
                        borderRadius: "8px"
                    }}>
                        Ace Softwares, where quality software is delivered!
                    </p>
                </div>

                {/* Right Side: Images in Square Layout */}
                <div className="images-container" style={{
                    display: "flex",
                    flex: 1,
                    maxWidth: "550px",
                    height: "550px",
                    alignItems: "stretch",
                    gap: "30px",
                }}>
                    {/* Main Image: Left (Tall Image) */}
                    <img
                        src={Funanani}
                        alt="Team Member"
                        className="main-image"
                        style={{
                            width: "65%",
                            height: "100%",
                            objectFit: "cover",
                            borderTopLeftRadius: "15px",
                            borderBottomLeftRadius: "15px",
                            border: "2px solid rgba(255, 195, 0, 0.3)"
                        }}
                    />

                    {/* Right Side: Two Stacked Images */}
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "50%",
                        gap: "30px",
                    }}>
                        <img
                            src={AnitaJohn}
                            alt="Team Member"
                            className="side-image"
                            style={{
                                height: "calc(50% - 15px)",
                                width: "100%",
                                objectFit: "cover",
                                borderTopRightRadius: "15px",
                                border: "2px solid rgba(255, 195, 0, 0.2)"
                            }}
                        />
                        <img
                            src={IpfiKwinda}
                            alt="Team Member"
                            className="side-image"
                            style={{
                                height: "calc(50% - 15px)",
                                width: "100%",
                                objectFit: "cover",
                                borderBottomRightRadius: "15px",
                                border: "2px solid rgba(255, 195, 0, 0.2)"
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingPage;