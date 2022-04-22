import React from "react";
import ButtonMenu from "./ButtonMenu";
import { Link } from "react-router-dom";

function MenuBar(){
    return (
        <section className='menu'>
            <Link to="/">
                <img className="logo" alt="logo da tempo" src="./tempo_adesivo_15x15.png" />
            </Link>
            <Link to="/">
                <ButtonMenu title={"português"}/>
            </Link>
            <Link to="/espanhol">
                <ButtonMenu title={"espanhol"} />
            </Link>
            <Link to="/ingles">
                <ButtonMenu title={"inglês"} />
            </Link>
            <Link to="/alemao">
                <ButtonMenu title={"alemão"} />
            </Link>
            <Link to="/frances">
                <ButtonMenu title={"francês"} />
            </Link>
        </section>
    )
}

export default MenuBar;