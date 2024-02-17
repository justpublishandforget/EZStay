const menu = document.querySelector('.menu');
const side = document.querySelector('.sidebar');
const main = document.querySelector('.mainpage');
const cardContainer = document.querySelector('.card-container');
const iconinfo = document.querySelectorAll('.icon-info');
const iconbtn = document.querySelectorAll('.iconbtn-1');
const items = document.querySelectorAll('.items-1');


var count = 0;


menu.addEventListener('click', function(){

  if(count == 0){
  main.style.width = '95%';
  side.style.width = '5%';
  main.style.marginLeft = '6%';
  cardContainer.style.gridTemplateColumns = 'repeat(auto-fit,minmax(110px, 299px))';
  cardContainer.style.gridGap = '3.5rem';
  iconinfo.forEach(function (icon) {
    icon.classList.add('hidden');
});
  items.forEach(function (icon) {
    icon.classList.add('items-2');
});
  iconbtn.forEach(function (icon) {
    icon.classList.add('iconbtn-2');
});
  items.forEach(function (icon) {
    icon.classList.remove('items-1');
});
  iconbtn.forEach(function (icon) {
    icon.classList.remove('iconbtn-1');
});

  count++;
  }
  else{
    main.style.width = '83%';
  side.style.width = '17%';
  main.style.marginLeft = '18%';
  cardContainer.style.gridTemplateColumns = 'repeat(auto-fit,minmax(110px, 272px))';
  cardContainer.style.gridGap = '2rem';
  // iconinfo.classList.remove('hidden');
  iconinfo.forEach(function (icon) {
    icon.classList.remove('hidden');
});
items.forEach(function (icon) {
  icon.classList.remove('items-2');
});
iconbtn.forEach(function (icon) {
  icon.classList.remove('iconbtn-2');
});
items.forEach(function (icon) {
  icon.classList.add('items-1');
});
iconbtn.forEach(function (icon) {
  icon.classList.add('iconbtn-1');
});
  count = 0;
  }
})