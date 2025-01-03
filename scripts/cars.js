export const carList = [];

class CarObject {
  constructor(name, dlc, seats, image, price, categories, id, logo, stats) {
    this.name = name;
    this.dlc = dlc;
    this.seats = seats;
    this.image = `images/cars/${image}.png`;
    this.price = price;
    this.categories = categories;
    this.id = id;
    this.logo = `images/logos/${logo}.png`;
    this.image1 = `images/cars/desc/${image}1.png`;
    this.image2 = `images/cars/desc/${image}2.png`;
    this.stats = stats;
  }
}

carList.push(new CarObject(
  'DINKA JESTER RR WIDEBODY',
  'PART OF AGENTS OF SABOTAGE',
  2,
  'jester',
  2290000,
  ['FEATURED',
    'DOOR2',
  ],
  1,
  'dinka',
  {
    speed: 4.1,
    acceleration: 4.1,
    braking: 1.5,
    traction: 5
  }
),
new CarObject(
  'BRAVADO BANSHEE GTS',
  'PART OF AGENTS OF SABOTAGE',
  2,
  'banshee',
  1989500,
  [ 'DOOR2',
    'FEATURED'
  ],
  2,
  'bravado',
  {
    speed: 4.1,
    acceleration: 4.1,
    braking: 1.5,
    traction: 5
  }
),
new CarObject(
  'OVERFLOD PIPISTRELLO',
  'PART OF BOTTOM DOLLAR BOUNTIES',
  2,
  'pipistrello',
  2950000,
  [ 'DOOR2',
    'FEATURED'
  ],
  3,
  'overflod'
),
new CarObject(
  'INVETERO CONQUETTE D1',
  'PART OF BOTTOM DOLLAR BOUNTIES',
  2,
  'coquette',
  1500000,
  [ 'DOOR2',
    'FEATURED'
  ],
  4,
  'invetero'
),
new CarObject(
  'ANNIS EUROS X32',
  'PART OF BOTTOM DOLLAR BOUNTIES',
  2,
  'euros',
  1499000,
  [ 'DOOR2',
    'FEATURED'
  ],
  5,
  'annis'
),
new CarObject(
  'UBERMACT NIOBE',
  'PART OF BOTTOM DOLLAR BOUNTIES',
  2,
  'niobe',
  1880000,
  [ 'DOOR2',
    'FEATURED'
  ],
  6,
  'ubermacht'
),
new CarObject(
  'GALLIVANTER BALLER ST-D',
  'PART OF THE CHOP SHOP',
  4,
  'baller',
  1715000,
  [ 'DOOR4'
  ],
  7,
  'gallivanter'
),
new CarObject(
  'VAPID ALEUTIAN',
  'PART OF THE CHOP SHOP',
  4,
  'aleutian',
  1835000,
  [ 'DOOR4'
  ],
  8,
  'vapid'
),
new CarObject(
  'OBEY OMNIS E-GT',
  'PART OF THE CRIMINAL ENTERPRISES',
  4,
  'omnis',
  1795000,
  [ 'DOOR4'
  ],
  9,
  'obey'
),
new CarObject(
  'PFISTER ASTRON',
  'PART OF THE CONTRACT',
  4,
  'astron',
  1580000,
  [ 'DOOR4'
  ],
  10,
  'pfister'
),
new CarObject(
  'LAMPADATI CINQUEMILA',
  'PART OF THE CONTRACT',
  4,
  'cinquemila',
  1740000,
  [ 'DOOR4'
  ],
  11,
  'lampadati'
),
new CarObject(
  'WESTERN POWERSURGE',
  'PART OF LOS SANTOS DURG WARS',
  1,
  'powersurge',
  1605000,
  [ 'MOTORCYCLES'
  ],
  12,
  'western'
),
new CarObject(
  'WESTERN REEVER',
  'PART OF THE CONTRACT',
  1,
  'reever',
  1900000,
  [ 'MOTORCYCLES'
  ],
  13,
  'western'
),
new CarObject(
  'NAGASAKI SHINOBI',
  'PART OF THE CONTRACT',
  1,
  'shinobi',
  2480500,
  [ 'MOTORCYCLES'
  ],
  14,
  'nagasaki'
),
new CarObject(
  'NAGASAKI STRYDER',
  'PART OF THE DIAMOND CASINO HEIST',
  2,
  'stryder',
  670000,
  [ 'MOTORCYCLES'
  ],
  15,
  'nagasaki'
),
new CarObject(
  'WESTERN RAMPANT ROCKET',
  'PART OF THE DIAMOND CASINO & RESORT',
  1,
  'rampant',
  925000,
  [ 'MOTORCYCLES'
  ],
  16,
  'western'
),
new CarObject(
  'NAGASAKI SHOTARO',
  'PART OF BIKERS',
  1,
  'shotaro',
  2225000,
  [ 'MOTORCYCLES'
  ],
  17,
  'nagasaki'
),
new CarObject(
  'BENEFACTOR BR8',
  'PART OF LOS SANTOS SUMMER SPECIAL',
  1,
  'br8',
  3400000,
  [ 'SPECIAL'
  ],
  18,
  'benefactor'
),
new CarObject(
  'DECLASSE DR1',
  'PART OF LOS SANTOS SUMMER SPECIAL',
  1,
  'dr1',
  2997000,
  [ 'SPECIAL'
  ],
  19,
  'declasse'
),
new CarObject(
  'BENEFACTOR BR8',
  'PART OF THE DIAMOND CASINO HEIST',
  1,
  'pr4',
  3515000,
  [ 'SPECIAL'
  ],
  20,
  'benefactor'
),
new CarObject(
  'OCELOT R88',
  'PART OF THE DIAMOND CASINO HEIST',
  1,
  'r88',
  3115000,
  [ 'SPECIAL'
  ],
  21,
  'ocelot'
),
)
