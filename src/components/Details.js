import React, { useState, useEffect } from 'react';
import disneyPlusMoviesData from './../disneyPlusMoviesData.json';
import { Routes, Route, useParams } from 'react-router-dom';
import { Container, ImageTitle, Description, SubTitle, Trailer, Player, Background, ContentMeta, Controls } from './styles/DetailsStyles';
import { Link } from 'react-router-dom';
import Sample from './Sample';

export default function Details() {
    let { id } = useParams();
    const [selectedData, setSelectedData] = useState(null);
    useEffect(() => {
        console.log('helllo')
        // const detailsData = disneyPlusMoviesData.find((details) => {
        //     console.log(details.id, parseInt(id), details.id === parseInt(id) ? true : false, 'iddddd');
        // })
        const detailsData = disneyPlusMoviesData.find((details) =>
            details.id === parseInt(id)
        )
        setSelectedData(detailsData)
        console.log(detailsData, 'detailsData1111');

    }, [id])
    console.log(selectedData, 'detailsData2222');
    console.log(id, 'userId')
    return (
        <Container style={{ color: 'white' }}>
            {/* <Link to="https://www.youtube.com/watch?v=Uky-jgd3M3E">Trailer</Link> */}
            {/* <div>{selectedData?.description}</div> */}
            <Background>
                <img src={selectedData?.backgroundImg} alt="" />
            </Background>
            {/* <ImageTitle>
                <img alt="" src="https://lumiere-a.akamaihd.net/v1/images/l_insideout_19751_78290626.png" />
            </ImageTitle> */}
            <ImageTitle>
                <img alt="" src={selectedData?.titleImg} />
            </ImageTitle>

            <ContentMeta>
                {/* <Controls>Control</Controls> */}

                <Controls>
                    {/* <Player>
                        <img src="/images/play-icon-black.png" alt="" />
                        <span>Play</span>
                    </Player> */}
                    {/* <Trailer>
                        <img src="/images/play-icon-white.png" alt="" />
                        <Link to="https://www.youtube.com/watch?v=Uky-jgd3M3E">Trailer</Link>
                    </Trailer> */}
                    {/* <Link to="https://www.youtube.com/watch?v=Uky-jgd3M3E"> */}
                    {/* <Trailer>
                            <img src="/images/play-icon-white.png" alt="" />
                            Trailer
                        </Trailer> */}
                    {/* </Link> */}
                    <Sample utube={selectedData?.utube} />
                </Controls>
                <SubTitle>{selectedData?.subTitle}</SubTitle>
                <Description>{selectedData?.description}</Description>
            </ContentMeta>
        </Container>
    )
}