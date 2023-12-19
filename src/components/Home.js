/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Recommends from './Recommends';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Trending from './Trending';
import disneyPlusMoviesData from './../disneyPlusMoviesData.json';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies, setAllMovies } from '../features/users/movie/movieSlice';
import { selectUserName } from '../features/users/userSlice';
import { Container, inputFieldStyles } from './styles/HomeStyles';
import MovieList from './MovieList';


export default function Home() {
    const state = 'hello';
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    const [recommend, setRecommend] = useState([]);
    const [disney, setDisney] = useState([]);
    const [original, setOriginal] = useState([]);
    const [trends, setTrends] = useState([]);
    const [totalMovies, setTotalMovies] = useState([]);
    const [searchItem, setSearchItem] = useState('')
    const [itemsList, setItemsList] = useState([]);
    const [searchFlag, setSearchFlag] = useState(false);

    const handleInputChange = (e) => {
        // console.log(e.target.value, 'e.target.value');
        const searchTerm = e.target.value;
        setSearchItem(searchTerm)
    }
    console.log(searchItem, 'e.target.value');
    // useEffect(() => {
    //     console.log('helllo')
    //     // const detailsData = disneyPlusMoviesData.find((details) => {
    //     //     console.log(details.id, parseInt(id), details.id === parseInt(id) ? true : false, 'iddddd');
    //     // })
    //     const detailsData = disneyPlusMoviesData.find((details) =>
    //         details.title === searchItem
    //         // console.log(details.title, searchItem, 'searchItemsearchItem')
    //     )
    //     // setSelectedData(detailsData)
    //     console.log(detailsData, 'detailsData1111');

    // }, [searchItem])

    // const handleSearch = () => {
    //     let filterData = [];
    //     const detailsData = disneyPlusMoviesData.filter((details) =>
    //         details.title === searchItem
    //     )
    //     filterData.push(detailsData);
    //     setItemsList(filterData);
    //     setSearchFlag(true);
       
    //     console.log(detailsData, 'detailsDatadetailsDatadetailsDatadetailsData')
    // }

    const handleSearch = () => {
        const filteredData = disneyPlusMoviesData.filter((details) =>
          details.title.toLowerCase().includes(searchItem.toLowerCase())
        );
        setItemsList(filteredData);
        setSearchFlag(true);
      };
    // itemsList.map((i) => {
    //     console.log(i, 'iiiiiiiiii');
    // })
    // let recommends = [];
    // let newDisney = [];
    // let originals = [];
    // let trending = [];

    // useEffect(() => {

    //     disneyPlusMoviesData.map((data) => {
    //         if (data.type === "recommend") {
    //             recommends.push(data);

    //         }
    //         // else if (data.type === "new") {
    //         //     // newDisney.push(data);
    //         //     newDisney = [...newDisney, { id: data.id, ...data }]

    //         // }
    //     })
    // }, [])


    useEffect(() => {
        let recommends = [];
        let newDisney = [];
        let originals = [];
        let trending = [];
        setTotalMovies(disneyPlusMoviesData);
        disneyPlusMoviesData.map((data) => {

            if (data.type === "recommend") {
                recommends.push(data);

            }
            else if (data.type === "new") {
                newDisney.push(data);

            }
            else if (data.type === "trending") {
                originals.push(data);

            }
            else if (data.type === "original") {
                trending.push(data);

            }

        })
        setRecommend(recommends);
        setDisney(newDisney);
        setOriginal(originals);
        setTrends(trending);

    }, [])
    // console.log(disneyPlusMoviesData, 'disneyPlusMoviesData');
    console.log(recommend, disneyPlusMoviesData, disney, '12345');
    useEffect(() => {
        dispatch(setMovies({
            recommend: recommend,
            newDisney: disney,
            original: original,
            trending: trends
        }))

        dispatch(setAllMovies({
            allMovies: totalMovies
        }))


    }, [recommend, disney, original, trends])

    // useEffect(() => {
    //     dispatch(setAllMovies({
    //         allMovies: totalMovies
    //     }))


    // }, [recommend, disney, original, trends])

    useEffect(() => {
        if (searchItem === '')
            setSearchFlag(false);
    }, [searchItem])

    const handleClear = () => setSearchItem('');

    return (
        <>
            {/* <h1 style={{ color: 'white' }}>hiiiiiii</h1> */}
            {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
                <input
                    type="text"
                    value={searchItem}
                    onChange={handleInputChange}
                    placeholder='Type to search'
                />
                <button onClick={() => handleSearch()}>Search</button>
            </div> */}
            {/* <Container>
                <h1>Helloooo</h1>
                <ImgSlider />
                <Viewers />
                <Recommends recommends={recommend} state={state} />
                <NewDisney disney={disney} />
                <Originals original={original} />
                <Trending trends={trends} />
                <MovieList itemsList={itemsList} />
            </Container> */}
            <Container>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', marginBottom: '50px' }}>
                    <InputContainer>
                        <StyledInput
                            type="text"
                            value={searchItem}
                            onChange={handleInputChange}
                            placeholder='Type to search'
                        // style={{ borderRadius: '4px', paddingLeft: '10px', width: '350px', height: '50px', fontSize: '16px', border: 'none', boxShadow: 'rgb(0 0 0/69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px -10px' }}
                        />
                        {searchItem && (
                            <ClearButton onClick={() => handleClear()}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#000000"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </ClearButton>
                        )}
                    </InputContainer>
                    <button onClick={() => handleSearch()} style={{ borderRadius: '4px', width: '80px', border: 'none', background: 'black', color: 'white', boxShadow: 'rgb(0 0 0/69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px -10px' }}>Search</button>
                </div>
                {/* <h1>Helloooo</h1> */}
                {!searchFlag && <><ImgSlider />
                    <Viewers />
                    <Recommends recommends={recommend} state={state} />
                    <NewDisney disney={disney} />
                    <Originals original={original} />
                    <Trending trends={trends} />
                </>
                }

                <MovieList itemsList={itemsList} searchFlag={searchFlag} />
            </Container>
        </>
    )
}


