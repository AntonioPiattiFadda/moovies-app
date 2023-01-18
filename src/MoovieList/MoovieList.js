import React from 'react'
import MovieCard from '../MovieCard'
import AppContext from '../context/AppContext';
import './moovielist.css'

const MoovieList = () => {
  const { moovieSearch, searchedMovies } = React.useContext(AppContext);
  
    return(
    <div className="App">
       <h1 className='moovie-list__title'>Disfruta de las mejores peliculas</h1>
        <section className={searchedMovies.length !== 0 ? 'movieCard__section' : 'notFound'}>
          {
          searchedMovies.length === 0 ? <p>Discula.. No encontramos la pelicula que buscas</p>
          :searchedMovies.map((moovie) => (
            <MovieCard moovie={moovie} key={moovie.title} />
          ))}
        </section>
      </div>
    )
}

export default MoovieList;