import React from 'react'
import AppContext from '../context/AppContext'
import './header.css'
import {BiSearch} from 'react-icons/bi';

const Header = () => {
    const { setSearchedString } = React.useContext(AppContext);
    const handleSearch = (query) => {
        setSearchedString(query);
        setBusqueda(query)
        localStorage.setItem('Busqueda', query)
      }

      const [ busqueda , setBusqueda] = React.useState('');

      React.useEffect(()=>{
        const storagedBusqueda = localStorage.getItem('Busqueda');
        let Buqueda = '';
        if (!storagedBusqueda) {
            setBusqueda(Buqueda)
        } else {
            setBusqueda(storagedBusqueda)
        }
      }, [])

    return (
        <>
        <header>
        <nav className='header__nav'>
            <div>
                NETFLIX
            </div>
            <div className='header__nav-search-container'>
                <BiSearch/>
                <input 
                className='header__nav-input'
                value={busqueda}
                placeholder='Search'
                onChange={(e) => handleSearch(e.target.value)}
                />
                
            </div>

            <ul>
                <li>
                    <a href='http://localhost:3000/moovies'>Peliculas</a>
                </li>
                <li>
                    <a href='http://localhost:3000/series'>Series</a>
                </li>
            </ul>
           
        </nav>
        </header>
        </>
    )
}

export default Header;