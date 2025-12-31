import { useState, useEffect } from "react";

import Dentist1 from "../assets/images/dentist1.jpg";
import Dentist2 from "../assets/images/dentist2.jpg";
import Dentist3 from "../assets/images/dentist3.jpg";
import Dentist4 from "../assets/images/dentist4.jpg";

const carouselImages = [
  { image: Dentist1 },
  { image: Dentist2 },
  { image: Dentist3 },
  { image: Dentist4 },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentImage = carouselImages[currentIndex];

  // images change automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    }, 3000); // image changes every 3 seconds

    return () => clearInterval(interval);
  }, []);

  function handlePrev() {
    setCurrentIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  }

  function handleNext() {
    setCurrentIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  }

  return (
    <div className="carousel">
      <div className="carousel-frame">
        <img
          className="carousel-image"
          src={currentImage.image}
          alt="carousel pictures from the clinic"
        />
      </div>

      <div className="carousel-controls">
        <button type="button" className="button-carousel" onClick={handlePrev}>
          Prev
        </button>

        <p className="carousel-counter">
          {currentIndex + 1} / {carouselImages.length}
        </p>

        <button type="button" className="button-carousel" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}