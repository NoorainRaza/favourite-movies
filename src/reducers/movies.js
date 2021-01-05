import { ADD_MOVIE, LIKE_MOVIE, REMOVE_MOVIE } from "../actions/movies";

const INITIAL_STATE={
    moviesList: [],
}

const movies = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case ADD_MOVIE:
            return {...state, moviesList:[...state.moviesList,{id:state.moviesList.length+1,liked:false, movie: action.payload}]}
        case REMOVE_MOVIE:
            return {...state,moviesList:state.moviesList.filter(t=>t.id !== action.payload)}
        case LIKE_MOVIE:
            const updatedMovies = [...state.moviesList];
            const index = updatedMovies.findIndex(t=>t.id === action.payload);
            if(index>-1){
                updatedMovies[index].liked = !updatedMovies[index].liked
            }
            return {...state,moviesList:updatedMovies}
        default:
            return state;
    }
}

export default movies;
