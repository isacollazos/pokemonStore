import { AppRouter } from './AppRouter';
import { PokemonProvider } from './context/PokemonProvider';
import { appFirebase } from './credenciales'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useState } from 'react';
import { LoginPage } from './pages/LoginPage';
import { HomePage } from './pages';
const auth = getAuth(appFirebase)

function App() {
	const {usuario, setUsuario} = useState(null)
	onAuthStateChanged(auth, (usuarioFirebase) => {
		if(usuarioFirebase){
			setUsuario({usuarioFirebase})
		}
		else{
			setUsuario(null)
		}
	})
	return (
		<div>
			{usuario ? <HomePage correoUsuario = {usuario.email} /> : <LoginPage />}
			<PokemonProvider>
				<AppRouter />
			</PokemonProvider>
		</div>
		
		
	);
}

export default App;
