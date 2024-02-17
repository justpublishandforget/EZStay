const menu = document.querySelector('.menu');
const side = document.querySelector('.sidebar');
const main = document.querySelector('.mainpage');
const cardContainer = document.querySelector('.card-container');


var count = 0;

menu.addEventListener('click', function(){

  if(count == 0){
  main.style.width = '95%';
  side.style.width = '5%';
  main.style.marginLeft = '6%';
  cardContainer.style.gridTemplateColumns = 'repeat(auto-fit,minmax(110px, 299px))';
  cardContainer.style.gridGap = '3.5rem';
  count++;
  }
  else{
    main.style.width = '83%';
  side.style.width = '17%';
  main.style.marginLeft = '18%';
  cardContainer.style.gridTemplateColumns = 'repeat(auto-fit,minmax(110px, 272px))';
  cardContainer.style.gridGap = '2rem';
  count = 0;
  }
})