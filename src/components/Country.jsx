import React from "react";
import './style/for_contry.css'

const Country = () => {
    return(
      <div className='h-screen'>
          <div id="content">
              <div id="header">深圳市</div>
              <div id="footer">
                  <ul>
                      <li>1984</li>
                      <li>1994</li>
                      <li>2002</li>
                      <li>2011</li>
                      <li>2020</li>
                  </ul>
                  <div id="resize_animation">
                      resize your window
                  </div>
              </div>
          </div>      </div>
    );
}

export default Country