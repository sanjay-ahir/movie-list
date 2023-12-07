import React from 'react';
import {Title} from "./Title";
import {Outlet} from "react-router-dom";

function Layout() {

    return (
        <div className="bgImage">
            <Title />
            <Outlet/>
            <div>
            <footer className="mt-2 bg-secondary text-end text-white footer">
                <p>@ Copyright by Sanjay Ahir</p>
            </footer>
            </div>
        </div>
    );
}

export default Layout;
