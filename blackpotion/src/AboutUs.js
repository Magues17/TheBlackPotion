import React from "react";

function AboutUs() {
  return (
    <div class="container mt-5">
      <h1 class="text-center mb-4">About The Black Potion</h1>
      <div class="row">
        <div class="col-md-6">
          <p>Located at 1900 Fredericksburg Rd Suite 101 in San Antonio, Texas, The Black Potion is a unique and exciting bar that offers a wide range of cocktails and drinks to suit all tastes.</p>

          <p>Our goal is to create a welcoming and friendly atmosphere where our customers can relax, have fun, and enjoy a great night out. Whether you're looking for a place to hang out with friends, catch up on work, or enjoy a date night, The Black Potion is the perfect destination.</p>
        </div>


        <div class="col-md-6">
          <h3>Contact Information</h3>

          <div>
            <strong>The Black Potion</strong><br />
            1900 Fredericksburg Rd Suite 101<br />
            San Antonio, TX, United States, Texas<br />
            Phone: (210) 369-8750<br />
            Email: potionllc@gmail.com<br />
          </div>

          <h3>Hours</h3>

          <table class="table">
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
