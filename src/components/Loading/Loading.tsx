import React from 'react'
import { LoadingOverlay, LoadingSpinner, Card, LoadingText } from './styles'

interface LoadingProps {
	message?: string
}

export const Loading: React.FC<LoadingProps> = ({ message = 'Loading...' }) => (
	<LoadingOverlay>
		<div style={{ textAlign: 'center' }}>
			<LoadingSpinner>
				{[...Array(5)].map((_, index) => (
					<Card key={index} />
				))}
			</LoadingSpinner>
			<LoadingText>{message}</LoadingText>
		</div>
	</LoadingOverlay>
)
