export const carList = [];

class CarObject {
  constructor(name, dlc, seats, image, price, categories, id, logo, stats, desc) {
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
    this.desc = desc;
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
    speed: 4.9,
    acceleration: 4.8,
    braking: 1.3,
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
  'overflod',
  {
    speed: 4.5,
    acceleration: 3.8,
    braking: 1.5,
    traction: 5
  }
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
  'invetero',
  {
    speed: 4.3,
    acceleration: 3.5,
    braking: 1,
    traction: 3.5
  }
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
  'annis',
  {
    speed: 4.1,
    acceleration: 3.5,
    braking: 2.3,
    traction: 3.4
  }
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
  'ubermacht',
  {
    speed: 4.5,
    acceleration: 4.7,
    braking: 1.2,
    traction: 5
  }
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
  'gallivanter',
  {
    speed: 3.8,
    acceleration: 3.8,
    braking: 1.5,
    traction: 3.5
  }
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
  'vapid',
  {
    speed: 3.2,
    acceleration: 3.5,
    braking: 1.3,
    traction: 3.1
  }
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
  'obey',
  {
    speed: 4.1,
    acceleration: 5,
    braking: 1.7,
    traction: 5
  }
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
  'pfister',
  {
    speed: 4,
    acceleration: 3.1,
    braking: 0.8,
    traction: 3.2
  }
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
  'lampadati',
  {
    speed: 4.1,
    acceleration: 4.4,
    braking: 1.6,
    traction: 4
  }
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
  'western',
  {
    speed: 3.4,
    acceleration: 5,
    braking: 2.2,
    traction: 3.6
  }
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
  'western',
  {
    speed: 4.1,
    acceleration: 5,
    braking: 2.2,
    traction: 3.3
  }
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
  'nagasaki',
  {
    speed: 4.2,
    acceleration: 4.6,
    braking: 2.1,
    traction: 3.5
  }
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
  'nagasaki',
  {
    speed: 3.6,
    acceleration: 4.5,
    braking: 2,
    traction: 3.8
  }
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
  'western',
  {
    speed: 3.8,
    acceleration: 4.8,
    braking: 1.7,
    traction: 3.2
  }
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
  'nagasaki',
  {
    speed: 4.2,
    acceleration: 5,
    braking: 2.3,
    traction: 4.1
  }
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
  'benefactor',
  {
    speed: 4.4,
    acceleration: 5,
    braking: 2.2,
    traction: 5
  }
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
  'declasse',
  {
    speed: 4.2,
    acceleration: 5,
    braking: 2.9,
    traction: 4.8
  }
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
  'benefactor',
  {
    speed: 4.4,
    acceleration: 5,
    braking: 2.1,
    traction: 5
  }
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
  'ocelot',
  {
    speed: 4.4,
    acceleration: 5,
    braking: 2.1,
    traction: 5
  }
),
new CarObject(
  'ENUS PARAGON S',
  'PART OF THE BOTTOM DOLLAR BOUNTIES',
  2,
  'paragon',
  2010000,
  [ 'FEATURED',
    'DOOR2'
  ],
  22,
  'enus',
  {
    speed: 4.2,
    acceleration: 4.1,
    braking: 2.8,
    traction: 5
  }
),
new CarObject(
  'BOLLOKAN ENVISAGE',
  'PART OF THE BOTTOM DOLLAR BOUNTIES',
  2,
  'envisage',
  2472000,
  [ 'FEATURED',
    'DOOR2'
  ],
  23,
  'bollokan',
  {
    speed: 4.2,
    acceleration: 4.1,
    braking: 2.8,
    traction: 5
  }
),
new CarObject(
  'GROTTI TURISMO OMAGGIO',
  'PART OF THE CHOP SHOP',
  2,
  'turismo',
  2845000,
  [
    'DOOR2'
  ],
  25,
  'grotti',
  {
    speed: 4.1,
    acceleration: 4.6,
    braking: 2.9,
    traction: 5
  }
),
new CarObject(
  'PENAUD LA COUREUSE',
  'PART OF SAN ANDREAS MERCENARIES',
  2,
  'penaud_la_coureuse',
  1990000,
  ['DOOR2'],
  26,
  'penaud',
  {
    speed: 4.8,
    acceleration: 4.5,
    braking: 1.2,
    traction: 5
  }
),

new CarObject(
  'BRAVADO BUFFALO EVX',
  'PART OF SAN ANDREAS MERCENARIES',
  2,
  'bravado_buffalo_evx',
  2140000,
  ['DOOR2'],
  27,
  'bravado',
  {
    speed: 4.2,
    acceleration: 4.8,
    braking: 1.8,
    traction: 3.6
  }
),

new CarObject(
  'GROTTI ITALI GTO STINGER TT',
  'PART OF SAN ANDREAS MERCENARIES',
  2,
  'grotti_itali_gto_stinger_tt',
  2380000,
  ['DOOR2'],
  28,
  'grotti',
  {
    speed: 4.2,
    acceleration: 5,
    braking: 1.8,
    traction: 4
  }
),

new CarObject(
  'OCELOT VIRTUE',
  'PART OF LOS SANTOS DRUG WARS',
  2,
  'ocelot_virtue',
  2235000,
  ['DOOR2'],
  29,
  'ocelot',
  {
    speed: 4.3,
    acceleration: 4.3,
    braking: 2.1,
    traction: 5
  }
),

new CarObject(
  'TOUNDRA PANTHERE',
  'PART OF LOS SANTOS DRUG WARS',
  2,
  'toundra_panthere',
  2170000,
  ['DOOR2'],
  30,
  'toundra',
  {
    speed: 4.3,
    acceleration: 4.3,
    braking: 1.4,
    traction: 5
  }
),

new CarObject(
  'CLASSIQUE BROADWAY',
  'PART OF LOS SANTOS DRUG WARS',
  2,
  'classique_broadway',
  925000,
  ['DOOR2'],
  31,
  'classique',
  {
    speed: 3.4,
    acceleration: 2.4,
    braking: 0.5,
    traction: 3.1
  }
),
new CarObject(
  'ANNIS 300R',
  'PART OF LOS SANTOS DRUG WARS',
  2,
  'annis_300r',
  2075000,
  ['DOOR2'],
  32,
  'annis',
  {
    speed: 4.1,
    acceleration: 4.1,
    braking: 1.4,
    traction: 4.8
  }
),

new CarObject(
  'OVERFLOD ENTITY MT',
  'PART OF LOS SANTOS DRUG WARS',
  2,
  'overflod_entity_mt',
  2355000,
  ['DOOR2'],
  33,
  'overflod',
  {
    speed: 4.6,
    acceleration: 4.4,
    braking: 1.8,
    traction: 5
  }
),

new CarObject(
  'OBEY 10F',
  'PART OF THE CRIMINAL ENTERPRISES',
  2,
  'obey_10f',
  1675000,
  ['DOOR2'],
  34,
  'obey',
  {
    speed: 4.3,
    acceleration: 4.4,
    braking: 2.8,
    traction: 5
  }
),

new CarObject(
  'BENEFACTOR SM722',
  'PART OF THE CRIMINAL ENTERPRISES',
  2,
  'benefactor_sm722',
  2115000,
  ['DOOR2'],
  35,
  'benefactor',
  {
    speed: 4.3,
    acceleration: 4.4,
    braking: 1.8,
    traction: 3.8
  }
),

new CarObject(
  'PEGASSI TORERO XO',
  'PART OF THE CRIMINAL ENTERPRISES',
  2,
  'pegassi_torero_xo',
  2890000,
  ['DOOR2'],
  36,
  'pegassi',
  {
    speed: 4.3,
    acceleration: 4.8,
    braking: 1.9,
    traction: 4.3
  }
),

new CarObject(
  'LAMPADATI CORSITA',
  'PART OF THE CRIMINAL ENTERPRISES',
  2,
  'lampadati_corsita',
  1795000,
  ['DOOR2'],
  37,
  'lampadati',
  {
    speed: 4.3,
    acceleration: 5,
    braking: 2.2,
    traction: 5
  }
),
new CarObject(
  'BENEFACTOR LM87',
  'PART OF THE CRIMINAL ENTERPRISES',
  1,
  'benefactor_lm87',
  2915000,
  ['DOOR1'],
  38,
  'benefactor',
  {
    speed: 4.3,
    acceleration: 4.7,
    braking: 2.3,
    traction: 5
  }
),

new CarObject(
  'PFISTER COMET S2 CABRIO',
  'PART OF THE CONTRACT',
  2,
  'pfister_comet_s2_cabrio',
  1797000,
  ['DOOR2'],
  39,
  'pfister',
  {
    speed: 4.2,
    acceleration: 4.3,
    braking: 1.5,
    traction: 5
  }
),

new CarObject(
  'OVERFLOD ZENO',
  'PART OF THE CONTRACT',
  2,
  'overflod_zeno',
  1974000,
  ['DOOR2'],
  40,
  'overflod',
  {
    speed: 4.3,
    acceleration: 4.8,
    braking: 2,
    traction: 4.2
  }
),

new CarObject(
  'PEGASSI IGNUS',
  'PART OF THE CONTRACT',
  2,
  'pegassi_ignus',
  2765000,
  ['DOOR2'],
  41,
  'pegassi',
  {
    speed: 4.2,
    acceleration: 4.8,
    braking: 1.7,
    traction: 4.2
  }
),

new CarObject(
  'DEWBACHEE CHAMPION',
  'PART OF THE CONTRACT',
  2,
  'dewbachee_champion',
  2812500,
  ['DOOR2'],
  42,
  'dewbachee',
  {
    speed: 4.3,
    acceleration: 4.4,
    braking: 1.9,
    traction: 3.9
  }
),

new CarObject(
  'UBERMACHT CYPHER',
  'PART OF LOS SANTOS TUNERS',
  2,
  'ubermacht_cypher',
  1550000,
  ['DOOR2'],
  43,
  'ubermacht',
  {
    speed: 4,
    acceleration: 4.1,
    braking: 1.3,
    traction: 4
  }
),
new CarObject(
  'PFISTER GROWLER',
  'PART OF LOS SANTOS TUNERS',
  2,
  'pfister_growler',
  1627000,
  ['DOOR2'],
  44,
  'pfister',
  {
    speed: 4,
    acceleration: 4.1,
    braking: 1.3,
    traction: 4
  }
),

new CarObject(
  'EMPEROR VECTRE',
  'PART OF LOS SANTOS TUNERS',
  2,
  'emperor_vectre',
  1785000,
  ['DOOR2'],
  45,
  'emperor',
  {
    speed: 4,
    acceleration: 4.1,
    braking: 1,
    traction: 4
  }
),

new CarObject(
  'PFISTER COMET S2',
  'PART OF LOS SANTOS TUNERS',
  2,
  'pfister_comet_s2',
  1878000,
  ['DOOR2'],
  46,
  'pfister',
  {
    speed: 4,
    acceleration: 4.1,
    braking: 1,
    traction: 4
  }
),

new CarObject(
  'DINKA JESTER RR',
  'PART OF LOS SANTOS TUNERS',
  2,
  'dinka_jester_rr',
  1477500,
  ['DOOR2'],
  47,
  'dinka',
  {
    speed: 4.1,
    acceleration: 4.1,
    braking: 1.4,
    traction: 4
  }
),

new CarObject(
  'ANNIS ZR350',
  'PART OF LOS SANTOS TUNERS',
  2,
  'annis_zr350',
  1211250,
  ['DOOR2'],
  48,
  'annis',
  {
    speed: 4.1,
    acceleration: 4.2,
    braking: 1.5,
    traction: 4
  }
),

new CarObject(
  'ANNIS EUROS',
  'PART OF LOS SANTOS TUNERS',
  2,
  'annis_euros',
  1350000,
  ['DOOR2'],
  49,
  'annis',
  {
    speed: 4.1,
    acceleration: 4.1,
    braking: 1.5,
    traction: 3.9
  }
),
new CarObject(
  'GROTTI ITALI RSX',
  'PART OF THE CAYO PERICO HEIST',
  2,
  'grotti_itali_rsx',
  3465000,
  ['DOOR2'],
  50,
  'grotti',
  {
    speed: 4.3,
    acceleration: 5,
    braking: 2.3,
    traction: 5
  }
),

new CarObject(
  'LAMPADATI TIGON',
  'PART OF LOS SANTOS SUMMER SPECIAL',
  2,
  'lampadati_tigon',
  2310000,
  ['DOOR2'],
  51,
  'lampadati',
  {
    speed: 4.3,
    acceleration: 4.8,
    braking: 1.9,
    traction: 5
  }
),

new CarObject(
  'INVETERO COQUETTE D10',
  'PART OF LOS SANTOS SUMMER SPECIAL',
  2,
  'invetero_coquette_d10',
  1510000,
  ['DOOR2'],
  52,
  'invetero',
  {
    speed: 4.2,
    acceleration: 4,
    braking: 1,
    traction: 5
  }
),

new CarObject(
  'GROTTI FURIA',
  'PART OF THE DIAMOND CASINO HEIST',
  2,
  'grotti_furia',
  2740000,
  ['DOOR2'],
  53,
  'grotti',
  {
    speed: 4.2,
    acceleration: 4.6,
    braking: 1.7,
    traction: 4.1
  }
),

new CarObject(
  'PEGASSI ZORRUSSO',
  'PART OF THE DIAMOND CASINO & RESORT',
  2,
  'pegassi_zorrusso',
  1925000,
  ['DOOR2'],
  54,
  'pegassi',
  {
    speed: 4.2,
    acceleration: 4.6,
    braking: 2,
    traction: 5
  }
),

new CarObject(
  'BENEFACTOR KRIEGER',
  'PART OF THE DIAMOND CASINO & RESORT',
  2,
  'benefactor_krieger',
  2875000,
  ['DOOR2'],
  55,
  'benefactor',
  {
    speed: 4.2,
    acceleration: 4.7,
    braking: 1.9,
    traction: 5
  }
),
new CarObject(
  'OCELOT LOCUST',
  'PART OF THE DIAMOND CASINO & RESORT',
  2,
  'ocelot_locust',
  1625000,
  ['DOOR2'],
  56,
  'ocelot',
  {
    speed: 4.1,
    acceleration: 4.2,
    braking: 1.7,
    traction: 5
  }
),

new CarObject(
  'PROGEN EMERUS',
  'PART OF THE DIAMOND CASINO & RESORT',
  2,
  'progen_emerus',
  2750000,
  ['DOOR2'],
  57,
  'progen',
  {
    speed: 4.2,
    acceleration: 4.7,
    braking: 2,
    traction: 5
  }
),

new CarObject(
  'VYSSER NEO',
  'PART OF THE DIAMOND CASINO & RESORT',
  2,
  'vysser_neo',
  1875000,
  ['DOOR2'],
  58,
  'vysser',
  {
    speed: 4.2,
    acceleration: 4.9,
    braking: 2,
    traction: 4
  }
),

new CarObject(
  'TRUFFADE THRAX',
  'PART OF THE DIAMOND CASINO & RESORT',
  2,
  'truffade_thrax',
  2325000,
  ['DOOR2'],
  59,
  'truffade',
  {
    speed: 4.2,
    acceleration: 4.82,
    braking: 2,
    traction: 5
  }
),

new CarObject(
  'ANNIS S80RR',
  'PART OF THE DIAMOND CASINO & RESORT',
  1,
  'annis_s80rr',
  2575000,
  ['DOOR1'],
  60,
  'annis',
  {
    speed: 4.2,
    acceleration: 4.6,
    braking: 2.1,
    traction: 5
  }
),

new CarObject(
  'OBEY 8F DRAFTER',
  'PART OF THE DIAMOND CASINO & RESORT',
  2,
  'obey_8f_drafter',
  718000,
  ['DOOR2'],
  61,
  'obey',
  {
    speed: 4.1,
    acceleration: 4.3,
    braking: 1.7,
    traction: 4.1
  }
),
new CarObject(
  'PRINCIPE DEVESTE EIGHT',
  'PART OF ARENA WAR',
  2,
  'principe_devaste_eight',
  1795000,
  ['DOOR2'],
  62,
  'principe',
  {
    speed: 4.5,
    acceleration: 5,
    braking: 1.6,
    traction: 4.1
  }
),

new CarObject(
  'BENEFACTOR SCHLAGEN GT',
  'PART OF ARENA WAR',
  2,
  'benefactor_schlagen_gt',
  1300000,
  ['DOOR2'],
  63,
  'benefactor',
  {
    speed: 4.2,
    acceleration: 4.6,
    braking: 1.3,
    traction: 5
  }
),

new CarObject(
  'GROTTI ITALI GTO',
  'PART OF ARENA WAR',
  2,
  'grotti_itali_gto',
  1375500,
  ['DOOR2'],
  64,
  'grotti',
  {
    speed: 4.2,
    acceleration: 5,
    braking: 1.8,
    traction: 4
  }
),

new CarObject(
  'DINKA JESTER CLASSIC',
  'PART OF AFTER HOURS',
  2,
  'dinka_jester_classic',
  790000,
  ['DOOR2'],
  65,
  'dinka',
  {
    speed: 4.1,
    acceleration: 4,
    braking: 1.6,
    traction: 3.9
  }
),

new CarObject(
  'OVERFLOD TYRANT',
  'PART OF SA SUPER SPORT SERIES',
  2,
  'overflod_tyrant',
  2515000,
  ['DOOR2'],
  66,
  'overflod',
  {
    speed: 4.4,
    acceleration: 4.2,
    braking: 1.7,
    traction: 5
  }
),

new CarObject(
  'VAPID FLASH GT',
  'PART OF SA SUPER SPORT SERIES',
  2,
  'vapid_flash_gt',
  1675000,
  ['DOOR2'],
  67,
  'vapid',
  {
    speed: 4.1,
    acceleration: 4,
    braking: 1.7,
    traction: 5
  }
),
new CarObject(
  'PEGASSI TEZERACT',
  'PART OF SA SUPER SPORT SERIES',
  2,
  'pegassi_tezeract',
  2825000,
  ['DOOR2'],
  68,
  'pegassi',
  {
    speed: 4.5,
    acceleration: 4.6,
    braking: 2,
    traction: 5
  }
),

new CarObject(
  'OVERFLOD ENTITY XXR',
  'PART OF SA SUPER SPORT SERIES',
  2,
  'overflod_entity_xxr',
  2305000,
  ['DOOR2'],
  69,
  'overflod',
  {
    speed: 4.5,
    acceleration: 4.4,
    braking: 1.7,
    traction: 5
  }
),

new CarObject(
  'CHEVAL TAIPAN',
  'PART OF SA SUPER SPORT SERIES',
  2,
  'cheval_taipan',
  1980000,
  ['DOOR2'],
  70,
  'cheval',
  {
    speed: 4.5,
    acceleration: 4.4,
    braking: 1.8,
    traction: 5
  }
),

new CarObject(
  'VAPID GB200',
  'PART OF SA SUPER SPORT SERIES',
  2,
  'vapid_gb200',
  940000,
  ['DOOR2'],
  71,
  'vapid',
  {
    speed: 4.1,
    acceleration: 4,
    braking: 1.7,
    traction: 5
  }
),

new CarObject(
  'PFISTER COMET SR',
  'PART OF THE DOOMSDAY HEIST',
  2,
  'pfister_comet_sr',
  1145000,
  ['DOOR2'],
  72,
  'pfister',
  {
    speed: 4.2,
    acceleration: 4,
    braking: 2,
    traction: 5
  }
),

new CarObject(
  'ANNIS SAVESTRA',
  'PART OF THE DOOMSDAY HEIST',
  2,
  'annis_savestra',
  990000,
  ['DOOR2'],
  73,
  'annis',
  {
    speed: 3.8,
    acceleration: 3,
    braking: 1.2,
    traction: 5
  }
),
new CarObject(
  'OVERFLOD AUTARCH',
  'PART OF THE DOOMSDAY HEIST',
  2,
  'overflod_autarch',
  1955000,
  ['DOOR2'],
  74,
  'overflod',
  {
    speed: 4.3,
    acceleration: 4.7,
    braking: 2,
    traction: 5
  }
),

new CarObject(
  'PFISTER COMET SAFARI',
  'PART OF THE DOOMSDAY HEIST',
  2,
  'pfister_comet_safari',
  710000,
  ['DOOR2'],
  75,
  'pfister',
  {
    speed: 4.1,
    acceleration: 3.8,
    braking: 1.3,
    traction: 3.2
  }
),

new CarObject(
  'OCELOT PARIAH',
  'PART OF THE DOOMSDAY HEIST',
  2,
  'ocelot_pariah',
  1420000,
  ['DOOR2'],
  76,
  'ocelot',
  {
    speed: 4.1,
    acceleration: 4,
    braking: 1.7,
    traction: 4
  }
),

new CarObject(
  'COIL CYCLONE',
  'PART OF SMUGGLER\'S RUN',
  2,
  'coil_cyclone',
  1890000,
  ['DOOR2'],
  77,
  'coil',
  {
    speed: 4.2,
    acceleration: 3.4,
    braking: 2,
    traction: 3.4
  }
),

new CarObject(
  'GROTTI VISIONE',
  'PART OF SMUGGLER\'S RUN',
  2,
  'grotti_visione',
  2250000,
  ['DOOR2'],
  78,
  'grotti',
  {
    speed: 4.2,
    acceleration: 4.3,
    braking: 1.8,
    traction: 4.4
  }
),

new CarObject(
  'OCELOT XA-21',
  'PART OF GUNRUNNING',
  2,
  'ocelot_xa21',
  2375000,
  ['DOOR2'],
  79,
  'ocelot',
  {
    speed: 4.2,
    acceleration: 4.5,
    braking: 1.9,
    traction: 4.1
  }
),
new CarObject(
  'GROTTI CHEETAH CLASSIC',
  'PART OF GUNRUNNING',
  2,
  'grotti_cheetah_classic',
  865000,
  ['DOOR2'],
  80,
  'grotti',
  {
    speed: 4.1,
    acceleration: 3.8,
    braking: 1.3,
    traction: 4
  }
),

new CarObject(
  'DEWBACHEE VAGNER',
  'PART OF GUNRUNNING',
  2,
  'dewbachee_vagner',
  1535000,
  ['DOOR2'],
  81,
  'dewbachee',
  {
    speed: 4.2,
    acceleration: 4.6,
    braking: 1.9,
    traction: 4.6
  }
),

new CarObject(
  'GROTTI TURISMO CLASSIC',
  'PART OF CUNNING STUNTS: SPECIAL VEHICLE CIRCUIT',
  2,
  'grotti_turismo_classic',
  705000,
  ['DOOR2'],
  82,
  'grotti',
  {
    speed: 4.1,
    acceleration: 4.2,
    braking: 0.9,
    traction: 4
  }
),

new CarObject(
  'PEGASSI INFERNUS CLASSIC',
  'PART OF CUNNING STUNTS: SPECIAL VEHICLE CIRCUIT',
  2,
  'pegassi_infernus_classic',
  915000,
  ['DOOR2'],
  83,
  'pegassi',
  {
    speed: 4,
    acceleration: 4.1,
    braking: 0.9,
    traction: 4
  }
),

new CarObject(
  'PEGASSI TEMPESTA',
  'PART OF IMPORT/EXPORT',
  2,
  'pegassi_tempesta',
  1329000,
  ['DOOR2'],
  84,
  'pegassi',
  {
    speed: 4.2,
    acceleration: 4.5,
    braking: 1.7,
    traction: 4
  }
),

new CarObject(
  'OCELOT PENETRATOR',
  'PART OF IMPORT/EXPORT',
  2,
  'ocelot_penetrator',
  880000,
  ['DOOR2'],
  85,
  'ocelot',
  {
    speed: 4.2,
    acceleration: 3.8,
    braking: 1.3,
    traction: 4
  }
),
new CarObject(
  'ANNIS RE-7B',
  'PART OF CUNNING STUNTS',
  2,
  'annis_re7b',
  2475000,
  ['DOOR2'],
  86,
  'annis',
  {
    speed: 4.2,
    acceleration: 4.6,
    braking: 1.9,
    traction: 4.5
  }
),

new CarObject(
  'PEGASSI REAPER',
  'PART OF FINANCE AND FELONY',
  2,
  'pegassi_reaper',
  1595000,
  ['DOOR2'],
  87,
  'pegassi',
  {
    speed: 4.2,
    acceleration: 4.5,
    braking: 1.8,
    traction: 4.1
  }
),

new CarObject(
  'GROTTI X80 PROTO',
  'PART OF FINANCE AND FELONY',
  2,
  'grotti_x80_proto',
  2700000,
  ['DOOR2'],
  88,
  'grotti',
  {
    speed: 4.3,
    acceleration: 4.7,
    braking: 1.9,
    traction: 4.1
  }
),

new CarObject(
  'GROTTI BESTIA GTS',
  'PART OF FINANCE AND FELONY',
  2,
  'grotti_bestia_gts',
  610000,
  ['DOOR2'],
  89,
  'grotti',
  {
    speed: 4.1,
    acceleration: 4,
    braking: 1.7,
    traction: 3.7
  }
),

new CarObject(
  'IMPONTE NIGHTSHADE',
  'PART OF EXECUTIVES AND OTHER CRIMINALS',
  2,
  'imponte_nightshade',
  585000,
  ['DOOR2'],
  90,
  'imponte',
  {
    speed: 4,
    acceleration: 3.1,
    braking: 1,
    traction: 3.5
  }
),

new CarObject(
  'DECLASSE MAMBA',
  'PART OF EXECUTIVES AND OTHER CRIMINALS',
  2,
  'declasse_mamba',
  995000,
  ['DOOR2'],
  91,
  'declasse',
  {
    speed: 4,
    acceleration: 4.2,
    braking: 0.8,
    traction: 3.9
  }
),
new CarObject(
  'VAPID CHINO',
  'PART OF THE ILL-GOTTEN GAINS UPDATE PART 2',
  2,
  'vapid_chino',
  225000,
  ['DOOR2'],
  92,
  'vapid',
  {
    speed: 3.5,
    acceleration: 2.5,
    braking: 1,
    traction: 3.1
  }
),

new CarObject(
  'PROGEN T20',
  'PART OF THE ILL-GOTTEN GAINS UPDATE PART 2',
  2,
  'progen_t20',
  2200000,
  ['DOOR2'],
  93,
  'progen',
  {
    speed: 4.2,
    acceleration: 4,
    braking: 1.9,
    traction: 4.1
  }
),

new CarObject(
  'PEGASSI OSIRIS',
  'PART OF THE ILL-GOTTEN GAINS UPDATE PART 1',
  2,
  'pegassi_osiris',
  1950000,
  ['DOOR2'],
  94,
  'pegassi',
  {
    speed: 4.2,
    acceleration: 4.5,
    braking: 1.8,
    traction: 4.1
  }
),

new CarObject(
  'BENEFACTOR STIRLING GT',
  'PART OF THE ILL-GOTTEN GAINS UPDATE PART 1',
  2,
  'benefactor_stirling_gt',
  975000,
  ['DOOR2'],
  95,
  'benefactor',
  {
    speed: 3.8,
    acceleration: 3.8,
    braking: 1.3,
    traction: 3.6
  }
),

new CarObject(
  'ALBANY VIRGO',
  'PART OF THE ILL-GOTTEN GAINS UPDATE PART 1',
  2,
  'albany_virgo',
  195000,
  ['DOOR2'],
  96,
  'albany',
  {
    speed: 3.6,
    acceleration: 2.6,
    braking: 1.2,
    traction: 3.1
  }
),

new CarObject(
  'ENUS WINDSOR',
  'PART OF THE ILL-GOTTEN GAINS UPDATE PART 1',
  2,
  'enus_windsor',
  845000,
  ['DOOR2'],
  97,
  'enus',
  {
    speed: 4.1,
    acceleration: 3.4,
    braking: 1.2,
    traction: 3.2
  }
),
new CarObject(
  'LAMPADATI CASCO',
  'PART OF THE HEISTS UPDATE',
  2,
  'lampadati_casco',
  680000,
  ['DOOR2'],
  98,
  'lampadati',
  {
    speed: 4.1,
    acceleration: 4,
    braking: 1,
    traction: 3.5
  }
),

new CarObject(
  'INVETERO COQUETTE CLASSIC',
  'PART OF THE SA FLIGHT SCHOOL UPDATE',
  2,
  'invetero_coquette_classic',
  665000,
  ['DOOR2'],
  99,
  'invetero',
  {
    speed: 4.1,
    acceleration: 4.2,
    braking: 0.8,
    traction: 3.5
  }
),

new CarObject(
  'BRAVADO BANSHEE TOPLESS',
  'PART OF THE HIGH LIFE UPDATE',
  2,
  'bravado_banshee_topless',
  105000,
  ['DOOR2'],
  100,
  'bravado',
  {
    speed: 4,
    acceleration: 4.2,
    braking: 1.8,
    traction: 3.7
  }
),

new CarObject(
  'PEGASSI ZENTORNO',
  'PART OF THE HIGH LIFE UPDATE',
  2,
  'pegassi_zentorno',
  725000,
  ['DOOR2'],
  101,
  'pegassi',
  {
    speed: 4.2,
    acceleration: 4.3,
    braking: 1.8,
    traction: 4
  }
),

new CarObject(
  'GROTTI TURISMO R',
  'PART OF THE BUSINESS UPDATE',
  2,
  'grotti_turismo_r',
  500000,
  ['DOOR2'],
  102,
  'grotti',
  {
    speed: 4.1,
    acceleration: 4.4,
    braking: 2,
    traction: 4
  }
),
new CarObject(
  'HIJAK KHAMELION',
  'PART OF THE HIGH LIFE UPDATE',
  2,
  'hijak_khamelion',
  100000,
  ['DOOR2'],
  103,
  'hijak',
  {
    speed: 3.8,
    acceleration: 2,
    braking: 1.5,
    traction: 4
  }
),

new CarObject(
  'VAPID HOTKNIFE',
  'PART OF THE BUSINESS UPDATE',
  2,
  'vapid_hotknife',
  90000,
  ['DOOR2'],
  104,
  'vapid',
  {
    speed: 3.8,
    acceleration: 3.8,
    braking: 0.7,
    traction: 2.9
  }
),

new CarObject(
  'ANNIS ELEGY RH8',
  'FREE',
  2,
  'annis_elegy_rh8',
  0,
  ['DOOR2'],
  105,
  'annis',
  {
    speed: 4.1,
    acceleration: 4.1,
    braking: 0.8,
    traction: 4.1
  }
),

new CarObject(
  'TRUFFADE Z-TYPE',
  'PART OF THE BUSINESS UPDATE',
  2,
  'truffade_z_type',
  950000,
  ['DOOR2'],
  106,
  'truffade',
  {
    speed: 4.1,
    acceleration: 4.8,
    braking: 1.2,
    traction: 3.6
  }
),

new CarObject(
  'GROTTI STINGER GT',
  'PART OF THE BUSINESS UPDATE',
  2,
  'grotti_stinger_gt',
  875000,
  ['DOOR2'],
  107,
  'grotti',
  {
    speed: 4,
    acceleration: 3.3,
    braking: 1,
    traction: 3.3
  }
),

new CarObject(
  'TRUFFADE ADDER',
  'PART OF THE BUSINESS UPDATE',
  2,
  'truffade_adder',
  1000000,
  ['DOOR2'],
  108,
  'truffade',
  {
    speed: 4.2,
    acceleration: 4,
    braking: 1.8,
    traction: 3.8
  }
),
new CarObject(
  'PEGASSI MONROE',
  'PART OF THE BUSINESS UPDATE',
  2,
  'pegassi_monroe',
  490000,
  ['DOOR2'],
  109,
  'pegassi',
  {
    speed: 4.1,
    acceleration: 3.5,
    braking: 1.1,
    traction: 3.4
  }
),

new CarObject(
  'PEGASSI INFERNUS',
  'PART OF THE BUSINESS UPDATE',
  2,
  'pegassi_infernus',
  440000,
  ['DOOR2'],
  110,
  'pegassi',
  {
    speed: 4.1,
    acceleration: 4.2,
    braking: 0.8,
    traction: 4
  }
),

new CarObject(
  'OBEY 9F',
  'PART OF THE BUSINESS UPDATE',
  2,
  'obey_9f',
  120000,
  ['DOOR2'],
  111,
  'obey',
  {
    speed: 4.1,
    acceleration: 4.1,
    braking: 1.8,
    traction: 3.9
  }
),

new CarObject(
  'OBEY 9F CABRIO',
  'PART OF THE BUSINESS UPDATE',
  2,
  'obey_9f_cabrio',
  130000,
  ['DOOR2'],
  112,
  'obey',
  {
    speed: 4.1,
    acceleration: 4.1,
    braking: 1.7,
    traction: 3.9
  }
),

new CarObject(
  'BRAVADO BANSHEE',
  'PART OF THE BUSINESS UPDATE',
  2,
  'bravado_banshee',
  105000,
  ['DOOR2'],
  113,
  'bravado',
  {
    speed: 4,
    acceleration: 4.2,
    braking: 1.8,
    traction: 3.8
  }
),



)
