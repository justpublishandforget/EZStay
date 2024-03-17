'use strict'

const bookings = [
    {
        firstName: 'Harsh',
        lastName: 'Patil',
        gender: 'Male',
        email: 'harsh.patil@example.com',
        arrivalDate: '2024-03-10',
        departureDate: '2024-03-15',
        roomType: 'Single',
        status: 'Booked',
        paymentMode: 'UPI'
    },
    {
        firstName: 'Vedant',
        lastName: 'Nikam',
        gender: 'Male',
        email: 'vedant.nikam@example.com',
        arrivalDate: '2024-03-11',
        departureDate: '2024-03-13',
        roomType: 'Double',
        status: 'Canceled',
        paymentMode: 'Credit'
    },
    {
        firstName: 'Satish',
        lastName: 'Pandhare',
        gender: 'Male',
        email: 'satish.pandhare@example.com',
        arrivalDate: '2024-03-12',
        departureDate: '2024-03-14',
        roomType: 'Single',
        status: 'Pending',
        paymentMode: 'NA'
    },
    {
        firstName: 'Vedant',
        lastName: 'Radke',
        gender: 'Male',
        email: 'vedant.radke@example.com',
        arrivalDate: '2024-03-13',
        departureDate: '2024-03-16',
        roomType: 'Single',
        status: 'Booked',
        paymentMode: 'Credit'
    },
    {
        firstName: 'Ateeb',
        lastName: 'Arman',
        gender: 'Male',
        email: 'ateeb.arman@example.com',
        arrivalDate: '2024-03-14',
        departureDate: '2024-03-17',
        roomType: 'Double',
        status: 'Booked',
        paymentMode: 'Debit'
    },
    {
        firstName: 'Priya',
        lastName: 'Sharma',
        gender: 'Female',
        email: 'priya.sharma@example.com',
        arrivalDate: '2024-03-13',
        departureDate: '2024-03-16',
        roomType: 'Single',
        status: 'Booked',
        paymentMode: 'Credit'
    },
    {
        firstName: 'Vikram',
        lastName: 'Rathore',
        gender: 'Male',
        email: 'vikram.rathore@example.com',
        arrivalDate: '2024-03-15',
        departureDate: '2024-03-18',
        roomType: 'Single',
        status: 'Booked',
        paymentMode: 'UPI'
    },
    {
        firstName: 'Aditya',
        lastName: 'Singh',
        gender: 'Male',
        email: 'aditya.singh@example.com',
        arrivalDate: '2024-03-16',
        departureDate: '2024-03-19',
        roomType: 'Single',
        status: 'Pending',
        paymentMode: 'NA'
    },
    {
        firstName: 'Aarohi',
        lastName: 'Sharma',
        gender: 'Female',
        email: 'aarohi.sharma@example.com',
        arrivalDate: '2024-03-17',
        departureDate: '2024-03-20',
        roomType: 'Double',
        status: 'Booked',
        paymentMode: 'Debit'
    },
    {
        firstName: 'Shiva',
        lastName: 'Kumar',
        gender: 'Male',
        email: 'shiva.kumar@example.com',
        arrivalDate: '2024-03-18',
        departureDate: '2024-03-21',
        roomType: 'Single',
        status: 'Booked',
        paymentMode: 'Cash'
    },
    {
        firstName: 'Bunny',
        lastName: 'Verma',
        gender: 'Male',
        email: 'bunny.verma@example.com',
        arrivalDate: '2024-03-19',
        departureDate: '2024-03-22',
        roomType: 'Single',
        status: 'Canceled',
        paymentMode: 'UPI'
    },
    {
        firstName: 'Jethalal',
        lastName: 'Gada',
        gender: 'Male',
        email: 'jethalal.gada@example.com',
        arrivalDate: '2024-03-20',
        departureDate: '2024-03-23',
        roomType: 'Single',
        status: 'Pending',
        paymentMode: 'Credit'
    },
    {
        firstName: 'Anjali',
        lastName: 'Sharma',
        gender: 'Female',
        email: 'anjali.sharma@example.com',
        arrivalDate: '2024-03-21',
        departureDate: '2024-03-24',
        roomType: 'Double',
        status: 'Booked',
        paymentMode: 'Credit'
    },
    {
        firstName: 'Sita',
        lastName: 'Sharma',
        gender: 'Female',
        email: 'sita.sharma@example.com',
        arrivalDate: '2024-03-22',
        departureDate: '2024-03-25',
        roomType: 'Single',
        status: 'Canceled',
        paymentMode: 'Cash'
    },
    {
        firstName: 'Babita',
        lastName: 'Iyer',
        gender: 'Female',
        email: 'babita.iyer@example.com',
        arrivalDate: '2024-03-23',
        departureDate: '2024-03-26',
        roomType: 'Double',
        status: 'Pending',
        paymentMode: 'Credit'
    }
];
const ezstayReviews = [
    {
      profileImgUrl: "./images/people/girl1.jpg",
      name: "Priya",
      reviewText: "Just booked a hotel through ezstay and already planning my next trip! The website was easy to navigate, and I found the perfect hotel within minutes. Highly recommend!"
    },
    {
      profileImgUrl: "./images/people/boy1.jpeg",
      name: "Rajesh",
      reviewText: "My experience with ezstay was fantastic. From the wide selection of hotels to the seamless booking process, everything exceeded my expectations. Can't wait to use it again!"
    },
    {
      profileImgUrl: "./images/people/girl2.jpeg",
      name: "Neha",
      reviewText: "For the convenience and value, ezstay is unbeatable. I found a great hotel at an affordable price, and the entire booking process was hassle-free. Will definitely be using it for my future trips!"
    },
    {
      profileImgUrl: "./images/people/boy2.jpeg",
      name: "Ankit",
      reviewText: "Just used ezstay to book a hotel for my trip, and I'm impressed! The platform provided detailed information about each hotel, making it easy to choose the perfect one. Highly recommend!"
    },
    {
      profileImgUrl: "./images/people/girl3.jpeg",
      name: "Ayesha",
      reviewText: "Whether it's for business or leisure, ezstay is my go-to for booking hotels. The website is user-friendly, and I always find great deals on accommodations. Highly recommend for all travelers!"
    },
    {
      profileImgUrl: "./images/people/boy3.jpeg",
      name: "Sameer",
      reviewText: "Just discovered ezstay, and it's a game-changer! Booking hotels has never been this convenient. With its easy-to-use interface and wide range of options, I'll definitely be using it for all my future trips."
    },
    {
      profileImgUrl: "./images/people/girl4.jpeg",
      name: "Kavya",
      reviewText: "Recently booked a hotel through ezstay, and it exceeded my expectations. The platform made it easy to compare prices and amenities, ensuring I got the best deal. Highly recommend!"
    },
    {
      profileImgUrl: "./images/people/boy4.jpeg",
      name: "Ravi",
      reviewText: "Kudos to ezstay for making hotel booking a breeze! The website is intuitive, and the customer service is top-notch. Will definitely be recommending it to friends and family!"
    },
    {
      profileImgUrl: "./images/people/girl5.jpeg",
      name: "Preeti",
      reviewText: "Impressed by the seamless experience with ezstay. Booking hotels has never been this convenient. With its user-friendly interface and great deals, it's become my preferred platform for all my travels."
    },
    {
      profileImgUrl: "./images/people/boy5.jpeg",
      name: "Vivek",
      reviewText: "As a frequent traveler, I rely on ezstay for all my hotel bookings. The platform offers a wide selection of hotels at competitive prices, and the booking process is quick and easy. Highly recommend!"
    },
    {
      profileImgUrl: "./images/people/girl6.jpeg",
      name: "Sneha",
      reviewText: "Just had a stress-free experience booking a hotel through ezstay. The platform is user-friendly, and I found a great hotel at a great price. Will definitely be using it for my future trips!"
    },
    {
      profileImgUrl: "./images/people/boy6.jpeg",
      name: "Aman",
      reviewText: "Recently used ezstay to book a romantic getaway, and it was perfect! The platform helped me find the ideal hotel with all the amenities we needed for a memorable stay. Highly recommend for couples!"
    },
    {
      profileImgUrl: "./images/people/girl7.jpeg",
      name: "Shraddha",
      reviewText: "ezstay made booking a hotel for my trip effortless. With its intuitive interface and extensive hotel options, I was able to find the perfect accommodation within minutes. Highly recommend for all travelers!"
    },
  ];
  
  const registeredHotels = [
    {
        hotelName: 'Grand Plaza',
        location: 'Mumbai',
        totalRooms: 100,
        availableRooms: 80,
        rating: 4.5,
        amenities: ['Free Wi-Fi', 'Swimming Pool', 'Gym', 'Restaurant'],
        contact: {
            email: 'info@grandplaza.com',
            phone: '+91-XXXXXXXXXX',
            address: '123, ABC Road, Mumbai'
        }
    },
    {
        hotelName: 'Sunrise View',
        location: 'Goa',
        totalRooms: 50,
        availableRooms: 30,
        rating: 4.0,
        amenities: ['Free Wi-Fi', 'Beach Access', 'Spa', 'Bar'],
        contact: {
            email: 'reservations@sunriseview.com',
            phone: '+91-XXXXXXXXXX',
            address: '456, XYZ Street, Goa'
        }
    },
    {
        hotelName: 'Mountain Retreat',
        location: 'Himachal Pradesh',
        totalRooms: 80,
        availableRooms: 60,
        rating: 4.2,
        amenities: ['Free Wi-Fi', 'Mountain View Rooms', 'Restaurant', 'Hiking Trails'],
        contact: {
            email: 'info@mountainretreat.com',
            phone: '+91-XXXXXXXXXX',
            address: '789, PQR Avenue, Himachal Pradesh'
        }
    },
    {
        hotelName: 'Ocean Breeze',
        location: 'Kerala',
        totalRooms: 120,
        availableRooms: 90,
        rating: 4.3,
        amenities: ['Free Wi-Fi', 'Sea View Rooms', 'Spa', 'Restaurant'],
        contact: {
            email: 'reservations@oceanbreeze.com',
            phone: '+91-XXXXXXXXXX',
            address: '321, Beach Road, Kerala'
        }
    },
    {
        hotelName: 'City Lights Inn',
        location: 'Delhi',
        totalRooms: 150,
        availableRooms: 100,
        rating: 4.1,
        amenities: ['Free Wi-Fi', 'City View Rooms', 'Restaurant', 'Fitness Center'],
        contact: {
            email: 'info@citylightsinn.com',
            phone: '+91-XXXXXXXXXX',
            address: '567, Downtown Avenue, Delhi'
        }
    },
    {
        hotelName: 'Royal Palace',
        location: 'Rajasthan',
        totalRooms: 200,
        availableRooms: 150,
        rating: 4.6,
        amenities: ['Free Wi-Fi', 'Luxury Suites', 'Swimming Pool', 'Restaurant'],
        contact: {
            email: 'reservations@royalpalace.com',
            phone: '+91-XXXXXXXXXX',
            address: '101, Royal Road, Rajasthan'
        }
    },
    {
        hotelName: 'Green Valley Resort',
        location: 'Uttarakhand',
        totalRooms: 80,
        availableRooms: 60,
        rating: 4.4,
        amenities: ['Free Wi-Fi', 'Mountain View Cottages', 'Restaurant', 'Hiking Trails'],
        contact: {
            email: 'info@greenvalleyresort.com',
            phone: '+91-XXXXXXXXXX',
            address: '789, Valley Road, Uttarakhand'
        }
    },
    {
        hotelName: 'Beach Paradise',
        location: 'Goa',
        totalRooms: 100,
        availableRooms: 70,
        rating: 4.2,
        amenities: ['Free Wi-Fi', 'Beachfront Rooms', 'Swimming Pool', 'Restaurant'],
        contact: {
            email: 'info@beachparadise.com',
            phone: '+91-XXXXXXXXXX',
            address: '555, Beach Boulevard, Goa'
        }
    },
    {
        hotelName: 'Snowy Peaks Lodge',
        location: 'Himachal Pradesh',
        totalRooms: 60,
        availableRooms: 40,
        rating: 4.0,
        amenities: ['Free Wi-Fi', 'Mountain View Rooms', 'Restaurant', 'Skiing'],
        contact: {
            email: 'reservations@snowypeaks.com',
            phone: '+91-XXXXXXXXXX',
            address: '987, Snow Road, Himachal Pradesh'
        }
    },
    {
        hotelName: 'Taj View Hotel',
        location: 'Agra',
        totalRooms: 120,
        availableRooms: 80,
        rating: 4.7,
        amenities: ['Free Wi-Fi', 'View of Taj Mahal', 'Restaurant', 'Spa'],
        contact: {
            email: 'info@tajviewhotel.com',
            phone: '+91-XXXXXXXXXX',
            address: '789, Taj Road, Agra'
        }
    },
    // Chennai hotels
    {
        hotelName: 'Chennai Comforts',
        location: 'Chennai',
        totalRooms: 80,
        availableRooms: 60,
        rating: 4.3,
        amenities: ['Free Wi-Fi', 'City View Rooms', 'Restaurant', 'Fitness Center'],
        contact: {
            email: 'reservations@chennaicomforts.com',
            phone: '+91-XXXXXXXXXX',
            address: '456, Chennai Central Street, Chennai'
        }
    },
    {
        hotelName: 'Marina Bay Hotel',
        location: 'Chennai',
        totalRooms: 120,
        availableRooms: 90,
        rating: 4.2,
        amenities: ['Free Wi-Fi', 'Sea View Rooms', 'Spa', 'Restaurant'],
        contact: {
            email: 'reservations@marinabayhotel.com',
            phone: '+91-XXXXXXXXXX',
            address: '789, Marina Beach Road, Chennai'
        }
    },
    {
        hotelName: 'Cityscape Inn',
        location: 'Chennai',
        totalRooms: 150,
        availableRooms: 100,
        rating: 4.1,
        amenities: ['Free Wi-Fi', 'City View Rooms', 'Restaurant', 'Fitness Center'],
        contact: {
            email: 'info@cityscapeinn.com',
            phone: '+91-XXXXXXXXXX',
            address: '101, Downtown Avenue, Chennai'
        }
    },
    {
        hotelName: 'Royal Residency',
        location: 'Chennai',
        totalRooms: 200,
        availableRooms: 150,
        rating: 4.6,
        amenities: ['Free Wi-Fi', 'Luxury Suites', 'Swimming Pool', 'Restaurant'],
        contact: {
            email: 'reservations@royalresidency.com',
            phone: '+91-XXXXXXXXXX',
            address: '101, Royal Road, Chennai'
        }
    },
    
];


