// Your code goes here

// #1 Mouseenter

const headerPic = document.querySelector('header img');
headerPic.addEventListener('mouseenter', event => {
    headerPic.style.transform = 'scale(1.1)';
});

// #2 Load

window.addEventListener('load', event => {
    console.log('Page is fully loaded');
});

// #3 Mouseover

const logo = document.querySelector('.logo-heading');
logo.addEventListener('mouseover', event => {
    event.target.style.color = 'orange'
});

// #4 Doubleclick

const btn = document.querySelectorAll('.btn');
btn.forEach(item => {
    item.addEventListener('dblclick', event =>{
        event.target.style.color = 'black';
        console.log(event);
    });
});

// #5 MouseLeave

headerPic.addEventListener('mouseleave', event => {
    logo.style.color = 'orange';
    event.target.style.transform = 'scale(1)';
})

// #6 Click

const imgBackground = document.querySelector('.text-content *');
imgBackground.addEventListener('click', event => {
  console.log(`clicked`);
  imgBackground.style.color ="#e1d2f3";
  imgBackground.style.transition = 'color 0.5s';
   event.stopPropagation();
});

// #7 Focus

const navFocus = document.querySelector('.nav-link');

navFocus.addEventListener('focus', event => {
    console.log ('focused');
    navFocus.style.color = "#ffffff";
});

 // #8 Resize

 window.addEventListener('resize', event => {
      const changeTitle = document.querySelector('.logo-heading');
      changeTitle.textContent="ALL ABOARD!!!"
    })