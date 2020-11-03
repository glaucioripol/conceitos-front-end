# Questão proposta

Escreva uma classe CSS, utilizando Flexbox, que quando aplicada a uma estrutura“nav > ul > li”, faz com que os elementos sejam exibidos como uma lista vertical,com as `<li>` centralizadas horizontalmente e a `<ul>` alinhada norodapé da `<nav>`.Depois, escreva uma classe modificadora, que quando aplicada na `<nav>`, faz comque a lista seja disposta na horizontal.

### Resposta

```css
nav.menu {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 10rem; /* coloquei somente para validar se a ul esta ficando fixa no no rodapé da <nav>*/
}

nav.menu > ul {
  align-items: center;
  bottom: 0;
  display: flex;
  flex-direction: column;
  position: relative;
}

nav.menu--horizontal > ul {
  bottom: 0;
  flex-direction: row;
  justify-content: center;
  position: relative;
}
```
