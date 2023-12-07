import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

function Cart() {
    const [localData, setLocalData] = useState(null);
    useEffect(() => {
        let response = localStorage.getItem("cart1");
        setLocalData(JSON.parse(response));
    }, []);
    function RemoveItem(itemId) {

        const updatedCart = localData.filter(movie => movie.id !== itemId);
        setLocalData(updatedCart);
        localStorage.setItem("cart1", JSON.stringify(updatedCart));
    }

    return (<>
            {localData ? <div className="container">
                <div className="row row-cols-1 mt-5 row-cols-md-5 g-4">
                    {localData.map((movie1) => (
                        <div className="col" key={movie1.id}>
                            <div className="card">
                                <img
                                    src={movie1.primaryImage?.url ? movie1.primaryImage?.url : "https://marketplace.canva.com/EAFsiif-XpU/1/0/900w/canva-black-%26-white-simple-coming-soon-instagram-reel-H2W_vFb7Bdg.jpg"}
                                    className="card-img-top"
                                    alt={movie1.originalTitleText.text}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{movie1.originalTitleText.text}</h5>
                                    <p className="card-text">Release Date
                                        : {movie1.releaseDate.day}/{movie1.releaseDate.month}/{movie1.releaseDate.year}</p>
                                    <div>
                                        <button type="button" className="btn btn-primary me-2" onClick={() => RemoveItem(movie1.id)}>Remove</button>
                                        <Link to={`/details/${movie1.id}`}
                                              className="btn btn-primary me-2 ">Details.</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div> : <div className="container"><h1 className="justify-content-center">Your Cart is Empty</h1></div>}
        </>
    );
}

export default Cart;
