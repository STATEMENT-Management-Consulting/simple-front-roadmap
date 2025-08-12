# Guia de Desenvolvimento para Trainee

## Exercício diário: CSSBattle  
- **Descrição**: Resolva **ao menos um desafio por dia** em [CSSBattle](https://cssbattle.dev/) para melhorar suas habilidades em layouts CSS eficientes, posicionamento, pseudo-elementos e otimização de código.

---

## 1. 🎮 Tic Tac Toe com Voz e Feedback do Computador

Este é um jogo de **Tic Tac Toe** (Jogo do Galo) desenvolvido em **React**, com interface moderna inspirada no [design no Figma](https://www.figma.com/design/mHpnLMwTEDLXoDQQNpBbZN/Tic-Tac-Toe-Game-UI--Community-?t=5GGtCNfv3ZQ59n4F-0).  

A experiência vai além do jogo tradicional:
- O **utilizador pode jogar com a voz**, dizendo em que posição quer jogar.
- O **computador anuncia a sua jogada** de forma clara.
- O jogo é rápido, acessível e pensado para todas as idades.

### 📖 Descrição do Jogo

O **Tic Tac Toe com Voz** mantém as regras clássicas:
- Dois jogadores alternam turnos colocando X ou O num tabuleiro 3x3.
- O objetivo é alinhar três símbolos na horizontal, vertical ou diagonal.
- Se todas as casas forem preenchidas sem alinhamento → empate.

A diferença está na **forma de interação**:
- O jogador **pode usar a voz** para jogar (“Jogue na casa 5”).
- O **computador responde falando** (“Joguei na casa 2”).
- Tudo acontece com animações suaves e feedback visual.

### 🌟 Funcionalidades Principais

1. **🎙 Jogar com a voz**
   - O utilizador pode dizer comandos como “Casa 1”, “Posição 5” ou “Centro”.
   - O jogo interpreta o comando e marca automaticamente.

2. **🗣 Feedback falado do computador**
   - Quando o computador joga, ele anuncia a jogada.
   - Ex.: “Joguei no canto superior esquerdo”.

3. **🤖 Computador inteligente**
   - Algoritmo **Minimax** para jogadas estratégicas ou API de IA.
   - Dificuldade ajustável: Fácil / Médio / Difícil.

4. **📊 Estatísticas do jogador**
   - Guarda número de vitórias, derrotas e empates.
   - Mostra percentagem de aproveitamento.

5. **🎨 UI moderna e responsiva**
   - Interface adaptada para desktop e mobile.
   - Efeitos visuais suaves nas jogadas.

### 🚀 Funcionalidades Awesome Extras

6. **🕹 Modo Desafio Relâmpago**
   - Cada jogada tem tempo limite (ex.: 5 segundos).
   - Se não jogar a tempo, perde o turno.

7. **🎯 Assistente de Sugestão**
   - O computador pode dar dicas da melhor jogada antes de jogar.
   - Perfeito para treinar e melhorar estratégia.

### 🛤 Jornada do Utilizador

**1. Início**
- O utilizador abre o jogo e escolhe:
  - Jogar contra o computador.
  - Jogar contra outro jogador (mesmo dispositivo).
- Pode ativar/desativar modo voz e dicas.

**2. Durante o jogo**
- Se o modo voz estiver ativo:
  - Utilizador diz: “Jogue na casa 4”.
  - O sistema reconhece o comando e executa a jogada.
- O computador:
  - Calcula a jogada.
  - Anuncia com voz: “Joguei na casa 7”.
  - Marca no tabuleiro com animação.

**3. Final de partida**
- Se houver vencedor:
  - Animação destacando a linha vencedora.
  - Mensagem falada: “Vitória do Jogador X” ou “Vitória do Computador”.
- Se empate:
  - Animação neutra + mensagem falada: “Empate”.
- Estatísticas são atualizadas automaticamente.

**4. Recomeço**
- O jogador pode iniciar nova partida ou voltar ao menu.



### 🛠 Tecnologias e Bibliotecas

| Finalidade                      | Biblioteca / API Sugerida                                                                                   |
|----------------------------------|--------------------------------------------------------------------------------------------------------------|
| **UI**                           | [React](https://react.dev/) + [Tailwind CSS](https://tailwindcss.com/)                                       |
| **Reconhecimento de voz**        | [react-speech-recognition](https://www.npmjs.com/package/react-speech-recognition) *(baseado em Web Speech API)* |
| **Síntese de voz (fala)**        | [Web Speech API SpeechSynthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis) *(nativa no browser)* |
| **IA para jogadas** *(opcional)* | [Tic Tac Toe AI API (RapidAPI)](https://rapidapi.com/themaxgoldman/api/tic-tac-toe-ai) *(plano grátis)*       |

| Finalidade                         | Serviço IBM Watson                                                                                           | Descrição                                                                                                   |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| **Reconhecimento de voz**          | [IBM Watson Speech to Text](https://www.ibm.com/cloud/watson-speech-to-text)                                 | Converte comandos falados do utilizador em texto com alta precisão. Suporta português de Portugal e Brasil. |
| **Síntese de voz**                 | [IBM Watson Text to Speech](https://www.ibm.com/cloud/watson-text-to-speech)                                 | Faz o computador falar a jogada escolhida. Pode usar vozes realistas.                                       |
| **IA para jogadas**                | [IBM Watson Machine Learning](https://www.ibm.com/cloud/machine-learning)                                    | Poderia hospedar e executar um modelo de IA para calcular jogadas (Minimax ou outro modelo próprio).        |
| **Análise de linguagem** *(extra)* | [IBM Watson Natural Language Understanding](https://www.ibm.com/cloud/watson-natural-language-understanding) | Poderia interpretar comandos de voz mais naturais como “coloca no meio” ou “faz a melhor jogada possível”.  |

---

### 2. Chrome Dinosaur Game  
- **Link**: [Chrome Dino Game (Figma)](https://www.figma.com/design/hE56cM5prvVv9bDimlLnLD/Playable-Chrome-Dino-Game--Community-?node-id=92-265&p=f&t=XZUGGf3cQJw1rwfk-0)  
- Conceitos principais: animação contínua, detecção de teclado, gravidade simulada, colisão, pontuação dinâmica.

---

### 3. Tetris  
- **Link**: [Tetris (Figma)](https://www.figma.com/design/p7fwLW9xwLd1c1Wkld8MWP/Tetris--Community-?node-id=5-35&t=bhZUmqbdCklc28bC-0)  
- Conceitos principais: grade dinâmica, tetrominós (movimentação e rotação), lógica de colisão, remoção de linhas e pontuação.

---

## 4. Jigsaw Puzzle (80 peças)  
- **Link**: [Jigsaw Puzzle (Figma)](https://www.figma.com/design/dzycmrPhO2GUi6Z9p57VXO/Jigsaw-Puzzle-Game---80-Piece--Community-?node-id=0-1&p=f&t=b3DakFWW5HcriO5i-0)  
- Conceitos principais: drag-and-drop, encaixe preciso, feedback visual, gestão de estado complexa e validação de finalização.

---

# TRUST IN YOURSELF😁
