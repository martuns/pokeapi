/* eslint-disable import/no-anonymous-default-export */
import {Pokemon} from "./types"
const PAGE_SIZE = 10;

export default {
    list: (page = 1): Promise<Pokemon[]> => {
        return Promise.all(
            new Array(page * PAGE_SIZE + 1)
            .fill(true)
            .map((_, index) => index)
            .slice(1)
            .map((id) => fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => res.json()))
        );
    },
};