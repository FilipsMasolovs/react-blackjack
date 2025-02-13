import styled from 'styled-components'

export const AppContainer = styled.div`
	min-height: 100vh;
	background: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.text};
	padding: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`
