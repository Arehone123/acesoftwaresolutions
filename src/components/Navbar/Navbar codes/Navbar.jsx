import acelogo from "../Navbar assets/ace logo.png"

const Navbar = () => {

    return (
        <>
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
                    transition: "all 0.3s ease"
                }}>
                <div
                    style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "0 2rem"
                    }}>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem"
                    }}>
                        <img
                            src={acelogo}
                            alt="EduTrack AI Logo"
                            style={{
                                height: "80px",
                                width: "auto"
                            }}
                            onError={(e) => e.target.style.display = 'none'}
                        />
                        <span style={{
                            fontSize: "1.5rem",
                            fontWeight: 700,
                            color: "Black"
                        }}>Ace Softwares</span>
                    </div>
                    <ul style={{
                        display: "flex",
                        listStyle: "none",
                        gap: "2rem",
                        marginLeft: "auto",
                        margin: 0,
                        padding: 0
                    }}>
                        <li>
                            <a href="#home" style={{
                                textDecoration: "none",
                                color: "#333",
                                fontWeight: 500,
                                transition: "color 0.3s ease"
                            }}>Home</a>
                        </li>
                        <li>
                            <a href="#features" style={{
                                textDecoration: "none",
                                color: "#333",
                                fontWeight: 500,
                                transition: "color 0.3s ease"
                            }}>About Us</a>
                        </li>
                        <li>
                            <a href="#about" style={{
                                textDecoration: "none",
                                color: "#333",
                                fontWeight: 500,
                                transition: "color 0.3s ease"
                            }}>Services</a>
                        </li>
                        <li>
                            <a href="#pricing" style={{
                                textDecoration: "none",
                                color: "#333",
                                fontWeight: 500,
                                transition: "color 0.3s ease"
                            }}>Software Solutions Form</a>
                        </li>
                        <li>
                            <a href="#contact" style={{
                                textDecoration: "none",
                                color: "#333",
                                fontWeight: 500,
                                transition: "color 0.3s ease"
                            }}>Contact</a>
                        </li>
                    </ul>

                </div>
            </nav>

        </>
    )
}

export default Navbar
