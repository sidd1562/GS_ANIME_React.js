import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CONSUMET_URL } from '../../../config'
import Card from '../Card/Card';
import { Nav } from '../Navbar/Nav';
import { Search } from '../Search/Search';

import './home.css'

const HomeAnime = () => {

    const [loding, setloading] = useState(false)
    const [animes, setAnimes] = useState([]);
    const [popular, setpopuler] = useState([]);





    const fetchTopAiring = async () => {
        try {
            const response = await axios.get(CONSUMET_URL + "/top-airing");
            setAnimes(response.data.results);
        } catch (error) {
            console.log("Error fetching top airing anime");
        }
    };

    const fetchPopular = async () => {
        try {
            const response = await axios.get(CONSUMET_URL + "/popular");
            setpopuler(response.data.results);
        } catch (error) {
            console.log("Error fetching popular anime");
        }
    };

    useEffect(() => {
        const fetchDetails = async () => {
            await Promise.all([fetchTopAiring(), fetchPopular()]);
            setloading(true);
        };
        fetchDetails();
    }, [])




    console.log("anime", animes);
    console.log("popular", popular)

    return (
        <>


            {/* <div className="px-40 flex flex-1 justify-center py-5">
                <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                    <div className="flex gap-3 p-3 flex-wrap pr-4">
                        <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#EEEEEE] pl-2 pr-4">
                            <div
                                className="text-black"
                                data-icon="Fire"
                                data-size="20px"
                                data-weight="regular"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20px"
                                    height="20px"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M183.89,153.34a57.6,57.6,0,0,1-46.56,46.55A8.75,8.75,0,0,1,136,200a8,8,0,0,1-1.32-15.89c16.57-2.79,30.63-16.85,33.44-33.45a8,8,0,0,1,15.78,2.68ZM216,144a88,88,0,0,1-176,0c0-27.92,11-56.47,32.66-84.85a8,8,0,0,1,11.93-.89l24.12,23.41,22-60.41a8,8,0,0,1,12.63-3.41C165.21,36,216,84.55,216,144Zm-16,0c0-46.09-35.79-85.92-58.21-106.33L119.52,98.74a8,8,0,0,1-13.09,3L80.06,76.16C64.09,99.21,56,122,56,144a72,72,0,0,0,144,0Z" />
                                </svg>
                            </div>
                            <p className="text-black text-sm font-medium leading-normal">HOT</p>
                        </div>
                        <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#EEEEEE] pl-2 pr-4">
                            <div
                                className="text-black"
                                data-icon="FilmReel"
                                data-size="20px"
                                data-weight="regular"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20px"
                                    height="20px"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M224,216H183.36A103.95,103.95,0,1,0,128,232h96a8,8,0,0,0,0-16ZM40,128a88,88,0,1,1,88,88A88.1,88.1,0,0,1,40,128Zm88-24a24,24,0,1,0-24-24A24,24,0,0,0,128,104Zm0-32a8,8,0,1,1-8,8A8,8,0,0,1,128,72Zm24,104a24,24,0,1,0-24,24A24,24,0,0,0,152,176Zm-32,0a8,8,0,1,1,8,8A8,8,0,0,1,120,176Zm56-24a24,24,0,1,0-24-24A24,24,0,0,0,176,152Zm0-32a8,8,0,1,1-8,8A8,8,0,0,1,176,120ZM80,104a24,24,0,1,0,24,24A24,24,0,0,0,80,104Zm0,32a8,8,0,1,1,8-8A8,8,0,0,1,80,136Z" />
                                </svg>
                            </div>
                            <p className="text-black text-sm font-medium leading-normal">
                                Latest Release
                            </p>
                        </div>
                    </div>

                </div>
            </div> */}


            {/* <div className='bg-[#efeded]'>
                {loding ? <div className='grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4'>
                    {animes.map((anime) => (
                        <Card key={anime.id} anime={anime} />
                    ))}</div> : <></>
                }
            </div>

            <h2 className="text-4xl font-bold mb-4 py-4 font-mono">POPULAR</h2>
            {loding ? <div className='grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4'>
                {popular.map((anime) => (
                    <Card key={anime.id} anime={anime} />
                ))}</div> : <></>

            } */}
            <Nav />

            <div
                className="relative flex size-full min-h-screen flex-col bg-black dark group/design-root overflow-x-hidden"
                style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
            >
                <div className="layout-container flex h-full grow flex-col">

                    <div className="home_left_right">
                        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">

                            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                                {animes.map((anime) => (
                                    <Card key={anime.id} anime={anime} />
                                ))}</div>
                        </div>
                    </div>
                </div>



                <div className="layout-container flex h-full grow flex-col">

                    <div className="home_left_right">
                        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">

                            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                                {popular.map((anime) => (
                                    <Card key={anime.id} anime={anime} />
                                ))}</div>
                        </div>
                    </div>
                </div>
            </div>




        </>


    );
}

export default HomeAnime;
