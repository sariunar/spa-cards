import React from "react";
import { useState } from "react";
import './Card.css';
import AddToList from '../AddToMyList/AddToList';
const Card = ({ book, bookComponent }) => {
    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState();
    return (
        <div className="container-cards">
            {
                book.map((item) => {
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail;
                    let description = item.volumeInfo.description;
                    if (thumbnail != undefined && description != undefined) {
                        return (
                            <div className="card" onClick={() => { setShow(true); setItem(item) }}>
                                <img src={thumbnail} alt="" />
                                <div>
                                    <div className="card__detail">
                                        <h3 className="title">{item.volumeInfo.title}</h3>
                                        <p className="publishedDate">{item.volumeInfo.publishedDate}</p>
                                        <AddToList />
                                    </div>
                                    <div className="overview">
                                        <h1>overview</h1>
                                        <p className="description">{description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}
export default Card;
