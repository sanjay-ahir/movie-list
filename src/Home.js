import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

function Home() {
    const [pageData, setPageData] = useState([]);
    const [movie, setMovie] = useState([]);
    const [path, setPath] = useState(null);
    const [cart, setCart] = useState([]);
    const page = 'https://moviesdatabase.p.rapidapi.com';

    const NextPage = () => {
        let i = page + pageData.next;
        setPath(i);
    };

    const PreviousPage = () => {
        if (pageData.page <= 2) {
            setPath(null);
        } else {
            let i = pageData.page - 1;
            setPath(`https://moviesdatabase.p.rapidapi.com/titles/x/upcoming?page=${i}`);
        }
    };

    const addToCart = (movieItem) => {
        if (!cart.find(item => item.id === movieItem.id)) {
            setCart([...cart, movieItem]);
            localStorage.setItem("cart1", JSON.stringify([...cart, movieItem]));
        }

    };

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: (path ? `${path}` : 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming'),
                headers: {
                    'X-RapidAPI-Key': 'ef1b2028eemsh4b39f22d44cd960p117bc0jsn32f70f949892',
                    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                setPageData(response.data);
                setMovie(response.data.results);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [path]);

    return (
        <div className="container">
            <div className="row row-cols-1 mt-5 row-cols-md-5 g-4">
                {movie.map((movie1) => (
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
                                    <button type="button" className="btn btn-primary mt-2 me-2"
                                            onClick={() => addToCart(movie1)}>
                                        Watch Later
                                    </button>
                                    <Link to={`/details/${movie1.id}`}
                                          className="btn btn-primary mt-2 me-2">Details.</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div>
                    {pageData.page !== 1 ? <button type="button" className="btn btn-primary me-2 mb-5"
                                                   onClick={PreviousPage}>Previous</button> : null}
                    <button type="button" className="btn btn-primary me-2 mb-5" onClick={NextPage}>Next</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
