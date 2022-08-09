// Este archivo contiene todos los thunks relacionados con pokemon.
// Peticiones HTTP para lo que se requiera.

import { pokemonApi } from "../../../api/pokemonAPi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    // TODO: realizar peticion http
    // const resp = await fetch(
    //   `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
    // );
    // const data = await resp.json();
    const { data } = await pokemonApi.get(
      `/pokemon?limit=10&offset=${page * 10}`
    );
    // console.log(data);

    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
};
