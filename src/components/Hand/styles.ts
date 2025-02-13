import styled from 'styled-components'
import { slideIn } from '../../styles/animations'

export const HandContainer = styled.div`
	margin: 2.5rem 0;
	animation: ${slideIn} 0.5s ease-out;
`

export const CardContainer = styled.div`
	display: flex;
	gap: 1.2rem;
	flex-wrap: wrap;
	padding: 1rem 0;
`

export const SectionTitle = styled.h2`
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
