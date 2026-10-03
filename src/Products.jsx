import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Pill,
  HeartPulse,
  Baby,
  Sparkles,
  ShieldCheck,
  Thermometer,
  Stethoscope,
  ChevronRight,
} from "lucide-react";

import "./Products.css";

const categories = [
  {
    id: "all",
    label: "सर्व उत्पादने",
    icon: Sparkles,
  },
  {
    id: "medicines",
    label: "औषधे",
    icon: Pill,
  },
  {
    id: "healthcare",
    label: "हेल्थकेअर",
    icon: HeartPulse,
  },
  {
    id: "personal",
    label: "पर्सनल केअर",
    icon: Sparkles,
  },
  {
    id: "baby",
    label: "बेबी केअर",
    icon: Baby,
  },
  {
    id: "devices",
    label: "आरोग्य उपकरणे",
    icon: Stethoscope,
  },
];

const products = [
  {
    id: 1,
    category: "medicines",
    categoryLabel: "औषधे",
    title: "प्रिस्क्रिप्शन औषधे",
    description:
      "डॉक्टरांच्या प्रिस्क्रिप्शननुसार आवश्यक औषधांसाठी आमच्याशी संपर्क करा.",
    icon: Pill,
    accent: "cyan",
  },
  {
    id: 2,
    category: "medicines",
    categoryLabel: "औषधे",
    title: "सर्दी व खोकल्यावरील उत्पादने",
    description:
      "सर्दी, खोकला आणि संबंधित सामान्य आरोग्य गरजांसाठी उपलब्ध उत्पादने.",
    icon: Thermometer,
    accent: "blue",
  },
  {
    id: 3,
    category: "healthcare",
    categoryLabel: "हेल्थकेअर",
    title: "व्हिटॅमिन्स व सप्लिमेंट्स",
    description:
      "दैनंदिन आरोग्याची काळजी घेण्यासाठी विविध हेल्थकेअर उत्पादने.",
    icon: HeartPulse,
    accent: "green",
  },
  {
    id: 4,
    category: "healthcare",
    categoryLabel: "हेल्थकेअर",
    title: "फर्स्ट एड उत्पादने",
    description:
      "घरगुती प्राथमिक उपचारांसाठी आवश्यक हेल्थकेअर साहित्य.",
    icon: ShieldCheck,
    accent: "purple",
  },
  {
    id: 5,
    category: "personal",
    categoryLabel: "पर्सनल केअर",
    title: "पर्सनल केअर",
    description:
      "दैनंदिन वैयक्तिक स्वच्छता आणि काळजीसाठी विविध उत्पादने.",
    icon: Sparkles,
    accent: "pink",
  },
  {
    id: 6,
    category: "baby",
    categoryLabel: "बेबी केअर",
    title: "बेबी केअर उत्पादने",
    description:
      "लहान मुलांच्या दैनंदिन काळजीसाठी आवश्यक उत्पादने.",
    icon: Baby,
    accent: "orange",
  },
  {
    id: 7,
    category: "devices",
    categoryLabel: "आरोग्य उपकरणे",
    title: "आरोग्य तपासणी उपकरणे",
    description:
      "दैनंदिन आरोग्य तपासणीसाठी उपयोगी उपकरणे आणि साहित्य.",
    icon: Stethoscope,
    accent: "teal",
  },
  {
    id: 8,
    category: "healthcare",
    categoryLabel: "हेल्थकेअर",
    title: "दैनंदिन हेल्थकेअर",
    description:
      "घरच्या घरी आरोग्याची काळजी घेण्यासाठी विविध आवश्यक उत्पादने.",
    icon: HeartPulse,
    accent: "cyan",
  },
];

function Products() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "all" ||
        product.category === activeCategory;

      const search = searchTerm.trim().toLowerCase();

      const matchesSearch =
        !search ||
        product.title.toLowerCase().includes(search) ||
        product.description.toLowerCase().includes(search) ||
        product.categoryLabel.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  return (
    <section id="products" className="products-page">
      <div className="products-container">

        {/* HEADER */}
        <motion.div
          className="products-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >

          <h2>
            औषधे <span>व उत्पादने</span>
          </h2>

          <p>
            आपल्या दैनंदिन आरोग्याच्या गरजांसाठी आवश्यक
            औषधे, हेल्थकेअर आणि जनरल स्टोअर उत्पादने
            एका विश्वासू ठिकाणी.
          </p>
        </motion.div>

        {/* SEARCH */}
        <motion.div
          className="products-search-wrapper"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="products-search">
            <Search size={21} strokeWidth={1.8} />

            <input
              type="text"
              placeholder="उत्पादन शोधा..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              aria-label="उत्पादन शोधा"
            />

            {searchTerm && (
              <button
                type="button"
                className="products-search-clear"
                onClick={() => setSearchTerm("")}
                aria-label="शोध साफ करा"
              >
                ×
              </button>
            )}
          </div>
        </motion.div>

        {/* CATEGORY FILTER */}
        <motion.div
          className="products-categories"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                type="button"
                className={`products-category ${
                  isActive ? "active" : ""
                }`}
                onClick={() => handleCategoryChange(category.id)}
              >
                <Icon size={18} strokeWidth={1.8} />
                <span>{category.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* PRODUCT GRID */}
        <motion.div
          className="products-grid"
          layout
        >
          {filteredProducts.map((product, index) => {
            const Icon = product.icon;

            return (
              <motion.article
                key={product.id}
                className={`product-card accent-${product.accent}`}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.04,
                  ease: "easeOut",
                }}
                whileHover={{ y: -7 }}
              >
                <div className="product-card-top">
                  <span className="product-category">
                    {product.categoryLabel}
                  </span>

                  <div className="product-icon">
                    <Icon size={25} strokeWidth={1.6} />
                  </div>
                </div>

                <div className="product-card-content">
                  <h3>{product.title}</h3>

                  <p>{product.description}</p>
                </div>

                <div className="product-card-footer">
                  <span>उपलब्धतेसाठी संपर्क करा</span>

                  <ChevronRight
                    size={19}
                    strokeWidth={1.8}
                  />
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* NO RESULT */}
        {filteredProducts.length === 0 && (
          <motion.div
            className="products-empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Search size={35} strokeWidth={1.4} />

            <h3>उत्पादन सापडले नाही</h3>

            <p>
              दुसरे उत्पादन किंवा श्रेणी शोधून पहा.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("all");
              }}
            >
              सर्व उत्पादने पहा
            </button>
          </motion.div>
        )}

        {/* BOTTOM CTA */}
        <motion.div
          className="products-cta"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="products-cta-icon">
            <HeartPulse size={25} strokeWidth={1.7} />
          </div>

          <div className="products-cta-content">
            <span>तुम्हाला एखादे विशिष्ट औषध हवे आहे?</span>

            <strong>
              औषधाचे नाव सांगा, आम्ही उपलब्धता तपासू.
            </strong>
          </div>

          <a
            href="#order"
            className="products-cta-button"
          >
            औषध ऑर्डर करा
            <ChevronRight size={18} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Products;