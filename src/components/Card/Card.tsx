import React from 'react'
import { CardElement } from './styles'
import type { Card as CardType } from '../../types'

interface CardProps {
	card: CardType
	animate?: boolean
	delay?: number
}

export const Card: React.FC<CardProps> = ({ card, animate = true, delay = 0 }) => (
	<CardElement
		isRed={card.suit === '♥' || card.suit === '♦'}
		$animate={animate}
		$delay={delay}
	>
		{card.hidden ? '🂠' : `${card.rank}${card.suit}`}
	</CardElement>
)
