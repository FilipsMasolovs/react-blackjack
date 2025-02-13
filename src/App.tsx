import React from 'react'
import { ThemeProvider } from 'styled-components'
import { AppContainer } from './styles/AppStyles'
import { GameTable } from './components/GameTable/GameTable'
import { Loading } from './components/Loading/Loading'
import { GlobalStyles } from './styles/GlobalStyles'
import { theme } from './styles/theme'
import { useBlackjack } from './hooks/useBlackjack'

const App: React.FC = () => {
	const { gameState, loading, hit, stand, initializeGame } = useBlackjack()

	const getLoadingMessage = () => {
		switch (loading) {
			case 'initializing':
				return 'Shuffling cards...'
			case 'dealing':
				return 'Dealing cards...'
			case 'hitting':
				return 'Dealing card...'
			case 'standing':
				return "Dealer's turn..."
			default:
				return 'Loading...'
		}
	}

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<AppContainer>
				{loading && <Loading message={getLoadingMessage()} />}
				<GameTable
					gameState={gameState}
					onHit={hit}
					onStand={stand}
					onNewGame={initializeGame}
					disabled={!!loading}
				/>
			</AppContainer>
		</ThemeProvider>
	)
}

export default App
