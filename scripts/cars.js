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

carList.push(new CarObject(
  'DINKA JESTER RR WIDEBODY',
  'PART OF AGENTS OF SABOTAGE',
  2,
  'jester',
  2290000,
  ['FEATURED',
    'DOOR2',
  ]
),
new CarObject(
  'BRAVADO BANSHEE GTS',
  'PART OF AGENTS OF SABOTAGE',
  2,
  'bansheegts',
  1989500,
  [ 'DOOR2',
    'FEATURED'
  ]
),
new CarObject(
  'OVERFLOD PIPISTRELLO',
  'PART OF BOTTOM DOLLAR BOUNTIES',
  2,
  'pipistrello',
  2950000,
  [ 'DOOR2',
    'FEATURED'
  ]
),
new CarObject(
  'INVETERO CONQUETTE D1',
  'PART OF BOTTOM DOLLAR BOUNTIES',
  2,
  'coquette',
  1500000,
  [ 'DOOR2',
    'FEATURED'
  ]
),
new CarObject(
  'ANNIS EUROS X32',
  'PART OF BOTTOM DOLLAR BOUNTIES',
  2,
  'euros',
  1499000,
  [ 'DOOR2',
    'FEATURED'
  ]
),
new CarObject(
  'UBERMACT NIOBE',
  'PART OF BOTTOM DOLLAR BOUNTIES',
  2,
  'niobe',
  1880000,
  [ 'DOOR2',
    'FEATURED'
  ]
),
new CarObject(
  'GALLIVANTER BALLER ST-D',
  'PART OF THE CHOP SHOP',
  4,
  'baller',
  1715000,
  [ 'DOOR4'
  ]
),
new CarObject(
  'VAPID ALEUTIAN',
  'PART OF THE CHOP SHOP',
  4,
  'aleutian',
  1835000,
  [ 'DOOR4'
  ]
),
new CarObject(
  'OBEY OMNIS E-GT',
  'PART OF THE CRIMINAL ENTERPRISES',
  4,
  'omnis',
  1795000,
  [ 'DOOR4'
  ]
),
new CarObject(
  'PFISTER ASTRON',
  'PART OF THE CONTRACT',
  4,
  'astron',
  1580000,
  [ 'DOOR4'
  ]
),
new CarObject(
  'LAMPADATI CINQUEMILA',
  'PART OF THE CONTRACT',
  4,
  'cinquemila',
  1740000,
  [ 'DOOR4'
  ]
),
new CarObject(
  'WESTERN POWERSURGE',
  'PART OF LOS SANTOS DURG WARS',
  1,
  'powersurge',
  1605000,
  [ 'MOTORCYCLES'
  ]
),
new CarObject(
  'WESTERN REEVER',
  'PART OF THE CONTRACT',
  1,
  'reever',
  1900000,
  [ 'MOTORCYCLES'
  ]
),
new CarObject(
  'NAGASAKI SHINOBI',
  'PART OF THE CONTRACT',
  1,
  'shinobi',
  2480500,
  [ 'MOTORCYCLES'
  ]
),
new CarObject(
  'NAGASAKI STRYDER',
  'PART OF THE DIAMOND CASINO HEIST',
  2,
  'stryd',
  670000,
  [ 'MOTORCYCLES'
  ]
),
new CarObject(
  'WESTERN RAMPANT ROCKET',
  'PART OF THE DIAMOND CASINO & RESORT',
  1,
  'rampant',
  925000,
  [ 'MOTORCYCLES'
  ]
),
new CarObject(
  'NAGASAKI SHOTARO',
  'PART OF BIKERS',
  1,
  'shotaro',
  2225000,
  [ 'MOTORCYCLES'
  ]
),
new CarObject(
  'BENEFACTOR BR8',
  'PART OF LOS SANTOS SUMMER SPECIAL',
  1,
  'br8',
  3400000,
  [ 'SPECIAL'
  ]
),
new CarObject(
  'DECLASSE DR1',
  'PART OF LOS SANTOS SUMMER SPECIAL',
  1,
  'dr1',
  2997000,
  [ 'SPECIAL'
  ]
),
new CarObject(
  'BENEFACTOR BR8',
  'PART OF THE DIAMOND CASINO HEIST',
  1,
  'pr4',
  3515000,
  [ 'SPECIAL'
  ]
),
new CarObject(
  'OCELOT R88',
  'PART OF THE DIAMOND CASINO HEIST',
  1,
  'r88',
  3115000,
  [ 'SPECIAL'
  ]
),
)
 