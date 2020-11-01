const products = require('./products.json')

const categoryMap = {
  1(cost) {
    const increase = 0.05
    return cost + (cost * increase)
  },
  2(cost) {
    const increase = 0.075
    return cost + (cost * increase)
  },
  3(cost) {
    const increase = 0.0155
    return cost - (cost * increase)
  }
}

;(() => {
  const activeProducts = products.filter(retrieveActiveProducts)
  const productsWithFinalPrice = activeProducts.map(retrieveIDNameAndAdjustedPrice)
  console.log(productsWithFinalPrice)
})()

function retrieveActiveProducts({ active }) {
  return active
}

function retrieveIDNameAndAdjustedPrice({ id, name, cost, categoryId }) {
  const price = updateValueAcrossCategoryID(cost, categoryId)

  return {
    id,
    name,
    price
  }
}

function updateValueAcrossCategoryID(cost, categoryID) {
  const updatedPrice = categoryMap[categoryID] // check if exists increase to apply
    ? categoryMap[categoryID](cost) // if exists apply increase
    : cost // without increase to category return the current price

  return Number(updatedPrice.toFixed(2))
}
