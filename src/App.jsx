import {AppRouter} from './AppRouter'
import {PokemonProvider} from './context/PokemonProvider';



export function App() {
  return (
    <PokemonProvider>
      <AppRouter/>
    </PokemonProvider>
  )
}

