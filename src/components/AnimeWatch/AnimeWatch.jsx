
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { CONSUMET_URL } from '../../../config'
import { Skeleton, BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'


import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
    defaultLayoutIcons,
    DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
export const AnimeWatch = () => {

    const { id, episode } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [watchData, setWatchData] = useState(null);
    const [episodeDetails, setEpisodeDetails] = useState(null);

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const fetchDetails = useCallback(async () => {
        try {
            const episodeLinkResponse = await axios.get(`${CONSUMET_URL}/watch/${id}-episode-${episode}`);
            const detailsResponse = await axios.get(`${CONSUMET_URL}/${id}`);
            setWatchData(episodeLinkResponse.data);
            setEpisodeDetails(detailsResponse.data);
        } catch (error) {
            console.error("Error fetching details:", error);
        } finally {
            await sleep(5000);
            setIsLoading(false);
        }
    }, [id, episode]);

    useEffect(() => {
        fetchDetails();
    }, [fetchDetails]);

    if (!watchData) {
        return (

            <div className="max-w-4xl mx-auto px-4 pt-10 pb-4">
                {isLoading ? (
                    <div className="flex flex-col items-center justify-center pb-5"></div>
                ) : (
                    <div className="flex flex-col items-center justify-center pb-5">
                        <div className="text-4xl font-bold mb-4">No Results Found</div>
                        <div className="text-gray-500">Took a wrong turn?</div>
                    </div>
                )}
                <Skeleton className="rounded-md">
                    <iframe
                        src={""}
                        title="Embedded Video"
                        width="100%"
                        height="450"
                        scrolling="no"
                        allowFullScreen
                        className="max-w-3xl mx-auto px-4 pt-10"
                    ></iframe>
                </Skeleton>
            </div>
        );
    }
    const defaultSourceUrl = watchData.sources
        .map((value, index, array) => {
            const source = value;
            if (source.quality === "default") {
                return source.url;
            }
            return null;
        })
        .filter((url) => url !== null)[0];
    return (


        <div
            className="relative flex size-full min-h-screen flex-col bg-black dark group/design-root overflow-x-hidden"
            style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
        >
            <div className="pb-1 mx-auto px-4 pt-10">
                <div className="pb-4">
                    <div className="flex flex-col text-center items-center justify-center">
                        <div className="flex flex-col flex-wrap pb-2">
                            <Breadcrumbs size="lg">
                                <BreadcrumbItem className="text-[#ffff]">
                                    <Link to={`/${id}`}>
                                        {id.charAt(0).toUpperCase() + id.slice(1)}
                                    </Link>
                                </BreadcrumbItem>
                                <BreadcrumbItem>{episode}</BreadcrumbItem>
                            </Breadcrumbs>
                        </div>
                    </div>
                </div>
                <div className="max-w-4xl mx-auto flex">
                    <MediaPlayer src={defaultSourceUrl || ""}>
                        <MediaProvider />
                        <DefaultVideoLayout icons={defaultLayoutIcons} />
                    </MediaPlayer>
                </div>
            </div>


        </div>

    )
}
