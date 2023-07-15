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
    // botLayer.style.display = "none";
});
contentWrap.addEventListener('mouseleave', (e) => {
    topLayer.style.width = 50 + 'vw';
    designerDes.style.display = "none";
    webDes.style.display = "none";
    botLayer.style.display = "block";
});
// wrapper.addEventListener('mousemove', event => {
//     // botLayer.style.width = event.clientX + 'px';
//     webDes.style.display = "block";
// });
// contentWrap.addEventListener('mouseleave', (e) => {
//     // topLayer.style.width = 50 + 'vw';
//     webDes.style.display = "none";
// });
// wrapper.addEventListener('mousemove', event => {
//     botLayer.style.width = event.clientX + 'px';
//     webDes.style.display = "block";
//     designerDes.style.display = "block";
//     topLayer.style.display = "none";
// });
// contentWrap.addEventListener('mouseleave', (e) => {
//     botLayer.style.width = 50 + 'vw';
//     webDes.style.display = "none";
//     designerDes.style.display = "none";
//     topLayer.style.display = "block";
// });

//tabs:
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabId = tab.getAttribute('data-tab');

    tabs.forEach(t => {
      if (t === tab) {
        t.classList.add('active');
      } else {
        t.classList.remove('active');
      }
    });

    tabContents.forEach(content => {
      if (content.id === tabId) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
  });
});



// form validation

function validateForm(event) {
  event.preventDefault();
  let name = document.getElementById("username");
  let email = document.getElementById("email");
  let subject = document.getElementById("subject");
  let msg = document.getElementById("msg");
  let errMsg = document.getElementById("errMsg");

if (name.value == "") {
  alert("Enter your name");
  name.focus();
  errMsg.style.display = "block";
  errMsg.style.color = "red";
  errMsg.innerHTML = "Enter your name please!";
  setTimeout(() => {errMsg.style.display = "none";}, 2000);
  return false;
}
if (email.value == "") {
  alert("Enter your email");
  email.focus();
  errMsg.style.display = "block";
  errMsg.style.color = "red";
  errMsg.innerHTML = "Enter your email please!";
  setTimeout(() => {errMsg.style.display = "none";}, 2000);
  return false;
}
let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if (regex.test(email.value) === false) {
  alert("Enter valid email please!");
  email.focus();
  errMsg.style.display = "block";
  errMsg.style.color = "red";
  errMsg.innerHTML = "Enter a valid email please!";
  setTimeout(() => {errMsg.style.display = "none";}, 2000);
  return false;
}

if (subject.value == "") {
  alert("Enter your subject");
  subject.focus();
  errMsg.style.display = "block";
  errMsg.style.color = "red";
  errMsg.innerHTML = "Enter your subject please!";
  setTimeout(() => {errMsg.style.display = "none";}, 2000);
  return false;
}
if (msg.value == "") {
  alert("Enter your message");
  msg.focus();
  errMsg.style.display = "block";
  errMsg.style.color = "red";
  errMsg.innerHTML = "Enter your message please!";
  setTimeout(() => {errMsg.style.display = "none";}, 2000);
  return false;
} else {
  errMsg.style.display = "block";
  errMsg.style.color = "green";
  errMsg.innerHTML = "Your message was sent, Thank You!";
  name.value = "";
  email.value = "";
  subject.value = "";
  msg.value = "";
  setTimeout(() => {errMsg.style.display = "none";}, 2000);
  return false;
}
}