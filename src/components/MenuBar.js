import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function MenuBar(){
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <section className='menu'>
            <Link to="/">
                <img className="logo" alt="logo da tempo" src="./gif_respira_2.gif" />
            </Link>
            <div className="links">
                <FormControl sx={{ minWidth: 80}}>
                    <InputLabel> 🌏 </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="idioma"
                        onChange={handleChange}
                        autoWidth={true}
                    >
                        <MenuItem className="menu-link" value={"portugues"}>
                            <Link to="/">
                                PT
                            </Link>
                        </MenuItem>
                        <MenuItem className="menu-link" value={"espanhol"}>
                            <Link to="/espanhol">
                                ES
                            </Link>
                        </MenuItem>
                        <MenuItem className="menu-link" value={"ingles"}>
                            <Link to="/ingles">
                                EN
                            </Link>
                        </MenuItem>
                        <MenuItem className="menu-link" value={"alemao"}>
                            <Link to="/alemao">
                                DE
                            </Link>
                        </MenuItem>
                        <MenuItem className="menu-link" value={"frances"}>
                            <Link to="/frances">
                                FR
                            </Link>
                        </MenuItem>
                    </Select>
                </FormControl>
            </div>
        </section>
    )
}

export default MenuBar;