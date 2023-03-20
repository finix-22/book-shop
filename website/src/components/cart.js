import {
    Box,
    Typography,
    Button,
    Popper,
    Grow,
    Paper,
    MenuItem,
    MenuList,
} from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import FilterListSharpIcon from "@mui/icons-material/FilterListSharp";
import CartButton from "./cartButton";
import ListBooks from "./listBooks";

function Cart() {
    const bnmCart = useSelector((state) => state.app.bnmCart);
    const books = Object.values(bnmCart).reverse();
    const [state, setState] = useState({
        open: false,
        anchorEl: null,
        books,
    });

    function sortBnmCart() {
        let returnArr = [];
        let keys = Object.keys(bnmCart).sort();
        for (let i = 0; i < keys.length; i++) {
            returnArr = [...returnArr, bnmCart[keys[i]]];
        }
        return returnArr;
    }

    const filterFunctions = {
        "A-Z": sortBnmCart(),
        "Z-A": sortBnmCart().reverse(),
        "Latest-Earliest": Object.values(bnmCart).reverse(),
        "Earliest-Latest": Object.values(bnmCart),
    };

    function handleToggle(event) {
        setState({
            ...state,
            open: !state.open,
            anchorEl: event.target, // may cause problem, use tenary to make it null when open is fslse if it does
        });
    }

    function handleClose(event) {
        
        setState({
            ...state,
            open: false,
            anchorEl: null,
            books: filterFunctions[event.target.innerText]
        });
    }

    return (
        <>
            <Box>
                <Button
                    id="filter-button"
                    size={"small"}
                    aria-controls={state.open ? "composition-menu" : undefined}
                    aria-expanded={state.open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    startIcon={<FilterListSharpIcon />}
                >
                    Filter
                </Button>
                <Popper
                    open={state.open}
                    anchorEl={state.anchorEl}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                    placement === "bottom-start"
                                        ? "left top"
                                        : "left bottom",
                            }}
                        >
                            <Paper>
                                <MenuList
                                    autoFocusItem={state.open}
                                    id="filter-menu"
                                    aria-labelledby="filter-button"
                                >
                                    <MenuItem onClick={handleClose}>
                                        A-Z
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        Z-A
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        Latest-Earliest
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        Earliest-Latest
                                    </MenuItem>
                                </MenuList>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
                <Typography>
                    You have {books.length}{" "}
                    {books.length > 1 ? "books" : "book"} in your cart
                </Typography>
            </Box>
            <ListBooks booksArr={state.books} />
        </>
    );
}

export default Cart;
