import { Star, Quote, ExternalLink } from "lucide-react";
import "./Reviews.css";

const reviews = [
  {
    id: 1,
    text: "Best medical shop & grent service All type of medication available here",
  },
  {
    id: 2,
    text: "Get every medicine on good discount",
  },
];

function StarRating({ size = 18 }) {
  return (
    <div
      className="reviews-stars"
      aria-label="5 पैकी 5 स्टार"
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          strokeWidth={1.8}
          fill="currentColor"
        />
      ))}
    </div>
  );
}

function Reviews() {
  return (
    <section
      id="reviews"
      className="reviews-section"
    >
      <div className="reviews-container">

        {/* HEADING */}
        <div className="reviews-heading">
          <h2>
            आमच्याबद्दलचे{" "}
            <span>ग्राहकांचे मत</span>
          </h2>

          <p>
            धनदाई मेडीकल अँड जनरल स्टोअरला भेट दिलेल्या
            ग्राहकांचा अनुभव.
          </p>
        </div>

        {/* RATING SUMMARY */}
        <div className="reviews-summary">

          <div className="reviews-rating">
            <strong>5.0</strong>

            <StarRating size={20} />

            <span>
              Google वर आधारित ग्राहक रेटिंग
            </span>
          </div>

          <div className="reviews-count">
            <strong>8</strong>

            <span>
              ग्राहकांचे Google Reviews
            </span>
          </div>

        </div>

        {/* REVIEW CARDS */}
        <div className="reviews-grid">

          {reviews.map((review) => (
            <article
              className="review-card"
              key={review.id}
            >

              <div className="review-card-top">

                <div className="review-quote">
                  <Quote
                    size={22}
                    strokeWidth={1.8}
                  />
                </div>

                <StarRating size={16} />

              </div>

              <p className="review-text">
                “{review.text}”
              </p>

              <div className="review-source">
                <span>
                  Google ग्राहक समीक्षा
                </span>
              </div>

            </article>
          ))}

        </div>

        {/* GOOGLE REVIEWS BUTTON */}
        <div className="reviews-footer">

          <a
            href="https://www.google.com/maps/place/Dhandai+Medical+%26+General+Stores/@20.9033253,74.7783891,827m/data=!3m1!1e3!4m8!3m7!1s0x3bdec5884885852d:0xeb30bb8bcdc3bf76!8m2!3d20.9033253!4d74.7783891!9m1!1b1!16s%2Fg%2F11y9m4h7xk"
            target="_blank"
            rel="noopener noreferrer"
            className="google-review-button"
          >
            <span>
              Google वर सर्व Reviews पहा
            </span>

            <ExternalLink size={17} />

          </a>

        </div>

      </div>
    </section>
  );
}

export default Reviews;