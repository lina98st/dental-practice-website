export default function ContactInfo() {
  return (
    <section id="contact" className="contact-info">
      <div className="contact-container">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-grid">
          <div className="contact-item">
            <h3 className="contact-label">Address</h3>
            <p className="contact-text">123 Dental Street<br/>Hamburg, 20095<br/>Germany</p>
          </div>
          <div className="contact-item">
            <h3 className="contact-label">Phone</h3>
            <p className="contact-text">+49 40 123 456 78</p>
          </div>
          <div className="contact-item">
            <h3 className="contact-label">Email</h3>
            <p className="contact-text">info@dentalcarecenter.de</p>
          </div>
          <div className="contact-item">
            <h3 className="contact-label">Emergency</h3>
            <p className="contact-text">+49 40 987 654 32<br/>(24/7 Emergency Line)</p>
          </div>
        </div>
      </div>
    </section>
  );
}