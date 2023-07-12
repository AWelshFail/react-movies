import { useState } from 'react';
import styled from 'styled-components'
import MovieComponent from "./MovieComponent";
import axios from 'axios';
import MovieInfoComponent from "./MovieInfoComponent";
import Navbar from './Navbar';
import Footer from './Footer';
import './Home.css';

export const API_KEY = "7a9c166d";

var first_count = true;

const Container = styled.div`
display: flex;
flex-direction: column;

background: url(https://cdn.wallpapersafari.com/24/74/zgeTuV.jpg) no-repeat center center fixed;
`;

const SearchBox = styled.div`
display: flex;
flex-direction: row;
padding-top: 115px;
padding-bottom: 15px;
border-bottom: 10px;

background: rgba(0, 0, 0, 0.9);
// url(https://cdn.wallpapersafari.com/24/74/zgeTuV.jpg) no-repeat center center fixed;
align-items: center;
z-index: 1000;
`;

const SearchIcon = styled.img`
 width: 60px;
 height: 60px;
 cursor: pointer;
 margin-left: 188px;
`;

const SearchInput = styled.input`
color: white;
font-size: 30px;
font-weight: bolder;
width: 100%;
justify-content: space-evenly;
display: flex;
background: rgba(0, 0, 0, 0.1);
border: none;
outline: none;
margin-left: 12px;

`;

const MovieListContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding: 30px;
padding-top: 50px;
justify-content: space-evenly;
gap: 24px;
background-color: inherit;

`;

const H1Text = styled.text`
color: #f08080;
font-size: 70px;
font-style: italic;
background: black;
`;

function Home() {
  const [searchQuery, updateSearchQuery] = useState();
  const [timeoutId, updateTimeoutId] = useState();
  const [movieList, updateMovieList] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();

  // API call
  const fetchData = async (searchString) => {
    // eslint-disable-next-line eqeqeq
    if (searchString == null || searchString == "") {
      const response = await axios.get(
          `https://www.omdbapi.com/?i=tt3896198&apikey=7a9c166d`
          
      )

      updateMovieList(response.data.items)

    } else {
      const response = await axios.get(
          `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`
      )
      updateMovieList(response.data.Search)
    }
  };

  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    updateSearchQuery(event.target.value);
    const timeout = setTimeout(() => fetchData(event.target.value), 500);
    onMovieSelect();
    updateTimeoutId(timeout);
    
  };
  const onTextLoad = (event) => {
    if (first_count) {
        
        onTextChange(event)
        first_count = false;
    }
    
};
  

  return (

    <Container onLoad={onTextLoad}>
    <Navbar />
        <SearchBox>
            <SearchIcon src="/icons8-search.png" />
            <SearchInput placeholder ="Search here..."
                value={searchQuery}
                onChange={onTextChange} />
        </SearchBox>

    {selectedMovie && (
        <MovieInfoComponent
            selectedMovie={selectedMovie}
            onMovieSelect={onMovieSelect}
        />)}

    <MovieListContainer>

        {movieList?.length
            ? movieList.map((movie, index) => (
                <MovieComponent
                    key={index}
                    movie={movie}
                    onMovieSelect={onMovieSelect}
                />))
            : <H1Text>No search results were generated, please enter a new search.</H1Text>}

    </MovieListContainer>
    <Footer />
</Container>
      
  );
}

export default Home;