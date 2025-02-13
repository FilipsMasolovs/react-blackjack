import type { Card, Suit, Rank } from '../types'
import { DEALER_MIN_SCORE, ACE_HIGH_VALUE, ACE_LOW_VALUE } from './constants'

export const createDeck = (): Card[] => {
	const suits: Suit[] = ['♠', '♣', '♥', '♦']
	const ranks: Rank[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
	const deck: Card[] = []

	for (const suit of suits) {
		for (const rank of ranks) {
			deck.push({ suit, rank, hidden: false })
		}
	}

	return deck
}

export const shuffleDeck = (deck: Card[]): Card[] => {
	const newDeck = [...deck]
	for (let i = newDeck.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]]
	}
	return newDeck
}

export const getCardValue = (rank: Rank): number[] => {
	if (rank === 'A') return [ACE_LOW_VALUE, ACE_HIGH_VALUE]
	if (['K', 'Q', 'J'].includes(rank)) return [10]
	return [parseInt(rank)]
}

export const calculateScore = (hand: Card[]): number => {
	let score = 0
	let aces = 0

	for (const card of hand) {
		if (card.hidden) continue

		if (card.rank === 'A') {
			aces += 1
		} else {
			score += getCardValue(card.rank)[0]
		}
	}

	for (let i = 0; i < aces; i++) {
		if (score + ACE_HIGH_VALUE <= 21) {
			score += ACE_HIGH_VALUE
		} else {
			score += ACE_LOW_VALUE
		}
	}

	return score
}

export const isDealerTurn = (score: number): boolean => {
	return score < DEALER_MIN_SCORE
}

export const isBust = (score: number): boolean => {
	return score > 21
}

export const determineWinner = (playerScore: number, dealerScore: number): 'player' | 'dealer' | 'push' => {
	if (playerScore > 21) return 'dealer'
	if (dealerScore > 21) return 'player'
	if (playerScore > dealerScore) return 'player'
	if (dealerScore > playerScore) return 'dealer'
	return 'push'
}
