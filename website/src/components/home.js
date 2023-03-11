import book1 from "../images/book1.jpg";
import book2 from "../images/book2.jpg";

function Home() {
    return (
        <>
            <form>
                <input />
            </form>
            <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
            <span>KNOWLENGE & IMAGINATION</span>
            <span>BOOK'S N MORE</span>
            <span>Your one stop for all thingz books...</span>
            <img src={book2} />
            <img src={book1} />
        </>
    );
}

export default Home;