// const Container = styled.main`
// position:relative;
// min-height: calc(100vh - 250px);
// overflow-x:hidden;
// display:block;
// top:72px;
// padding: 0 calc(3.5vw + 5px);


// &:after{
//     background:url("/images/home-background.png") center center/cover no-repeat fixed;
//     content: "";
//     position: absolute;
//     inset:0px;
//     opacity:1;
//     z-index:-1;
// }

// `;

const InputContainer = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  width: 350px;
  height: 40px;
  font-size: 16px;
  padding-right: 30px; /* Space for the clear button */
  border: 1px solid #ccc;
  border-radius: 4px;
  padding-left: 10px; 
  border: none;
  box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px -10px;
  
  &:focus {
    outline: none;
    border-color: blue;
    /* Additional styles when focused */
  }

  @media(max-width:560px){
   width:100%;
  /* height: 40px; */

   /* width: 100%; */
 /* height: 70%; */
}
`;

const ClearButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
`;















// /* eslint-disable react-hooks/exhaustive-deps */
// import styled from 'styled-components';
// import React, { useState, useEffect } from 'react';
// import ImgSlider from './ImgSlider';
// import Viewers from './Viewers';
// import Recommends from './Recommends';
// import NewDisney from './NewDisney';
// import Originals from './Originals';
// import Trending from './Trending';
// import disneyPlusMoviesData from './../disneyPlusMoviesData.json';
// import { useDispatch, useSelector } from 'react-redux';
// import { setMovies, setAllMovies } from '../features/users/movie/movieSlice';
// import { selectUserName } from '../features/users/userSlice';
// import { Container, inputFieldStyles } from './styles/HomeStyles';
// import MovieList from './MovieList';


