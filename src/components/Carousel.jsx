//write function for carousel
//export carousel in die layout oder app.jsx
//spread benutzen für map array in fuction?
import { useState } from "react";
import Dentist1 from "../assets/images/dentist1.jpg"
import Dentist2 from "../assets/images/dentist2.jpg"
import Dentist3 from "../assets/images/dentist3.jpg"
import Dentist4 from "../assets/images/dentist4.jpg"

let carouselImages = [
     { image: Dentist1 },
     { image: Dentist2 },
     { image: Dentist3 },
     { image: Dentist4 }
    ]

export default function Carousel () {
const [currentIndex, setCurrentIndex] = useState(0);


    return (
        <div className="carousel-images">
            {carouselImages.map((item, i) => (
                <img key={i} src={item.image} alt="" />
            ))}
        </div>
    )
}