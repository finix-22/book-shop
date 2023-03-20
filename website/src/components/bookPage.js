import { Box, Container, Typography, IconButton, Button } from "@mui/material";
import { useSelector } from "react-redux";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import StarHalfOutlinedIcon from "@mui/icons-material/StarHalfOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartButton from "./cartButton";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/400.css";

function BookPage() {
    const book = useSelector((state) => state.app.book);

    return (
        <Container sx={{ fontFamily: "'roboto', sans-serif" }}>
            <Box
                sx={{
                    width: "100%",
                    minheight: "9rem",
                    marginTop: ".5rem",
                    display: "flex",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        minWidth: "8rem",
                        backgroundColor: "#4a5c773f",
                        borderRadius: ".25rem",
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
                        alignContent: "space-between",
                    }}
                >
                    <Typography id="author" sx={{ fontSize: ".8rem" }}>
                        {book.author}
                    </Typography>
                    <Typography id="title" sx={{ fontWeight: "700" }}>
                        {book.title}
                    </Typography>
                    <Typography id="rating">
                        <IconButton
                            size="small"
                            sx={{
                                paddingLeft: "0",
                                paddingRigth: "0",
                            }}
                        >
                            {[1, 2, 3, 4, 5].map((star, index) => {
                                if (Math.floor(book.rating.star) - 1 >= index) {
                                    return (
                                        <StarOutlinedIcon
                                            fontSize="small"
                                            sx={{ fill: "gold" }}
                                        />
                                    );
                                }
                                if (Math.ceil(book.rating.star) - 1 === index) {
                                    return (
                                        <StarHalfOutlinedIcon
                                            fontSize="small"
                                            sx={{ fill: "gold" }}
                                        />
                                    );
                                }
                                if (Math.ceil(book.rating.star) - 1 < index) {
                                    return (
                                        <StarOutlineOutlinedIcon
                                            fontSize="small"
                                            sx={{ fill: "gold" }}
                                        />
                                    );
                                }
                            })}
                            ({book.rating.num + " "}
                            <Typography>Reviews</Typography>)
                        </IconButton>
                    </Typography>
                    <Typography sx={{ fontSize: "1.5rem" }} id="price">
                        {book.price}
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "15rem",
                    margin: ".5rem auto",
                }}
            >
                <Button
                    variant="outlined"
                    sx={{
                        backgroundColor: "#ff8f1d",
                        color: "#ffffff",
                        marginBottom: ".5rem",
                    }}
                    endIcon={<ShoppingCartIcon />}
                >
                    Buy Now
                </Button>
                <CartButton
                    variant="outlined"
                    book={book}
                    sx={{
                        backgroundColor: "#1976D3",
                        color: "#ffffff",
                        marginBottom: ".5rem",
                        "&:hover, &:active, &:focus": {
                            backgroundColor: "#1976D3",
                            color: "#ffffff",
                            marginBottom: ".5rem",
                        },
                    }}
                />
            </Box>
            <Box>
                <Typography
                    sx={{
                        fontSize: "30px",
                        fontWeight: "700",
                        marginBottom: ".5rem",
                    }}
                >
                    Description
                </Typography>
                <Typography
                    id="subtitle1"
                    sx={{
                        fontSize: "22px",
                        fontWeight: "700",
                        marginBottom: ".25rem",
                    }}
                >
                    Ex irure aute cupidatat cillum fugiat ad ad velit mollit.
                </Typography>
                <Typography
                    id="text"
                    sx={{ fontSize: "14px", marginBottom: ".25rem" }}
                >
                    {book.description.text}
                </Typography>
                <Typography
                    sx={{
                        fontSize: "22px",
                        fontWeight: "700",
                        marginBottom: ".25rem",
                        marginTop: ".25rem",
                    }}
                >
                    About the Author
                </Typography>
                <Typography sx={{ fontSize: "14px" }} id="aboutAuthorTxt">
                    {book.aboutAuthor}
                </Typography>
                <Typography
                    sx={{
                        fontSize: "22px",
                        fontWeight: "700",
                        marginBottom: ".25rem",
                        marginTop: ".25rem",
                    }}
                >
                    Product Detail
                </Typography>
                <Typography sx={{ fontWeight: "500", fontSize: "14px" }}>
                    ASIN:
                    <Typography sx={{ fontSize: "14px" }} component="span">
                        {" "}
                        {book.details.asin}
                    </Typography>
                </Typography>
                <Typography sx={{ fontWeight: "500", fontSize: "14px" }}>
                    Publisher:
                    <Typography sx={{ fontSize: "14px" }} component="span">
                        {" "}
                        {book.details.publisher}
                    </Typography>
                </Typography>
                <Typography sx={{ fontWeight: "500", fontSize: "14px" }}>
                    Publication Date:
                    <Typography sx={{ fontSize: "14px" }} component="span">
                        {" "}
                        {book.details.publicationDate}
                    </Typography>
                </Typography>
                <Typography sx={{ fontWeight: "500", fontSize: "14px" }}>
                    Language:
                    <Typography sx={{ fontSize: "14px" }} component="span">
                        {" "}
                        {book.details.language}
                    </Typography>
                </Typography>
                <Typography sx={{ fontWeight: "500", fontSize: "14px" }}>
                    File Size:
                    <Typography sx={{ fontSize: "14px" }} component="span">
                        {" "}
                        {book.details.fileSize}
                    </Typography>
                </Typography>
                <Typography sx={{ fontWeight: "500", fontSize: "14px" }}>
                    Print Length:
                    <Typography component="span" sx={{ fontSize: "14px" }}>
                        {" "}
                        {book.details.printLength}
                    </Typography>
                </Typography>
            </Box>
        </Container>
    );
}

export default BookPage;
