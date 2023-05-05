import React from "react";
import { useEffect } from 'react';
import footerLogo from './imgs/BlackPotionLogo.png';

function Footer() {


  useEffect(() => {
    const delay = setTimeout(() => {
      const googleMapScript = document.createElement('script');
      let apiKey = process.env.REACT_APP_TheBlackPotion_API_Key;
      googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
      googleMapScript.async = true;
      window.document.body.appendChild(googleMapScript);

      window.initMap = () => {
        const mapOptions = {
          center: { lat: 29.4877755, lng: -98.5522303 },
          zoom: 15,
          mapTypeId: 'roadmap',
        };

        const map = new window.google.maps.Map(document.getElementById('mapSmall'), mapOptions);

        const marker = new window.google.maps.Marker({
          position: { lat: 29.4877755, lng: -98.5522303 },
          map: map,
          title: 'The Black Potion',
          icon: {
            url: 'http://maps.google.com/mapfiles/ms/icons/bar.png',
            scaledSize: new window.google.maps.Size(20, 20)
          }
        });

        const infowindow = new window.google.maps.InfoWindow({
          content: "<strong>The Black Potion</strong><br />1900 Fredericksburg Rd Suite 101<br />San Antonio, TX, United States, Texas<br /><br />(210) 369-8750"
        });

        infowindow.open(map, marker);

        marker.addListener("click", () => {
          // Construct a URL for the Google Maps app
          const url = `https://www.google.com/maps/search/?api=1&query=${marker.getPosition().lat()},${marker.getPosition().lng()}`;

          // Open the Google Maps app
          window.open(url);
        });

      };
    }, 2000); // 1 second delay

    return () => clearTimeout(delay);
  }, []);
  return (
    <div className="container-fluid footer">
      <div className="row">

        {/* About */}
        <div className="col-md-3">
          <div className="footer-title">
            About
          </div>
          <img className="footer-logo mt-2" src={footerLogo} />
          <div className="mt-2">
            The Black Potion is a unique bar in San Antonio that offers a diverse selection of cocktails and is a hub for board game enthusiasts. Our goal is to create a welcoming atmosphere where customers can relax and enjoy a night out.
          </div>
        </div>

        {/* Hours */}
        <div className="col-md-3">
          <div className="footer-title">
            Hours
          </div>
          <table className="table mt-2">
            <tbody>
              <tr>
                <td>Monday</td>
                <td>CLOSED</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>12:00 PM - 12:00 AM</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>12:00 PM - 12:00 AM</td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>12:00 PM - 12:00 AM</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>12:00 PM - 12:00 AM</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>12:00 PM - 11:00 PM</td>
              </tr>
              <tr>
                <td>Sunday</td>
                <td>12:00 PM - 11:00 PM</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* location */}
        <div className="col-md-3">
          <div className="footer-title">
            Location
          </div>
          <div className="mt-2 footer-location" id="mapSmall" style={{ height: "250px" }}></div>
        </div>

        {/* Contact */}
        <div className="col-md-3">
        <div className="footer-title">
            Contact
          </div>
          <div>
            Contact us!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
