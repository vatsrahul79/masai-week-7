import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav.js';
import Card from './Card.js';
import Footer from './Footer.js';
// import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
  //   <div>
  //   <div>
  //  <div>
  
  <div className="bd-example container-fluid mt-5">
    
  <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://www.bleepstatic.com/content/hl-images/2017/02/18/Microsoft.jpg" className="d-block w-100" alt="image" width="500px" height="600px"></img>
        <div className="carousel-caption d-none d-md-block">
          <h5>MICROSOFT</h5>
          <p>Your Potential, Our Passion</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="https://aithority.com/wp-content/uploads/2019/03/CyberProof-Announces-Integration-of-CyberProof-Defense-Center-Platform-With-Newly-Launched-Microsoft-Azure-Sentinel.jpg" className="d-block w-100" alt="image" width="500px" height="600px"></img>
        <div className="carousel-caption d-none d-md-block">
          <h5>MICROSOFT</h5>
          <p>Be What's Next</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="https://www.edx.org/sites/default/files/microsoft_for_social_v2.png" className="d-block w-100" alt="image" width="500px" height="600px"></img>
        <div className="carousel-caption d-none d-md-block">
          <h5>Surface Pro 6</h5>
          <p>Stand Out from Ordinary</p>
        </div>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
  <Nav/>
  <Card/>
  <Footer/>
</div>


// </div>
// </div>
// </div>


/* // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a */
    /* //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div> */
  );
}
export default App;
