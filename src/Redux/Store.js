import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Cartslice";

const Store = configureStore({
    reducer:{
        cart: CartReducer,
        // product: productReducer,
    }
})

export default Store;