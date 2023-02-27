// 'use strict';
// window.onload = function(){

// const sizeRadios = document.querySelectorAll('input[name="size"]');
// const pizzaImg = document.getElementById('pizzaImg');

// sizeRadios.forEach((pizza) => {
//     pizza.addEventListener('click', function (event) {
//         const size = event.target.value;

//         if (size === 'small') {
//             pizzaImg.style.width = '300px';
//         } else if (size === 'medium') {
//             pizzaImg.style.width = '450px';
//         } else if (size === 'large') {
//             pizzaImg.style.width = '600px';
//         }
//     })
// })

//     const tabSelect = document.querySelector('#tab-select');
//     const tabContents = document.querySelectorAll('.pizzaSlider');
    
//     tabSelect.addEventListener('change', () => {
//       // hide all tab contents
//       tabContents.forEach(tabContent => {
//         tabContent.classList.remove('active');
//       });
    
//       // show the selected tab content
//       const selectedTab = document.querySelector(`#${tabSelect.value}`);
//       selectedTab.classList.add('active');
//     });
    
//     // $('.pizzaSlider').slick({
//     //     infinite: true,
//     //     slidesToShow: 4,
//     //     slidesToScroll: 1,
//     //     arrows:false
//     // });
// }


// const peper = document.getElementById('peper');
// const peperImg = document.querySelector('#peper img');

// let currentDroppable = null;

// peper.onmousedown = function(event) {
//         console.log(event.target.currentSrc.substring(22));
//     // peperImg.src = event.target.currentSrc.substring(22);
//       let shiftX = event.clientX - peper.getBoundingClientRect().left;
//       let shiftY = event.clientY - peper.getBoundingClientRect().top;

//       peper.style.position = 'absolute';
//       peper.style.zIndex = 1000;
//       document.body.append(peper);

//       moveAt(event.pageX, event.pageY);

//       function moveAt(pageX, pageY) {
//         peper.style.left = pageX - shiftX + 'px';
//         peper.style.top = pageY - shiftY + 'px';
//       }

//       function onMouseMove(event) {
//         moveAt(event.pageX, event.pageY);

//         peper.hidden = true;
//         let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
//         peper.hidden = false;

//         if (!elemBelow) return;

//         let droppableBelow = elemBelow.closest('.droppable');
//         if (currentDroppable != droppableBelow) {
//           if (currentDroppable) { // null если мы были не над droppable до этого события
//             // (например, над пустым пространством)
//             leaveDroppable(currentDroppable);
//           }
//           currentDroppable = droppableBelow;
//           if (currentDroppable) { // null если мы не над droppable сейчас, во время этого события
//             // (например, только что покинули droppable)
//             enterDroppable(currentDroppable);
//           }
//         }
//       }

//       document.addEventListener('mousemove', onMouseMove);

//       peper.onmouseup = function() {
//         document.removeEventListener('mousemove', onMouseMove);
//         peper.onmouseup = null;
//       };

//     };

//     function enterDroppable(elem) {
//       elem.style.background = 'pink';
//     }

//     function leaveDroppable(elem) {
//       elem.style.background = '';
//     }

//     peper.ondragstart = function() {
//       return false;
//     };


function uniTotal (string) {
  // total up dem unicodes!
}

let a = "terxan"
let b = a.split('').reduce((sum, element) =>{
  return sum += element.charCodeAt()
},0)
console.log(b);