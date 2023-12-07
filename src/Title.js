import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

export function Title(data) {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');
    const [len, setLen] = useState(0);

    function PathSet() {
        navigate('/');
    }

    useEffect(() => {
        let response = localStorage.getItem("cart1");
        if (response !==null) {
            let data = JSON.parse(response);
            setLen(data.length);
        }
    }, []);


    return (
        <div className="container">
            <div className="display-1 fw-bolder fst-italic  text-info">Movie.com</div>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" onClick={PathSet}>Home</a>
                            </li>
                        </ul>
                    </div>
                    <form className="d-flex mx-2">
                        <input
                            className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                            value={searchValue} onChange={(e) => {
                            setSearchValue(e.target.value)
                        }}/>
                        <Link to={`/search/${searchValue}`}
                              className="btn btn-outline-success">Search</Link>
                    </form>
                    <Link className="nav-link" to="/Watchlater">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-stopwatch" viewBox="0 0 16 16">
                            <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z"/>
                            <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3"/>
                        </svg>
                        <span>{len}</span>
                    </Link>
                </div>
            </nav>
        </div>
    );
}
