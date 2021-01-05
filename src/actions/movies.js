export const ADD_MOVIE = 'movies/ADD_MOVIE';
export const REMOVE_MOVIE = 'movies/REMOVE_MOVIE';
export const LIKE_MOVIE= 'movies/LIKE_MOVIE';
export const addMovieAction = (movie) => {
    return {
        type:ADD_MOVIE,
        payload:movie
    }
}

export const removeMovieAction = (id) => {
    return {
        type:REMOVE_MOVIE,
        payload:id
    }
}

export const likeMovieAction = (id) => {
    return {
        type:LIKE_MOVIE,
        payload:id
    }
}
