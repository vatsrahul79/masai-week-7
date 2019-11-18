import React from 'react';
import logo from './logo.svg';
import './App.css';

function Nav() {
   return(
<nav class="navbar fixed-top navbar-light bg-white navbar navbar-expand-lg navbar-light bg-bright">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="#">Microsoft</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="https://products.office.com/en-in/home">Office<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="https://www.microsoft.com/en-in/windows/">Windows</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="https://www.microsoft.com/en-in/surface">Surface</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

   )
}
export default Nav;