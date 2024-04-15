import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import PokemonContext from '../context/PokemonContext'

const Navigation = () => {
    const context = useContext(PokemonContext)
    console.log(PokemonContext)


  return (
    <div>
        <header class="container">
			<link href="/" class="logo">
				<img src="assets/pokepedia.png" alt="Logo pokepedia" />
			k</link>
			<form>
				<div class="form-group">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						class="icon-search"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
						/>
					</svg>
					<input
						type="search"
                        name='valueSearch'
						placeholder="Buscar nombre de Pokemon"
					/>
				</div>

				<button class="btn-search">Buscar</button>
			</form>
		</header>

        <Outlet/>
    </div>
  )
}

export default Navigation
