import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock3,
  Navigation,
  ArrowUpRight,
} from "lucide-react";

import "./Contact.css";

import logo from "./assets/brand/logo.png";

const contactItems = [
  {
    icon: Phone,
    label: "फोन करा (पंकज पाटील)",
    title: "70585 29414",
    text: "दुकानाशी थेट संपर्क साधा.",
    href: "tel:+917058529414",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp (प्रशांत पाटील)",
    title: "77579 29414",
    text: "औषधांची उपलब्धता आणि ऑर्डरसाठी WhatsApp करा.",
    href: "https://wa.me/917757929414",
  },
  {
    icon: Mail,
    label: "ई-मेल",
    title: "dhandaimedical9414@gmail.com",
    text: "तुमचा प्रश्न किंवा चौकशी आम्हाला पाठवा.",
    href: "mailto:dhandaimedical9414@gmail.com",
  },
];

function Contact() {
  return (
    <section id="contact" className="contact-page">
      <div className="contact-container">

        {/* HEADING */}

        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >

          <h2>
            आमच्याशी <span>संपर्क करा</span>
          </h2>

          <p>
            औषधांची उपलब्धता, आरोग्यविषयक उत्पादने
            किंवा इतर कोणत्याही चौकशीसाठी आम्हाला
            सहजपणे संपर्क करा.
          </p>
        </motion.div>

        {/* MAIN CONTACT AREA */}

        <div className="contact-main">

          {/* LEFT BRAND CARD */}

          <motion.div
            className="contact-brand-card"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="contact-brand-glow" />

            <div className="contact-brand-logo">
              <img
                src={logo}
                alt="धनदाई मेडीकल अँड जनरल स्टोअर"
              />
            </div>

            <div className="contact-brand-content">
              <span>आपल्या आरोग्याचा विश्वास</span>

              <h3>
                धनदाई मेडीकल
              </h3>

              <strong>
                अँड जनरल स्टोअर
              </strong>

              <p>
                आपल्या आरोग्याच्या गरजांसाठी
                विश्वासार्ह सेवा आणि योग्य मार्गदर्शन.
              </p>
            </div>

            <div className="contact-brand-line" />
          </motion.div>

          {/* RIGHT CONTACT CARDS */}

          <div className="contact-details">

            {contactItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={
                    item.href.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="contact-info-card"
                  initial={{ opacity: 0, x: 35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                >
                  <div className="contact-info-icon">
                    <Icon size={22} strokeWidth={1.7} />
                  </div>

                  <div className="contact-info-content">
                    <span>{item.label}</span>
                    <strong>{item.title}</strong>
                    <p>{item.text}</p>
                  </div>

                  <ArrowUpRight
                    className="contact-info-arrow"
                    size={19}
                    strokeWidth={1.7}
                  />
                </motion.a>
              );
            })}

          </div>
        </div>

        {/* LOCATION CARD */}

        <motion.a
          href="https://maps.app.goo.gl/phryrK1KCemYqkadA"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-location-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="contact-location-icon">
            <MapPin size={27} strokeWidth={1.6} />
          </div>

          <div className="contact-location-content">
            <span>आमचे दुकान</span>

            <h3>
              धनदाई मेडीकल अँड जनरल स्टोअर
            </h3>

            <p>
              सावारिया आईस्क्रीम समोर, पारोळा रोड,
              धुळे – ४२४००१
            </p>
          </div>

          <div className="contact-location-action">
            <Navigation size={17} />
            <span>Google Maps वर पहा</span>
            <ArrowUpRight size={17} />
          </div>
        </motion.a>

        {/* TIMING */}

        <motion.div
          className="contact-timing-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div className="contact-timing-icon">
            <Clock3 size={22} strokeWidth={1.7} />
          </div>

          <div className="contact-timing-content">
            <span>दुकानाची वेळ</span>
            <strong>24 hours 7 days</strong>
          </div>

          <div className="contact-timing-status">
            <span className="contact-status-dot" />
            <span>आपल्या सेवेत</span>
          </div>
        </motion.div>

        {/* BOTTOM MESSAGE */}

        <motion.div
          className="contact-bottom-message"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span />
          <p>
            तुमचा विश्वास हीच आमची खरी ताकद.
          </p>
          <span />
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;