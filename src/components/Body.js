import React, { useState } from "react"

let menu_p1 = "/dp-menu_p1_v1.jpeg"
let menu_p2 = "/dp-menu_p2_v1.jpeg"

const Body = () => {

  return (
    <div className="body-container">
        <h1>Restaurent Dragon Phenix</h1>
        <div className="body-menu">
          <div className="body-menu-page">
            <img
              src={menu_p1}
              className="menu-page"
            />
            <img
              className="menu-page"
              src={menu_p2}
            />
          </div>
        </div>
    </div>
  )
}

export default Body