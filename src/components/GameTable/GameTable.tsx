import React from 'react'
import { TableContainer, Title, ButtonContainer, StatusMessage, HandSection, ScoreDisplay, HandTitle, CardContainer } from './styles'
import { Card } from '../Card/Card'
import { Button } from '../Button/Button'
import type { GameState } from '../../types'

export interface GameTableProps {
	gameState: GameState
	onHit: () => void | Promise<void>
	onStand: () => void | Promise<void>
	onNewGame: () => void | Promise<void>
	disabled?: boolean
}

export const GameTable: React.FC<GameTableProps> = ({ gameState, onHit, onStand, onNewGame, disabled = false }) => {
	const getStatusMessage = () => {
		switch (gameState.gameStatus) {
			case 'playerBust':
				return 'Bust! You lose!'
			case 'dealerBust':
				return 'Dealer bust! You win!'
			case 'playerWin':
				return 'You win!'
			case 'dealerWin':
				return 'Dealer wins!'
			case 'push':
				return 'Push!'
			default:
				return ''
		}
	}

	const getStatusColor = () => {
		switch (gameState.gameStatus) {
			case 'playerBust':
			case 'dealerWin':
				return 'error'
			case 'dealerBust':
			case 'playerWin':
				return 'success'
			case 'push':
				return 'warning'
			default:
				return 'primary'
		}
	}

	return (
		<TableContainer>
			<Title>Blackjack</Title>

			<HandSection>
				<HandTitle>Dealer's Hand</HandTitle>
				<ScoreDisplay>Score: {gameState.dealerScore}</ScoreDisplay>
				<CardContainer>
					{gameState.dealerHand.map((card, index) => (
						<Card
							key={`dealer-card-${index}`}
							card={card}
							animate={!disabled}
							delay={index * 0.1}
						/>
					))}
				</CardContainer>
			</HandSection>

			{gameState.gameStatus !== 'playing' && <StatusMessage color={getStatusColor()}>{getStatusMessage()}</StatusMessage>}

			<HandSection>
				<HandTitle>Your Hand</HandTitle>
				<ScoreDisplay>Score: {gameState.playerScore}</ScoreDisplay>
				<CardContainer>
					{gameState.playerHand.map((card, index) => (
						<Card
							key={`player-card-${index}`}
							card={card}
							animate={!disabled}
							delay={index * 0.1}
						/>
					))}
				</CardContainer>
			</HandSection>

			<ButtonContainer>
				<Button
					variant='primary'
					onClick={onHit}
					disabled={disabled || gameState.gameStatus !== 'playing'}
				>
					Hit
				</Button>
				<Button
					variant='primary'
					onClick={onStand}
					disabled={disabled || gameState.gameStatus !== 'playing'}
				>
					Stand
				</Button>
				<Button
					variant='secondary'
					onClick={onNewGame}
					disabled={disabled}
				>
					New Game
				</Button>
			</ButtonContainer>
		</TableContainer>
	)
}
