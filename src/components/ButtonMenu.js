import React from "react";

function ButtonMenu({title, href}) {
    return ( 
        <button className="menu-btn" >
            <a href={href}>{title}</a>
        </button>
    )
}

export default ButtonMenu;