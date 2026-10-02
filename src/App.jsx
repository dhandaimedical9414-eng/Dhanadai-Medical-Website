import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ShoppingBag,
  Phone,
  Mouse,
  ChevronDown,
} from "lucide-react";
import { motion } from "framer-motion";

import "./App.css";
import Order from "./Order";
import About from "./About";

import desktopBackground from "./assets/backgrounds/desktop-bg.mp4";
import mobileBackground from "./assets/backgrounds/mobile-bg.mp4";
import logo from "./assets/brand/logo.png";

const navItems = [
  { label: "मुख्यपृष्ठ", href: "#home" },
  { label: "आमच्याबद्दल", href: "#about" },
  { label: "औषधे व उत्पादने", href: "#products" },
  { label: "आरोग्य माहिती", href: "#health" },
  { label: "संपर्क", href: "#contact" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showOrderPage, setShowOrderPage] = useState(false);

  /* =========================================================
    SCROLL INDICATOR
    Hide immediately after user starts scrolling
    ========================================================= */

  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowScrollIndicator(false);
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
    ORDER PAGE
    ========================================================= */

  if (showOrderPage) {
    return (
      <Order
        onBack={() => {
          setShowOrderPage(false);
          setMenuOpen(false);

          setTimeout(() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }, 50);
        }}
      />
    );
  }

  /* =========================================================
    MAIN WEBSITE
    ========================================================= */

  return (
    <div className="app">

      {/* =====================================================
          RESPONSIVE VIDEO BACKGROUND
          ===================================================== */}

      <div className="store-background">
        <video
          className="store-background-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source
            src={mobileBackground}
            media="(max-width: 767px)"
            type="video/mp4"
          />

          <source
            src={desktopBackground}
            type="video/mp4"
          />
        </video>
      </div>

      <div className="background-overlay" />

      {/* =====================================================
          HEADER
          ===================================================== */}

      <header className="site-header">
        <div className="navbar-shell">

          {/* BRAND */}

          <a
            href="#home"
            className="brand"
            aria-label="धनदाई मेडीकल मुख्यपृष्ठ"
          >
            <img
              src={logo}
              alt="धनदाई मेडीकल लोगो"
              className="brand-logo"
            />

            <div className="brand-text">
              <span className="brand-name">
                धनदाई मेडीकल
              </span>

              <span className="brand-subtitle">
                अँड जनरल स्टोअर
              </span>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}

          <nav
            className="desktop-nav"
            aria-label="मुख्य नेव्हिगेशन"
          >
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={
                  index === 0
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* HEADER ACTIONS */}

          <div className="header-actions">

            <a
              href="#contact"
              className="call-button"
            >
              <Phone size={17} />
              संपर्क करा
            </a>

            <button
              type="button"
              className="order-button"
              onClick={() => {
                setShowOrderPage(true);
                setMenuOpen(false);

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              <ShoppingBag size={17} />
              औषध ऑर्डर करा
            </button>

          </div>

          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen
                ? "मेनू बंद करा"
                : "मेनू उघडा"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? (
              <X size={23} />
            ) : (
              <Menu size={23} />
            )}
          </button>

        </div>

        {/* ===================================================
            MOBILE NAVIGATION
            =================================================== */}

        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            className="mobile-menu"
            initial={{
              opacity: 0,
              y: -12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <nav aria-label="मोबाइल नेव्हिगेशन">

              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="mobile-nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}

            </nav>

            <button
              type="button"
              className="mobile-order-button"
              onClick={() => {
                setShowOrderPage(true);
                setMenuOpen(false);

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              <ShoppingBag size={18} />
              औषध ऑर्डर करा
            </button>

          </motion.div>
        )}

      </header>

      {/* =====================================================
          HERO
          ===================================================== */}

      <main
        id="home"
        className="hero-section"
      >

        <div className="hero-container">

          {/* HERO CONTENT */}

          <motion.div
            className="hero-content"
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.85,
              ease: "easeOut",
            }}
          >

            <div className="hero-badge">
              <span className="badge-dot" />
              आपल्या आरोग्याचा विश्वास
            </div>

            <h1 className="hero-title">
              धनदाई मेडीकल
              <span>
                अँड जनरल स्टोअर
              </span>
            </h1>

            <p className="hero-description">
              आपल्या आरोग्याची काळजी,
              <br />
              आपल्या विश्वासासोबत.
            </p>

            <div className="hero-actions">

              {/* ORDER BUTTON */}

              <button
                type="button"
                className="hero-order-button"
                onClick={() => {
                  setShowOrderPage(true);

                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                <ShoppingBag size={19} />
                औषध ऑर्डर करा
              </button>

              {/* CONTACT BUTTON */}

              <a
                href="#contact"
                className="hero-contact-button"
              >
                <Phone size={18} />
                संपर्क करा
              </a>

            </div>

          </motion.div>

          {/* =================================================
              FLOATING LOGO
              ================================================= */}

          <motion.div
            className="hero-logo-area"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
          >

            <div className="logo-orbit">

              <div className="logo-glass">

                <img
                  src={logo}
                  alt="धनदाई मेडीकल अँड जनरल स्टोअर"
                  className="hero-main-logo"
                />

              </div>

            </div>

          </motion.div>

        </div>

        {/* ===================================================
            SCROLL INDICATOR
            Hidden after first scroll
            =================================================== */}

        {showScrollIndicator && (
          <a
            href="#about"
            className="scroll-indicator"
            aria-label="खाली स्क्रोल करा"
          >
            <Mouse
              size={24}
              strokeWidth={1.5}
            />

            <span>
              खाली स्क्रोल करा
            </span>

            <ChevronDown size={17} />
          </a>
        )}

      </main>

      {/* =====================================================
          ABOUT SECTION
          ===================================================== */}

      <About />

    </div>
  );
}

export default App;