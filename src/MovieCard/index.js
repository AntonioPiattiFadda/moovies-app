import React from 'react'
import './movieCard.css'

const MovieCard = ({ moovie }) =>{
    const [moovieUrl, setMoovieUrl] = React.useState('')
    console.log((moovie.images.PosterArt).url);

    return (
        
        <div className='movieCard__container'>
            <div className='movieCard__img-container'>
              <img className='movieCard__image' alt={moovie.title} src={(moovie.images.PosterArt).url}></img>
            </div>
            <div className='movieCard__info'> 
            <h3 className='movieCard__title'>{moovie.title}</h3>
            <div>Estrellas</div>
            <p className='movieCard__programTipe'>{moovie.programType}</p>
            </div>
            
        </div>
        
    )
}

export default MovieCard;