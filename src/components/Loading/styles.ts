// styles.ts
import styled, { keyframes } from 'styled-components'

const flip = keyframes`
  0% {
    transform: rotateY(0deg) translateX(35px);
    opacity: 1;
  }
  50% {
    transform: rotateY(180deg) translateX(35px) scale(1.2);
    opacity: 0.7;
  }
  100% {
    transform: rotateY(360deg) translateX(35px);
    opacity: 1;
  }
`

export const LoadingOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.85);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
	backdrop-filter: blur(8px);
`

export const LoadingSpinner = styled.div`
	width: 100%;
	height: 120px;
	position: relative;
	perspective: 1000px;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const Card = styled.div`
	width: 30px;
	height: 42px;
	background: ${({ theme }) => theme.colors.primary};
	border-radius: 8px;
	position: absolute;
	box-shadow: 0 0 15px ${({ theme }) => theme.colors.primary}80;
	animation: ${flip} 3s infinite ease-in-out;
	transform-style: preserve-3d;
	backface-visibility: visible;

	&::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background: ${({ theme }) => theme.colors.primary}40;
		border-radius: 8px;
		transform: translateZ(-2px);
	}

	&:nth-child(1) {
		animation-delay: 0s;
		transform-origin: center;
	}

	&:nth-child(2) {
		animation-delay: -0.6s;
		transform: rotate(72deg);
		transform-origin: center;
	}

	&:nth-child(3) {
		animation-delay: -1.2s;
		transform: rotate(144deg);
		transform-origin: center;
	}

	&:nth-child(4) {
		animation-delay: -1.8s;
		transform: rotate(216deg);
		transform-origin: center;
	}

	&:nth-child(5) {
		animation-delay: -2.4s;
		transform: rotate(288deg);
		transform-origin: center;
	}
`

export const LoadingText = styled.div`
	color: ${({ theme }) => theme.colors.text};
	font-size: 1.5rem;
	margin-top: 3rem;
	font-weight: 500;
	opacity: 0.9;
	text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`
