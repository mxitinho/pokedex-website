import { useState } from 'react';
import { getFulfilledOffset } from '../services/PokeAPIService';

import { PokemonCard } from '../components/PokemonCard';

type PokemonType = {
    id: number;
    name: string;
}

type BananaProps = {
    search: string;
}

export function Pokedex({ search }: BananaProps) {
    const [offset, setOffset] = useState(20);
    const [pokes, setPokes] = useState<PokemonType[]>([]);

    async function updatePokemonList() {
        setOffset(offset + 20);
        setPokes(await getFulfilledOffset(offset, pokes));
    }

    window.onload = () => updatePokemonList();
    window.onscroll = function() {
        if((window.scrollY + 50) >= document.documentElement.scrollHeight - document.documentElement.clientHeight) {
            updatePokemonList().then(() => window.scrollTo({ behavior: 'smooth', top: window.scrollY + 100 }));
        }
    }

    return (
        <div className="pokemon-list">
            {pokes.map(({ id, name }) => {
                return (
                    <PokemonCard key={Math.random()} id={id} name={name}/>
                );
            })}
        </div>
    );
}