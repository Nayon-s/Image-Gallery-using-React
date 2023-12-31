import React from 'react'
import {
  Link
} from "react-router-dom";
const Home = () => {

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active " aria-current="page" to="/Science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Computer">Computer</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Education">Education</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Food">Food</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Sports">Sports</Link>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Home