// export default function Home() {
//     const state = 'hello';
//     const dispatch = useDispatch();
//     const userName = useSelector(selectUserName);
//     const [recommend, setRecommend] = useState([]);
//     const [disney, setDisney] = useState([]);
//     const [original, setOriginal] = useState([]);
//     const [trends, setTrends] = useState([]);
//     const [totalMovies, setTotalMovies] = useState([]);
//     const [searchItem, setSearchItem] = useState('')
//     const [itemsList, setItemsList] = useState([]);
//     const [searchFlag, setSearchFlag] = useState(false);

//     const handleInputChange = (e) => {
//         // console.log(e.target.value, 'e.target.value');
//         const searchTerm = e.target.value;
//         setSearchItem(searchTerm)
//     }
//     console.log(searchItem, 'e.target.value');
//     // useEffect(() => {
//     //     console.log('helllo')
//     //     // const detailsData = disneyPlusMoviesData.find((details) => {
//     //     //     console.log(details.id, parseInt(id), details.id === parseInt(id) ? true : false, 'iddddd');
//     //     // })
//     //     const detailsData = disneyPlusMoviesData.find((details) =>
//     //         details.title === searchItem
//     //         // console.log(details.title, searchItem, 'searchItemsearchItem')
//     //     )
//     //     // setSelectedData(detailsData)
//     //     console.log(detailsData, 'detailsData1111');

//     // }, [searchItem])

//     const handleSearch = () => {
//         let filterData = [];
//         const detailsData = disneyPlusMoviesData.filter((details) =>
//             details.title === searchItem
//             // console.log(details.title, searchItem, 'searchItemsearchItem')
//         )
//         filterData.push(detailsData);
//         setItemsList(filterData);
//         setSearchFlag(true);
//         // const movieArray = Object.values(detailsData);
//         // console.log(movieArray);
//         // setItemsList(movieArray);
//         console.log(detailsData, 'detailsDatadetailsDatadetailsDatadetailsData')
//     }

//     itemsList.map((i) => {
//         console.log(i, 'iiiiiiiiii');
//     })
//     // let recommends = [];
//     // let newDisney = [];
//     // let originals = [];
//     // let trending = [];

//     // useEffect(() => {

//     //     disneyPlusMoviesData.map((data) => {
//     //         if (data.type === "recommend") {
//     //             recommends.push(data);

//     //         }
//     //         // else if (data.type === "new") {
//     //         //     // newDisney.push(data);
//     //         //     newDisney = [...newDisney, { id: data.id, ...data }]

//     //         // }
//     //     })
//     // }, [])


//     useEffect(() => {
//         let recommends = [];
//         let newDisney = [];
//         let originals = [];
//         let trending = [];
//         setTotalMovies(disneyPlusMoviesData);
//         disneyPlusMoviesData.map((data) => {

//             if (data.type === "recommend") {
//                 recommends.push(data);

//             }
//             else if (data.type === "new") {
//                 newDisney.push(data);

//             }
//             else if (data.type === "trending") {
//                 originals.push(data);

//             }
//             else if (data.type === "original") {
//                 trending.push(data);

//             }

//         })
//         setRecommend(recommends);
//         setDisney(newDisney);
//         setOriginal(originals);
//         setTrends(trending);

//     }, [])
//     // console.log(disneyPlusMoviesData, 'disneyPlusMoviesData');
//     console.log(recommend, disneyPlusMoviesData, disney, '12345');
//     useEffect(() => {
//         dispatch(setMovies({
//             recommend: recommend,
//             newDisney: disney,
//             original: original,
//             trending: trends
//         }))

//         dispatch(setAllMovies({
//             allMovies: totalMovies
//         }))


//     }, [recommend, disney, original, trends])

//     // useEffect(() => {
//     //     dispatch(setAllMovies({
//     //         allMovies: totalMovies
//     //     }))