//main sidebar
const sidebarButtons = document.querySelectorAll('.menu li'); // sidebar items
const sections = document.querySelectorAll('section'); // different sections mentioned in sidebar

function hideAllSections() {
    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.add('hidden');
        sidebarButtons[i].classList.remove('active');
    }
}

for (let i = 0; i < sidebarButtons.length; i++) {
    sidebarButtons[i].addEventListener('click', function () {
        hideAllSections();
        sections[i].classList.remove('hidden');
        sidebarButtons[i].classList.add('active');
    });
}

// Main Dashboard 
registeredHotels.forEach(hotel => { // render bookings in dashboard
    const hotelEl = document.createElement('div');
    hotelEl.classList.add('booking');
    const hotelContent = ` 
      <p>${hotel.hotelName}</p>
      <p>${hotel.location}</p>
      <p class="ratings">${hotel.rating}</p>
    `;
    hotelEl.innerHTML = hotelContent;
    document.querySelector('.bookings-list').appendChild(hotelEl);
});

const hotelTable = document.querySelector('#hotels tbody'); // Booking section

registeredHotels.forEach(hotel => { // render hotels in hotel section
    const hotelRow = document.createElement('tr');
    const RowContent = ` 
      <td>${hotel.hotelName}</td>
      <td>${hotel.location}</td>
      <td>${hotel.totalRooms}</td>
      <td>${hotel.availableRooms}</td>
      <td>${hotel.rating}</td>
      <td>${hotel.contact.email}</td>
      <td>${hotel.contact.phone}</td>
      <td>${hotel.contact.address}</td>
    `;
    hotelRow.innerHTML = RowContent;
    hotelTable.appendChild(hotelRow);
});

