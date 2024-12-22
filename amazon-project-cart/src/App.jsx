import React, { useState } from "react";
import Cards from "./components/cards";
import Navbar from "./components/Navbar";
const App = () => {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1682695795255-b236b1f1267d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJvY2t5fGVufDB8fDB8fHww",
      name: "Rocky",
      artist: "Honey Singh",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1632686341231-0a65b83bafaa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Challenger",
      artist: "Black Pink",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1558980663-3685c1d673c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Gost Rider",
      artist: "Marsh Millow",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Sunflower",
      artist: "Eminem",
      added: false,
    },
  ];
  const [songData, setSongData] = useState(data)

  const addSongHandler = (index)=>{
    setSongData((elem)=>{
      return elem.map((e,idx)=>{
        if(idx === index){
          return {...e, added:!e.added}
        }
        return e;
      }
      )
    })
  }

  return (
    <div className="w-full h-screen bg-zinc-300 ">
      <Navbar data={songData}/>
      <div className="p-20 flex gap-10 mt-10 flex-wrap">
        {songData.map(function(obj,idx){
          // return <Cards image={obj.image} name={obj.name} artist={obj.artist} added={obj.added} />
          return <Cards key={idx} data={obj} handleClick ={addSongHandler} index={idx}/>
          // or ap aese bhi data send kr sakte he return <cards data={obj}>
        })}
      </div>
    </div>
  );
};

export default App;
