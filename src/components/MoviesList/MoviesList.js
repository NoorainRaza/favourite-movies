import React from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { likeMovieAction, removeMovieAction } from '../../actions/movies';
import classes from './MoviesList.css';
import {ReactComponent as HeartLike} from '../../assets/heartLike.svg'

const MoviesList = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const  moviesList = useSelector(state => state.movies.moviesList)
    // console.log("moviesList: ", moviesList);
    return (
        <div className={ classes.MoviesList }>
            <h1>Movies List</h1>
            <ol>                
                {moviesList.length>0 && moviesList.map(
                    (movie, index) => <li key={index.toString()}>
                        <div style={{display : 'flex', justifyContent : 'space-between'}}>
                        {movie.movie}
                        <div>
                        <HeartLike onClick={()=>dispatch(likeMovieAction(movie.id))} style={{fill:movie.liked?'red':'lightgrey',width:25,height:25,cursor:'pointer',userSelect:'none',margin:'0 1rem'}} />
                        <button 
                            onClick={() => dispatch(removeMovieAction(movie.id))}>
                                Remove
                        </button>
                        </div>
                      
                        </div>      
                    </li>
                )}
            </ol>
        </div>  
    );
};

export default MoviesList;
