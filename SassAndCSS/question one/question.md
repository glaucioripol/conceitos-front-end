# Questão proposta

Crie um ​mixin​ para incluir, de forma parametrizável, as propriedades ​font-family,font-size, font-weight, letter-spacing ​e​ line-height​. Depois, demonstre o uso do ​mixin​,refatorando o trecho de código abaixo:

```css
.box__title {
  font-family: ‘Poppins’, sans-serif;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.322px;
  line-height: 21px;
}

.box__body {
  font-family: ‘Roboto’, sans-serif;
  font-size: 14px;
  font-weight: 400px;
  letter-spacing: 0.09px;
  line-height: 21px;
}
```

### Resposta

```scss
/* mixin */
@mixin stylesToTextContent(
  $fontFamily,
  $fontSize,
  $fontWeight,
  $letterSpacing,
  $lineHeight
) {
  font-family: $fontFamily;
  font-size: $fontSize;
  font-weight: $fontWeight;
  letter-spacing: $letterSpacing;
  line-height: $lineHeight;
}

/* Refatoração do estilo usando o mixin */
.box {
  &__title {
    $boxTitleFont: ‘Poppins’, sans-serif;
    @include stylesToTextContent($boxTitleFont, 16px, 700, 0.322px, 21px);
  }

  &__body {
    $boxBodyFont: ‘Roboto’, sans-serif;
    @include stylesToTextContent($boxBodyFont, 14px, 400px, 0.09px, 21px);
  }
}
```
