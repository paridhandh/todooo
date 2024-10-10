import React from 'react'
import './Navbar.css';
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';
const Navbar = () => {
  const isLoggedIn=useSelector((state)=>state.isLoggedIn)
  return (
   <>
   <nav className="navbar navbar-expand-lg navb">
  <div className="container-fluid">
    <Link className="navbar-brand navb txt pt-0" to="#"><i class="bi bi-journals"></i>&nbsp;<b className='fst-5'>TODO</b></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto me-2 mb-2 mb-lg-0 navb">
        <li className="nav-item">
          <Link className="nav-link navb pt-2 txt fst" aria-current="page" to="/">Home&nbsp;&nbsp;</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link navb pt-2 txt fst" aria-current="page" to="/about">About Us&nbsp;&nbsp;</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link navb pt-2 txt fst" aria-current="page" to="/todo">Todo&nbsp;&nbsp;</Link>
        </li>
        {!isLoggedIn && <>
              <li className="nav-item">
              <Link className="nav-link navb mt-1 btn button" aria-current="page" to="/signUp">Sign up</Link>
            </li>&nbsp;&nbsp;&nbsp;&nbsp;
            <li className="nav-item">
              <Link className="nav-link navb mt-1 btn button" aria-current="page" to="/logIn">Log in</Link>
            </li>&nbsp;&nbsp;&nbsp;&nbsp;
        </>}
        
       {isLoggedIn && <>
            <li className="nav-item">
              <Link className="nav-link navb mt-1 btn button" aria-current="page" to="/logIn">Log out</Link>
            </li>
       </>}
        {/* <li className="nav-item dropdown me-5 it">
          <img  src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" className=" img nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          </img>
          <ul className="dropdown-menu it">
            <li ><Link className="dropdown-item" to="#">Log in</Link></li>
            <li ><Link className="dropdown-item" to="#">Sign Up</Link></li>
            <li ><hr className="dropdown-divider"/></li>
            <li ><Link className="dropdown-item" to="#">Log out</Link></li>
          </ul>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
   </>
  )
}

export default Navbar
