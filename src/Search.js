import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";

function Search() {
    const {id} = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: ` https://moviesdatabase.p.rapidapi.com/titles/search/keyword/${id}`,
                headers: {
                    'X-RapidAPI-Key': 'ef1b2028eemsh4b39f22d44cd960p117bc0jsn32f70f949892',
                    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
                }
            };
            try {
                const response = await axios.request(options);
                setData(response.data.results);
            } catch (error) {
                console.error("Error", error);
            }
        };
        fetchData();
    }, [id]);

    return (
        <div className="container">
            {(data != null) ? <div>
                <div className="row row-cols-1 mt-5 row-cols-md-5 g-4">
                    {data.map((movie1) => (
                        <div className="col" key={movie1?.id}>
                            <div className="card">
                                <img
                                    src={movie1.primaryImage?.url ? movie1.primaryImage?.url : "https://marketplace.canva.com/EAFsiif-XpU/1/0/900w/canva-black-%26-white-simple-coming-soon-instagram-reel-H2W_vFb7Bdg.jpg"}
                                    className="card-img-top"
                                    alt={movie1.originalTitleText?.text}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{movie1.originalTitleText?.text}</h5>
                                    <p className="card-text">Release Date
                                        : {movie1.releaseDate?.day}/{movie1.releaseDate?.month}/{movie1.releaseDate?.year}</p>
                                    <div>
                                        <Link to={`/details/${movie1?.id}`}
                                              className="btn btn-primary mt-2 me-2">Details.</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div> : <h1>Data Not Found</h1>}
        </div>
    );
}

export default Search;