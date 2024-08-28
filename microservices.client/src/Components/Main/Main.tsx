import React from 'react';
import './Main.css';
import {Link} from "react-router-dom";

const apiUrl = process.env.REACT_APP_API_URL;

export default function Main(){
    return (
        <div className="Main">
            <h1>This is the main page</h1>

            <div>API: {apiUrl}</div>

            <Link to="chat">
                <h3>Go to chat</h3>
            </Link>
        </div>
    );
}
