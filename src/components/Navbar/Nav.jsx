import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Nav.css'
import { Search } from '../Search/Search';
export const Nav = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();


    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };


    const handleSearch = (event) => {
        if (event.key === 'Enter' && searchTerm.trim() !== '') {

            navigate(`/search/${searchTerm}`);
        }
    };


    return (










  
            <div className="layout-container flex h-full grow flex-col">

                <div className="navbar-left-right">
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                        <div className="px-4 py-3">
                            <label className="flex flex-col min-w-40 h-12 w-full">
                                <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                                    <div
                                        className="text-[#CBCBCB] flex border-none bg-[#333333] items-center justify-center pl-4 rounded-l-lg border-r-0"
                                        data-icon="MagnifyingGlass"
                                        data-size="24px"
                                        data-weight="regular"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24px"
                                            height="24px"
                                            fill="currentColor"
                                            viewBox="0 0 256 256"
                                        >
                                            <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                                        </svg>
                                    </div>
                                    <input
                                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#FFFFFF] focus:outline-0 focus:ring-0 border-none bg-[#333333] focus:border-none h-full placeholder:text-[#CBCBCB] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                                        type="text"
                                        placeholder="Search"
                                        value={searchTerm}
                                        onChange={handleInputChange}
                                        onKeyDown={handleSearch}
                                    />
                                </div>
                            </label>
                        </div>

                    </div>
                </div>
            </div>











    );
};
