// class CarSlide {
//   constructor(element) {
//     // Assign this.element to the passed in DOM element
//     this.element = element;

//     // Get the custom data attribute on the Link
//     this.data = element.dataset;

//     // Add a click event listener on this instance, calling the select method on click
//     this.element.addEventListener('click', () => this.select());
//   }

//   select() {
//     // Get all of the elements with the tabs-link class
//     const links = document.getElementsByClassName('tabs-link');

//     // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
//     Array.from(links).forEach(l => l.classList.remove('tabs-link-selected'));

//     // Add a class named "tabs-link-selected" to this link
//     this.element.classList.add('tabs-link-selected');

//     // Call the select method on the item associated with this link
//     this.tabItem.select();
//   }
// }

// const nextBtn = document.querySelectorAll('button'[0]);
// nextBtn.addEventListener('click', () => next());
// const previousBtn = document.querySelectorAll('button')[1];
// previousBtn.addEventListener('click', () => previousBtn());

// slides.document
//   .querySelectorAll('.car-content li')
//   .forEach(l => new Carslide());

carousel = (function() {
  var box = document.querySelector('.carouselbox');
  var next = box.querySelector('.next');
  var prev = box.querySelector('.prev');
  var items = box.querySelectorAll('content li');
  var counter = 0;
  var amount = items.length;
  var current = items[0];
  box.classList.add('active');
  function navigate(direction) {
    current.classList.remove('current');
    counter = counter + direction;
    if (direction === -1 && counter < 0) {
      counter = amount - 1;
    }
    if (direction === 1 && !items[counter]) {
      counter = 0;
    }
    current = items[counter];
    current.classList.add('current');
  }
  next.addEventListener('click', function(ev) {
    navigate(1);
  });
  prev.addEventListener('click', function(ev) {
    navigate(-1);
  });
  navigate(0);
})();
