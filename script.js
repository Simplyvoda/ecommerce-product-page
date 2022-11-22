// script for navbar popup

function showPopup(){
  var x = document.getElementsByClassName("popup-content")[0];
    if (x.style.display == "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
}

// end of script for navbar popup

// script to show lighbox slideshow
function showLightbox(){
    var y = document.getElementsByClassName("lightbox")[0];
      if (y.style.display === "none") {
        y.style.display = "block";
      } else {
        y.style.display = "none";
      }
}
// end of script for lightbox slideshow

// script to close/exit lightbox
function closeLightbox(){
    var elms = document.getElementsByClassName("lightbox");

    Array.from(elms).forEach((x) => {
        x.style.display = "none";
    })
}
// end of script to exit slideshow


// script for lightbox and slideshow 
var images = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg"
]

var imgTag = document.getElementById('current-image');
var imgTag2 = document.getElementById('current-img');
var count = 0;

function next(){
  count++;
  if(count >= images.length){
    count = 0;
    imgTag.src = images[count];
  }else {
    imgTag.src = images[count];
  }
}

function prev(){
  count--;
  if(count < 0){
    count = images.length -1;
    imgTag.src = images[count];
  }else{
    imgTag.src = images[count];
  }
}

function displayPicture(i){
  imgTag.src = images[i];
}

function displayPicture2(i){
  imgTag2.src = images[i];
}
// end of script for lightbox slideshow

// script for button amount counter
var itemsCount = 0;
function addCount(){
  itemsCount++;
  document.getElementById('amount-text').innerHTML = itemsCount;
}

function minusCount(){
  if (itemsCount > 0){
    itemsCount--;
    document.getElementById('amount-text').innerHTML = itemsCount;
  }else{
    itemsCount = 0;
  }
}

// end of script for button amount counter


// mobile slideshow script
var imgTag3 = document.getElementById('current-img-mobile');

function nextMobile(){
  count++;
  if(count >= images.length){
    count = 0;
    imgTag3.src = images[count];
  }else {
    imgTag3.src = images[count];
  }
}

function prevMobile(){
  count--;
  if(count < 0){
    count = images.length -1;
    imgTag3.src = images[count];
  }else{
    imgTag3.src = images[count];
  }
}

// end of script for moblie slideshow

// start script for mobile menu
function showMobileNav(){
  var x = document.getElementsByClassName("menu-container")[0];
    if (x.style.display == "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function closeMobileNav(){
  var x = document.getElementsByClassName("menu-container")[0];
  x.style.display = "none";
}
// end script for mobile menu

// start script for add to cart
function addToCart(){
  var emptyState = document.getElementsByClassName("inner-content")[0];
  var fullState = document.getElementsByClassName("inner-content2")[0];
  var checkoutButton = document.getElementById("checkout-button");
  var countContainer = document.getElementById("itemCount");
  var countResult = document.getElementById("countResult");
  var unitCost = document.getElementById("unitAmount").innerText;
  if (itemsCount){
    // change display 
    emptyState.style.display = "none";
    fullState.style.display = "block";
    checkoutButton.style.display = "block";

    // set count container to be equal to item count
    countContainer.innerHTML = itemsCount;
    //  remove $ sign from cost of unit
    var Cost = parseInt(unitCost.slice(1));
    // multiply item count by cost of unit 
    var Result = Cost * itemsCount;
    // display result in container created
    countResult.innerText = '$' + Result + '.00';
    countResult.style.fontWeight = 'bold';
    countResult.style.color = 'black';
  } 
}
// end script for add to cart

// script to display empty cart
function removeCart(){
  // var countContainer = document.getElementById("itemCount");
  var emptyState = document.getElementsByClassName("inner-content")[0];
  var fullState = document.getElementsByClassName("inner-content2")[0];
  var checkoutButton = document.getElementById("checkout-button");
  if (itemsCount > 0){
    itemsCount-- ;
    addToCart();
  }
  else if (itemsCount == 0){
    fullState.style.display = "none";
    emptyState.style.display = "block";
    checkoutButton.style.display = "none";
  }
}
// end of script