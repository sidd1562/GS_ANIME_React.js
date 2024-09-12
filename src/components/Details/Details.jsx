import React from 'react'


function Details({ data }) {



  if (!data) {
    return <div>No Data!</div>;
  }

  // Function to get a random color from the predefined set
  const getRandomColor = () => {
    const colors = ['primary', 'secondary', 'success', 'danger', 'warning'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  console.log(data);


  return (
    // <div className="py-8 px-4 sm:px-6 lg:px-8">
    //   <div className="max-w-5xl mx-auto lg:flex">
    //     <div className="pb-10 pr-5">
    //       <div
    //         className="rounded-lg overflow-hidden bg-white shadow-md"
    //         style={{ width: '250px' }}
    //       >
    //         <div className="relative h-96">
    //           <img
    //             src={data.image}
    //             alt="Anime Cover"
    //             style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    //           />
    //         </div>
    //       </div>
    //     </div>
    //     <div className="pr-4">
    //       <h1 className="text-3xl font-semibold">{data.title}</h1>
    //       <p className="mt-2">
    //         <strong>Another Name:</strong> {data.otherName.split('\n').filter(Boolean).join(', ')}
    //       </p>
    //       <div className="mt-2 gap-2 flex">
    //         <strong>Genres: </strong>
    //         {data.genres.map((genre, index) => (
    //           <a
    //             href={`/genre/${genre.toLowerCase().replace(/ /g, '-')}`}
    //             key={index}
    //             className="gap-8"
    //             style={{ margin: '0 5px' }}
    //           >
    //             <button color={getRandomColor()} size="sm" className="text-black">
    //               {genre.trim()}
    //             </button>
    //           </a>
    //         ))}
    //       </div>
    //       <p className="mt-4">
    //         <strong>Total Episodes:</strong> {data.totalEpisodes}
    //       </p>
    //       <p className="mt-2">
    //         <strong>Release Date:</strong> {data.releaseDate}, {data.status}
    //       </p>
    //       <p className="mt-2">
    //         <strong>Description:</strong> {data.description}
    //       </p>
    //     </div>
    //   </div>





    // </div>



    <div
      className="relative flex size-full min-h-screen flex-col bg-black dark group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif', minHeight: '300px'}}
    >
      <div className="layout-container flex h-full grow flex-col">

        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          {/* remove left side  */}
          <div className="layout-content-container flex flex-col max-w-[960px]  flex-1">
            <div className="@container">
              <div className="@[580px]:px-4 @[480px]:py-3 ">
                <div
                  className="bg-cover  rounded-xl bg-center flex flex-col justify-end overflow-hidden bg-black @[480px]:rounded-lg min-h-80"
                  style={{

                    backgroundImage:
                      `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%),url(${data.image})`,
                  }}
                >
                  <div className="flex p-4">
                    <p className="text-white tracking-light text-[28px] font-bold leading-tight">
                      {data.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 p-3 flex-wrap pr-4">
              {data.genres.map((genre, index) => (
                <div key={index} className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#333333] pl-4 pr-4">

                  <a
                    href={`/genre/${genre.toLowerCase().replace(/ /g, '-')}`}
                    key={index}
                    className="gap-8"
                    style={{ margin: '0 5px' }}
                  >
                    <button className="text-[#FFFFFF] text-sm font-medium leading-normal" size="sm" >
                      {genre.trim()}
                    </button>
                  </a>


                  {/* <p className="text-[#FFFFFF] text-sm font-medium leading-normal">
                    {genre.trim()}
                  </p> */}
                </div>

              ))}



            </div>
            <p className="text-[#FFFFFF] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Another Name: {data.otherName}
            </p>
            <p className="text-[#FFFFFF] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Total Episodes: {data.totalEpisodes}
            </p>
            <p className="text-[#FFFFFF] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Release Date: {data.releaseDate}, {data.status}
            </p>
            <p className="text-[#FFFFFF] text-base font-normal leading-normal pb-3 pt-1 px-4">
              {data.description}
            </p>

          </div>
        </div>

      </div>
    </div >




  )
}

export default Details