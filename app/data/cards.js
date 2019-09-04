export default [
  {
    slug: 'standard',
    name: 'Standard',
    notes: [],
    cards: [
      {
        setId: 1,
        planning: [
          'If defeated, recover all damage.',
          'Move toward closest goal.',
          'Gain 2k.',
        ],
        action: [
          'If @ cargo destination, deliver it. If cargo is ILLEGAL, ship suffers 2 damage.',
          "If all cargo slots full, buy Job. Otherwise buy Cargo. Then place a goal token on card's destination.",
        ],
        encounter: [
          'If (-) reputation matching a patrol in this space, encounter that patrol.',
          'If @ job destination, complete it.',
          'Spend 8k to gain 1 fame.',
          "Gain 1 reputation w/this planet's faction (if any).",
        ],
      }, {
        setId: 2,
        planning: [
          'Recover all damage.',
          'Move toward closest goal.',
          'Gain 2k.',
        ],
        action: [
          'If @ cargo destination, deliver it. If cargo is ILLEGAL, ship suffers 2 damage.',
          "If all job slots full, buy Cargo. Otherwise buy Job. Then place a goal token on card's destination.",
        ],
        encounter: [
          'If (-) reputation matching a patrol in this space, encounter that patrol.',
          'If @ job destination, complete it.',
          'Reveal the facedown contact token of the lowest class on this planet and gain the crew on its card for free.',
        ],
      }, {
        setId: 3,
        planning: [
          'If defeated, recover all damage.',
          'Move toward closest goal.',
          'Gain 2k.',
        ],
        action: [
          'If @ cargo destination, deliver it. If cargo is ILLEGAL, character suffers 2 damage.',
          "Buy Job. Then place a goal token on card's destination.",
        ],
        encounter: [
          'If (-) reputation matching a patrol in this space, encounter that patrol.',
          'Spend 8k to gain 1 fame.',
          "Gain 4k. Then lose 1 reputaion w/the nearest patrol's faction.",
        ],
      }, {
        setId: 4,
        planning: [
          'If defeated, recover all damage.',
          'Move toward closest goal.',
          'Gain 2k.',
        ],
        action: [
          'If @ cargo destination, deliver it.',
          "Buy Cargo. Then place a goal token on card's destination.",
        ],
        encounter: [
          'If (-) reputation matching a patrol in this space, encounter that patrol.',
          'If @ job destination, complete it.',
          'Reveal the facedown contact token of the lowest class on this planet and gain the crew on its card for free.',
          'Spend 8k to gain 1 fame.',
        ],
      }, {
        setId: 5,
        planning: [
          'If defeated, recover all damage.',
          'Move toward closest goal.',
          'Gain 2k.',
        ],
        action: [
          'If @ cargo destination, deliver it. If cargo is ILLEGAL, ship suffers 3 damage.',
          "Buy Job. Then place a goal token on card's destination.",
        ],
        encounter: [
          'If (-) reputation matching a patrol in this space, encounter that patrol.',
          'Spend 8k to gain 1 fame.',
          'Reveal the facedown contact token of the lowest class on this planet and gain the crew on its card for free.',
        ],
      }, {
        setId: 6,
        planning: [
          'Recover all damage.',
          'Move toward closest goal.',
          'Gain 2k.',
        ],
        action: [
          'If @ cargo destination, deliver it. If cargo is ILLEGAL, character suffers 2 damage.',
          "Buy Job. Then place a goal token on card's destination.",
        ],
        encounter: [
          'If (-) reputation matching a patrol in this space, encounter that patrol.',
          'If @ job destination, complete it.',
          'Spend 8k to gain 1 fame.',
        ],
      }, {
        setId: 7,
        planning: [
          'If defeated, recover all damage.',
          'Move toward closest goal.',
          'Gain 2k.',
        ],
        action: [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, lose 1 reputation w/planet's faction (if any).",
          "If all cargo slots full, buy Tech. Otherwise buy Cargo. Then place a goal token on card's destination.",
        ],
        encounter: [
          'If (-) reputation matching a patrol in this space, encounter that patrol.',
          'If @ job destination, complete it.',
          'Spend 8k to gain 1 fame.',
        ],
      }, {
        setId: 8,
        planning: [
          'If defeated, recover all damage.',
          'Move toward closest goal.',
          'Gain 2k.',
        ],
        action: [
          'If @ cargo destination, deliver it.',
          'Buy Tech.',
          'Reveal the facedown contact token of the lowest class on this planet.',
        ],
        encounter: [
          'If (-) reputation matching a patrol in this space, encounter that patrol.',
          'If @ job destination, complete it.',
          'Spend 8k to gain 1 fame.',
          "Gain 1 reputation w/the nearest patrol's faction.",
        ]
      }, {
        setId: 9,
        planning: [
          'If defeated, recover all damage.',
          'Move toward closest goal.',
          'Gain 2k.',
        ],
        action: [
          'If @ cargo destination, deliver it.',
          'Buy a Ship',
        ],
        encounter: [
          'If (-) reputation matching a patrol in this space, encounter that patrol.',
          'If @ job destination, complete it.',
          "Gain 4k. Then lose 1 reputaion w/this planet's faction (if any).",
        ],
      }
    ],
  },

  {
    id: '2',
    slug: 'boba-fett',
    name: 'Boba Fett',
    notes: [
      'Boba Fett starting ship is G-1A Starfighter.',
      'Use Boba Fett starting card.',
      'Place starting contact token face up on first location found in market decks that matches contact color. This will determine location of first bounty encounter. Place this before all other contacts of same color.',
      'When bounty location is not revealed, Boba Fett heads towards next closest goal location. If no goal available, he heads to closest planet with matching bounty contact color.',
      'Boba Fett reveals all contacts that match the color of bounty on each planet he ends movement on until bounty location is found.',
      'Boba Fett must roll a success to capture a bounty from a bounty encounter. If initial capture fails, he will continue to attempt capture on following turns till successful.',
      'Boba Fett always eliminates the bounty if the fame is the same as a capture.',
    ],
    cards: [],
  },
];

