import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { API_KEY } from "./Home";
import YoutubeEmbed from "./YoutubeEmbed";
import ReviewComponent from './ReviewComponent';
import ChatApp from "./ChatApp"



const Container = styled.div`
display: flex;
flex-direction: row;
padding-Top: 20px;
justify-content: left;
background: rgba(0, 0, 0, 0.9);

`;

const VideoContainer = styled.div`
display: flex;
padding: 10px 30px;
flex-direction: column;
height: 100%;
width: 100%;
border-bottom: 1px solid #969696;

`;

const Trailer = styled.div`
display: flex;
justify-content:left;
width: 100%;

background: rgba(0, 0, 0, 0.9);
border-top: 1px solid #969696;

`;

const ChatContainer = styled.div`
display: flex;

flex-direction: column;
color: white;
width: 100%;
border-bottom: 1px solid #969696;
border-left: 1px solid #969696;
`;


const CoverImage = styled.img`
display: flex;
object-fit: fill;
height: 452px;
margin-left: 10px;
align-items: center;
padding-Top: 20px;
opacity: 1.0;
`;



const InfoColumn = styled.div`
display: flex;
width: 100%;
flex-direction: column;
padding-Top: 10px;
margin: 20px;
`;

const MovieName = styled.span`
font-size: 30px;
font-weight: 600;
color: white;
margin: 15px 0;
white-space: nowrap;
text-transform: capitalize;
text-overflow: ellipsis;
overflow: hidden;
& span {
    opacity: 1;
}
`;

const MovieInfo = styled.span`

font-size: 16px;
padding: 5px;
font-weight: 500;
color: white;
overflow: hidden;
text-transform: capitalize;
text-overflow: ellipsis;
& span {
    font-style: italic;
}
`;

const Close = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: white;
  background: black;
  height: fit-content;
  padding-right: 50px;
  border-radius: 0%;
  cursor: pointer;
  
  
`;

const Desc = styled.div`
 text-transform: none;
`;



const MovieInfoComponent = (props) => {


    const { selectedMovie } = props;
    // eslint-disable-next-line no-unused-vars
    
    const [movieInfo, setMovieInfo] = useState();

    const [trailerInfo, setTrailerInfo] = useState();

    // eslint-disable-next-line no-unused-vars
    const setData = (videoId) => {
      localStorage.setItem('VideoID', selectedMovie)
    }

    useEffect(() => {

      const fetchMovieInfo = async () => {
   
        // Get Request
      await axios.get(`https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`,).then((response) =>
      setMovieInfo(response.data));
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      }; fetchMovieInfo() }, [selectedMovie]);

      useEffect(() => {

        const fetchTrailerInfo = async () => {
        
          // Get Request for Trailer API

          const options = {
            method: 'GET',
            url: 'https://mdblist.p.rapidapi.com/',
            // imdb ID from current movie
            params: {i: `${selectedMovie}`},
            headers: {
              'X-RapidAPI-Key': '2e39d35a90mshaa2ae26c25c86adp10fb25jsn8a8076032168',
              'X-RapidAPI-Host': 'mdblist.p.rapidapi.com'
            }
          };

        const response = await axios.request(options).then((response) =>

        // the API response is a youtube direct URL, to embed we need to remove most of this URL to just grab the videoID at the end
        // this videoID will be sent to youtubeEmbed component
        setTrailerInfo(response.data.trailer.substr(28)));

        setData()
        
        }; fetchTrailerInfo()}, );
        
    return (
      
            <><><Container>
        {movieInfo ? (
          <>            
            
            <CoverImage src={movieInfo?.Poster} alt={movieInfo?.Title} />
            
            <InfoColumn>
            <MovieName><span>{movieInfo?.Title}</span></MovieName>
              <MovieInfo>Type: <span>{movieInfo?.Type}</span></MovieInfo>
              <MovieInfo>Director: <span>{movieInfo?.Director}</span></MovieInfo>
              <MovieInfo>IMDB Rating: <span>{movieInfo.imdbRating}</span></MovieInfo>
              <MovieInfo>Year: <span>{movieInfo.Year}</span></MovieInfo>
              <MovieInfo>Released: <span>{movieInfo.Released}</span></MovieInfo>
              <MovieInfo>Language: <span>{movieInfo.Language}</span></MovieInfo>
              <MovieInfo>Metascore: <span>{movieInfo.Metascore}</span></MovieInfo>
              <MovieInfo>Rated: <span>{movieInfo?.Rated}</span></MovieInfo>
              <MovieInfo>Runtime: <span>{movieInfo?.Runtime}</span></MovieInfo>
              <MovieInfo>Actors: <span>{movieInfo?.Actors}</span></MovieInfo>
              <MovieInfo>Awards: <Desc><span>{movieInfo?.Awards}</span></Desc></MovieInfo>
              <MovieInfo>Genres: <span>{movieInfo?.Genre}</span></MovieInfo>
              <MovieInfo>Description: <Desc><span>{movieInfo?.Plot}</span></Desc></MovieInfo>
            </InfoColumn>
            
            <Close onClick={() => props.onMovieSelect()}>X</Close>
          </>
        ) : (
          "Loading..."
        )}
      </Container>
      <Trailer>
          <VideoContainer>
            
              <MovieName>{movieInfo?.Title} Trailer</MovieName>
              <br></br>
              <br></br>
              <YoutubeEmbed embedId={trailerInfo} />
            
          </VideoContainer>

          <ChatContainer>
            
            <ChatApp selectMovie={selectedMovie} movieTitle={movieInfo?.title}/>
            
          </ChatContainer>
        </Trailer></>
        <ReviewComponent />
                 </>
        )
          }

export default MovieInfoComponent