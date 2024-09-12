import React, { useState, useEffect, useCallback } from "react";
import { CONSUMET_URL } from "../../../config";
import Card from '../Card/Card';
import axios from "axios";
import { Nav } from "../Navbar/Nav";

import '../Navbar/Nav.css'
import './Search.css'

import { useParams } from "react-router-dom";

export const Search = () => {

  // const [isLoading, setIsLoading] = useState(false);
  // const [searchResults, setSearchResults] = useState([]);
  // const [error, setError] = useState(null);
  // const [textSearch, setTextSearch] = useState('')

  const { id: searchTerm } = useParams(); // Get the search term from the URL parameters
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);


  console.log(searchTerm);


  // const fetchDetails = useCallback(async () => {
  //   try {
  //     const search = await axios.get(CONSUMET_URL + "/" + searchTerm);
  //     setSearchResults(search.data.results);
  //   } catch (error) {
  //     console.error("Error fetching details:", error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }, [searchTerm]);

  const fetchDetails = useCallback(async () => {
    if (!searchTerm.trim()) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      const search = await axios.get(`${CONSUMET_URL}/${searchTerm}`);
      console.log(search.data);

      if (search.data && search.data.results) {
        setSearchResults(search.data.results);
      } else {
        setSearchResults([]);
        setError("No results found.");
      }
    } catch (error) {
      console.error("Error fetching details:", error);
      setError("Failed to fetch search results. Please try again.");
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);




  console.log('777777777777777777777', searchResults);


  // useEffect(() => {
  //   fetchDetails();
  // }, [fetchDetails]);

  // function getData(data){
  //  console.log(data);

  // }



  return (

    // <>

    // <Nav Search_text={getData}/>

    //   <div className="mt-2 items-center grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-7 gap-4">
    //     {searchResults.map((anime) => (
    //       <Card key={anime.id} anime={anime} />
    //     ))}
    //   </div>
    // </>

    <>

      {/* <div className="mt-2 items-center grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-7 gap-4"> */}
      {/* {isLoading && <p>Loading...</p>} */}


      {/* {error && <p>{error}</p>}
        {searchResults.map((anime) => (
          <Card key={anime.id} anime={anime} />
        ))}
      </div> */}

      <Nav />
      <div
        className="relative flex size-full min-h-screen flex-col bg-black dark group/design-root overflow-x-hidden"
        style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
      >



        {isLoading ? <div>

          {/* <h1 className="text-center text-[50px] text-" >NO Foun</h1> */}

        </div> :
          <div className="layout-container flex h-full grow flex-col">

            <div className="search_left_right">
              <div className="layout-content-container flex flex-col max-w-[960px] flex-1">

                <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                  {searchResults.map((anime) => (
                    <Card key={anime.id} anime={anime} />
                  ))}</div>
              </div>
            </div>
          </div>
        }



      </div >




    </>









  );
};
