import {configureStore} from "@reduxjs/toolkit";
import PostReducer from "./features/Newuser";

export default configureStore({
    reducer:{
        post:PostReducer,
    },
});

