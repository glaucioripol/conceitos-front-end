# Questão proposta

Considerando

```js ​
const a = [1, 2, 3];
```

e

```js
const b = []​
```

explique brevemente e com suas palavras, a diferença entre as abordagem abaixo e por que essa diferença é relevante:

```js
a) a.push(4);

b) a.concat(4);

c) [...a, 4];

d) [...b, a];
```

### Resposta

Na abordagem 'a', esta usando o método `Array.prototype.push`, em que adiciona o elemento passado por parâmetro, no Final do Array (a direita da lista), tendo como resultado:

```js
a === [1, 2, 3, 4];
```

Na abordagem 'b', ele faz uso de outro método `Array.prototype.concat`, neste caso o Array declarado como a, recebe o parâmetro e o adiciona ao final do Array tendo o mesmo resultado da abordagem 'a', porém o concat tem um comportamento diferente ou passar como parâmetro um Array, ele pega o Array recebido e o "achata" no mesmo nível do array que chamou o método `concat` e para um exemplo mais claro, segue o seguinte exemplo:

```js
a.concat([4, 5]);
// tendo com resultado
a === [1, 2, 3, 4, 5];
```

Na abordagem 'c', ele faz uso do açucar sintático Spread operator e da forma em que foi usado no Array a tem um comportamento com o do `Array.prototype.concat` quando recebe um Array como parâmetro, então ele teria o seguinte comportamento:

```js
[
  ...a, // é equivaliente à [].concat(a)
  4, // seria equivalente à [].push(4)
];
```

e com isto tendo o resultado final da abordagem 'c' será o seguinte Array:

```js
[1, 2, 3, 4];
```

E por fim na abordagem 'd', ele também usa o Spread operator, porém o Array de nome b, não tem nenhum valor para ser desestruturado e copiado para dentro do novo Array que esta sendo criado, então o resultado final deste novo Array seria o seguinte:

```js
[[1, 2, 3]];
```

Caso vá usar abordagem 'c' e/ou 'd', de forma nativa sem passar um empacotador ou transpilador pode haver problema ao usá-los, pois em navegadores mais antigos sem compatibilidade com ECMAScript 2015(famoso ES6), então sempre que for usar açucares sintáticos fique atento com a compatibilidades dos navegadores que se propôs a dar suporte.
