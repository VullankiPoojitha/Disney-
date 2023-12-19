import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAllMovies } from '../features/users/movie/movieSlice';
import { Wrap, Container, Content } from './styles/CommonStyles';

export default function MovieList({ itemsList, searchFlag }) {

    const allMovies = useSelector(selectAllMovies);


    const movieData = searchFlag ? itemsList.flat() : allMovies;
    console.log(allMovies, itemsList, searchFlag, 'selectAllMovies12345');

    console.log(itemsList.flat().length === 0 ? 'not found' : itemsList.flat().length !== 0 ? 'search' : 'movie list', allMovies, 'movieDatamovieData');

    return (
        <>
            <Container id="allMovieComponent" style={{ marginBottom: '80px' }}>
                {allMovies && !searchFlag && <h4>Movie List</h4>}
                {itemsList.flat().length !== 0 && allMovies && searchFlag && <h4>Searched Result</h4>}
                {searchFlag && itemsList.flat().length === 0 && <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '30px', fontWeight: '700' }}>Movie Not Found</div>}
                {/* {itemsList.flat().length === 0 ? <h4>Movie Not Found</h4> : itemsList.flat().length !== 0 ? <h4>Searched Result</h4> : allMovies.length !== 0  && <h4>Movie List</h4>} */}
                <Content>
                    {movieData && movieData.map((movie, key) => (
                        <>
                            <Wrap key={movie.id} >

                                <Link to={`/detail/` + movie.id}>
                                    <img src={movie?.cardImg} alt="" />

                                </Link>

                            </Wrap>

                        </>
                    ))

                    }

                </Content>
            </Container>

            {/* <Container id="allMovieComponent">
                <h4>Movie List</h4>
                <Content>
                    {allMovies && allMovies.map((movie, key) => (
                        <>
                            <Wrap key={movie.id}>

                                <Link to={`/detail/` + movie.id}>
                                    <img src={movie?.cardImg} alt="" />

                                </Link>

                            </Wrap>

                        </>
                    ))

                    }

                </Content>
            </Container> */}
        </>
    )
}