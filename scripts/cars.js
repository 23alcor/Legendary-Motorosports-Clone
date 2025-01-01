export const carList = [];

class CarObject {
  constructor(name, dlc, seats, image, price, categories) {
    this.name = name;
    this.dlc = dlc;
    this.seats = seats;
    this.image = `../images/cars/${image}.png`;
    this.price = price;
    this.categories = categories;
  }
}

const car1 = new CarObject(
  'PEGASSI TORERO XO',
  'PART OF THE CRIMINAL ENTERPRISES',
  2,
  'car-image1',
  289000,
  ['FEATURED',
    'DOOR2',
    'SPECIAL'
  ]
)
const car2 = new CarObject(
  'SECOND CAR',
  'TEST CAR DLC',
  2,
  'car-image1',
  2333000,
  [ 'DOOR4',
    'SPECIAL'
  ]
)
 

carList.push(car1);
carList.push(car2);