//     // }, [recommend, disney, original, trends])

//     useEffect(() => {
//         if (searchItem === '')
//             setSearchFlag(false);
//     }, [searchItem])

//     const handleClear = () => setSearchItem('');

//     return (
//         <>
//             {/* <h1 style={{ color: 'white' }}>hiiiiiii</h1> */}
//             {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
//                 <input
//                     type="text"
//                     value={searchItem}
//                     onChange={handleInputChange}
//                     placeholder='Type to search'
//                 />
//                 <button onClick={() => handleSearch()}>Search</button>
//             </div> */}
//             {/* <Container>
//                 <h1>Helloooo</h1>
//                 <ImgSlider />
//                 <Viewers />
//                 <Recommends recommends={recommend} state={state} />
//                 <NewDisney disney={disney} />
//                 <Originals original={original} />
//                 <Trending trends={trends} />
//                 <MovieList itemsList={itemsList} />
//             </Container> */}
//             <Container>
//                 <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', marginBottom: '50px' }}>
//                     <InputContainer>
//                         <StyledInput
//                             type="text"
//                             value={searchItem}
//                             onChange={handleInputChange}
//                             placeholder='Type to search'
//                         // style={{ borderRadius: '4px', paddingLeft: '10px', width: '350px', height: '50px', fontSize: '16px', border: 'none', boxShadow: 'rgb(0 0 0/69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px -10px' }}
//                         />
//                         {searchItem && (
//                             <ClearButton onClick={() => handleClear()}>
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     width="18"
//                                     height="18"
//                                     viewBox="0 0 24 24"
//                                     fill="none"
//                                     stroke="#000000"
//                                     strokeWidth="2"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                 >
//                                     <line x1="18" y1="6" x2="6" y2="18" />
//                                     <line x1="6" y1="6" x2="18" y2="18" />
//                                 </svg>
//                             </ClearButton>
//                         )}
//                     </InputContainer>
//                     <button onClick={() => handleSearch()} style={{ borderRadius: '4px', width: '80px', border: 'none', background: 'black', color: 'white', boxShadow: 'rgb(0 0 0/69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px -10px' }}>Search</button>
//                 </div>
//                 {/* <h1>Helloooo</h1> */}
//                 {!searchFlag && <><ImgSlider />
//                     <Viewers />
//                     <Recommends recommends={recommend} state={state} />
//                     <NewDisney disney={disney} />
//                     <Originals original={original} />
//                     <Trending trends={trends} />
//                 </>
//                 }

//                 <MovieList itemsList={itemsList} searchFlag={searchFlag} />
//             </Container>
//         </>
//     )
// }


// // const Container = styled.main`
// // position:relative;
// // min-height: calc(100vh - 250px);
// // overflow-x:hidden;
// // display:block;
// // top:72px;
// // padding: 0 calc(3.5vw + 5px);


// // &:after{
// //     background:url("/images/home-background.png") center center/cover no-repeat fixed;
// //     content: "";
// //     position: absolute;
// //     inset:0px;
// //     opacity:1;
// //     z-index:-1;
// // }

// // `;

// const InputContainer = styled.div`
//   position: relative;
// `;

// const StyledInput = styled.input`
//   width: 350px;
//   height: 40px;
//   font-size: 16px;
//   padding-right: 30px; /* Space for the clear button */
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   padding-left: 10px; 
//   border: none;
//   box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px -10px;
  
//   &:focus {
//     outline: none;
//     border-color: blue;
//     /* Additional styles when focused */
//   }

//   @media(max-width:560px){
//    width:100%;
//   /* height: 40px; */

//    /* width: 100%; */
//  /* height: 70%; */
// }
// `;

// const ClearButton = styled.button`
//   position: absolute;
//   top: 50%;
//   right: 10px;
//   transform: translateY(-50%);
//   background: none;
//   border: none;
//   cursor: pointer;
// `;