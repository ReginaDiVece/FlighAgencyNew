import borabora from '../assets/images/hotel1.jpeg';
import cancun from '../assets/images/hotel2.jpeg';
import zelanda from '../assets/images/hotel3.jpeg';
import roma from '../assets/images/hotel4.jpeg';
import orlando from '../assets/images/hotel5.jpeg';
const hotels = [
  {
    id: '01',
    name: 'Bora Bora Beach',
    allInclusive: true,
    checkIn: 'January 24, 2022',
    checkOut: 'January 30, 2022',
    price: '$200 dls',
    img: borabora,
    flightAvailable: '01',
  },
  {
    id: '02',
    name: 'Mayan Palace',
    allInclusive: true,
    checkIn: 'February 18, 2022',
    checkOut: 'March 2, 2022',
    price: '$150 dls',
    img: cancun,
    flightAvailable: '02',
  },
  {
    id: '03',
    name: 'Queenstown hotel',
    allInclusive: false,
    checkIn: 'May 22, 2022',
    checkOut: 'May 30, 2022',
    price: '$300 dls',
    img: zelanda,
    flightAvailable: '03',
  },
  {
    id: '04',
    name: 'caesar´s Palace',
    allInclusive: false,
    checkIn: 'December 10, 2022',
    checkOut: 'January 24, 2023',
    price: '$200 dls',
    img: roma,
    flightAvailable: '04',
  },
  {
    id: '05',
    name: 'Disney Hotel',
    allInclusive: true,
    checkIn: 'February 8, 2022',
    checkOut: 'February 14, 2022',
    price: '$250 dls',
    img: orlando,
    flightAvailable: '05',
  },
];

export default hotels;
