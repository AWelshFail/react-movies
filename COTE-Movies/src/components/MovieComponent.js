import styled from "styled-components";

const MovieContainer = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
width: 280px;
box-shadow: 0 3px 10px 0 #aaa;
cursor: pointer;
background: #fff;
`;

const CoverImage = styled.img`
height: 362px;
object-fit: cover;
`;

const MovieName = styled.span`
font-size: 18px;
font-weight: 600;
color: black;
margin: 15px 0;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
`;

const MovieInfo = styled.span`
font-size: 16px;
font-weight: 500;
color: black;
text-transform: capitalize;
`;

const InfoColumn = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;




const MovieComponent = (props) => {

   const { Title, Year, imdbID, Poster } = props.movie;

    
    return <MovieContainer onClick={ () => props.onMovieSelect(imdbID) }>
        <CoverImage src={Poster} />
            <MovieName>{Title}</MovieName>
                <InfoColumn>
            <MovieInfo>Year: {Year}</MovieInfo>
            
            
        </InfoColumn>
    </MovieContainer>
}

export default MovieComponent