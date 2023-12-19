import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    recommend: null,
    newDisney: null,
    original: null,
    trending: null,
    allMovies: null,
}


const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            console.log(action, 'action')
            state.recommend = action.payload.recommend;
            state.newDisney = action.payload.newDisney;
            state.original = action.payload.original;
            state.trending = action.payload.trending;
        },
        setAllMovies: (state, action) => {
            console.log(action, 'action111')
            state.allMovies = action.payload.allMovies;

        },
    }
})

export const { setMovies, setAllMovies } = movieSlice.actions


export const selectRecommend = (state) => state.movie.recommend;
export const selectNewDisney = (state) => state.movie.newDisney;
export const selectOriginal = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trending;
export const selectAllMovies = (state) => state.movie.allMovies;



export default movieSlice.reducer;
