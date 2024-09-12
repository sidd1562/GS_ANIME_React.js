import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ anime }) => {
    return (
        <>
            {/* <div
                className="relative flex size-full min-h-screen flex-col bg-[#FFFFFF] group/design-root overflow-x-hidden"
                style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
                <div className="layout-container flex h-full grow flex-col">

                    <div className="px-40 flex flex-1 justify-center py-5">
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
                    </div>
                    <footer className="flex justify-center">
                        <div className="flex max-w-[960px] flex-1 flex-col" />
                    </footer>
                </div>
            </div> */}







            <div className="flex flex-col gap-3 pb-3">
                <Link to={`/${anime.id}`} className="w-full">
                    <div
                        className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-lg"
                        style={{
                            backgroundImage: `url(${anime.image})`
                        }}
                    />
                    <div>
                        <p className="text-[#FFFFFF] text-base font-medium leading-normal">
                            {anime.title}
                        </p>
                        <p className="text-[#6B6B6B] text-sm font-normal leading-normal">
                            {anime.releaseDate}
                        </p>
                    </div>
                </Link>
            </div>


       
{/* 
            <div className="flex flex-col gap-3 pb-3">
                                    <div
                                        className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-lg"
                                        style={{
                                            backgroundImage:
                                                'url("https://cdn.usegalileo.ai/sdxl10/44884556-5d1c-474c-a219-d2d3f59cf080.png")'
                                        }}
                                    />
                                    <div>
                                        <p className="text-[#FFFFFF] text-base font-medium leading-normal">
                                            Dragon Prince Yuan
                                        </p>
                                        <p className="text-[#CBCBCB] text-sm font-normal leading-normal">
                                            Donghua
                                        </p>
                                    </div>
                                </div> */}



        </>
    )
}

export default Card