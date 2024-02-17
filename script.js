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
  side.style.width = '15%';
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

const hotelData = [
  {
    "hotelName": "ITC Chola",
    "hotelAddress": "Chennai",
    "hotelPrice": 10000,
    "imageLink": "https://example.com/itc_chola_image.jpg",
    "rating": 4.5
  },
  {
    "hotelName": "Taj Mahal Palace",
    "hotelAddress": "Mumbai",
    "hotelPrice": 15000,
    "imageLink": "https://example.com/taj_mahal_palace_image.jpg",
    "rating": 4.8
  },
  {
    "hotelName": "The Leela Palace",
    "hotelAddress": "Delhi",
    "hotelPrice": 12000,
    "imageLink": "https://example.com/leela_palace_image.jpg",
    "rating": 4.6
  },
  // Add ratings for other hotels as well
  {
    "hotelName": "JW Marriott",
    "hotelAddress": "Bangalore",
    "hotelPrice": 11000,
    "imageLink": "https://example.com/jw_marriott_image.jpg",
    "rating": 4.7
  },
  {
    "hotelName": "Oberoi Grand",
    "hotelAddress": "Kolkata",
    "hotelPrice": 9000,
    "imageLink": "https://example.com/oberoi_grand_image.jpg",
    "rating": 4.3
  },
  {
    "hotelName": "Ritz-Carlton",
    "hotelAddress": "Goa",
    "hotelPrice": 18000,
    "imageLink": "https://example.com/ritz_carlton_image.jpg",
    "rating": 4.9
  },
  {
    "hotelName": "Hyatt Regency",
    "hotelAddress": "Pune",
    "hotelPrice": 9500,
    "imageLink": "https://example.com/hyatt_regency_image.jpg",
    "rating": 4.4
  },
  {
    "hotelName": "Sheraton Grand",
    "hotelAddress": "Hyderabad",
    "hotelPrice": 10500,
    "imageLink": "https://example.com/sheraton_grand_image.jpg",
    "rating": 4.5
  },
  {
    "hotelName": "Four Seasons",
    "hotelAddress": "Mumbai",
    "hotelPrice": 16000,
    "imageLink": "https://example.com/four_seasons_image.jpg",
    "rating": 4.7
  },
  {
    "hotelName": "Radisson Blu",
    "hotelAddress": "Jaipur",
    "hotelPrice": 8500,
    "imageLink": "https://example.com/radisson_blu_image.jpg",
    "rating": 4.2
  },
  {
    "hotelName": "Marriott Marquis",
    "hotelAddress": "Ahmedabad",
    "hotelPrice": 10000,
    "imageLink": "https://example.com/marriott_marquis_image.jpg",
    "rating": 4.4
  },
  {
    "hotelName": "Hilton Garden Inn",
    "hotelAddress": "Chandigarh",
    "hotelPrice": 9500,
    "imageLink": "https://example.com/hilton_garden_inn_image.jpg",
    "rating": 4.3
  }
];


const card = document.querySelectorAll('.card');
const cardComment = document.querySelectorAll('.card-comment')

card.forEach((item, index) => {
  const Address = item.querySelectorAll('p')
    item.querySelector('h4').innerText = hotelData[index].hotelName;
    item.querySelector('p').innerText = hotelData[index].rating
    Address[1].innerText = hotelData[index].hotelAddress;
    item.querySelector('span').innerText = '₹ '+hotelData[index].hotelPrice;

   
    console.log(item.querySelector('p').innerText);
    if(item.querySelector('p').innerText < 4.7){
      cardComment[index].style.display = 'none'
    }

    const cardHeart = document.querySelectorAll('.card-heart');
    cardHeart[index].addEventListener('click',()=>{
      window.location.href = './login.html';
    })

});






