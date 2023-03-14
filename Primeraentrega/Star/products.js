import galaxyS from './images/galaxyS.png';
import galaxyS from './images/iphone12.jpg';
import galaxyS from './images/iphone12pro.jpg';
const products = [
  {
    id: 1,
    name: "iPhone 12 Pro",
    brand: "Apple",
    desc: "6.1-inch display",
    price: 999,
    image:
      <img src={galaxyS}></img>,
  },
  {
    id: 2,
    name: "iPhone 12",
    brand: "Apple",
    desc: "5.4-inch mini display",
    price: 699,
    image:
    <img src={iphone12}></img>,
  },
  {
    id: 3,
    name: "Galaxy S",
    brand: "Samsung",
    desc: "6.5-inch display",
    price: 399,
    image:
    <img src={iphone12pro}></img>,
  },
];

module.exports = products;
