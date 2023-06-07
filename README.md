# PLAY PIX WEBSCRAPPING

Our app is a powerful web scraping tool specifically designed for collecting betting data from football games. With our application, you can effortlessly gather and analyze comprehensive betting information to make informed decisions and gain an edge in the world of football betting.

### Dependencies

- [x] `node 18+, yarn 1.22.19+`

### Installation

- [x] `gh repo clone jhollyferr/play-pix-ws` or
- [x] `g clone git@github.com:jhollyferr/play-pix-ws.git` or
- [x] `g clone https://github.com/jhollyferr/play-pix-ws.git`
- [x] `cd play-pix-ws`
- [x] `yarn install` or `npm install`

### Run App

- [x] `yarn start` or `npm run start`

### Output

```js
// example:
[
  {
    title: "Resultado do Jogo",
    values: [
      {
        key: "Coritiba",
        value: "2.66",
      },
      {
        key: "Empate",
        value: "3.20",
      },
      {
        key: "Santos SP",
        value: "3.11",
      },
    ],
  },
  {
    title: "Chance Dupla (Tempo regulamentar)",
    values: [
      {
        key: "1 ou empate",
        value: "1.38",
      },
      {
        key: "12",
        value: "1.36",
      },
      {
        key: "2 ou Empate",
        value: "1.50",
      },
    ],
  },
];
```
