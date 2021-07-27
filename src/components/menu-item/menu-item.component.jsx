import React from "react";
import "./menu-item.styles.scss";


const MenuItem = ({title, imageUrl, size}) => (
    
    <div
    style={
        {backgroundImage: `url(${imageUrl})`, backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"}
        
    } 
    className={`${size} menu-item grow`}>
        <div className="content">
            <h6 className="title">{title}</h6>
            <h5 className="sub-title">SHOP NOW</h5>
        </div>
    </div>    
);

export default MenuItem;