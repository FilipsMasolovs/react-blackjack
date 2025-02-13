import styled, { css } from 'styled-components'
import type { ButtonVariant } from './Button'

interface StyledButtonProps {
	$variant: ButtonVariant
}

const getVariantStyles = (variant: ButtonVariant) => {
	switch (variant) {
		case 'primary':
			return css`
				background: ${({ theme }) => theme.gradients.primary};
				&:hover:not(:disabled) {
					background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
				}
			`
		case 'secondary':
			return css`
				background: ${({ theme }) => theme.gradients.secondary};
				&:hover:not(:disabled) {
					background: linear-gradient(135deg, #6d28d9 0%, #5b21b6 100%);
				}
			`
		case 'success':
			return css`
				background: ${({ theme }) => theme.gradients.success};
				&:hover:not(:disabled) {
					background: linear-gradient(135deg, #059669 0%, #047857 100%);
				}
			`
		case 'error':
			return css`
				background: ${({ theme }) => theme.gradients.error};
				&:hover:not(:disabled) {
					background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
				}
			`
		case 'warning':
			return css`
				background: ${({ theme }) => theme.gradients.warning};
				&:hover:not(:disabled) {
					background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
				}
			`
	}
}

export const StyledButton = styled.button<StyledButtonProps>`
	color: ${({ theme }) => theme.colors.text};
	border: none;
	padding: 1rem 2rem;
	border-radius: 12px;
	font-size: 1.1rem;
	font-weight: 500;
	cursor: pointer;
	transition: all 0.3s ease;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

	${({ $variant }) => getVariantStyles($variant)}

	&:hover:not(:disabled) {
		transform: translateY(-2px);
		box-shadow: ${({ theme }) => theme.shadows.medium};
	}

	&:disabled {
		background: ${({ theme }) => theme.colors.textMuted};
		cursor: not-allowed;
		transform: none;
		box-shadow: none;
	}

	&:active:not(:disabled) {
		transform: translateY(1px);
	}
`
