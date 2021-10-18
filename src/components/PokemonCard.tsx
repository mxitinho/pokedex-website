import { useState } from 'react';
import { MouseEvent } from 'react';

type BananaProps = {
    id: number;
    name: string;
}

export function PokemonCard({ id, name }: BananaProps) {
    const [position, setPosition] = useState('-100% 100px');

    const url = `url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png')`;
    const properties = { 
        'backgroundImage': url,
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover',
        'backgroundPosition': position,
        'transition': 'background-position 0.5s'
    };

    return (
        <div className="pokemon-card" onMouseLeave={() => setPosition('-100% 100px')} onMouseEnter={() => setPosition('-50% 60px')} style={properties}>
            <span>{name}</span>
        </div>
    );
}