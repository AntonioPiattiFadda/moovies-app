import React, { useEffect } from 'react'
import data from '../data/sample.json'

const useGetMooviesAndSeries = ()=>{
  const apiKey = '15e383204c1b8a09dbfaaa4c01ed7e17';
  /* Acá haria el llamado a la API--- Ver como simular una demora*/
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '02c3ee3b25mshb9a8cb4930801a0p1dfe22jsn04aeeca971dd',
      'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
    }
  };
   useEffect(()=>{
    fetch('https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1', options)
    .then(response => response.json())
    .then(response => console.log('nva api' + response))
    .catch(err => console.error(err));
   },[])
  
/*
  useEffect (()=>{
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`)
    .then(res=>{
      res.json();
      console.log('llamado a la API' + res);
    }).then(ress =>{
      console.log('llamado 2 a la API' + ress);
    })
  
  }, []);*/
  
  const mooviesAndSeries = data.entries;
  const mooviesOnly = mooviesAndSeries.filter(movie => movie.programType !== 'series')
  const seriesOnly = mooviesAndSeries.filter(movie => movie.programType === 'series')
  
  const [moovies, setMoovies] = React.useState(mooviesOnly);
  const [series, setSeries] = React.useState(seriesOnly);
  const [searchedString, setSearchedString ] = React.useState('');
  
  let searchedSeries = [];
  if (searchedString === ''){
    searchedSeries = series;
  } else {
    searchedSeries = series.filter(serie=>{
      const serieTitle = serie.title.toLowerCase();
      const searchText = searchedString.toLowerCase();
      return serieTitle.includes(searchText);
    })
  };
  
  let searchedMovies = [];
  if (searchedString === ''){
    searchedMovies = moovies;
  } else {
    searchedMovies = moovies.filter(moovie=>{
      const moovieTitle = moovie.title.toLowerCase();
      const searchText = searchedString.toLowerCase();
      return moovieTitle.includes(searchText);
    })
  };
  
  return{
    searchedMovies,
    setSearchedString,
    searchedSeries
    }
}
export default useGetMooviesAndSeries;



