import React from "react";

export const getRick = async (search) => {
  const url = `https://rickandmortyapi.com/api/character/?name=${search}`;
  const res = await fetch(url);
  const response = await res.json();
  const { results } = await response;
  // console.log(results)

  const gifs = results.map((item) => {
    return {
      id: item.id,
      name: item.name,
      image: item.image,
    };
  });

  return gifs;

  // return fetch(url)
  // .then(res => res.json())
  // .then(response => {
  //   const {results} = response
  //   console.log(results)
  //   return results
  // })
};
