import React from 'react'
import { useEffect, useState } from "react";
import "./App.css";
import { getRick } from './fetch/getRick';

function App() {

  const [search, setSearch] = useState("");


  const [gif, setGif] = useState([]);

  useEffect(() => {
    const nueva = async () => {
      const array = await getRick(search)
      console.log(array)
      setGif(array)
    }
    nueva()
  }, [search])
  
  const onSubmit = (e) => {
    e.preventDefault();
    setSearch(search)
    // console.log(search);
    // setArray(arreglo)
  };
  
  const onChange = (e) => {
    // console.log(e.target.value)
    setSearch(e.target.value);
  };


  return (
    <div className="container">
      <div className="row justify-content-center">
        <h1 className="text-center">Rick and Morty</h1>

          <form onSubmit={onSubmit} action="" className="text-center">
            <input type="text"  onChange={(e) => onChange(e)} />
            <button type="submit" className="btn btn-primary">
              Buscar
            </button>
          </form>
          {
            gif.map((item) => {
              return <div>
                <p>{item.name}</p>
                <img src={item.image} alt="" />
              </div>
            })
            // <RickGrid search={search}></RickGrid>
          }
      </div>
    </div>
  );
}

export default App;
