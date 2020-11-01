# Questão proposta

Considerando `​const vetor = [1, 2, 3]​` explique, brevemente e com suas palavras, a diferença entre os dois trechos de código abaixo e por que essa diferença é relevante.

## Bloco de código 1

`vetor.forEach(function(a, b){ vetor[b] += 2; });`

### Resposta

Este bloco usando foreach, ele executa um looping em função do array e esta alterando o objeto original, não respeitando o principio de imutabilidade da programação funcional.

<hr>

## Bloco de código 2

`vetor.map( i => i += 2);`

### Resposta

Este bloco usando map também percorre o array, porém ele gera um novo array com a as modificações no bloco e respeitando a imutabilidade do array original.
