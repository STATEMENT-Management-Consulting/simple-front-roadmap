# Guia de Desenvolvimento para Trainee

## 1. Exercício diário: CSSBattle  
- **Descrição**: Resolva **ao menos um desafio por dia** em [CSSBattle](https://cssbattle.dev/) para melhorar suas habilidades em layouts CSS eficientes, posicionamento, pseudo-elementos e otimização de código.

## 2. Projetos Figma (ordenados por complexidade)

### 1. Tic-Tac-Toe  
- **Link atualizado**: [Tic-Tac-Toe (Figma)](https://www.figma.com/design/mHpnLMwTEDLXoDQQNpBbZN/Tic-Tac-Toe-Game-UI--Community-?node-id=0-1&p=f&t=1dXMnxY6f7rtoL6M-0)  
- **Conceitos-chave**:  
  - Estrutura de grid 3×3  
  - Eventos de clique e alternância entre X/O  
  - Lógica de vitória, empate e controle de estado  
  - Adversário IA via API (minimax otimizada com pruning e cache) — o oponente nunca perde (empate garantido ou vitória se possível) :contentReference[oaicite:0]{index=0}

### 2. Chrome Dinosaur Game  
- **Link**: [Chrome Dino Game (Figma)](https://www.figma.com/design/hE56cM5prvVv9bDimlLnLD/Playable-Chrome-Dino-Game--Community-?node-id=92-265&p=f&t=XZUGGf3cQJw1rwfk-0)  
- Conceitos principais: animação contínua, detecção de teclado, gravidade simulada, colisão, pontuação dinâmica.

### 3. Tetris  
- **Link**: [Tetris (Figma)](https://www.figma.com/design/p7fwLW9xwLd1c1Wkld8MWP/Tetris--Community-?node-id=5-35&t=bhZUmqbdCklc28bC-0)  
- Conceitos principais: grade dinâmica, tetrominós (movimentação e rotação), lógica de colisão, remoção de linhas e pontuação.

### 4. Jigsaw Puzzle (80 peças)  
- **Link**: [Jigsaw Puzzle (Figma)](https://www.figma.com/design/dzycmrPhO2GUi6Z9p57VXO/Jigsaw-Puzzle-Game---80-Piece--Community-?node-id=0-1&p=f&t=b3DakFWW5HcriO5i-0)  
- Conceitos principais: drag-and-drop, encaixe preciso, feedback visual, gestão de estado complexa e validação de finalização.

---

## 3. Plano Semanal Sugerido

| Semana    | CSSBattle por dia  | Projeto Figma                            | Foco da Semana                                               |
|-----------|--------------------|-------------------------------------------|--------------------------------------------------------------|
| Semana 1  | 1 desafio diário   | Tic-Tac-Toe (com IA via API)              | Layout, eventos, lógica básica, integração com IA via API     |
| Semana 2  | 1 desafio diário   | Chrome Dino Game                          | Animação, teclas, reflexos, colisão e pontuação               |
| Semana 3  | 1 desafio diário   | Tetris                                    | Grade dinâmica, rotação, colisão, scoring                     |
| Semana 4  | 1 desafio diário   | Jigsaw Puzzle (80 peças)                  | Drag-and-drop avançado, encaixe, lógica de pontos de quebra   |

---

## 4. Detalhe: Tic-Tac-Toe com IA via API

### Como funciona a integração:
Utilize a API **Tic Tac Toe AI** da RapidAPI, que retorna a **melhor jogada possível** com base no estado atual do tabuleiro e no jogador da vez — ou seja, a IA utiliza algoritmo **minimax otimizado** (com alpha-beta pruning e cache) :contentReference[oaicite:1]{index=1}. O resultado garante que a IA **nunca perde** (empate ou vitória são as únicas opções).

### Exemplo simples de uso (JS/pseudocódigo):
```js
const options = {
  method: 'POST',
  headers: {
    'X-RapidAPI-Key': '<sua_chave>',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    board: ["X","O","X"," ", ...], // 9 posições
    player: "O"
  })
};

fetch('https://themaxgoldman-tic-tac-toe-ai.p.rapidapi.com/move', options)
  .then(res => res.json())
  .then(data => {
    // data.move => índice (0-8) da jogada ideal para a IA
    // atualize o estado do jogo com essa jogada
  });
