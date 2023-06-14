import react, { useState } from "react";
import Card from "../Cards/Card";
import axios from "axios";
import AddToList from "../AddToMyList/AddToList";
import './Main.css';
const Main = () => {
    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);
    const searchBook = (evt) => {
        if (evt.key === "Enter") {
            axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU' + '&maxResults=40')
                .then(res => setData(res.data.items))
                .catch(err => console.log(err))
        }
    }
    return (
        <div className="container">
            <div className="container__header">
                <div>
                    <h1>The world of books</h1>
                    <div className="search">
                        <h2>Find book</h2>
                        <input type="text" placeholder="Book Name"
                            value={search} onChange={e => setSearch(e.target.value)}
                            onKeyPress={searchBook} />
                    </div>
                </div>
            </div>

            <div className="container__books">
                {
                    <Card book={bookData} />
                }
            </div>
        </div>
    )
}
export default Main;