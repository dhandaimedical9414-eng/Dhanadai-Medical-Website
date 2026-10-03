import { motion } from "framer-motion";
import {
  ShieldCheck,
  HeartPulse,
  Pill,
  UserRound,
  MapPin,
} from "lucide-react";

import "./About.css";

import logo from "./assets/brand/logo.png";

function About() {
  return (
    <section id="about" className="about-page">

      {/* Content */}
      <div className="about-container">

        {/* Section Header */}
        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="about-eyebrow">
            धनदाई मेडीकल
          </span>

          <h2>
            <span>आपल्या आरोग्यासाठी एक विश्वासू साथ</span>
          </h2>
          

          <p>
            आपल्या परिसरातील आरोग्यसेवेत विश्वास, गुणवत्ता
            आणि योग्य मार्गदर्शन यांना प्राधान्य देत
            धनदाई मेडीकल अँड जनरल स्टोअर आपल्या सेवेत आहे.
          </p>
        </motion.div>

        {/* Main About Card */}
        <motion.div
          className="about-main-card"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >

          {/* Logo */}
          <div className="about-logo-panel">
            <div className="about-logo-glow" />

            <img
              src={logo}
              alt="धनदाई मेडीकल अँड जनरल स्टोअर"
              className="about-logo"
            />

            <div className="about-logo-caption">
              <strong>धनदाई मेडीकल</strong>
              <span>अँड जनरल स्टोअर</span>
            </div>
          </div>

          {/* Story */}
          <div className="about-story">

            <span className="about-small-label">
              आमची ओळख
            </span>

            <h3>
              आरोग्याची काळजी,
              <br />
              विश्वासासोबत.
            </h3>

            <p>
              धनदाई मेडीकल अँड जनरल स्टोअरमध्ये
              आपल्या दैनंदिन आरोग्याच्या गरजा लक्षात घेऊन
              आवश्यक औषधे, हेल्थकेअर उत्पादने आणि
              जनरल स्टोअरमधील विविध उत्पादने उपलब्ध करून
              देण्याचा आमचा प्रयत्न आहे.
            </p>

            <p>
              प्रत्येक ग्राहकाला योग्य माहिती, विश्वासार्ह
              सेवा आणि सोयीस्कर अनुभव मिळावा यासाठी
              आम्ही काळजीपूर्वक सेवा देतो.
            </p>

          </div>

        </motion.div>

        {/* Feature Cards */}
        <div className="about-features">

          <motion.div
            className="about-feature-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="about-feature-icon">
              <ShieldCheck size={24} />
            </div>

            <div>
              <h4>विश्वासार्ह औषधे</h4>
              <p>
                गुणवत्तापूर्ण आणि विश्वासार्ह ब्रँड्सना
                प्राधान्य.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="about-feature-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              delay: 0.08,
            }}
          >
            <div className="about-feature-icon">
              <UserRound size={24} />
            </div>

            <div>
              <h4>तज्ज्ञ मार्गदर्शन</h4>
              <p>
                औषधांविषयी आवश्यक माहिती आणि
                योग्य मार्गदर्शन.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="about-feature-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              delay: 0.16,
            }}
          >
            <div className="about-feature-icon">
              <Pill size={24} />
            </div>

            <div>
              <h4>विविध उत्पादने</h4>
              <p>
                औषधे, हेल्थकेअर आणि जनरल स्टोअर
                उत्पादनांची सुविधा.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="about-feature-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              delay: 0.24,
            }}
          >
            <div className="about-feature-icon">
              <HeartPulse size={24} />
            </div>

            <div>
              <h4>आरोग्याची काळजी</h4>
              <p>
                तुमच्या आरोग्याला नेहमीच
                प्रथम प्राधान्य.
              </p>
            </div>
          </motion.div>

        </div>

        {/* =========================================
            STORE ADDRESS
            ========================================= */}



        {/* Bottom Message */}
        <motion.div
          className="about-bottom-message"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

        </motion.div>

      </div>
    </section>
  );
}

export default About;