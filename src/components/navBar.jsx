import "./navBar.css";

import { useContext } from 'react';
import DataContext from "../store/dataContext";

import { Link } from 'react-router-dom'

function NavBar(){
  const cart = useContext(DataContext).cart;


     return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Maw & Paw 🐾</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/catalog">Catalog</Link>
        </li>
        
        <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
        </li>

      </ul>

      {}
      <form className="d-flex" role="search">
        <Link to="/cart" className="btn btn-outline-dark">
      <span class="badge text-warning"> {cart.length}</span>
      Your Cart
      </Link>
      </form>
    </div>
  </div>
</nav>
     );
}

export default NavBar;