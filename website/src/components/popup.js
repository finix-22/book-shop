import { Popover, Typography, Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { togglePopup } from "../slice";
import addedToCart from "../images/addedToCart.png";

function Popup({ message, showMessage, anchorEl }) {
    const dispatch = useDispatch();
    const image = {
        addToCart: addedToCart,
    };
    return (
        <Popover
            anchorEl={anchorEl}
            open={showMessage}
            transitionDuration={300}
        >
            <Box
                sx={{
                    width: "20rem",
                    height: "11rem",
                }}
            >
                <Box
                    sx={{
                        backgroundImage: `url(${image[message?.type]})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        height: "5rem",
                        width: "5rem",
                        margin: ".5rem auto",
                        borderRadius: "50%",
                    }}
                />
                <Typography
                    align="center"
                    variant="subtitle2"
                    sx={{ padding: "0 .5rem" }}
                >
                    {message?.text}
                </Typography>
                <Button
                    sx={{
                        position: "absolute",
                        right: "0.25rem",
                        bottom: "0.25rem",
                    }}
                    onClick={() => dispatch(togglePopup())}
                >
                    OK
                </Button>
            </Box>
        </Popover>
    );
}

export default Popup;
