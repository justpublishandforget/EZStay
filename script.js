// Script
const menu = document.querySelector(".menu");
const side = document.querySelector(".sidebar");
const main = document.querySelector(".mainpage");
const cardContainer = document.querySelector(".card-container");
const iconinfo = document.querySelectorAll(".icon-info");
const iconbtn = document.querySelectorAll(".iconbtn-1");
const items = document.querySelectorAll(".items-1");

// signIn button
const signInBtn = document.querySelector(".sign-in-btn");
signInBtn.addEventListener("click", () => {
  window.location.href = "./login.html";
});

var count = 0;
menu.addEventListener("click", function () {
  if (count == 0) {
    guestBox.style.display = "none";


    main.style.width = "95%";
    side.style.width = "5%";
    main.style.marginLeft = "6%";
    cardContainer.style.gridTemplateColumns =
      "repeat(auto-fit,minmax(110px, 299px))";
    cardContainer.style.gridGap = "3.5rem";
    iconinfo.forEach(function (icon) {
      icon.classList.add("hidden");
    });
    items.forEach(function (icon) {
      icon.classList.add("items-2");
    });
    iconbtn.forEach(function (icon) {
      icon.classList.add("iconbtn-2");
    });
    items.forEach(function (icon) {
      icon.classList.remove("items-1");
    });
    iconbtn.forEach(function (icon) {
      icon.classList.remove("iconbtn-1");
    });

    count++;
  } else {
    // guestBox.style.display = "block";


    main.style.width = "83%";
    side.style.width = "15%";
    main.style.marginLeft = "18%";
    cardContainer.style.gridTemplateColumns =
      "repeat(auto-fit,minmax(110px, 272px))";
    cardContainer.style.gridGap = "2rem";
    // iconinfo.classList.remove('hidden');
    iconinfo.forEach(function (icon) {
      icon.classList.remove("hidden");
    });
    items.forEach(function (icon) {
      icon.classList.remove("items-2");
    });
    iconbtn.forEach(function (icon) {
      icon.classList.remove("iconbtn-2");
    });
    items.forEach(function (icon) {
      icon.classList.add("items-1");
    });
    iconbtn.forEach(function (icon) {
      icon.classList.add("iconbtn-1");
    });
    count = 0;
  }
});

//******************************************************* */

// json file data
const hotelData = [
  {
    hotelId: 1,
    hotelName: "ITC Chola",
    hotelAddress: "Chennai",
    hotelPrice: 10000,
    imageLink: "https://example.com/itc_chola_image.jpg",
    rating: 4.5,
    flag: 0
  },
  {
    hotelId: 2,
    hotelName: "Taj Mahal Palace",
    hotelAddress: "Mumbai",
    hotelPrice: 15000,
    imageLink: "https://example.com/taj_mahal_palace_image.jpg",
    rating: 4.8,
    flag: 0
  },
  {
    hotelId: 3,
    hotelName: "The Leela Palace",
    hotelAddress: "Delhi",
    hotelPrice: 12000,
    imageLink: "https://example.com/leela_palace_image.jpg",
    rating: 4.6,
    flag: 0
  },
  // Add ratings for other hotels as well
  {
    hotelId: 4,
    hotelName: "JW Marriott",
    hotelAddress: "Bangalore",
    hotelPrice: 11000,
    imageLink: "https://example.com/jw_marriott_image.jpg",
    rating: 4.7,
    flag: 0
  },
  {
    hotelId: 5,
    hotelName: "Oberoi Grand",
    hotelAddress: "Kolkata",
    hotelPrice: 9000,
    imageLink: "https://example.com/oberoi_grand_image.jpg",
    rating: 4.3,
    flag: 0
  },
  {
    hotelId: 6,
    hotelName: "Ritz-Carlton",
    hotelAddress: "Goa",
    hotelPrice: 18000,
    imageLink: "https://example.com/ritz_carlton_image.jpg",
    rating: 4.9,
    flag: 0
  },
  {
    hotelId: 7,
    hotelName: "Hyatt Regency",
    hotelAddress: "Pune",
    hotelPrice: 9500,
    imageLink: "https://example.com/hyatt_regency_image.jpg",
    rating: 4.4,
    flag: 0
  },
  {
    hotelId: 8,
    hotelName: "Sheraton Grand",
    hotelAddress: "Hyderabad",
    hotelPrice: 10500,
    imageLink: "https://example.com/sheraton_grand_image.jpg",
    rating: 4.5,
    flag: 0
  },
  {
    hotelId: 9,
    hotelName: "Four Seasons",
    hotelAddress: "Mumbai",
    hotelPrice: 16000,
    imageLink: "https://example.com/four_seasons_image.jpg",
    rating: 4.7,
    flag: 0
  },
  {
    hotelId: 10,
    hotelName: "Radisson Blu",
    hotelAddress: "Jaipur",
    hotelPrice: 8500,
    imageLink: "https://example.com/radisson_blu_image.jpg",
    rating: 4.2,
    flag: 0
  },
  {
    hotelId: 11,
    hotelName: "Marriott Marquis",
    hotelAddress: "Ahmedabad",
    hotelPrice: 10000,
    imageLink: "https://example.com/marriott_marquis_image.jpg",
    rating: 4.4,
    flag: 0
  },
  {
    hotelId: 12,
    hotelName: "Hilton Garden Inn",
    hotelAddress: "Chandigarh",
    hotelPrice: 9500,
    imageLink: "https://example.com/hilton_garden_inn_image.jpg",
    rating: 4.3,
    flag: 0
  },
];

