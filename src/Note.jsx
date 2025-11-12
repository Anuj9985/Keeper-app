import React from "react";
import './index.css'

function Note(props){

    function handleClick(){
        props.onDelete(props.id)
    }


  return (
  <div className=" flex items-center justify-center ">
    <div className="bg-white text-black border border-gray-200 shadow-lg rounded-md p-6 w-64 m-4 ">
      <h1 className="font-bold text-lg">{props.title}</h1>
      <p>{props.content}</p>
      <button
  onClick={handleClick}
  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition-transform duration-200 hover:scale-105"
>
  Delete
</button>

    </div>
  </div>
);
}

export default Note


//bg-white text-black shadow-md rounded-md p-6 w-64 m-4
//text-black shadow-md border rounded-md p-5 w-60 m-5 float-left