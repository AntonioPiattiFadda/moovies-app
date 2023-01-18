import React from 'react'
import './App.css';
import Layout from '../Layout/Layout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MoovieList from '../MoovieList/MoovieList';
import NotFound from '../NotFound/NotFound';
import Home from '../Home/Home';
import SeriesList from '../SeriesList/SeriesList';
import useGetMooviesAndSeries from '../hooks/useGetMooviesAndSeries';
import AppContext from '../context/AppContext';


function App() {
  const informationAboutMoviesAndSeries = useGetMooviesAndSeries();

  return (
    <AppContext.Provider value={informationAboutMoviesAndSeries}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/moovies" component={MoovieList} />
            <Route exact path="/series" component={SeriesList} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
