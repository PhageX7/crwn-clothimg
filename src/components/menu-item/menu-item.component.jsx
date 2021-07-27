import React from "react";
import "./menu-item.styles.scss";


const MenuItem = ({title, imageUrl, size}) => (
    
    <div
    style={
        {backgroundImage: `url(${imageUrl})`, backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"}
        
    } 
    className={`${size} menu-item`}>
        <div className="content">
            <h1 className="title">{title}</h1>
            <h3 className="sub-title">SHOP NOW</h3>
        </div>
    </div>    
);

export default MenuItem;