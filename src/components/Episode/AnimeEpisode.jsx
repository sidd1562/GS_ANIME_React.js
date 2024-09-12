import React, { useState } from 'react'

import './AnimeEpisode.css'

function AnimeEpisode({ data }) {
  const [selectedGroup, setSelectedGroup] = useState(0);
  const episodes = data.episodes;

  const handleGroupChange = (event) => {
    setSelectedGroup(Number(event.target.value));
  };

  const getRandomColor = () => {
    const colors = ["secondary", "primary", "success", "danger", "warning"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const renderEpisodeButtons = () => {
    const startIndex = selectedGroup * 100;
    const endIndex = Math.min(startIndex + 100, episodes.length);

    return episodes.slice(startIndex, endIndex).map((episode) => (
      <a
        key={`episode-${data.id}-${episode.number}`}
        href={`/${data.id}/${episode.number.toString().replace(/\./g, "-")}`}
        style={{
          display: "flex",                 
          height: "2rem",                  
          flexShrink: 0,   
          color:"white",                
          alignItems: "center",            
          justifyContent: "center",        
          gap: "0.5rem",                   
          borderRadius: "0.5rem",          
          backgroundColor: "#333333",     
          paddingLeft: "1rem",            
          paddingRight: "1rem", 

          
  }
}
      >
  { episode.number }
      </a >
    ));
  };

const renderGroupDropdown = () => {
  if (episodes.length > 100) {
    const totalGroups = Math.ceil(episodes.length / 100);
    const options = Array.from({ length: totalGroups }, (_, index) => ({
      value: index,
      label: `${index * 100 + 1}-${Math.min((index + 1) * 100, episodes.length)}`,
    }));

    return (
      <select
        value={selectedGroup}
        onChange={handleGroupChange}
        style={{
          backgroundColor:"black",
          color:"white",
          marginBottom: '16px',
          padding: '8px',
          fontSize: '16px',
          border:"10px #fffff "
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }
};

return (
  <div className='AnimeEpisode_left_right' >
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div>
        {renderGroupDropdown()}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '16px' }}>
          {renderEpisodeButtons()}
        </div>
      </div>
    </div>
  </div>

  // <div
  //   className="relative flex size-full min-h-screen flex-col bg-black dark group/design-root overflow-x-hidden"
  //   style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
  // >
  //   <div className="layout-container flex h-full grow flex-col">
  //     <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#333333] px-10 py-3" />
  //     <div className="px-40 flex flex-1 justify-center py-5">
  //       <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
  //         <div className="flex gap-3 p-3 flex-wrap pr-4">
  //           <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#333333] pl-4 pr-4">
  //             <p className="text-[#FFFFFF] text-sm font-medium leading-normal">
  //               1
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>

);
};



export default AnimeEpisode