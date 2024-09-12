"use client";
import React, { useState, useEffect, useCallback } from "react";

import axios from "axios";

import { CONSUMET_URL } from '../../../config'
import Details from '../Details/Details'
import AnimeEpisode from '../Episode/AnimeEpisode'

import { useParams } from 'react-router-dom';



const Info = () => {

    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();


    console.log(id);



    const fetchDetails = useCallback(async () => {
        try {
            const response = await axios.get(CONSUMET_URL + "/info/" + id);
            setData(response.data);
        } catch (error) {
            console.error("Error fetching details:", error);
        } finally {
            setIsLoading(false);
        }
    }, [id]);

    useEffect(() => {
        if (id) {
            fetchDetails();
        }
    }, [id, fetchDetails]);

    return (
        <div className="pb-2">
            {isLoading ? (
                <div className="flex items-center justify-center h-screen">
                    <div className="py-8 px-4 sm:px-6 lg:px-8">

                    </div>
                </div>
            ) : (
                <div>
                    {!data ? (
                        <div className="flex flex-col items-center justify-center h-screen">
                            <div className="text-4xl font-bold mb-4">No Results Found</div>
                            <div className="text-gray-500">Took a wrong turn?</div>
                        </div>
                    ) : (
                        <div>
                            <Details key={`details-${data?.id}`} data={data} />
                            <AnimeEpisode key={`episodes-${data?.id}`} data={data} />
                        </div>
                    )}
                </div>
            )}
        </div>


   




    )
}

export default Info