// Bookings Section
const bookingTable = document.querySelector('#all-bookings-list tbody'); // Booking section

bookings.forEach(booking => { // render bookings in booking section
    const bookingRow = document.createElement('tr');
    const RowContent = ` 
      <td>${booking.firstName} ${booking.lastName}</td>
      <td>${booking.gender}</td>
      <td>${booking.email}</td>
      <td>${booking.arrivalDate}</td>
      <td>${booking.departureDate}</td>
      <td>${booking.roomType}</td>
      <td><div class="status ${booking.status === 'Booked' ? 'booked' : booking.status === 'Pending' ? 'pending' : 'canceled'}">${booking.status}</div></td>
      <td>${booking.paymentMode}</td>
    `;
    bookingRow.innerHTML = RowContent;
    bookingTable.appendChild(bookingRow);
});

// Review Section

const reviewsGrid = document.querySelector('.grid-reviews'); // review grid

ezstayReviews.forEach(review => {
    const reviewEl = document.createElement('div');
    reviewEl.classList.add('review','hover-effect');
    const reviewContent = `
    <div class="profile-header">
    <img src="${review.profileImgUrl}" alt="profile photo" class="profile-image">
    <h3>${review.name}</h3>
    </div>
    <p>${review.reviewText}</p>
    `;
    reviewEl.innerHTML = reviewContent;
    reviewsGrid.appendChild(reviewEl);
});
