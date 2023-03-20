import { createSlice } from "@reduxjs/toolkit";
import book1 from "./images/book1.jpg";
import book2 from "./images/book2.jpg";

const initialState = {
    open: false, // For sidebar
    showMessage: false, // For popup notifications
    message: {}, // For popup notifications
    bnmCart: JSON.parse(localStorage.getItem("bnmCart")),
    books: [
        {
            img: book1,
            title: "The First Book, that i wrote all by my self yhhhhhhhhhhh......",
            author: "Steven Jobs",
            rating: { star: 2.3, num: 685 },
            price: "$5.99",
        },
        {
            img: book2,
            title: "Shrek the Ogre",
            author: "Walts Disney",
            rating: { star: 3.6, num: 1995 },
            price: "$5.99",
        },
    ],
    book: {
        img: book1,
        title: "The First Book, that i wrote all by my self yhhhhhhhhhhh......",
        author: "Steven Jobs",
        rating: { star: 2.3, num: 685 },
        price: "$5.99",
        description: {
            text: "Sint ad ad incididunt fugiat. Ut cillum sunt occaecat est sit qui nisi ex. Qui commodo sint sint veniam excepteur proident culpa occaecat sunt labore aute esse cillum. Ad dolore fugiat voluptate veniam deserunt mollit non cupidatat reprehenderit quis ad nisi ut. Consectetur id exercitation occaecat aute labore duis exercitation consequat et mollit cupidatat elit excepteur aliquip. In excepteur ea sunt culpa cillum labore dolore occaecat Lorem minim ad amet. Excepteur excepteur consectetur consectetur incididunt Lorem in est occaecat. Nulla non ullamco excepteur culpa cillum in cupidatat quis do velit sit est. Et qui deserunt commodo do reprehenderit eu laborum ad velit in excepteur quis enim. Qui consequat esse irure consectetur.",
        },
        aboutAuthor:
            "Sunt exercitation nisi excepteur eiusmod exercitation. Veniam incididunt tempor adipisicing cillum irure aute culpa. Aliqua dolor reprehenderit sunt cupidatat anim fugiat nostrud labore occaecat magna.",
        details: {
            asin: "B0BCP3JP6F",
            publisher: "Steven Jobs (January 10, 2023)",
            publicationDate: "January 10, 2023",
            language: "English",
            fileSize: "4225 KB",
            printLength: "409 pages",
        },
    },
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        toggleMenu: (state) => {
            state.open = !state.open;
        },
        togglePopup: (state, data) => {
            state.showMessage = !state.showMessage;
            state.message = data.payload;
        },
        updateCart: (state, data) => {
            state.bnmCart = data.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { toggleMenu, togglePopup, updateCart } = appSlice.actions;

export default appSlice.reducer;
