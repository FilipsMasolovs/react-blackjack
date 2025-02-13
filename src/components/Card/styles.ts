import styled, { css } from 'styled-components'
import { slideIn } from '../../styles/animations'

interface CardElementProps {
	isRed: boolean
	$animate: boolean
	$delay: number
}

export const CardElement = styled.div<CardElementProps>`
	background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
	border-radius: 12px;
	width: 110px;
	height: 150px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2.2rem;
	color: ${({ theme, isRed }) => (isRed ? theme.colors.redCard : theme.colors.blackCard)};
	box-shadow: ${({ theme }) => theme.shadows.small};
	transition: all 0.3s ease;
	position: relative;
	overflow: hidden;

	${({ $animate, $delay }) =>
		$animate &&
		css`
			animation: ${slideIn} 0.5s ease-out ${$delay}s both;
		`}

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 4px;
		background: ${({ theme }) => theme.gradients.primary};
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	&:hover {
		transform: translateY(-8px);
		box-shadow: ${({ theme }) => theme.shadows.medium};

		&::before {
			opacity: 1;
		}
	}
`
