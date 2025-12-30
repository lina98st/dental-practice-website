//write function for carousel
//array map für carousel
//export carousel in die layout oder app.jsx
//spread benutzen für map array in fuction?
import Dentist1 from ".../assets/images/dentist1.jpg"
import Dentist2 from ".../assets/images/dentist2.jpg"
import Dentist3 from ".../assets/images/dentist3.jpg"
import Dentist4 from ".../assets/images/dentist4.jpg"

useState[carouselOff, carouselOn] = useState();
//hier muss ein State für den Slide Index hin



let carouselImages = [
     { image: Dentist1 },
     { image: Dentist2 },
     { image: Dentist3 },
     { image: Dentist4 }
    ]

export default function Carousel () {
    return (
        <div className="carousel-images">
            {carouselImages.map((item, i) => (
                <img key={i} src={item.image} alt="" />
            ))}
        </div>
    )
}