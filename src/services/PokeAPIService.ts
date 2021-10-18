import axios from 'axios';

type PokemonType = {
    id: number;
    name: string;
}

/*
    Esse aplicativo React utiliza uma API back-end
    por trás dos panos para fazer a utilização da PokéAPI v2.
*/

export const SERVICE = 'http://localhost:5000/service/pokemon';

async function createRequest(uri: string) {
    const request = await axios.get(`${SERVICE}/${uri}`);
    return request.data;
}

export async function getPokedexOffset(offset: number, limit: number) {
    return await createRequest(`sequence?offset=${offset}&limit=${limit}`);
}

export async function getFulfilledOffset(offset: number, pokes: PokemonType[]) {
    const pokemon: PokemonType[] = [...pokes];

    const request: { 
        count: number, next: string, previous: string, results: { name: string, url: string }[] 
    } = await getPokedexOffset(offset, 20);
    const results = request.results as { name: string, url: string }[];

    results.map(({ name, url }) => pokemon.push({ id: parseInt(url.substr(34).slice(0, url.substr(34).indexOf('/'))), name }));
    return pokemon;
}

export async function getPokemon(id: number) {
    return await createRequest(`from/${id}`);
}