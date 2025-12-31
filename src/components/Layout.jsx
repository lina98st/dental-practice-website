import Header from "./Header";
import Footer from "./Footer";
import Carousel from "./Carousel";

export default function Layout({ children }) {
    return (
        <>
           <Header />
           <main>{ children }</main>
           <Footer />
        </>
    )
}