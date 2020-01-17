/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const imgArray = [
  './assets/carousel/computer.jpeg',
  './assets/carousel/mountains.jpeg',
  './assets/carousel/trees.jpeg',
  './assets/carousel/turntable.jpeg'
];

// Creating carousel
const carouselCont = document.querySelector('.carousel-container');

// Creating carousel components:
function Carousel(array) {

  // Creating variables:
  const carousel = document.createElement('div'),
        carouselLeft = document.createElement('div'),
        carouselRight = document.createElement('div');

  // Adding classes:
  carousel.classList.add('carousel');
  carouselLeft.classList.add('left-button');
  carouselRight.classList.add('right-button');

  // Appending Children:
  carousel.append(carouselLeft);
  carousel.append(carouselRight);

  // Creating rotating image component:
  let imgIndex = 0;

  const newImg = document.createElement('img');
  newImg.src = array[imgIndex];
  newImg.style.display = 'block';


  carouselLeft.onclick = () => {
    if(imgIndex > 0) {  
      imgIndex -= 1;
      newImg.src = array[imgIndex];
    } 
    
    else {
      imgIndex = array.length - 1;
      newImg.src = array[imgIndex];
    }
  };
  
  carouselRight.onclick = () => {
    if(imgIndex < array.length - 1) {
      imgIndex += 1;
      newImg.src = array[imgIndex];
    } else {
      imgIndex = 0;
      newImg.src = array[imgIndex];
    }
  };

  carousel.append(newImg);

  // Adding button < >:
  carouselLeft.textContent = '<';
  carouselRight.textContent = '>';

  // Returning Carousel:
  console.log(carousel);
  return carousel;
}

carouselCont.append(Carousel(imgArray));