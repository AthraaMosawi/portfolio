const wrapper = document.querySelector('.split-screen');
const topLayer = document.querySelector('.left');
const botLayer = document.querySelector('.right');


//add mousemove event
wrapper.addEventListener('mousemove', event => {
    topLayer.style.width = event.clientX + 'px';
});
// wrapper.addEventListener('mouseout', () => {
//     topLayer.style.color = "blue";
//     topLayer.style.width = 50 + 'vw';
// });
