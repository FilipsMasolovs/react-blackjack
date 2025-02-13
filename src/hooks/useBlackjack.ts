import { useState, useEffect, useCallback } from 'react'
import type { GameState } from '../types'
import { calculateScore, createDeck, shuffleDeck } from '../utils/gameLogic'

export type LoadingType = 'initializing' | 'dealing' | 'hitting' | 'standing' | null

export const useBlackjack = () => {
	const [gameState, setGameState] = useState<GameState>({
		deck: [],
		playerHand: [],
		dealerHand: [],
		gameStatus: 'playing',
		playerScore: 0,
		dealerScore: 0,
	})
	const [loading, setLoading] = useState<LoadingType>('initializing')

	const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

	const initializeGame = useCallback(async () => {
		setLoading('initializing')
		await delay(150000)

		const newDeck = shuffleDeck(createDeck())
		const playerCards = [
			{ ...newDeck.pop()!, hidden: false },
			{ ...newDeck.pop()!, hidden: false },
		]
		const dealerCards = [
			{ ...newDeck.pop()!, hidden: false },
			{ ...newDeck.pop()!, hidden: true },
		]

		setGameState({
			deck: newDeck,
			playerHand: playerCards,
			dealerHand: dealerCards,
			gameStatus: 'playing',
			playerScore: calculateScore(playerCards),
			dealerScore: calculateScore([dealerCards[0]]),
		})
		setLoading(null)
	}, [])

	const hit = async () => {
		if (gameState.gameStatus !== 'playing') return

		setLoading('hitting')

		const newDeck = [...gameState.deck]
		const newCard = { ...newDeck.pop()!, hidden: false }
		const newPlayerHand = [...gameState.playerHand, newCard]
		const newPlayerScore = calculateScore(newPlayerHand)

		if (newPlayerScore > 21) {
			setGameState({
				...gameState,
				deck: newDeck,
				playerHand: newPlayerHand,
				playerScore: newPlayerScore,
				gameStatus: 'playerBust',
			})
		} else {
			setGameState({
				...gameState,
				deck: newDeck,
				playerHand: newPlayerHand,
				playerScore: newPlayerScore,
			})
		}
		setLoading(null)
	}

	const stand = async () => {
		if (gameState.gameStatus !== 'playing') return

		setLoading('standing')

		let newDealerHand = gameState.dealerHand.map((card) => ({
			...card,
			hidden: false,
		}))
		let newDeck = [...gameState.deck]
		let newDealerScore = calculateScore(newDealerHand)

		while (newDealerScore < 17) {
			const newCard = { ...newDeck.pop()!, hidden: false }
			newDealerHand = [...newDealerHand, newCard]
			newDealerScore = calculateScore(newDealerHand)
		}

		let newGameStatus: GameState['gameStatus'] = 'playing'
		if (newDealerScore > 21) {
			newGameStatus = 'dealerBust'
		} else if (newDealerScore > gameState.playerScore) {
			newGameStatus = 'dealerWin'
		} else if (newDealerScore < gameState.playerScore) {
			newGameStatus = 'playerWin'
		} else {
			newGameStatus = 'push'
		}

		setGameState({
			...gameState,
			deck: newDeck,
			dealerHand: newDealerHand,
			dealerScore: newDealerScore,
			gameStatus: newGameStatus,
		})
		setLoading(null)
	}

	useEffect(() => {
		initializeGame()
	}, [initializeGame])

	return {
		gameState,
		loading,
		hit,
		stand,
		initializeGame,
	}
}
