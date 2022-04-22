import React from "react";

function ButtonMenu({language, title, onClick, href}) {
    return ( 
        <button className="menu-btn" onClick={onClick} language={language}>
            <a href={href}>{title}</a>
        </button>
    )
}

export default ButtonMenu;