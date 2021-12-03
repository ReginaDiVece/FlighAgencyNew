import borabora from '../assets/images/flight1.jpeg';
import cancun from '../assets/images/flight2.jpeg';
import zelanda from '../assets/images/flight3.jpeg';
import roma from '../assets/images/flight4.jpeg';
import orlando from '../assets/images/flight5.jpeg';
const flights = [
  {
    id: '01',
    name: 'Mexico City-Bora Bora',
    company: 'American Airlines',
    schedule: '14:30',
    date: 'January 24, 2022',
    price: '$500 dls',
    img: borabora,
  },
  {
    id: '02',
    name: 'Mexico City- Cancun',
    company: 'Aeromexico',
    schedule: '15:00',
    date: 'February 18, 2022',
    price: '$650 dls',
    img: cancun,
  },
  {
    id: '03',
    name: 'Mexico City- Queenstown',
    company: 'New Zeland Flight',
    schedule: '20:00',
    date: 'May 22, 2022',
    price: '$600 dls',
    img: zelanda,
  },
  {
    id: '04',
    name: 'Mexico City- Roma',
    company: 'Alitalia',
    schedule: '09:00',
    date: 'December 10. 2022',
    price: '$700 dls',
    img: roma,
  },
  {
    id: '05',
    name: 'Mexico City- Orlando',
    company: 'Disney Airlines',
    schedule: '13:45',
    date: 'February 8, 2022',
    price: '$600 dls',
    img: orlando,
  },
];

export default flights;
