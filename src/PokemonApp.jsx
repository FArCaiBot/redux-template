import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {
  const { page, pokemons, isLoading } = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons());
  }, []);
  return (
    <>
      <h1>Pokemon App</h1>
      <hr />
      <span>Loading : {isLoading ? "True" : "False"}</span>
      <br />
      <span>Page: {page}</span>
      <ul>
        {pokemons.map((el) => (
          <li key={el.name}>{el.name}</li>
        ))}
      </ul>
      <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
        Next
      </button>
    </>
  );
};
