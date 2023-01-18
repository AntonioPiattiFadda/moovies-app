import React from 'react'
import './home.css'

const Home = () => {
    return(
        <section className='home'>
        <div className='home__container'>
            <h1 className='home__title'>Bienvenido a Netflix</h1>
            <p className='home__description'>Elije lo que quieras ver, peliculas o series de todo tipo y en cualquier idioma</p>
        </div>
        </section>
    )
}

export default Home;