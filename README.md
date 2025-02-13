# React Blackjack 🎰

A modern, responsive implementation of the classic casino game Blackjack, built with React, TypeScript, and Styled Components. Experience the thrill of the casino with this beautifully designed web application.

![Blackjack Game Screenshot](screenshot.png)

## ✨ Features

-   🎮 Classic Blackjack gameplay mechanics
-   🎨 Modern, responsive UI with smooth animations
-   🃏 Realistic card dealing and gameplay
-   📱 Mobile-friendly design
-   🎯 Type-safe implementation with TypeScript
-   🧩 Modular, component-based architecture
-   🎭 Theme support with styled-components

## 🚀 Getting Started

### Prerequisites

-   Node.js (v14 or higher)
-   npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/FilipsMasolovs/react-blackjack.git
```

2. Navigate to the project directory:

```bash
cd react-blackjack
```

3. Install dependencies:

```bash
npm install
# or
yarn install
```

4. Start the development server:

```bash
npm start
# or
yarn start
```

5. Open http://localhost:3000 to view it in your browser.

## 🎮 How to Play

1. Click "New Game" to start
2. You'll receive two cards, and the dealer will get two cards (one face down)
3. Choose to either:
    - Hit (take another card)
    - Stand (keep your current hand)
4. Try to get closer to 21 than the dealer without going over
5. The dealer must hit on 16 and stand on 17

## 🏗️ Project Structure

```
src/
├── components/       # React components
│   ├── Card/
│   ├── Hand/
│   ├── Button/
│   └── GameTable/
├── styles/          # Styled components and themes
│   ├── animations.ts
│   ├── theme.ts
│   └── GlobalStyles.ts
├── hooks/           # Custom React hooks
│   └── useBlackjack.ts
├── utils/           # Utility functions
│   ├── gameLogic.ts
│   └── constants.ts
├── types/           # TypeScript type definitions
│   └── index.ts
└── App.tsx          # Main application component
```

## 🛠️ Built With

-   React - UI Framework
-   TypeScript - Programming Language
-   Styled Components - Styling
-   React Hooks - State Management

## 📝 Game Rules

### Card Values

-   Number cards (2-10) = Face value
-   Face cards (J, Q, K) = 10
-   Aces = 1 or 11 (whichever benefits the hand)

### Winning Conditions

-   Get closer to 21 than the dealer
-   Dealer busts (goes over 21)
-   Get Blackjack (Ace + 10-value card)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the LICENSE.md file for details

## 👏 Acknowledgments

-   Card designs inspired by classic playing cards
-   UI/UX inspired by modern casino applications
-   Thanks to all contributors who have helped shape this project

## 📫 Contact

Filips Masolovs - filips.masolovs@gmail.com

Project Link: https://github.com/FilipsMasolovs/react-blackjack
