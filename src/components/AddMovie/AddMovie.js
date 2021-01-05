import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addMovieAction } from '../../actions/movies';
import classes from './AddMovie.css';

const addMovie = ( {addMovie} ) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [movieText,setMovieText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addMovie(movieText);
        setMovieText('');
    }
    
    return (
        <form className={ classes.AddMovie } onSubmit={handleSubmit}>
            <input 
                type="text" 
                size="70"
                value={movieText}
                placeholder="Please enter movie:" 
                onChange={(e)=>setMovieText(e.target.value)}
                />
            <button type="submit" >
                Add Movie
            </button>
        </form>  
    );
};

export default connect(null, {addMovie:addMovieAction})(addMovie);
