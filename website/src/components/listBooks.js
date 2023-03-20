import {
    Container,
    Paper,
    Box,
    Typography,
    Button,
    IconButton,
} from "@mui/material";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import StarHalfOutlinedIcon from "@mui/icons-material/StarHalfOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Popup from "./popup";
import CartButton from "./cartButton";
import { togglePopup } from "../slice";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/400.css";

function ListBooks({ booksArr }) {
    let books = useSelector((state) => state.app.books);
    const showMessage = useSelector((state) => state.app.showMessage);
    const message = useSelector((state) => state.app.message);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    books = booksArr || books

    return (
        <Container id="container" disableGutters>
            <Popup
                anchorEl={document.querySelector("#container")}
                message={message}
                showMessage={showMessage}
            />
            {books.map((book, index) => {
                return (
                    <Paper
                        elevation={2}
                        sx={{
                            width: "100%",
                            height: "9rem",
                            marginTop: ".5rem",
                            display: "flex",
                        }}
                        onClick={(event) => {
                            if (event.target.id === "addToCart") return;
                            if (event.target.id === "buyNow") return;
                            navigate("/book/1");
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                minWidth: "8rem",
                                backgroundColor: "#4a5c773f",
                                borderTopLeftRadius: ".5rem",
                                borderBottomLeftRadius: ".5rem",
                            }}
                        >
                            <Box
                                sx={{
                                    backgroundImage: `url(${book.img})`,
                                    backgroundPosition: "center",
                                    backgroundSize: "cover", //use contain when scraping
                                    backgroundRepeat: "no-repeat",
                                    height: "100%",
                                    width: "75%",
                                    margin: "auto",
                                }}
                            />
                        </Box>
                        <Box
                            component="span"
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                padding: "0",
                                marginLeft: ".5rem",
                                position: "relative",
                                top: "0rem",
                                fontFamily: "'roboto', sans-serif",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                alignContent: "space-between",
                            }}
                        >
                            <Typography
                                noWrap
                                id="title"
                                sx={{ fontWeight: "700" }}
                            >
                                {book.title}
                            </Typography>
                            <Typography id="author" sx={{ fontSize: ".7rem" }}>
                                by {book.author}
                            </Typography>
                            <Typography id="rating">
                                <IconButton size="small">
                                    {book.rating.star}{" "}
                                    {[1, 2, 3, 4, 5].map((star, index) => {
                                        if (
                                            Math.floor(book.rating.star) - 1 >=
                                            index
                                        ) {
                                            return (
                                                <StarOutlinedIcon
                                                    fontSize="small"
                                                    sx={{ fill: "gold" }}
                                                />
                                            );
                                        }
                                        if (
                                            Math.ceil(book.rating.star) - 1 ===
                                            index
                                        ) {
                                            return (
                                                <StarHalfOutlinedIcon
                                                    fontSize="small"
                                                    sx={{ fill: "gold" }}
                                                />
                                            );
                                        }
                                        if (
                                            Math.ceil(book.rating.star) - 1 <
                                            index
                                        ) {
                                            return (
                                                <StarOutlineOutlinedIcon
                                                    fontSize="small"
                                                    sx={{ fill: "gold" }}
                                                />
                                            );
                                        }
                                    })}
                                    ({book.rating.num})
                                </IconButton>
                            </Typography>
                            <Typography sx={{ fontSize: "1.5rem" }} id="price">
                                {book.price}
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    zIndex: 300,
                                }}
                            >
                                <Button
                                    id="buyNow"
                                    size="small"
                                    sx={{ color: "#ff8f1d", fontSize: "10px" }}
                                    endIcon={<ShoppingCartIcon />}
                                >
                                    Buy Now
                                </Button>
                                <CartButton
                                    id="addToCart"
                                    size="small"
                                    sx={{ fontSize: "10px" }}
                                    book={book}
                                />
                            </Box>
                        </Box>
                    </Paper>
                );
            })}
        </Container>
    );
}

export default ListBooks;
