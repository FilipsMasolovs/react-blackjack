import React from 'react'
import { StyledButton } from './styles'

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'error' | 'warning'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
	variant?: ButtonVariant
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => (
	<StyledButton
		$variant={variant}
		{...props}
	>
		{children}
	</StyledButton>
)
