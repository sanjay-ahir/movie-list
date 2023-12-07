import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

function Details() {
    const {id} = useParams()
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: ` https://moviesdatabase.p.rapidapi.com/titles/${id}`,
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
    }, []);

    return (
        <div className="grid container ">
            {(data != null) ? <div>
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-6">
                            <img
                                src={data.primaryImage?.url ? data.primaryImage?.url : "https://marketplace.canva.com/EAFsiif-XpU/1/0/900w/canva-black-%26-white-simple-coming-soon-instagram-reel-H2W_vFb7Bdg.jpg"}
                                className="img-fluid" alt={data.originalTitleText?.text}/>
                        </div>
                        <div className="col-6">
                            <div className="card-body">
                                <div className="moviename text-center">
                                    <h2 className="text-info"><b>Movie Name </b>: {data.originalTitleText?.text}</h2>
                                </div>
                                <p className="card-text"><b>Release
                                    Date:</b> {data.releaseDate?.day}/{data.releaseDate?.month}/{data.releaseDate?.year}
                                </p>
                                <p className="card-text"><b><u>Detail About Movie</u> : </b>The
                                    film {data.originalTitleText?.text} was released on digital platforms
                                    on {data.releaseDate?.day}/{data.releaseDate?.month}/{data.releaseDate?.year} , and
                                    will be released on 4K Ultra HD Blu-ray, Blu-ray and DVD on December 12 by Walt
                                    Disney Studios Home Entertainment through the 20th Century Home Entertainment label,
                                    featuring a 55-minute featurette titled True Love: Making The Creator. It will also
                                    be available to stream on Hulu and Disney+ on a date to be announced.During its
                                    first week on VOD, it ranked number 1 on iTunes Movies and Vudu and number 3 on
                                    Google Play.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> : null}
        </div>
    );
}

export default Details;