import styled from 'styled-components'
import { fadeIn, slideIn } from '../../styles/animations'

export const TableContainer = styled.div`
	background: ${({ theme }) => theme.gradients.background};
	border-radius: 24px;
	padding: 2.5rem;
	width: 100%;
	max-width: 900px;
	box-shadow: ${({ theme }) => theme.shadows.large};
	animation: ${fadeIn} 0.6s ease-out;
	border: 1px solid rgba(255, 255, 255, 0.1);
`

export const Title = styled.h1`
	text-align: center;
	background: ${({ theme }) => theme.gradients.title};
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	margin-bottom: 2.5rem;
	font-size: 3rem;
	font-weight: 700;
	letter-spacing: -0.5px;
`

export const HandSection = styled.section`
	margin: 2.5rem 0;
	animation: ${slideIn} 0.5s ease-out;
`

export const HandTitle = styled.h2`
	color: ${({ theme }) => theme.colors.textMuted};
	font-size: 1.5rem;
	font-weight: 600;
	margin-bottom: 1rem;
	letter-spacing: -0.5px;
`

export const ScoreDisplay = styled.div`
	font-size: 1.3rem;
	margin: 1rem 0;
	color: ${({ theme }) => theme.colors.textMuted};
	font-weight: 500;
	letter-spacing: 0.5px;
`

export const CardContainer = styled.div`
	display: flex;
	gap: 1.2rem;
	flex-wrap: wrap;
	padding: 1rem 0;
	min-height: 170px;
`

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 1.2rem;
	margin-top: 2.5rem;
	flex-wrap: wrap;
`

export const StatusMessage = styled.h2<{ color: 'error' | 'success' | 'warning' | 'primary' }>`
	text-align: center;
	color: ${({ theme, color }) => {
		switch (color) {
			case 'error':
				return theme.colors.error
			case 'success':
				return theme.colors.success
			case 'warning':
				return theme.colors.warning
			default:
				return theme.colors.primary
		}
	}};
	margin: 1.5rem 0;
	font-weight: 600;
	animation: ${fadeIn} 0.5s ease-out;
	font-size: 1.8rem;
`
