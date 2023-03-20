import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";
import RemoveShoppingCartSharpIcon from "@mui/icons-material/RemoveShoppingCartSharp";
import { togglePopup, updateCart } from "../slice";

function CartButton({ id, size, sx, book, variant }) {
    const cart = useSelector((state) => state.app.bnmCart);
    const dispatch = useDispatch();

    function checkCart(title) {
        // using an id would be more effective but till i get one
        if (cart[title]) return true;
        return false;
    }

    return (
        <Button
            id={id || `CartButton${Math.random()}`}
            variant={variant || "text"}
            size={size || "medium"}
            sx={sx || null}
            endIcon={
                checkCart(book.title) ? (
                    <RemoveShoppingCartSharpIcon />
                ) : (
                    <AddShoppingCartSharpIcon />
                )
            }
            onClick={() => {
                let bnmCart = JSON.parse(localStorage.getItem("bnmCart"));

                // If book in cart remove it
                if (checkCart(book.title)) {
                    delete bnmCart[book.title];
                    localStorage.setItem("bnmCart", JSON.stringify(bnmCart));

                    dispatch(
                        togglePopup({
                            text: `${book.title} has been removed from your Cart.`,
                            type: "removeFromCart",
                        })
                    );
                } else {
                    if (bnmCart) {
                        bnmCart = {
                            ...bnmCart,
                            [book.title]: book,
                        };

                        localStorage.setItem(
                            "bnmCart",
                            JSON.stringify(bnmCart)
                        );
                    } else {
                        bnmCart = {
                            [book.title]: book,
                        };

                        localStorage.setItem(
                            "bnmCart",
                            JSON.stringify(bnmCart)
                        );
                    }
                    
                    dispatch(
                        togglePopup({
                            text: `${book.title} has been added to your Cart.`,
                            type: "addToCart",
                        })
                    );
                }
                dispatch(updateCart(bnmCart));
            }}
        >
            {checkCart(book.title) ? "Remove From Cart" : "Add To Cart"}
        </Button>
    );
}

export default CartButton;
