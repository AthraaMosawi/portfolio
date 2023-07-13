const wrapper = document.querySelector('.split-screen');
const topLayer = document.querySelector('.left');
const botLayer = document.querySelector('.right');
const contentWrap = document.querySelector('.content-wrap');
const designerDes = document.getElementById("des")
const webDes = document.getElementById("web");

//add mousemove event
wrapper.addEventListener('mousemove', event => {
    topLayer.style.width = event.clientX + 'px';
    designerDes.style.display = "block";
    webDes.style.display = "block";
});
contentWrap.addEventListener('mouseleave', (e) => {
    topLayer.style.width = 50 + 'vw';
    designerDes.style.display = "none";
    webDes.style.display = "none";
});
// wrapper.addEventListener('mousemove', event => {
//     // botLayer.style.width = event.clientX + 'px';
//     webDes.style.display = "block";
// });
// contentWrap.addEventListener('mouseleave', (e) => {
//     // topLayer.style.width = 50 + 'vw';
//     webDes.style.display = "none";
// });