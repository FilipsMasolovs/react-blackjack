import React from 'react'
import { HandContainer, SectionTitle, ScoreDisplay, CardContainer } from './styles'
import { Card } from '../Card/Card'
import type { Card as CardType } from '../../types'

interface HandProps {
	title: string
	score: number
	cards: CardType[]
}

export const Hand: React.FC<HandProps> = ({ title, score, cards }) => (
	<HandContainer>
		<SectionTitle>{title}</SectionTitle>
		<ScoreDisplay>Score: {score}</ScoreDisplay>
		<CardContainer>
			{cards.map((card, index) => (
				<Card
					key={index}
					card={card}
				/>
			))}
		</CardContainer>
	</HandContainer>
)
