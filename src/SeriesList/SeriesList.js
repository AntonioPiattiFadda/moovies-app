import React from 'react'
import AppContext from '../context/AppContext'
import MovieCard from '../MovieCard'
import './serieslist.css'

const SeriesList = () => {
    const { searchedSeries , setSearchedString} = React.useContext(AppContext);
   
  
    return(
    <div className="App">
        <h1 className='series-list__title'>Disfruta de las mejores series</h1>
        
        <section className={searchedSeries.length !== 0 ? 'movieCard__section' : 'notFound'}>
          {
          searchedSeries.length === 0 ? <p>Discula.. No encontramos la serie que buscas</p>
          :searchedSeries.map((moovie) => (
            <MovieCard moovie={moovie} key={moovie.title} />
          ))}
        </section>
      </div>
    )
}

export default SeriesList;