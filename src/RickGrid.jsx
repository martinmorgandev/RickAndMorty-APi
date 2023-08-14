import React, { useState } from "react";
import { useFetchRick } from "./hooks/useFetchRick";

export const RickGrid = ({search}) => {

  const { arreglo } = useFetchRick(search);
  

  return (
    <>
      <h1>Hola mundo</h1>
      {
        arreglo.map((item) => {
            return <div className="" key={item.id}>
                <img src={item.image} alt="" />
                <p>{item.id}</p>
            </div>
        })
      }
    </>
  );
};
