import React from "react";
import {  useDispatch, useSelector } from 'react-redux';
import classes from './FavouriteMovies.css';
import {ReactComponent as HeartLike} from '../../assets/heartLike.svg'

const FavouriteMovies = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const  moviesList = useSelector(state => state.movies.moviesList)
    
    return (
        <div className={ classes.FavouriteMovies }>
            <h1>Favourite Movies</h1>
            <ol>                
                {moviesList.length>0 && moviesList.map(
                        (movie, index) => (movie.liked)? (<li key={index.toString()}>
                            <div style={{display : 'flex', justifyContent : 'space-between'}}>
                                {movie.movie}
                                <div>
                                    <HeartLike style={{fill:movie.liked?'red':'lightgrey',width:25,height:25,cursor:'pointer',userSelect:'none',margin:'0 1rem'}} />                            
                                </div>
                            </div>
                        </li>
                    ):''
                )}
            </ol>
        </div>  
    );    
};

export default FavouriteMovies;
