import React from "react";

const Cards = (prop) => {
  // console.log(prop);

  const { data, handleClick, index } = prop;
  const { image, name, artist, added } = data;
  return (
    <div
      key={index}
      className="w-60 bg-zinc-100 p-4 rounded-md flex gap-4 pb-8 relative"
    >
      <div className="w-20 h-20 bg-orange-600 rounded-md">
        <img
          className="w-full h-full object-cover rounded-md"
          src={image}
          alt=""
        />
      </div>
      <div className="data.">
        <h3 className="text-xl leading-none font-semibold">{name}</h3>
        <h6 className="text-sm">{artist}</h6>
      </div>
      <button
        onClick={() => handleClick(index)}
        className={`px-3 py-2 ${
          added ? "bg-teal-500" : "bg-orange-600"
        } absolute bottom-0 translate-y-[50%] left-1/2 -translate-x-[50%] hover:animate-spin whitespace-nowrap  text-white font-xs rounded-full`}
      >
        {added ? "Added" : "Added to Cart"}
      </button>
    </div>
  );
};

export default Cards;

//line-11 => whitespace-nowrap is used to wrap the button text in one line, phele wo 2 line me aa raha tha ab ak hi line me aayega
