let bagItems;
onLoad();


function onLoad(){
  bagItems =JSON.parse(localStorage.getItem('bagItems'))||[];
  displayItemsOnHomePage();
  displayBagItemCount();
}


function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem('bagItems',JSON.stringify(bagItems));
  displayBagItemCount();
}
function displayBagItemCount() {
  let bagItemCount = document.querySelector(".bag-item-count");
  if (bagItems.length > 0) {
    bagItemCount.style.visibility = "visible";
    bagItemCount.innerHTML = bagItems.length;
  } else {
    bagItemCount.style.visibility  = "hidden";
  }
}

function displayItemsOnHomePage() {
  let itemsContainer = document.querySelector(".items-container");
  if(!itemsContainer){
    return;
  }
  let innerHtml = "";
  item.forEach((item) => {
    innerHtml += `            <div class="item-container">
           <img src="${item.image}" alt="earings" class="item-image">
           <div class="rating">
               ${item.rating.stars}⭐ | ${item.rating.count} 
           </div>
           <div class="company-name">${item.company}</div>
           <div class="item-name">${item.item_name}</div>
           <div class="price">
               <span class="current-price">RS ${item.current_price}</span>
               <span class="origional-price">RS ${item.original_price}</span>
               <span class="discount">(${item.discount_percentage}% off)</span>
           </div>
           <button class="btn-add-bag" onclick="addToBag(${item.id});">Add to bag</button>
       </div>`;
  });
  itemsContainer.innerHTML = innerHtml;
}
