import React from 'react'
import { Link } from 'react-router-dom'

export default function Logout  () {
    return (
        <div className="text-center">
            <h1 className="main-title home-page-title">welcome to our app</h1>
            <Link to="/login">
                <button className="primary-button">Log In</button>
            </Link>
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
    )
}