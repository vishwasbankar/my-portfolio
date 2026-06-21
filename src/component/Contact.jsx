import "./Contact.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-section">
      <p className="contact-tag">GET IN TOUCH</p>
      <h2>Let's Work Together</h2>
      <p className="contact-subtitle">
        Ready to bring your ideas to life? Let's discuss your next project.
      </p>

      <div className="contact-container">
        <div className="contact-left">
          <div className="info-box">
            <FaEnvelope className="info-icon" />
            <div>
              <span>EMAIL</span>
              <h4>bankarvishwas1@gmail.com</h4>
            </div>
          </div>

          <div className="info-box">
            <FaPhoneAlt className="info-icon" />
            <div>
              <span>PHONE</span>
              <h4>+91 98345 44464</h4>
            </div>
          </div>

          <div className="info-box">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <span>LOCATION</span>
              <h4>Pune, Maharashtra, India</h4>
            </div>
          </div>

          <div className="social-section">
            <h3>Connect with me</h3>

            <div className="social-icons">
              <a href="https://www.linkedin.com/in/vishwas-bankar-3695b4334?utm_source=share_via&utm_content=profile&utm_medium=member_android"><FaLinkedin /></a>
              <a href="https://github.com/vishwasbankar"><FaGithub /></a>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <h3>Send me a message</h3>

          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea rows="6" placeholder="Your Message"></textarea>

            <button type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;