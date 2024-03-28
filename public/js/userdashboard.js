const bookings = [
    {
        firstName: 'Vedant',
        lastName: 'Nikam',
        HotelName: 'ITC Chola',
        gender: 'Male',
        email: 'vedant.nikam@example.com',
        arrivalDate: '2024-03-10',
        departureDate: '2024-03-15',
        roomType: 'Single',
        status: 'Booked',
        paymentMode: 'UPI'
    },
    {
        firstName: 'Vedant',
        lastName: 'Nikam',
        HotelName: 'Taj Mahal Palace',
        gender: 'Male',
        email: 'vedant.nikam@example.com',
        arrivalDate: '2024-04-11',
        departureDate: '2024-04-13',
        roomType: 'Double',
        status: 'Canceled',
        paymentMode: 'Credit'
    },
    {
        firstName: 'sahil',
        lastName: 'kasare',
        HotelName: ' itc Palace',
        gender: 'Male',
        email: 'vedant.nikam@example.com',
        arrivalDate: '2024-04-11',
        departureDate: '2024-04-13',
        roomType: 'Double',
        status: 'Booked',
        paymentMode: 'UPI'
    }
    
];

const bookingTable = document.querySelector('#all-bookings-list tbody'); // Booking section

bookings.forEach(booking => { // render bookings in booking section
    const bookingRow = document.createElement('tr');
    const RowContent = ` 
      <td>${booking.HotelName}</td>
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