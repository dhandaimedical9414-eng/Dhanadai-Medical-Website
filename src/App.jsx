import {
  useEffect,
  useRef,
  useState,
} from "react";

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
import Products from "./Products";
import Health from "./Health";
import Reviews from "./Reviews";
import Contact from "./Contact";

import desktopBackground from "./assets/backgrounds/desktop-bg.mp4";
import mobileBackground from "./assets/backgrounds/mobile-bg.mp4";
import logo from "./assets/brand/logo.png";

/* =========================================================
   NAVIGATION
   ========================================================= */

const navItems = [
  {
    label: "मुख्यपृष्ठ",
    href: "#home",
  },
  {
    label: "आमच्याबद्दल",
    href: "#about",
  },
  {
    label: "औषधे व उत्पादने",
    href: "#products",
  },
  {
    label: "आरोग्य माहिती",
    href: "#health",
  },
];

/* =========================================================
   SECTION IDS
   ========================================================= */

const sectionIds = [
  "home",
  "about",
  "products",
  "health",
  "contact",
];

/* =========================================================
   APP
   ========================================================= */

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [showOrderPage, setShowOrderPage] =
    useState(false);

  /* =======================================================
     ACTIVE SECTION
     ======================================================= */

  const [activeSection, setActiveSection] =
    useState(() => {
      const hash = window.location.hash;

      if (
        hash &&
        sectionIds.includes(hash.replace("#", ""))
      ) {
        return hash;
      }

      return "#home";
    });

  /* =======================================================
     SCROLL INDICATOR
     ======================================================= */

  const [showScrollIndicator, setShowScrollIndicator] =
    useState(true);

  /* =======================================================
     PROGRAMMATIC SCROLL CONTROL
     ======================================================= */

  const isSmoothScrollingRef = useRef(false);

  const targetSectionRef = useRef(null);

  const scrollTimeoutRef = useRef(null);

  /* =======================================================
     FIND CURRENT SECTION WHILE MANUAL SCROLLING
     ======================================================= */

  useEffect(() => {
    if (showOrderPage) {
      return;
    }

    let ticking = false;

    const updateActiveSection = () => {
      ticking = false;

      /*
        जर आपण navbar click करून smooth scroll करत असू,
        तर smooth scroll पूर्ण होईपर्यंत active line बदलू नये.
      */

      if (isSmoothScrollingRef.current) {
        const targetId =
          targetSectionRef.current;

        if (targetId) {
          const targetElement =
            document.getElementById(targetId);

          if (targetElement) {
            const rect =
              targetElement.getBoundingClientRect();

            /*
              Target section viewport मध्ये पुरेसा आला
              की smooth-scroll lock release करतो.
            */

            const activationPoint =
              window.innerHeight * 0.30;

            if (
              rect.top <= activationPoint &&
              rect.bottom >= activationPoint
            ) {
              isSmoothScrollingRef.current =
                false;

              targetSectionRef.current =
                null;
            } else {
              return;
            }
          }
        }
      }

      const activationPoint =
        window.innerHeight * 0.30;

      let currentSection = "#home";

      sectionIds.forEach((id) => {
        const element =
          document.getElementById(id);

        if (!element) {
          return;
        }

        const rect =
          element.getBoundingClientRect();

        if (rect.top <= activationPoint) {
          currentSection = `#${id}`;
        }
      });

      setActiveSection(currentSection);
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(
          updateActiveSection
        );

        ticking = true;
      }

      if (window.scrollY > 5) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    /*
      Initial calculation
    */

    updateActiveSection();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, [showOrderPage]);

  /* =======================================================
     CLEANUP SCROLL TIMEOUT
     ======================================================= */

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(
          scrollTimeoutRef.current
        );
      }
    };
  }, []);

  /* =======================================================
     SMOOTH NAVIGATION
     ======================================================= */

  const handleNavClick = (
    event,
    href
  ) => {
    event.preventDefault();

    const sectionId =
      href.replace("#", "");

    const targetElement =
      document.getElementById(sectionId);

    if (!targetElement) {
      return;
    }

    /*
      Close mobile menu immediately
    */

    setMenuOpen(false);

    /*
      Set active line immediately.
      त्यामुळे click केल्यावर line लगेच target
      navigation वर जाते.
    */

    setActiveSection(href);

    /*
      Lock active section during smooth scroll
    */

    isSmoothScrollingRef.current =
      true;

    targetSectionRef.current =
      sectionId;

    /*
      Update browser URL without triggering
      browser's default hash jump.
    */

    window.history.pushState(
      null,
      "",
      href
    );

    /*
      Clear previous timeout
    */

    if (scrollTimeoutRef.current) {
      clearTimeout(
        scrollTimeoutRef.current
      );
    }

    /*
      Smooth scroll
    */

    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    /*
      Safety release.
      जर browser smooth-scroll event detect
      करू शकला नाही तरी lock कायम राहणार नाही.
    */

    scrollTimeoutRef.current =
      setTimeout(() => {
        isSmoothScrollingRef.current =
          false;

        targetSectionRef.current =
          null;
      }, 1200);
  };

  /* =======================================================
     BRAND / HOME
     ======================================================= */

  const handleBrandClick = (
    event
  ) => {
    handleNavClick(
      event,
      "#home"
    );
  };

  /* =======================================================
     CONTACT NAVIGATION
     ======================================================= */

  const handleContactClick = (
    event
  ) => {
    handleNavClick(
      event,
      "#contact"
    );
  };

  /* =======================================================
     ORDER PAGE
     ======================================================= */

  const handleOpenOrder = () => {
    setShowOrderPage(true);

    setMenuOpen(false);

    /*
      Order page उघडताना scroll top
    */

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =======================================================
     BACK FROM ORDER PAGE
     ======================================================= */

  const handleBackFromOrder = () => {
    setShowOrderPage(false);

    setMenuOpen(false);

    setActiveSection("#home");

    isSmoothScrollingRef.current =
      false;

    targetSectionRef.current =
      null;

    window.history.replaceState(
      null,
      "",
      "#home"
    );

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 50);
  };

  /* =======================================================
     HANDLE BROWSER BACK / FORWARD
     ======================================================= */

  useEffect(() => {
    const handlePopState = () => {
      const hash =
        window.location.hash;

      if (
        hash &&
        sectionIds.includes(
          hash.replace("#", "")
        )
      ) {
        const targetElement =
          document.getElementById(
            hash.replace("#", "")
          );

        if (targetElement) {
          setActiveSection(hash);

          isSmoothScrollingRef.current =
            true;

          targetSectionRef.current =
            hash.replace("#", "");

          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

          if (scrollTimeoutRef.current) {
            clearTimeout(
              scrollTimeoutRef.current
            );
          }

          scrollTimeoutRef.current =
            setTimeout(() => {
              isSmoothScrollingRef.current =
                false;

              targetSectionRef.current =
                null;
            }, 1200);
        }
      } else {
        setActiveSection("#home");
      }
    };

    window.addEventListener(
      "popstate",
      handlePopState
    );

    return () => {
      window.removeEventListener(
        "popstate",
        handlePopState
      );
    };
  }, []);

  /* =======================================================
     ORDER PAGE
     ======================================================= */

  if (showOrderPage) {
    return (
      <Order
        onBack={
          handleBackFromOrder
        }
      />
    );
  }

  /* =======================================================
     MAIN WEBSITE
     ======================================================= */

  return (
    <div className="app">

      {/* ===================================================
          RESPONSIVE VIDEO BACKGROUND
          =================================================== */}

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

      {/* ===================================================
          HEADER
          =================================================== */}

      <header className="site-header">

        <div className="navbar-shell">

          {/* =================================================
              BRAND
              ================================================= */}

          <a
            href="#home"
            className="brand"
            aria-label="धनदाई मेडीकल मुख्यपृष्ठ"
            onClick={handleBrandClick}
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

          {/* =================================================
              DESKTOP NAVIGATION
              ================================================= */}

          <nav
            className="desktop-nav"
            aria-label="मुख्य नेव्हिगेशन"
          >

            {navItems.map((item) => {

              const isActive =
                activeSection === item.href;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={
                    isActive
                      ? "nav-link active"
                      : "nav-link"
                  }
                  onClick={(event) =>
                    handleNavClick(
                      event,
                      item.href
                    )
                  }
                >
                  {item.label}
                </a>
              );
            })}

          </nav>

          {/* =================================================
              HEADER ACTIONS
              ================================================= */}

          <div className="header-actions">

            {/* CONTACT */}

            <a
              href="#contact"
              className="call-button"
              onClick={
                handleContactClick
              }
            >
              <Phone size={17} />

              संपर्क करा
            </a>

            {/* ORDER */}

            <button
              type="button"
              className="order-button"
              onClick={
                handleOpenOrder
              }
            >
              <ShoppingBag
                size={17}
              />

              औषध ऑर्डर करा
            </button>

          </div>

          {/* =================================================
              MOBILE MENU BUTTON
              ================================================= */}

          <button
            type="button"
            className="mobile-menu-button"
            onClick={() =>
              setMenuOpen(
                !menuOpen
              )
            }
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

        {/* =================================================
            MOBILE NAVIGATION
            ================================================= */}

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

            <nav
              aria-label="मोबाइल नेव्हिगेशन"
            >

              {navItems.map(
                (item) => {

                  const isActive =
                    activeSection ===
                    item.href;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className={
                        isActive
                          ? "mobile-nav-link active"
                          : "mobile-nav-link"
                      }
                      onClick={(event) =>
                        handleNavClick(
                          event,
                          item.href
                        )
                      }
                    >
                      {item.label}
                    </a>
                  );
                }
              )}

            </nav>

            {/* MOBILE ORDER BUTTON */}

            <button
              type="button"
              className="mobile-order-button"
              onClick={
                handleOpenOrder
              }
            >
              <ShoppingBag
                size={18}
              />

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

          {/* =================================================
              HERO CONTENT
              ================================================= */}

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
                onClick={
                  handleOpenOrder
                }
              >
                <ShoppingBag
                  size={19}
                />

                औषध ऑर्डर करा

              </button>

              {/* CONTACT BUTTON */}

              <a
                href="#contact"
                className="hero-contact-button"
                onClick={
                  handleContactClick
                }
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

        {/* =================================================
            SCROLL INDICATOR
            ================================================= */}

        {showScrollIndicator && (
          <a
            href="#about"
            className="scroll-indicator"
            aria-label="खाली स्क्रोल करा"
            onClick={(event) =>
              handleNavClick(
                event,
                "#about"
              )
            }
          >

            <Mouse
              size={24}
              strokeWidth={1.5}
            />

            <span>
              खाली स्क्रोल करा
            </span>

            <ChevronDown
              size={17}
            />

          </a>
        )}

      </main>

      {/* =====================================================
          ABOUT
          ===================================================== */}

      <About />

      {/* =====================================================
          PRODUCTS
          ===================================================== */}

      <Products />

      {/* =====================================================
          HEALTH
          ===================================================== */}

      <Health />
      <Reviews />

      
      {/* =====================================================
          CONTACT
          ===================================================== */}

      <Contact />

    </div>
  );
}

export default App;