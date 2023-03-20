import {
    FilledInput,
    InputAdornment,
    FormControl,
    Button,
    Link,
    AppBar,
    Toolbar,
    IconButton,
    Divider,
    Badge,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import Person2SharpIcon from "@mui/icons-material/Person2Sharp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { toggleMenu } from "../slice";
import Sidebar from "./sidebar";
import logo003 from "../images/logo003.png";

function Navbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [state, setState] = useState({
        anchorEl: null,
    });

    return (
        <>
            <nav>
                <AppBar position="static" sx={{ backgroundColor: "#232F3F" }}>
                    <Toolbar
                        variant="dense"
                        disableGutters
                        sx={{ justifyContent: "space-between" }}
                    >
                        <Toolbar
                            variant="dense"
                            disableGutters
                            sx={{ justifyContent: "space-between" }}
                        >
                            <IconButton>
                                <MenuSharpIcon
                                    sx={{ fill: "#ffffff" }}
                                    onClick={(event) => {
                                        setState({
                                            ...state,
                                            anchorEl: event.target,
                                        });
                                        dispatch(toggleMenu());
                                    }}
                                />
                            </IconButton>
                            <span
                                style={{
                                    backgroundImage: `url(${logo003})`,
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                    height: "3rem",
                                    width: "2rem",
                                }}
                            />
                        </Toolbar>

                        <Toolbar
                            variant="dense"
                            disableGutters={true}
                            sx={{ justifyContent: "space-between" }}
                        >
                            <Button
                                size="small"
                                sx={{ color: "#ffffff" }}
                                endIcon={
                                    <ArrowForwardIosIcon fontSize="small" />
                                }
                            >
                                sign in
                            </Button>
                            <IconButton>
                                <Person2SharpIcon sx={{ fill: "#ffffff" }} />
                            </IconButton>
                            <IconButton>
                                <Badge color="primary" badgeContent={2}>
                                    <ShoppingCartIcon
                                        sx={{ fill: "#ffffff" }}
                                        onClick={() => navigate("cart")}
                                    />
                                </Badge>
                            </IconButton>
                        </Toolbar>
                    </Toolbar>
                    <Divider color="#475467" />
                    <Toolbar variant="dense" sx={{ justifyContent: "center" }}>
                        <FormControl>
                            <FilledInput
                                id="search"
                                placeholder="Search..."
                                size="small"
                                type="search"
                                disableUnderline
                                sx={{
                                    backgroundColor: "white",
                                    padding: ".5rem .5rem 1.7rem .5rem",
                                    height: "2rem",
                                    borderRadius: "2rem",
                                    "&.Mui-focused": {
                                        backgroundColor: "white",
                                        backgroundColor: "white",
                                        padding: ".5rem .5rem 1.7rem .5rem",
                                        height: "2rem",
                                        borderRadius: "2rem",
                                    },
                                    "&.Mui-active": {
                                        backgroundColor: "white",
                                        backgroundColor: "white",
                                        padding: ".5rem .5rem 1.7rem .5rem",
                                        height: "2rem",
                                        borderRadius: "2rem",
                                    },
                                }}
                                endAdornment={
                                    <InputAdornment
                                        position="end"
                                        sx={{
                                            position: "relative",
                                            top: ".6rem",
                                            left: ".5rem",
                                        }}
                                    >
                                        <IconButton
                                            sx={{
                                                backgroundColor: "#DB9F06",
                                                borderTopRightRadius: "2rem",
                                                borderTopLeftRadius: "0",
                                                borderBottomLeftRadius: "0",
                                                borderBottomRightRadius: "2rem",
                                                height: "2.2rem",
                                                width: "3rem",
                                                margin: "0",
                                                "&:hover, &:active, &:focus": {
                                                    backgroundColor: "#DB9F06",
                                                    borderTopRightRadius:
                                                        "2rem",
                                                    borderTopLeftRadius: "0",
                                                    borderBottomLeftRadius: "0",
                                                    borderBottomRightRadius:
                                                        "2rem",
                                                    height: "2.2rem",
                                                    width: "3rem",
                                                    margin: "0",
                                                },
                                            }}
                                        >
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Toolbar>
                </AppBar>
            </nav>
            <Sidebar anchorEl={state.anchorEl} />
        </>
    );
}

export default Navbar;
