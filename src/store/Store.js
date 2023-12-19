import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/users/userSlice";
import movieSlice from "../features/users/movie/movieSlice";
const Userstore = configureStore({
    reducer: {
        user: userSlice,
        movie: movieSlice,
    }
});

export default Userstore;