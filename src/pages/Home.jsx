import React from 'react';
import logo from "../assets/SlotZi1-removebg-preview.png";
import logo2 from "../assets/SlotZifinal.png";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import team4 from "../assets/team4.png";
import team5 from "../assets/team5.png";
import team6 from "../assets/team6.png";
import menu from "../assets/menu.png";
import seating from "../assets/seating.png";
import reserve from "../assets/reserve.png";
import organization from "../assets/organization.png";

import { motion } from 'framer-motion';
import "../style/Home.css";

const Home = () => {
    return (
        <div className="home-container">

            {/* Navigation Bar */}
            <nav className="navbar">
                <div className="logo"><img src={logo} alt="App Logo" className="app-logo" />
                </div>
                <ul className="nav-links">
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#what-we-do">What We Do</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </nav>

            {/* Hero Section */}
            <section className="hero-section" id="hero">
                <div className="bg">
                    <div className="semicircle top"></div>
                    <div className="semicircle bottom"></div>
                </div>
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="header-text">SlotZi</h1>
                    <motion.button
                        className="cta-button"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        REGISTER
                    </motion.button>
                </motion.div>
            </section>

            {/* What We Do Section */}
            <section className="what-we-do" id="what-we-do">
                <h2 className="section-title">What We Do</h2>
                <p>
                    We provide a smart booking and reservation platform where restaurants and various business organizations can register and allow customers to book time slots effortlessly. Our system is designed to streamline appointment scheduling, table reservations, and service bookings, enhancing customer experience and business efficiency.
                    </p>
            </section>

            {/* Features Section */}
            <section className="features-section" id="features">
                <h2 className="section-title">Features</h2>
                <div className="features-grid">
                    <div className="feature">
                        <img src={menu} alt="menu" className="feature-img" />
                        <p className="feature-text">Easy Booking System</p>
                        <p className="feature-description">Customers can reserve time slots hassle-free</p>
                    </div>
                    <div className="feature">
                        <img src={seating} alt="seating" className="feature-img" />
                        <p className="feature-text">Business-Friendly Dashboard</p>
                        <p className="feature-description">Manage bookings, track reservations, and update availability.</p>
                    </div>
                    <div className="feature">
                        <img src={reserve} alt="reserve" className="feature-img" />
                        <p className="feature-text">Menu Viewing Option </p>
                        <p className="feature-description">Restaurants can showcase their menus for customers to explore before booking.</p>
                    </div>
                    <div className="feature">
                        <img src={organization} alt="organization" className="feature-img" />
                        <p className="feature-text"> Customizable for Any Business</p>
                        <p className="feature-description"> Ideal for restaurants, salons, gyms, event spaces, and more.</p>
                    </div>
                </div>
            </section>

            {/* Logo Section */}
            <section className="logo-section">
                <img src={logo2} alt="App Logo" className="app-logo" />

                <div className="logo-description">
                    <h2>OUR LOGO</h2>
                    <p>
                        Our logo represents innovation and trust. It was designed with simplicity and elegance in mind,
                        using a combination of modern typography and symbolic elements to reflect our commitment to
                        financial management and growth.
                    </p>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section" id="team">
                <h2 className="section-title">Meet Our Team</h2>
                <div className="team-members">
                    {[
                        { img: team5, name: "Nishanjali", role: "Frontend developer - Website and marketing" },
                        { img: team2, name: "Uvindu", role: "Backend developer - Website and marketing" },
                        { img: team6, name: "Abinath", role: "Frontend developer - Mobile" },
                        { img: team4, name: "Ransika", role: "Backend developer - Mobile" },
                        { img: team3, name: "Kavindu", role: "Frontend developer - Mobile" },
                        { img: team1, name: "Seniya", role: "Backend developer - Mobile" },
                    ].map((member, index) => (
                        <motion.div
                            key={index}
                            className="team-member"
                            whileHover={{ scale: 1.5, y: -15 }}
                            transition={{ type: "spring", stiffness: 3500 }}
                        >
                            <div className="individual-member">
                                <img src={member.img} alt={`Team Member ${index + 1}`} className="team-img" />
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Contact Us Section */}
            <section className="contact-section" id="contact">
                <h2 className="section-title">Contact Us</h2>
                <p>Email: slotzi@gmail.com</p>
                <p>Phone: +94 71 667 2616</p>
            </section>
        </div>
    );
};

export default Home;
