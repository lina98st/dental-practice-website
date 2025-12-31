export default function OpeningHours() {
  const hours = [
    { day: "Monday", time: "8:00 AM - 6:00 PM" },
    { day: "Tuesday", time: "8:00 AM - 6:00 PM" },
    { day: "Wednesday", time: "8:00 AM - 6:00 PM" },
    { day: "Thursday", time: "8:00 AM - 8:00 PM" },
    { day: "Friday", time: "8:00 AM - 4:00 PM" },
    { day: "Saturday", time: "9:00 AM - 2:00 PM" },
    { day: "Sunday", time: "Closed" }
  ];

  return (
    <section className="opening-hours">
      <div className="hours-container">
        <h2 className="section-title">Opening Hours</h2>
        <div className="hours-list">
          {hours.map((item, index) => (
            <div key={index} className="hours-item">
              <span className="hours-day">{item.day}</span>
              <span className="hours-time">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}