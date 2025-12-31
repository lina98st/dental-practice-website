export default function Services() {
  const services = [
    {
      title: "Preventive Care",
      description: "Regular check-ups, professional cleanings, and fluoride treatments to keep your smile healthy."
    },
    {
      title: "Cosmetic Dentistry",
      description: "Teeth whitening, veneers, and bonding to enhance the appearance of your smile."
    },
    {
      title: "Restorative Procedures",
      description: "Fillings, crowns, bridges, and implants to restore function and aesthetics."
    },
    {
      title: "Orthodontics",
      description: "Traditional braces and clear aligners to straighten teeth and improve bite alignment."
    },
    {
      title: "Root Canal Therapy",
      description: "Advanced endodontic treatment to save infected teeth and relieve pain."
    },
    {
      title: "Pediatric Dentistry",
      description: "Specialized care for children in a fun, friendly environment."
    }
  ];

  return (
    <section className="services">
      <div className="services-container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}