# Contributing to React Blackjack 🎮

First off, thank you for considering contributing to React Blackjack! It's people like you that make this project such a great tool.

## Code of Conduct 📜

By participating in this project, you are expected to uphold our Code of Conduct:

-   Use welcoming and inclusive language
-   Be respectful of differing viewpoints and experiences
-   Gracefully accept constructive criticism
-   Focus on what is best for the community
-   Show empathy towards other community members

## How Can I Contribute? 🤝

### Reporting Bugs 🐛

Bugs are tracked as GitHub issues. Create an issue and provide the following information:

-   Use a clear and descriptive title
-   Describe the exact steps to reproduce the problem
-   Provide specific examples to demonstrate the steps
-   Describe the behavior you observed after following the steps
-   Explain which behavior you expected to see instead and why
-   Include screenshots if possible

### Suggesting Enhancements ✨

Enhancement suggestions are also tracked as GitHub issues. When creating an enhancement suggestion, please include:

-   A clear and descriptive title
-   A detailed description of the proposed functionality
-   Any possible drawbacks
-   Mock-ups or examples if applicable

### Pull Requests 📥

1. Fork the repo and create your branch from `main`
2. If you've added code that should be tested, add tests
3. If you've changed APIs, update the documentation
4. Ensure the test suite passes
5. Make sure your code lints
6. Issue the pull request

## Development Process 🛠️

1. Clone the repository

```bash
git clone https://github.com/FilipsMasolovs/react-blackjack.git
```

2. Install dependencies

```bash
npm install
```

3. Create a branch

```bash
git checkout -b feature/your-feature-name
```

4. Make your changes and commit them

```bash
git commit -m 'Add some feature'
```

5. Push to the branch

```bash
git push origin feature/your-feature-name
```

## Styleguides 📐

### Git Commit Messages

-   Use the present tense ("Add feature" not "Added feature")
-   Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
-   Limit the first line to 72 characters or less
-   Reference issues and pull requests liberally after the first line

### TypeScript Styleguide

-   Use TypeScript for all new code
-   Follow the existing code style
-   Use meaningful variable names
-   Add JSDoc comments for functions and interfaces
-   Use proper type annotations

```typescript
// Good
interface PlayerProps {
	/** The player's current score */
	score: number
	/** The player's hand of cards */
	cards: Card[]
}

/** Calculates the total value of a hand */
function calculateScore(cards: Card[]): number {
	// Implementation
}

// Bad
interface Props {
	s: number
	c: any[]
}

function calc(c: any): any {
	// Implementation
}
```

### Component Styleguide

-   One component per file
-   Use functional components with hooks
-   Keep components small and focused
-   Use proper prop types
-   Include component documentation

```typescript
// Good
import React from 'react'
import { CardProps } from '../types'

export const Card: React.FC<CardProps> = ({ suit, rank, hidden }) => {
	return <div className={hidden ? 'card hidden' : 'card'}>{!hidden && `${rank}${suit}`}</div>
}

// Bad
export default function (props: any) {
	return <div>{props.value}</div>
}
```

### Styling Styleguide

-   Use styled-components
-   Follow the existing theme structure
-   Use semantic class names
-   Keep styles modular and reusable

```typescript
// Good
const CardContainer = styled.div`
	display: flex;
	align-items: center;
	padding: ${({ theme }) => theme.spacing.medium};
	border-radius: ${({ theme }) => theme.borderRadius.default};
`

// Bad
const Div = styled.div`
	display: flex;
	padding: 20px;
	border-radius: 4px;
`
```

## Documentation 📚

-   Update README.md with any new features
-   Document all functions and components
-   Include examples in documentation
-   Keep documentation up to date with changes

## Questions? 💭

Don't hesitate to ask questions about contributing. You can:

-   Open an issue
-   Contact the maintainers
-   Ask in pull requests

## Recognition 🌟

Contributors will be recognized in:

-   The README.md file
-   The project's contributors page
-   Release notes when their contributions are included

Thank you for contributing to React Blackjack! 🎉
