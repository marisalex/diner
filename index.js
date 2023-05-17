import menuArray from "./data.js"


document.addEventListener("click", function(e){
  if(e.target.dataset.addtocartbtn){
    addToCartBtnClicked(e.target.dataset.addtocartbtn)
  }else if(e.target.dataset.subtract){
    subtractBtnClicked(e.target.dataset.subtract)
  }
})


function addToCartBtnClicked(mealId){
  console.log("this button was clicked")
}

function subtractBtnClicked(){
  console.log("this subtract button was clicked")
}

function getMenu(){
 








  let menuHtml = ""

  menuArray.forEach(function(meal){
    menuHtml += `
    <div class="food-menu">
      <h2 class="food-emoji">${meal.emoji}</h2>
      <div class="food-item">
        <h4>${meal.name}</h4>
        <p class="small-text">${meal.ingredients}</p>
        <p>${meal.price}</p>
      </div>
      <div class="cart-btn">
        <button data-subtract= "${meal.id}"  class="subtract" id=>-</button>
        <button data-addtocartbtn= "${meal.id}" class="add-to-cart" id="add-to-cart-${meal.id}">+</button>
      </div>
    </div>
   `
  })

  return menuHtml
}

function render(){
  document.getElementById("feed").innerHTML = getMenu()
}

render()