// creating card
const createCard = () => {
  const card = document.createElement("div");

  card.innerHTML = `<div class="card">
                      <div class="card-img-scroll">
                          <img class="card-img" src="./images/HA2.jpg" alt="" />
                          <img class="card-img" src="./images/HA1.webp" alt="" />
                          <img class="card-img" src="./images/HA3.jpg" alt="" />
                          <img class="card-img" src="./images/HA4.jpg" alt="" />
                      </div>

                      <button class="card-img-scroll-right">></button>
                      <button class="card-img-scroll-left"><</button>

                    
                      <button class="card-heart">
                      <i class="ri-heart-fill"></i>
                      </button>

                    <div class="card-name">
                      <h4>ITC Grand Chola</h4>

                      <div class="card-rating">
                        <i class="ri-star-line"></i>
                        <p>4.9</p>
                      </div>
                    </div>

                    <p>Chennai</p>
                    <p><span>₹ 10,000</span> per night</p>

                    <span class="card-comment">fabulous</span>
                    </div>`;

  cardContainer.appendChild(card);
};

for (let i = 0; i < 12; i++) {
  createCard();
}

//***************************************************** */

// slider ******************************************

const sliders = document.querySelectorAll('.card-img-scroll');

sliders.forEach((slider, index) => {
const slides = slider.querySelectorAll('.card-img');

let curslide = 0;
const maxslide = 4;

const btnRight = document.querySelectorAll(".card-img-scroll-right");
 const btnLeft = document.querySelectorAll(".card-img-scroll-left");

const goToSlide = function(slide){
  slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i-slide) }%)`));
}

goToSlide(0);

const nextslide = function(){
  if(curslide === maxslide - 1){
    curslide = 0;
  } else{
    curslide++;
  }
  goToSlide(curslide);
}


const prevslide = function(){
  if(curslide === 0){
    curslide = maxslide-1;
  } else{
    curslide--;
  }
  goToSlide(curslide);
}

btnRight[index].addEventListener('click', nextslide);
btnLeft[index].addEventListener('click', prevslide);

});

// 

const bookmarked=[];

const updateCardsWithData = () => {
  const cards = document.querySelectorAll(".card");
  const cardComment = document.querySelectorAll(".card-comment");

  cards.forEach((item, index) => {
    const Address = item.querySelectorAll("p");
    item.querySelector("h4").innerText = hotelData[index].hotelName;
    item.querySelector("p").innerText = hotelData[index].rating;
    Address[1].innerText = hotelData[index].hotelAddress;
    item.querySelector("span").innerText = "₹ " + hotelData[index].hotelPrice;

    if (item.querySelector("p").innerText < 4.7) {
      cardComment[index].style.display = "none";
    }

  //  Bookmark js

    const cardHeart = document.querySelectorAll(".card-heart");
    cardHeart[index].addEventListener("click", () => {
    
const foundElement = hotelData.find(element => element.hotelId === index+1);
if (foundElement !== undefined && foundElement.flag === 0) {
  bookmarked.push(foundElement);
    console.log(bookmarked);
    foundElement.flag = 1;
    cardHeart[index].querySelector('i').style.color = "black";
} else {
   if(foundElement.flag === 1){
    foundElement.flag =0;
    const indexToRemove = bookmarked.findIndex(element => element.hotelId === foundElement.hotelId);
    if (indexToRemove !== -1) {
        bookmarked.splice(indexToRemove, 1);
      console.log(bookmarked);
      cardHeart[index].querySelector('i').style.color = "rgba(0, 0, 0, 0.3)";
      
      
    }
  }
}

    });
  });
};

updateCardsWithData();


const modal = document.querySelector('.modal');
const bookmark = document.querySelector('.bookmark');
const close = document.querySelector('.close-modal')

bookmark.addEventListener('click', function(){
  
  modal.classList.toggle('hidden');
  close.classList.toggle('hidden');
  
  modal.innerHTML = '';

  // Iterate over bookmarked array and create HTML elements
  bookmarked.forEach(item => {
    const bookmarkedItem = document.createElement('div');
    bookmarkedItem.classList.add('bookmarked-item');
    bookmarkedItem.innerHTML = `
    
      <p>${item.hotelName}</p>
      <p><i class="ri-map-pin-fill"></i> ${item.hotelAddress}</p>
      <p>₹ ${item.hotelPrice}</p>
      <p>&#11088;${item.rating}</p>
      
      <!-- Add more details as needed -->
    `;
    modal.appendChild(bookmarkedItem);
  });

})

const closemodal = function(){
  close.classList.add('hidden');
  modal.classList.add('hidden');
}

close.addEventListener('click', closemodal);
main.addEventListener('click', closemodal);



//************************************************* */
// Drop down for guest in search bar

const guestBox = document.querySelector(".guest-box");
const addGuestBtn = document.querySelectorAll(".addGuest");
const subGuestBtn = document.querySelectorAll(".subGuest");
const noOfGuests = document.querySelectorAll(".noOfGuest");
const Who = document.querySelector(".Who");
const crossCutGuestBox = document.querySelector(".crossCut-guest-box");

addGuestBtn.forEach((button, index) => {
  button.addEventListener("click", () => {
    noOfGuests[index].innerHTML++;
  });
});

subGuestBtn.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (noOfGuests[index].innerHTML > 0) {
      noOfGuests[index].innerHTML--;
    }
  });
});

let flag = 0;
guestBox.style.display = "none";

Who.addEventListener("click", () => {
  if (flag === 0) {
    guestBox.style.display = "block";
    flag = 1;
  } else if (flag === 1) {
    guestBox.style.display = "none";
    flag = 0;
  }
});

crossCutGuestBox.addEventListener('click',()=>{
  guestBox.style.display = "none";
})


