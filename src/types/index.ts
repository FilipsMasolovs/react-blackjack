export type Suit = '♠' | '♣' | '♥' | '♦'
export type Rank = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A'

export interface Card {
	suit: Suit
	rank: Rank
	hidden: boolean
}

export type GameStatus = 'playing' | 'playerBust' | 'dealerBust' | 'playerWin' | 'dealerWin' | 'push'

export interface GameState {
	deck: Card[]
	playerHand: Card[]
	dealerHand: Card[]
	gameStatus: GameStatus
	playerScore: number
	dealerScore: number
}
