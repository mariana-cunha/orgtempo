import React, {useState} from "react";
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
                        <Link to="/">
                            <MenuItem>
                                PT
                            </MenuItem>
                        </Link>
                        <Link to="/espanhol">
                            <MenuItem>
                                ES
                            </MenuItem>
                        </Link>
                        <Link to="/ingles">
                            <MenuItem>
                                EN
                            </MenuItem>
                        </Link>
                        <Link to="/alemao">
                            <MenuItem>
                                DE
                            </MenuItem>
                        </Link>
                        <Link to="/frances">
                            <MenuItem>
                                FR
                            </MenuItem>
                        </Link>
                    </Select>
                </FormControl>
            </div>
        </section>
    )
}

export default MenuBar;