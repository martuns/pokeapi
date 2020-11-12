import {SimpleGrid, Text} from '@chakra-ui/core'
import React from 'react';

import api from './api'
import {Pokemon} from './types'


const App: React.FC = () => {
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);
  const [page, setPage] = React.useState<number>(1);

  React.useEffect(()=>{
    api.list(page).then(newPokemons => setPokemons(pokemons => pokemons.concat(newPokemons)));

  }, [page]);

 



  return  <SimpleGrid columns={2} >
    {pokemons.map((pokemon) => (
      <Text key={pokemon.id}>{pokemon.name}</Text>
    )
    )}
  </SimpleGrid>;
}

export default App;
