import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Link from '@mui/material/Link';
import SearchIcon from "@mui/icons-material/Search";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import Person2SharpIcon from "@mui/icons-material/Person2Sharp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { toggleMenu } from "../slice";
import Sidebar from "./sidebar";
import "@fontsource/fugaz-one"

function Navbar() {

    const dispatch = useDispatch();
    const [state, setState] = useState({
        anchorEl: null,
    });
    
    return (
        <nav>
            <MenuSharpIcon
                onClick={(event) => {
                    setState({
                        ...state,
                        anchorEl: event.target,
                    });
                    dispatch(toggleMenu());
                }}
            />
            <Link underline="none">BOOKS N MORE</Link>
            <a>
                sign in <ArrowForwardIosIcon />
            </a>
            <Person2SharpIcon />
            <ShoppingCartIcon />
            <FormControl>
                <OutlinedInput
                    id="search"
                    endAdornment={
                        <InputAdornment position="end">
                            <Button
                                variant="outlined"
                                startIcon={<SearchIcon />}
                            />
                        </InputAdornment>
                    }
                />
            </FormControl>
            <Sidebar anchorEl={state.anchorEl} />
        </nav>
    );
}

export default Navbar;
