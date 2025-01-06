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
  },
  "When Dinka's lead designers transformed the Jester into the RR, they operated with perfect, surgical precision. Then they took a bunch of amphetamines, blacked out, and pumped the RR so full of site enhancers they woke up eyeball-to-eyeball with the roided-out RR Widebody: warped, torqued, tatted, and with delts so big you're gonna need two lanes on the freeway. Lesson learned. Be more like Dinka.\n\n- Missile Lock-On Jammer built in"

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
  },
  "Once upon a time, you stanned the OG Banshee like the sweaty, hormonally challenged teen you were. Then you hit your twenties, and its topless twin straddled you and gave you the ride of your life for the low, low price of all-your-money. And now? Now you're about to get married to a car 50 years younger than you, with nothing but the promise that'll you die doing what you love. Introducing the Bravado Banshee GTS: THIS is a happy ending.\n\n- Missile Lock-On Jammer available"

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
  },
  "Ever seen a Swede impersonate an Italian? Sure, the early results of pickled herring carbonara and passive-aggressive flirting weren't encouraging, but look how far they've come: behind the wheel of the all-electric Överflöd Pipistrello, you too can outrun your problems with the sprezzatura of a prime minister evading another parliamentary sex scandal. So say 'suck my meatballs, polizia' and remember, consequences are for the schnooks who drive domestic.\n\n- Missile Lock-On Jammer available"

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
  },
  "The first two-seater sports car made by Americans for Americans, the Coquette D1 is as iconic as thick steaks, double Ds, apple pie and a lack of worker protections. The perfect vehicle for your delusions of European suavity, just throw on a half-decent suit and pull up on some tennis-playing housewives in Rockford Hills to feel that sweet, sweet rush of forgetting how utterly forgettable you are."

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
  },
  "In the analog icon Annis Euros X32, shift into reverse and return to the glory days of the 20th century, when beepers were hi-tech and foreplay was optional. This V6-powered sportscar represents our culture's last grasp on a time before AI came for your job and social media algorithms came for your free will. No catfishing here, just precisely what's advertised: speed, style, a rev heard around the world, and a glorious return to the final moments before everything went to hell."
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
  },
  "It's the 2020s in Los Santos: of course you swing both ways, and why should you expect less from your supercar? The Ubermacht Niobe is here to slip the straitjacket of a binary automotive market with a dose of superfluid hybrid tech. Because who can match the nuances of your sexual identity better than a German car manufacturer? Bottom line: the planet is burning and so is your sex drive, so why not at least screw yourself with something that can screw you in all the right places?"

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
  },
  "Experience luxury like you've never seen before. A glove box full of uncut blood diamonds, fresh beluga caviar in the cupholders, and seat warmers that can suck your - okay, the Enus Paragon S has none of these things. But that's not what's important. What's important is that anyone who sees you driving one will assume it does. So, you only need to ask yourself one thing: do you want to look like a million bucks? Because if you do, you should probably drive something cheaper."

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
  },
  "Why choose between the warm blankie of nostalgia and the raging techno-boner of post-humanist futurism? With the electric retro mashup of the Bollokan Envisage, you don't have to. Experience all the musky sex appeal of the free-loving, bare-backing, hairy-chested '70s with none of the gas crisis; and at the very same time, experience the rain-slicked, neon-lit, dystopian chic of your near-future holographic fantasies, with none of the need to wake up and confront what you've done to the mattress."

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
  },
  "In a world where it often feels like the best you can hope for is an all-electric fap to some hybrid porn, Grotti's stunning farewell tribute to the mighty V8 is the booty call of your hot, heavy dreams. So sit back and strap in for one last breath of pure gasoline as you autograph the O-Zone for the final time.\n\n- Imani Tech upgrades available (Agency Vehicle Workshop)"

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
  },
  "Ahh, La Coureuse. Known to Americans as 'Le Ride'. Back in the 70's it was the only French import you could admit to owning without bringing shame onto your family. Now it's undergone an electric-age overhaul from its spoiler to its air intakes, leaving it poised to raise its eyebrow suggestively and whisper 'voilà' as it drifts up and down your sweet spot. Bon voyage.\n\n- Imani Tech upgrades available (Agency Vehicle Workshop)"

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
  },
  "Do you spend your days fantasizing about the glory days of American car manufacture and your nights in sleepless anxiety about the climate apocalypse? Well, forget therapy, and forget compromise. Bravado's got you covered. Introducing the all-electric Buffalo EVX, a slice of lab-engineered muscle twitching at a thousand volts. It's got old school V8 looks, old school V8 power, and an old school V8 attitude. The fact that it's vegan friendly, carbon neutral, and the only noise it makes is a hypermodern whine can just be our dirty little secret.\n\n- Imani Tech upgrades available (Agency Vehicle Workshop)"

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
  },
  "The Stinger TT is so overwhelmingly sensuous, tactile, and powerful, your first instinct might be to swipe right on the nearest hottie, get them in the passenger seat and let your horsepower do the talking. But now they're thumbing the controls, patting that plush premium leather, and asking to change the radio. And that's when it hits you: your days of swiping right are over. This is the only relationship you'll ever need. And as for your third wheel: time to break out the slick mines.\n\n- Imani Tech upgrades available (Agency Vehicle Workshop)"

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
  },
  "Meet the all-electric hypercar that comes track-steady and city ready, so you can show-off your climate awareness and your tax exile status from behind the same wheel. And if you get tired of know-it-alls pointing out the contradiction, simply equip it with some serious clap-backable accessories. Missile Lock-On Jammer, Remote Control Unit, Slick Mines and Armor Plating should bring a swift resolution to any debate.\n\n- Imani Tech upgrades available (Agency Vehicle Workshop)"

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
  },
  "Look at the Lampadati Tigon, count to three and try not to adjust your pants. Ready? One. Two. Yep we called it. This car's sole purpose is to please the eye, thrill the heart and leave you sticky with delight.\n\n- Missile Lock-On Jammer available\n\nSELECT FROM AVAILABLE COLORS TO ORDER"

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
  },
  "Let's face it. So far, the future has been a disappointment. We were promised commercial space travel and world peace. What we got was increasingly weird VR porn. And everything else pretty much sucked. So, why not buckle into the Broadway and head right back to a time before Rule 34 existed, and futuristic design was still utopian sci-fi rather than doomsday chic?\n\n- Taxi Work capability\n- Missile Lock-On Jammer available"

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
  },
  "After four decades of pushing tech, perfecting performance, and ignoring rumors of massive price gouging, Annis presents the ultimate megamix of their greatest hits. And if its throwback touches don't persuade you, perhaps the potential to add a Missile Lock-On Jammer, Remote Control Unit, Slick Mines and Armor Plating will.\n\n- Imani Tech upgrades available (Agency Vehicle Workshop)"

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
  },
  "FAST. Adjective. Definition: Moving or capable of moving at high speed. In a sentence: The Överflöd Entity MT is so fast I **** the **** out of my ******** *** and ****** **** ******* everywhere."

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
  },
  "The air intake slots, the titanium valvetrain, that big, thicc naturally aspirated engine. Yes. This is a thirst post. And let's be honest. It's working. Eligible for customization at Benny's Original Motor Works."

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
  },
  "Are You Bored? Horny? Constipated? Here are 4 easy steps to all-round instant relief. 1) Buy an SM722, the new open-cockpit speedster from Benefactor. 2) Start the engine. 3) Place your foot on the far-right pedal. 4) Twitch... You won't believe what happens at step 5!"

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
  },
  "The Pegassi Torero gave you old-school pornstar heat. The XO is something altogether more glamorous. With its powerful angles, edgy lines and ecstatic propulsion, this is the kind of A-Lister who'll break the box office, start a fashion line, squeeze in a developing world photo op, finish up with a full spread in Pussycat Magazine – and stay classy every step of the way."

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
  },
  "Blood pressure rising? Heart rate increasing? Body temperature comparable to the core of a freshly microwaved pizza pocket? Well, don't panic if you feel the urge to grab a fistful of lotion. These are all the normal symptoms of close contact with the Corsita, the hottest new set of wheels from Lampadati."

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
  },
  "Once a racing pedigree famed for speed and dependability, the superstar LM87 has followed in the footsteps of every cultural icon that didn't have the good sense to die: retiring to LS where it can guzzle Premium, cruise Vinewood Boulevard flashing its taillights, and crash out face first in a Rockford Hills swimming pool."

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
  },
  "A car so light, fast and easy to drive, you barely have to lift a finger. Coincidentally, it's also the most popular car for the millionaire under 25. So you can pull up in Vinewood Hills, pull down the roof, watch the sunset, and make more trust fund babies in the passenger seat. That's asset growth.\n\n- Missile Lock-On Jammer available"

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
  },
  "The torque-loaded Överflöd Zeno is famous for breaking two world records. The first, highest speed in a densely populated area. The second, most hospitalizations during a single attempt to break a world record. A real high flyer in every sense."

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
  },
  "You want control? You want power? You want one of our sales team to say the words 'lithium-ion supercapacitors' over and over while sucking your toes? Good news, Legendary Motorsport's head of customer satisfaction is already making his way to the floor."

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
  },
  "Is there anything hotter than car royalty and master of selflove Dewbauchee stroking its own back catalogue? Introducing the Champion, a hedonistic homage to their 80s classics and the lovechild of an engineering circle jerk anyone would pay to be in the middle of.\n\n- Imani Tech upgrades available (Agency Vehicle Workshop)"

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
  },
  "You prefer the book to the movie. You drink spirits neat. You describe your sense of humor as 'subtle' and your lovemaking as 'imperceptible'. You're The Thinking Person. And you choose handling over speed, control over power, and principle over pleasure. You choose wisely. You choose the Pfister Growler."

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
  },
  "Too extra for the classics? More over-the-top than underground? Forget trying to find that scrapyard bucket and make the only first impression that counts in the Emperor Vectre. Like a supermodel with a mean 100m sprint"

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
  },"This isn't just a fast car. It's a car with the kind of reputation that no amount of targeted advertising can buy. So, when some people see a Comet they make a wish. Others run screaming for cover, prophesying doom, destruction, and crippling medical expenses. Either way, you made an impression.\n\n- Missile Lock-On Jammer available"


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
  },
  "Experts agree the world is ending. And other experts agree that the only thing you can do about it is get online and fine-tune your consumer choices. Introducing the latest Dinka Jester: the car with the killer smile is back, and this time it's so deadpan we're pretty sure it's not even joking. So stop doomscrolling. You've found it.\n\n- Drift tuning available (LS Car Meet)\n- Exclusive liveries available with drift tuning (LS Customs)\n- Missile Lock-On Jammer available"

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
  },
  "The nods of recognition, the pointing, the fanboys passing out in ecstasy. Witnessing the big power ZR350 revving up to tear a hole through an underground parking lot never gets old. And when you burn these tires out, they'll fight to see who gets to breathe in your polycyclic aromatic hydrocarbons - because this much clout is seriously intoxicating.\n\n- Drift tuning available (LS Car Meet)\n- Exclusive liveries available with drift tuning (LS Customs)"

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
  },
  "\"I drove the Euros before it was cool.\" That's what you tell everyone as you drive your newly purchased Annis Euros, loudly reminiscing about the music you didn't listen to, the fashion you never wore, and the parties you didn't get invited to back in the aughts.\n\n- Drift tuning available (LS Car Meet)\n- Exclusive liveries available with drift tuning (LS Customs)"
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
  },
  "Warning: NSFW. There's a sexy single car in your area looking for a ride. Interested? Just open a private tab and check out these candid pics of the RSX's sultry bodywork, hourglass waist, soft front, and silken A-line. But before you take it to the next level and see what's under the hood, turn off your webcam and mute your mic. The conference call you're ignoring is about to see your o-face.\n\nSELECT FROM AVAILABLE COLORS TO ORDER"

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
  },
  "Look at the Lampadati Tigon, count to three and try not to adjust your pants. Ready? One. Two. Yep we called it. This car's sole purpose is to please the eye, thrill the heart and leave you sticky with delight.\n\n- Missile Lock-On Jammer available"

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
  },
  "The Classic and Blackfin were the mature cars you loved to ride. Now watch as they turn green and start leaking brake fluid at the sight of Invetero's youngest model. The D10 is a classic pedigree dressed to the nines, spray tanned and injected into everlasting youth. The age of the cougar is over. The real Coquette has finally arrived."

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
  },
  "Who needs a super car? Who needs to throw their cash at the finest leather upholstery, godly specs and a body so seductive Aphrodite herself would have bowed down to it? Who needs an all-out-tarmac-tearing-sound-barrier-breaking-sexy-racing-dream-machine? You do. The Grotti Furia - worth selling your second kidney for."
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
  },
  "It takes a special kind of visionary to sit behind the wheel of a hypercar while it flirts outrageously with the sound barrier and seriously ask the question 'Hey, wouldn't it be cool if we could put the top down?' But then the folks at Pegassi are nothing if not visionary, and nothing if not special.\n\n- Missile Lock-On Jammer available"

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
  },
  "It sounds so simple in theory. Why shouldn't the cutting edge of hypercar design dovetail seamlessly with the bleeding edge of competition-ready, open-wheel racing tech? Well, forget the theory. Sit in the driver's seat. Take a breath, pucker up, and shoot a tentative glance in the direction of the throttle. Did you feel that? Have you noticed that you are suddenly a mile and a half into the next time zone, and your face is inside out? Yeah. That's why."


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
  },
  "The open-top, two-seater Locust pedigree goes all the way back to '69, and this is what you get after forty years of track testing: no roof, no windscreen, no windows, no compromises, and no interest in your personal safety. If you ever wondered what it's like to drive around in a logical conclusion, this is your chance to find out.\n\n- Missile Lock-On Jammer available"

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
  },
  "There is a new word in pioneering automotive design: intuition. Taking your seat in an Emerus is not like getting into a car. It's like discovering a new and perfectly natural extension to your own body, which just happens to be made of 800 angry horses. So, when it tears you mercilessly limb from limb, you'll have no one but yourself to blame."

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
  },
  "Vysser are the kind of small, artisanal manufacturer who are prepared to think outside the box. The design blueprints for the Neo drew their inspiration from the aerodynamics of a diving falcon, the composure of a ballet dancer, the curve of a suggestively raised eyebrow, and the assertiveness of a cluster bomb. This is the kind of pedigree you need.\n\n- Missile Lock-On Jammer available"

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
  },
  "Forget unitary construction. Put your monocoque back in your pants. The rolling chassis is back, and it's making sweet, naphtha-kerosene-drenched love to the hottest body in the world. Don't worry if you don't understand any of that, just take the corners hard and you feel the future. Trust us."

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
  },
  "The S80RR was designed to do two things. First, to be the predominant endurance racer of its era. Second, to make so few concessions to the physical comfort and psychological wellbeing of the driver that getting as far as the end of your driveway risks multiple organ failure, an irrecoverable nervous breakdown, and absolutely no regrets whatsoever.\n\n- Missile Lock-On Jammer available"

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
  },
  "What's the difference between this and every other two-door, four-seat, six-figure coupe on the market, you ask? Well, dig down into the core stats and the answer is clear. More horses under the hood. More exhausts at the back. More road traffic fatalities, fewer convictions, and more angry bleets from teen environmentalists. The Drafter has it where it counts."

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
  },
  "It began as little more than a myth: a list of impossible statistics circulating on the dark net. Then the myth became a legend: a few leaked photographs so provocative that possession was a federal crime. Then the legend became a rumor: a car so exclusive no one could confirm it existed in the real world. And now, thanks to you, that rumor is about to become a very messy headline."

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
  },
  "Looking at the low, broad, surly form of the Schlagen for the first time, you'd be forgiven for thinking that it's just waiting for an opportunity to knock you out, steal your keys and organize a gang bang with the Pfisters in your high-end garage. Of course, appearances can be deceptive. Not in this case, admittedly, but it's a good rule of thumb."

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
  },
  "When you think of lightweight redesigns, you probably think of carbon fiber bodywork and stripped-out interiors. But that's just for beginners. Step inside the Itali GTO, and the air you're breathing has increased hydrogen content for extra lift. Grotti have even taken the controversial step of obliging potential owners to do their part by shaving their body hair and removing at least one kidney. Sometimes you have to suffer for perfection."

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
  },
  "Dinka are famous for their hyperbikes and other suicide machines, but their legacy only has one name on it: the Jester Classic. They may have set out to make a regular sports GT, but they accidentally made the most iconic car ever to race for pinks. It's still as beautiful as it ever was, it'll still eat you alive if you so much as flinch while you're behind the wheel, and you still wouldn't change a damn thing."

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
  },
  "The Tyrant is a testament to human ingenuity. We're not sure who's more impressive: the team of engineers who've taken us as close as human beings can get to installing a gear stick and a steering wheel in the front of a hurricane, or the team of lawyers who got it classified as road legal. Take your pick."
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
  },
  "You know how it is. One moment you're driving to the store, the next you've succumbed to an overwhelming desire to tear some fresh holes in the asphalt. Your doctor says you need extensive psychiatric treatment, but at Vapid we understand that all you need is the right car. Specifically, one that's both a nimble little runner and a demented little hatchback that's forever on the edge of tearing itself into hot little pieces. Let the therapy begin."

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
  },
  "Ladies and gentlemen, we have crossed the frontier. The motorcar has evolved. The first member of a new and alien species has arrived, and it does not come in peace. The Tezeract's only purpose is to wage a silent war of annihilation on anything else that dares to call itself a means of transport. As of now, there's a right side of history. Choose wisely."

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
  },
  "Sure, it makes sense for a nation of ultra liberal herring-lovers to lead the world in the manufacture of affordable flat-pack furniture. But just when you think you've got the measure of them, the Swedish go and produce a low-slung, heavyweight, pitilessly fast hypercar, and suddenly it's hard to sustain your prejudices when you're experiencing enough G-force to separate your face from your skull. Go figure."

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
  },
  "Human-led design is a thing of the past. This is what happens when you fire your R&D department and leave a supercomputer alone with a textbook on computational fluid dynamics and some provocative anime. End result: to drive a Taipan is to put yourself at the mercy of a ruthless, inhuman dedication to pure speed and improbable curves. Be afraid."

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
  },
  "The GB200 is an icon of that golden age of sports car design: a mid-engine, four-wheel drive rocket built with the power of a modern supercar and the handling, brakes and safety features of an angry dog. You can play it cool all you like: no matter how many times you take it over 100, the moment the turbo kicks in will have you clenching so hard you won't know if that was an ecstatic climax or a messy follow-through."

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
  },
  "Forget everything you think you know about the Pfister Comet. Forget cruising through Vinewood with a bellyful of whiskey dropping one-liners about the size of your bonus. Forget picking up sex workers and passing them off as your fiancé at family gatherings. The SR was made for only one thing: to make every other sports car look like it's the asthmatic kid in gym. Now get in line.\n\n- Missile Lock-On Jammer available"

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
  },
  "Back in the 70s, the Savestra was the car your parents banned from the house after it pissed engine oil on the carpet and dry-humped your dad's Schafter. Taking all the power and presence of a big American sports car and boiling them down to a concentrated dose of rage, this little pit bull is the perfect candidate for a whole suite of brutal mod options, including a light machine gun or two.\n\n- Missile Lock-On Jammer available\n\nPlease note: Weapon modifications can only be applied at a Vehicle Workshop inside an Avenger or Mobile Operations Center."

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
  },
  "This is not a hypercar. It's not a sports prototype or a concept GT. It's something else. Something much, much better. And this isn't even an advert for whatever it is. The Autarch doesn't need an advert. It doesn't need anything it doesn't have already, least of all the approval of an irrelevance like you. No, you need it: more than you need money, dignity or life itself. Go on, we dare you not to buy it."

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
  },
  "Is there nothing the Pfister Comet cannot do? If you were a venture capitalist looking for the shortest route to your next midlife crisis, the Comet was your first and only choice. If you wanted something that preserved the classic reek of desperation but added a street-racer twist, the Retro Custom was top of the list. And now, if you're looking for something to slam around a hairpin bend in three feet of uphill mud, the Comet Safari has got you covered.\n\nPlease note: Weapon modifications can only be applied at a Vehicle Workshop inside an Avenger or Mobile Operations Center."

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
  },
  "This is not an accessible sports car. It won't rub its avant-garde bodywork in your face and let you grope its dashboard on the first drive. It's dignified, sophisticated - even a little aloof. It will only reveal its charms for just the right handler. But one day, after years of practice, you'll become aware of the utter contempt in which you now hold the rest of the human race, and you'll know you can finally say 'I drive a Pariah.'"

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
  },
  "The Coil Cyclone is here to prove one thing: the days of the internal combustion engine are over. Sure, it was fun while it lasted. Just like your psychotic, knife-wielding ex was phenomenal in bed. But that fossil-fueled comfort zone is about to be nothing more than a distant speck in your rear-view mirror as you surrender to this harbinger of the electric age. True power is here. Drive the lightning.\n\n- Missile Lock-On Jammer available"
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
  },
  "Try to relax. There's a first time for everyone. You take another furtive glance at those ravishing curves, and feel faint with desire. Suddenly it doesn't matter how rich you are: this time, you're out of your league. Your mouth is dry. Your pants, sodden. And then it happens: the doors glide open, you take your seat, and nothing is ever the same again. There's no going back. Welcome to Visione."

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
  },
  "To those who argue that the supercar is dead and hybrid tech was only a fad, the XA-21 would like a word as soon as it's done banging your mom. And when you're done saying thank you, it'll show you the kind of annihilating perform"

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
  },
  "There's a kind of charm that only comes with age, and in today's jaded world nothing's aged better than the Cheetah Classic. It's practical, spacious, understated. It oozes red-blooded panache. You open the door, and you catch the smell of brandy and cigars on its breath. It's eminently respectable, it's constantly groping its secretary, and it doesn't even feel the need to pretend it has friends from minority groups. Welcome to the old world."

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
  },
  "This is what you get when you start from a truly blank slate. Take every preconception you had about hypercar design: every piece of received wisdom, every rock-solid assumption, every tried and tested formula - take them all and dump a hot, steaming pile of filthy ingenuity all over them. The Vagner is a message from the future: you're late."

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
  },
  "This is one for the purists. No hi-tech driving aids. No smart safety features. When you're three nanoseconds away from getting a mouthful of the truck in front, no onboard supercomputer is going to save you. But just like learning a language or killing a stranger with your bare hands, this kind of hard work is its own reward."

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
  },
  "Experience tells you that anything this hot must be crazy, and you're not wrong. The Infernus Classic is the kind of car that'll dazzle you with its perfect cheekbones, empty your bank account, and once you're sleeping in the wet patch it'll finish you off with a rusty machete. What's not to love?"

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
  },
  "At some point, asking 'So how fast is it?' is like asking the guy who just put his fist through your ribs 'So how strong are you?' It's not about the speed anymore. It's not about the style, either, because one touch of the gas and it's little more than a blur. You just know that deep down there's an itch only this car can scratch, and you lack any of the personal qualities you'd need to resist."

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
  },
  "Close your eyes. Cast your mind back to your early teens. You're lying in bed, hand gyrating at incredible speed under the covers, your eyes fixed on the torchlit centerfolds pinned to the back of your wardrobe. That sumptuous body, those exquisite curves, that billowing rear exhaust. Now open your eyes. Your hand is still in your pants, but the dream is real. Finish the job."

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
  },
  "Fresh from baffling onlookers across the GT circuit, the experimental prototype from Annis is now on limited commercial sale. In a revolutionary design process, Japan's finest artisans, engineers, aeronautics experts, martial artists, and chefs have come together to produce a seamless extension of your delusions of edginess and accomplishment.\n\n- Missile Lock-On Jammer available"

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
  },
  "Statistically, use of the accelerator in a Pegassi Reaper is more likely to cause a fatal brain hemorrhage than any other activity known to medical science. Fighter pilots have to undergo years of training before experiencing this kind of g-force, but luckily for you the only qualifications required to get behind the wheel are an above-average credit rating and a hearty contempt for the poor. Diamond-finish cup holders and live-in butler come as standard."

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
  },
  "The cause of more UFO sightings across San Andreas than any other production vehicle of the decade, the Proto is the kind of concept car you get when your head of R&D is an 8 year old child with a stack of comics and a bowlful of MDMA. The future is here."

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
  },
  "Turns out you can have it all: power with class, innovation with pedigree, looks with personality. The Bestia GTS has all the finesse and ferocity of a supercar, but its unique rear styling allows for two more seats in the back, with more than enough legroom for a couple of amputees or the children you never had. It's a visionary fusion no one ever saw coming, and for good reason."

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
  },
  "Don't be fooled by the elegant lines and composed styling: like every great muscle car before it, the Nightshade puts out more power than it (or you) can possibly handle. Few cars present as a big a risk to oncoming traffic, or look this good on the back of a tow truck."
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
  },
  "The Mamba harks back to a simpler time in car design, when the only real question was how much engine you could cram into an elegant frame before it tore itself apart. Judging from the high mortality rate Declasse hit a winning formula - but don't take our word for it. Once you hit the freeway and feel that primal roar beneath you as the bodywork starts to disintegrate you'll know you made the right choice."

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
  },
  "Whether you're planning a game of tennis, an orgy, a (literal) bloodbath or all of the above, there's ample room for it behind the tinted, sound-proof windows of this true American classic. Pop the trunk to find a built-in power hose, custom-engineered to remove blood, fecal matter and regret from the panda-belly leather interiors. The choice of the statesman."

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
  },
  "Tell your liberal neighbors you bought the Progen for its 'fuel efficiency' and reduced 'carbon' emissions, when you really got it because they hooked an electric motor to a twin-turbocharged V8 engine just to give it extra juice. Like a toaster in a bathtub, this is a dangerous synthesis of technologies old and new. Be progressive in the only real sense of the word."

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
  },
  "Osiris drivers boast the shortest average life expectancy of any consumer demographic in America. They live, briefly, in a world of bygone opulence and hyper-modern engineering. The 0.3 seconds between leaving the showroom and arriving at their first corner are the most exhilarating blur in their short, short lives. Only the stupidly rich need sign up to the waiting list."

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
  },
  "This Stirling GT is a landmark in Germany's proud history of helping flabby, self-loathing businessmen pretend they're Grand Prix drivers... for two minutes between freeway traffic jams. It's a tradition that's been around for at least sixty years, so while it's still pathetic, at least it got there first.\n\n- Missile Lock-On Jammer available"

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
  },
  "In a postwar car industry awash with fins, scoops and ornamental hubcaps, the Virgo stood out as something more composed and thoughtful. Don't let the rhino-horn fittings, onboard minibar and the fact that it handles like a shipping container on shopping cart wheels deceive you: this is as close as the American car industry has ever come to elegance."
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
  },
  "Blurring the lines between an automobile and an English aristocrat's mansion, this is a car that could even give a nu-metal fan an air of class and good taste. The bumbling manufacturer made the aerodynamics so poor and the chassis so heavy that its dual-turbo engine can barely get it to a kerb-crawl, but that's part of (or all of) its British charm."

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
  },
  "Good looking and liable to explode at any moment - the only way this could be more of an Italian stereotype would be if it had mommy issues. The Casco is a 50s classic for polymaths and pederasts."

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
  },
  "If work is flying a fighter jet, your weekend ride better be pretty special to compete. The radical lines will make you regret even the slightest crash. But don't worry, the big engine and bad handling will ensure you're too dead to really care."

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
  },
  "Topless version. The name says it all. You can weave in and out of traffic with ease in this little number. Get a blow up doll for the passenger seat and ride in the HOV lane. Apex Predators beware."

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
  },
  "Make sure the other 99% know you're in a vehicle they can't afford with this loud, brash, in-your-face supercar from Pegassi. Insanely fast with a high-tech interior, this is as close as you can get to a fighter jet on wheels. The only thing that goes up quicker than the 0-60 on this bad boy is your insurance premium."

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
  },
  "Grotti might have alienated their Old Money consumers by releasing a hybrid sports car, but 'fuel efficient' is relative when you're wrestling 799 angry horses that'll take you from 0-60 in a single, palpitating heartbeat."

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
  },
  "The Khamelion is an electric hybrid luxury sports sedan. Don't laugh. It isn't a complete oxymoron. This beauty handles so well, you'd never know you're driving a plug-in. Welcome to the future (so long as you have access to a specialized charging station)."

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
  },
  "Calling all car nerds who love to spend lots of money building a vehicle that looks like it's from the 1930s, but also kind of looks like it's from the future. The almost-street-legal Hotknife is perfect for getting you from the steampunk social to the furrie convention."

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
  },
  "Born in the fires of Mt. Fuji and tested on some German toll road, you can finally legally own this legendary supercar slayer without the fear of having your door kicked in by the FIB because they'd rather crush import cars than catch terrorists."
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
  },
  "Weather the new Great Depression with a car from the last Great Depression. When this rolled off the production line in 1937, minorities and women knew their place. It was the world's fastest automobile. Now it's the world's most expensive second-hand automobile. One of only 10 ever made, the Z-Type is a car you can really enjoy sitting in, surrounded by armed guards, too terrified to actually drive it anywhere.\n\n- Missile Lock-On Jammer available"

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
  },
  "Don't mistake this for a standard Stinger. The GT is a hard-top, race-bred variant that'll give its little brother a lasting inferiority complex. With only 40 produced, the Stinger GT is one of the most collectible sportscars in the world. So savor those fleeting moments of enjoyment in between being terrified of crashing it or somebody stealing it.\n\n- Missile Lock-On Jammer available"

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
  },
  "If cars were porn, this would be the ultimate DVDA scene. Give the liberals something to really protest about with the least environmentally-friendly car on the planet! The Adder's monstrous 8-liter engine burns fuel faster than a blazing oil refinery, but its top speed can hold its own against a guided missile, making it the perfect all-round car for life in a busy urban metropolis."

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
  },
  "Remember Italy's glory days before feminism and the Euro ruined everything? When a suitcase full of Lire would buy you an espresso and pack of cigarettes, if you were lucky? Produced by old-money Italians in the 1960s, driven by new-money guidos in the 2010s, the Monroe is a classic supercar that has been making douchebags look stylish for over 50 years."

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
  },
  "The Italians are unrivaled in flamboyance, sex scandals, and financial improprieties. Now you can be too!"

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
  },
  "Once you sit in this car, you won't want to drive anything else. Great in the snow. Not really, you'll probably die if you take this overpowered beast anywhere near moisture. Luckily, you live in a desert.\n\n- Missile Lock-On Jammer available"

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
  },
  "There's nothing wrong with the standard Obey 9F, but this is San Andreas. Spend a little extra and get the convertible version. You spend enough of your life in air conditioning already.\n\n- Missile Lock-On Jammer available"

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
  },
  "The name says it all. You can weave in and out of traffic with ease in this little number. Get a blow up doll for the passenger seat and ride in the HOV lane. Apex Predators beware."

),



)
