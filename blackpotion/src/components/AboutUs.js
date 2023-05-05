import React from "react";
import { useEffect } from "react";

function AboutUs() {
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
  
        const map = new window.google.maps.Map(document.getElementById('map'), mapOptions);
  
        const infowindow = new window.google.maps.InfoWindow({
          content: "<h3>The Black Potion</h3><p>1900 Fredericksburg Rd Suite 101<br />San Antonio, TX, United States, Texas</p><p>Phone: (210) 369-8750<br />Email: potionllc@gmail.com</p>"
        });
  
        const marker = new window.google.maps.Marker({
          position: { lat: 29.4877755, lng: -98.5522303 },
          map: map,
          title: 'The Black Potion',
          icon: {
            url: 'http://maps.google.com/mapfiles/ms/icons/bar.png',
            scaledSize: new window.google.maps.Size(40, 40)
          }
        });
  
        infowindow.open(map, marker);
      };
    }, 1000); // 1 second delay
  
    return () => clearTimeout(delay);
  }, []);
  

  return (

    //ABOUT US HTML
    <div className="container-xl mt-5">
      <h1 className="text-center mb-4">About The Black Potion</h1>
      <div className="row">
        <div className="col-md-6 mb-5">
          <p>Located at 1900 Fredericksburg Rd Suite 101 in San Antonio, Texas, The Black Potion is a unique and exciting bar that offers a wide range of cocktails and drinks to suit all tastes. In addition to being a great place to grab a drink, The Black Potion is also a hub for board game enthusiasts. With a diverse selection of games and a welcoming atmosphere, our bar is the perfect destination for a night of fun with friends or family.</p>
          <p>Our goal is to create a welcoming and friendly atmosphere where our customers can relax, have fun, and enjoy a great night out. Whether you're looking for a place to hang out with friends, catch up on work, or enjoy a date night, The Black Potion is the perfect destination.</p>
          <div id="map" style={{ height: "400px" }}></div>
        </div>


        <div className="col-md-6">
          <h3>Contact Information</h3>

          <div className="mb-3">
            <strong>The Black Potion</strong><br />
            1900 Fredericksburg Rd Suite 101<br />
            San Antonio, TX, United States, Texas<br />
            Phone: (210) 369-8750<br />
            Email: potionllc@gmail.com<br />
          </div>

          <h3>Hours</h3>

          <table className="table">
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

      </div>
    </div>

  );
}

export default AboutUs;
