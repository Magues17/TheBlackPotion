// import "./App.css";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import React, { useEffect } from 'react';
// import Home from "./Home";
// import Contact from "./Contact";
// import AboutUs from "./AboutUs";
// import Menu from "./Menu";
// import Games from "./Games";
// import Footer from "./Footer";
// function App() {
//   //adds google api integration
//   useEffect(() => {
//     const loadMap = () => {
//       const googleMapScript = document.createElement('script');
//       let apiKey = process.env.REACT_APP_TheBlackPotion_API_Key;
//       googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
//       googleMapScript.async = true;
//       window.document.body.appendChild(googleMapScript);
//     };
//     if(!window.google){
//       loadMap();
//     }
//     else {
//       window.initMap();
//     }
//   }, []);
//   window.initMap = () => {
//     const mapOptions = {
//       center: { lat: 29.4877755, lng: -98.5522303 },
//       zoom: 15,
//       mapTypeId: 'roadmap',
//     };
//     const map = new window.google.maps.Map(document.getElementById('map'), mapOptions);
//     const infowindow = new window.google.maps.InfoWindow({
//       content: "<h3>The Black Potion</h3><p>1900 Fredericksburg Rd Suite 101<br />San Antonio, TX, United States, Texas</p><p>Phone: (210) 369-8750<br />Email: potionllc@gmail.com</p>"
//     });
//     const marker = new window.google.maps.Marker({
//       position: { lat: 29.4877755, lng: -98.5522303 },
//       map: map,
//       title: 'The Black Potion',
//     });
//     infowindow.open(map, marker);
//   };
//   return (
//     <Router>
//       <nav className="navbar navbar-expand-lg bg-light">
//         <div className="container-fluid">
//           <div className="navbar-brand">Black Potion</div>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <Link className="nav-link" to="/">
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/aboutus">
//                   About
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/menu">
//                   Menu
//                 </Link>
//                 </li>
//                 <li className="nav-item">
//                 <Link className="nav-link" to="/games">
//                   Games
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/contact">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//       <div className="content">
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route exact path="/aboutus" element={<AboutUs />} />
//           <Route exact path="/menu" element={<Menu />} />
//           <Route exact path="/contact" element={<Contact />} />
//           <Route exact path="/games" element={<Games />} />
//         </Routes>
//       </div>
//       <div>
//         <Footer />
//       </div>
//     </Router>
//   );
// }
// export default App;
"use strict";