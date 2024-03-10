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


bookings.forEach(booking => {
    const bookingEl = document.createElement('div');
    bookingEl.classList.add('booking');
    const bookingContent = ` 
      <p>${booking.firstName}</p>
      <div class="status ${booking.status === 'Booked' ? 'booked' : booking.status === 'Pending' ? 'pending' : 'canceled'}">${booking.status}</div>
      <p>${booking.paymentMode}</p>
    `;
    bookingEl.innerHTML = bookingContent;
    document.querySelector('.bookings-list').appendChild(bookingEl);
});

const sidebarButtons = document.querySelectorAll('.menu li');
const sections = document.querySelectorAll('section');

function hideAllSections() {
    for(let i = 0;i < sections.length; i++) {
        sections[i].classList.add('hidden');
    }
}

for (let i = 0; i < sidebarButtons.length; i++) {
    sidebarButtons[i].addEventListener('click', function () {
        hideAllSections();
        sections[i].classList.remove('hidden');
    });
}
