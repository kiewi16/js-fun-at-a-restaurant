function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    deliveryOrders.push(order)
  }
  }

  function refundOrder(num, deliveryOrders) {

  for (var i = 0; i < deliveryOrders.length; i ++) {
    if(deliveryOrders[i].orderNumber === num) 
    {deliveryOrders.splice(i,1)
    }
   }
}
function listItems(deliveryOrders) {
  
  var items = [] 
for (var i = 0; i < deliveryOrders.length; i++) {
  items.push (deliveryOrders[i].item)
}

return items.join(", ")
}

function searchOrder(deliveryOrders, item) {

  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === item) {
      return true
    } 
  }
    return false
}
module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}