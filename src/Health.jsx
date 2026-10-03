import { motion } from "framer-motion";
import {
  HeartPulse,
  ShieldCheck,
  Pill,
  Thermometer,
  Droplets,
  Apple,
  Stethoscope,
  AlertCircle,
  ChevronRight,
} from "lucide-react";

import "./Health.css";

const healthTopics = [
  {
    icon: HeartPulse,
    title: "दैनंदिन आरोग्य",
    description:
      "नियमित झोप, संतुलित आहार, पुरेसे पाणी आणि शारीरिक हालचाल यामुळे दैनंदिन आरोग्याची काळजी घेण्यास मदत होते.",
    tag: "आरोग्य",
  },
  {
    icon: Pill,
    title: "औषधांची योग्य काळजी",
    description:
      "औषधे डॉक्टर किंवा फार्मासिस्ट यांच्या मार्गदर्शनानुसार घ्या. औषधाचे नाव, डोस आणि वापरण्याची पद्धत समजून घ्या.",
    tag: "औषधे",
  },
  {
    icon: Thermometer,
    title: "ताप व सामान्य लक्षणे",
    description:
      "ताप किंवा इतर सामान्य लक्षणे आढळल्यास विश्रांती आणि योग्य द्रवपदार्थांचे सेवन करा. लक्षणे गंभीर किंवा सतत राहिल्यास डॉक्टरांचा सल्ला घ्या.",
    tag: "सामान्य काळजी",
  },
  {
    icon: Droplets,
    title: "पाणी व हायड्रेशन",
    description:
      "दिवसभर पुरेसे पाणी पिण्याची सवय ठेवा. उष्ण वातावरणात किंवा जास्त शारीरिक हालचालीच्या वेळी द्रवपदार्थांची गरज वाढू शकते.",
    tag: "हायड्रेशन",
  },
  {
    icon: Apple,
    title: "संतुलित आहार",
    description:
      "फळे, भाज्या, धान्ये, प्रथिने आणि आवश्यक पोषक घटकांचा समावेश असलेला संतुलित आहार आरोग्यासाठी महत्त्वाचा आहे.",
    tag: "आहार",
  },
  {
    icon: ShieldCheck,
    title: "स्वच्छता व प्रतिबंध",
    description:
      "हात स्वच्छ धुणे, वैयक्तिक स्वच्छता राखणे आणि आवश्यक आरोग्यविषयक प्रतिबंधात्मक उपाय पाळणे उपयुक्त ठरते.",
    tag: "प्रतिबंध",
  },
];

const healthTips = [
  {
    number: "०१",
    title: "औषध स्वतःहून सुरू करू नका",
    text: "नवीन औषध सुरू करण्यापूर्वी डॉक्टर किंवा योग्य आरोग्यतज्ज्ञांचा सल्ला घ्या.",
  },
  {
    number: "०२",
    title: "औषधांची माहिती तपासा",
    text: "औषधाचे नाव, डोस, वापरण्याची पद्धत आणि साठवणुकीच्या सूचना समजून घ्या.",
  },
  {
    number: "०३",
    title: "औषधे सुरक्षित ठेवा",
    text: "औषधे त्यांच्या सूचनेनुसार साठवा आणि मुलांच्या आवाक्यापासून दूर ठेवा.",
  },
  {
    number: "०४",
    title: "लक्षणे गंभीर असल्यास विलंब करू नका",
    text: "गंभीर किंवा अचानक उद्भवलेल्या लक्षणांसाठी तातडीने वैद्यकीय मदत घ्या.",
  },
];

function Health() {
  return (
    <section id="health" className="health-page">
      <div className="health-container">

        {/* HEADING */}

        <motion.div
          className="health-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2>
            आरोग्य <span>माहिती</span>
          </h2>

          <p>
            आपल्या दैनंदिन आरोग्याची काळजी घेण्यासाठी
            उपयोगी सामान्य माहिती आणि सोप्या आरोग्यविषयक टिप्स.
          </p>
        </motion.div>

        {/* FEATURE */}

        <motion.div
          className="health-feature"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="health-feature-icon">
            <HeartPulse size={31} strokeWidth={1.5} />
          </div>

          <div className="health-feature-content">
            <span>आरोग्याची काळजी</span>

            <h3>
              छोट्या सवयी, निरोगी जीवनशैली.
            </h3>

            <p>
              योग्य आहार, पुरेशी झोप, नियमित शारीरिक हालचाल
              आणि आवश्यकतेनुसार वैद्यकीय सल्ला घेणे ही
              आरोग्याची काळजी घेण्याची महत्त्वाची पावले आहेत.
            </p>
          </div>

          <div className="health-feature-badge">
            <ShieldCheck size={18} />
            <span>विश्वासार्ह माहिती</span>
          </div>
        </motion.div>

        {/* HEALTH TOPICS */}

        <div className="health-topics-grid">
          {healthTopics.map((topic, index) => {
            const Icon = topic.icon;

            return (
              <motion.article
                key={topic.title}
                className="health-topic-card"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.05,
                }}
                whileHover={{ y: -6 }}
              >
                <div className="health-topic-top">
                  <div className="health-topic-icon">
                    <Icon size={23} strokeWidth={1.6} />
                  </div>

                  <span className="health-topic-tag">
                    {topic.tag}
                  </span>
                </div>

                <h3>{topic.title}</h3>

                <p>{topic.description}</p>

                <div className="health-topic-line">
                  <span />
                  <ChevronRight size={17} />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* MEDICINE SAFETY */}

        <motion.div
          className="health-safety-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
        >
          <div className="health-safety-heading">
            <span>
              औषध वापरातील महत्त्वाच्या गोष्टी
            </span>

            <h3>
              औषधांबाबत नेहमी{" "}
              <strong>सजग राहा.</strong>
            </h3>
          </div>

          <div className="health-tips-list">
            {healthTips.map((tip, index) => (
              <motion.div
                key={tip.number}
                className="health-tip"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
              >
                <span className="health-tip-number">
                  {tip.number}
                </span>

                <div className="health-tip-content">
                  <h4>{tip.title}</h4>
                  <p>{tip.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* IMPORTANT NOTICE */}

        <motion.div
          className="health-notice"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="health-notice-icon">
            <AlertCircle size={22} strokeWidth={1.7} />
          </div>

          <div className="health-notice-content">
            <strong>महत्त्वाची सूचना</strong>

            <p>
              ही माहिती सामान्य आरोग्यविषयक मार्गदर्शनासाठी आहे.
              ती डॉक्टरांचा सल्ला, निदान किंवा उपचाराचा पर्याय नाही.
              गंभीर, अचानक किंवा सतत राहणाऱ्या लक्षणांसाठी
              योग्य वैद्यकीय मदत घ्या.
            </p>
          </div>
        </motion.div>

        {/* CTA */}

        <motion.div
          className="health-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="health-cta-icon">
            <Stethoscope size={24} strokeWidth={1.6} />
          </div>

          <div className="health-cta-content">
            <span>
              आरोग्याची काळजी घेणे महत्त्वाचे आहे.
            </span>

            <strong>
              औषधांविषयी अधिक माहितीसाठी आमच्याशी संपर्क करा.
            </strong>
          </div>

          <a
            href="#contact"
            className="health-cta-button"
          >
            संपर्क करा
            <ChevronRight size={18} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Health;