function nameMenuItem(menuItem) {
  return `Delicious ${menuItem}`
}

function createMenuItem(name, price, type) {
  var menuItemName = {
    name: name,
    price: price,
    type: type
  };
return menuItemName
}

function addIngredients(item, ingredients) {
  if(!ingredients.includes(item)) {
  return ingredients.push(item)
  } else { 
    return ingredients
  }
  }

function formatPrice(initialPrice) {
  return `$${initialPrice}`
}

function decreasePrice(initialPrice) {
  return initialPrice * 0.9
  }

function createRecipe(title, ingredients, type) {
  var recipe = {
    title: title,
    ingredients: ingredients,  
    type: type, 
  };
  return recipe
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe, 
}


