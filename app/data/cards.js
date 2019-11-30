export default [
  {
    "name": "Standard",
    "slug": "standard",
    "image": "/splash/standard.jpg",
    "hoverImage": "/splash/standard-color.jpg",
    "cards": [
      {
        "number": 1,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, ship suffers 2 damage.",
          "If all cargo slots full, buy Job. Otherwise buy Cargo. Then place a goal token on card's destination."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ job destination, complete it.",
          "Spend 8k to gain 1 fame.",
          "Gain 1 reputation w/this planet's faction (if any)."
        ]
      },
      {
        "number": 2,
        "planning": [
          "Recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, ship suffers 2 damage.",
          "If all job slots full, buy Cargo. Otherwise buy Job. Then place a goal token on card's destination."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ job destination, complete it.",
          "Reveal the facedown contact token of the lowest class on this planet and gain the crew on its card for free."
        ]
      },
      {
        "number": 3,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, character suffers 2 damage.",
          "Buy Job. Then place a goal token on card's destination."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "Spend 8k to gain 1 fame.",
          "Gain 4k. Then lose 1 reputaion w/the nearest patrol's faction."
        ]
      },
      {
        "number": 4,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it.",
          "Buy Cargo. Then place a goal token on card's destination."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ job destination, complete it.",
          "Reveal the facedown contact token of the lowest class on this planet and gain the crew on its card for free.",
          "Spend 8k to gain 1 fame."
        ]
      },
      {
        "number": 5,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, ship suffers 3 damage.",
          "Buy Job. Then place a goal token on card's destination."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "Spend 8k to gain 1 fame.",
          "Reveal the facedown contact token of the lowest class on this planet and gain the crew on its card for free."
        ]
      },
      {
        "number": 6,
        "planning": [
          "Recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, character suffers 2 damage.",
          "Buy Job. Then place a goal token on card's destination."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ job destination, complete it.",
          "Spend 8k to gain 1 fame."
        ]
      },
      {
        "number": 7,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, lose 1 reputation w/planet's faction (if any).",
          "If all cargo slots full, buy Tech. Otherwise buy Cargo. Then place a goal token on card's destination."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ job destination, complete it.",
          "Spend 8k to gain 1 fame."
        ]
      },
      {
        "number": 8,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it.",
          "Buy Tech.",
          "Reveal the facedown contact token of the lowest class on this planet."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ job destination, complete it.",
          "Spend 8k to gain 1 fame.",
          "Gain 1 reputation w/the nearest patrol's faction."
        ]
      },
      {
        "number": 9,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it.",
          "Buy a Ship"
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ job destination, complete it.",
          "Gain 4k. Then lose 1 reputaion w/this planet's faction (if any)."
        ]
      },
      {
        "number": 10,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it.",
          "Buy Cargo. Then place a goal token on card's destination."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ job destination, complete it.",
          "Spend 8k to gain 1 fame."
        ],
        "special": [
          "Discard the top card of the Bounty and Luxury market decks. Then shuffle this AI card back into the AI deck."
        ]
      }
    ]
  },
  {
    "name": "Boba Fett",
    "slug": "boba-fett",
    "image": "/splash/bobafett.jpg",
    "hoverImage": "/splash/bobafett-color.jpg",
    "ship": [
      "Check Ship Goal. If applicable, complete it and gain reward. Then flip ship card."
    ],
    "notes": [
      "Boba Fett starting ship is G-1A Starfighter.",
      "Use Boba Fett starting card.",
      "Place starting contact token face up on first location found in market decks that matches contact color. This will determine location of first bounty encounter. Place this before all other contacts of same color.",
      "When bounty location is not revealed, Boba Fett heads towards next closest goal location. If no goal available, he heads to closest planet with matching bounty contact color.",
      "Boba Fett reveals all contacts that match the color of bounty on each planet he ends movement on until bounty location is found.",
      "Boba Fett must roll a success to capture a bounty from a bounty encounter. If initial capture fails, he will continue to attempt capture on following turns till successful.",
      "Boba Fett always eliminates the bounty if the fame is the same as a capture."
    ],
    "cards": [
      {
        "number": 1,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "Check Personal Goal. If completed, gain reward and flip character card. Elimination bonus becomes active.",
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, ship suffers 2 damage.",
          "If all cargo slots full, buy Job. Otherwise buy Cargo. Then place a goal token on card's destination.",
          "If @ bounty destination, deliver it."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ bounty location, encounter bounty.",
          "If @ job destination, complete it.",
          "Spend 8k to gain 1 fame."
        ]
      },
      {
        "number": 2,
        "planning": [
          "Recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, ship suffers 2 damage.",
          "If all job slots full, buy Cargo. Otherwise buy Job. Then place a goal token on card's destination.",
          "If @ bounty destination, deliver it."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ bounty location, encounter bounty.",
          "If @ job destination, complete it.",
          "Reveal the facedown contact token of the lowest class on this planet and gain the crew."
        ],
        "special": [
          "If a crew slot is empty , take a bounty from the market."
        ]
      },
      {
        "number": 3,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, character suffers 2 damage.",
          "Buy Job. Then place a goal token on card's destination.",
          "If @ bounty destination, deliver it."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ bounty location, encounter bounty.",
          "Spend 8k to gain 1 fame.",
          "Gain 4k. Then lose 1 reputaion w/the nearest patrol's faction."
        ],
        "special": [
          "If a crew slot is empty , take a bounty from the market."
        ]
      },
      {
        "number": 4,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it.",
          "Buy Cargo. Then place a goal token on card's destination.",
          "If @ bounty destination, deliver it."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ bounty location, encounter bounty.",
          "If @ job destination, complete it.",
          "Eliminate the highest class contact on this planet and gain 1 fame."
        ]
      },
      {
        "number": 5,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, ship suffers 3 damage.",
          "Buy Job. Then place a goal token on card's destination.",
          "If @ bounty destination, deliver it."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ bounty location, encounter bounty.",
          "Spend 8k to gain 1 fame.",
          "Reveal the facedown contact token of the lowest class on this planet and gain the crew."
        ],
        "special": [
          "If a crew slot is empty , take a bounty from the market."
        ]
      },
      {
        "number": 6,
        "planning": [
          "Recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, character suffers 2 damage.",
          "Buy Job. Then place a goal token on card's destination.",
          "If @ bounty destination, deliver it."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ bounty location, encounter bounty.",
          "If @ job destination, complete it.",
          "Spend 8k to gain 1 fame."
        ]
      },
      {
        "number": 7,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, lose 1 reputation w/planet's faction (if any).",
          "If all cargo slots full, buy Tech. Otherwise buy Cargo. Then place a goal token on card's destination.",
          "If @ bounty destination, deliver it."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ bounty location, encounter bounty.",
          "If @ job destination, complete it.",
          "Spend 8k to gain 1 fame."
        ],
        "special": [
          "If a crew slot is empty , take a bounty from the market."
        ]
      },
      {
        "number": 8,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it.",
          "Buy Tech.",
          "If @ bounty destination, deliver it."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ bounty location, encounter bounty.",
          "If @ job destination, complete it.",
          "Eliminate the highest class contact on this planet and gain 1 fame."
        ]
      },
      {
        "number": 9,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it.",
          "Buy a Ship",
          "If @ bounty destination, deliver it."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ bounty location, encounter bounty.",
          "If @ job destination, complete it.",
          "Gain 4k. Then lose 1 reputaion w/the nearest patrol's faction."
        ],
        "special": [
          "If ship is Slave 1, gain 1 fame."
        ]
      },
      {
        "number": 10,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it.",
          "Buy Cargo. Then place a goal token on card's destination.",
          "If @ bounty destination, deliver it."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ bounty location, encounter bounty.",
          "If @ job destination, complete it.",
          "Eliminate the highest class contact on this planet and gain 1 fame."
        ],
        "special": [
          "Discard the top card of the Ship and Luxury market decks. Then shuffle this AI card back into the AI deck."
        ]
      }
    ]
  },
  {
    "name": "Bossk",
    "slug": "bossk",
    "image": "/splash/bossk.jpg",
    "hoverImage": "/splash/bossk-color.jpg",
    "ship": [
      "Check Ship Goal. If applicable, complete it and gain reward. Then flip ship card."
    ],
    "notes": [
      "Bossk starting ship is G-1A Starfighter.",
      "Use Bossk starting card.",
      "Place starting contact token face up on first location found in market decks that matches contact color. This will determine location of first bounty encounter. Place this before all other contacts of same color.",
      "When bounty location is not revealed, Bossk heads towards next closest goal location. If no goal available, he heads to closest planet with matching bounty contact color.",
      "Bossk reveals a contact that matches color of bounty on each planet he ends movement on until bounty location is found.",
      "Bossk must roll a success to capture a bounty from a bounty encounter. If initial capture fails, he will continue to attempt capture on following turns till successful.",
      "Bossk always eliminates the bounty if the fame is the same as a capture."
    ],
    "cards": [
      {
        "number": 1,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "Check Personal Goal. If completed, gain reward and flip character card. Encounter text becomes active. Encounter text will become the first encounter option to accept if applicable.",
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, ship suffers 2 damage.",
          "If all cargo slots full, buy Job. Otherwise buy Cargo. Then place a goal token on card's destination.",
          "If @ bounty destination, deliver it."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ bounty location, encounter bounty.",
          "If @ job destination, complete it.",
          "Spend 8k to gain 1 fame."
        ]
      },
      {
        "number": 2,
        "planning": [
          "Recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, ship suffers 2 damage.",
          "If all job slots full, buy Cargo. Otherwise buy Job. Then place a goal token on card's destination.",
          "If @ bounty destination, deliver it."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ bounty location, encounter bounty.",
          "If @ job destination, complete it.",
          "Reveal the facedown contact token of the lowest class on this planet and gain the crew."
        ],
        "special": [
          "If a crew slots is filled, take a bounty from the market."
        ]
      },
      {
        "number": 3,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, character suffers 2 damage.",
          "Buy Tech.",
          "If @ bounty destination, deliver it."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ bounty location, encounter bounty.",
          "Spend 8k to gain 1 fame.",
          "Gain 4k. Then lose 1 reputaion w/the nearest patrol's faction."
        ]
      },
      {
        "number": 4,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it.",
          "Buy Cargo. Then place a goal token on card's destination.",
          "If @ bounty destination, deliver it."
        ],
        "encounter": [
          "If (= or -) reputation matching closest patrol within 3 spaces to Bossk,  encounter that patrol. If Bossk succeeds gain additional 4k.",
          "If @ bounty location, encounter bounty.",
          "If @ job destination, complete it.",
          "Reveal the facedown contact token of the lowest class on this planet and gain the crew."
        ]
      },
      {
        "number": 5,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, ship suffers 3 damage.",
          "Buy Job. Then place a goal token on card's destination.",
          "If @ bounty destination, deliver it."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ bounty location, encounter bounty.",
          "Spend 8k to gain 1 fame.",
          "Reveal the facedown contact token of the lowest class on this planet and gain the crew."
        ],
        "special": [
          "If a crew slots is filled, take a bounty from the market."
        ]
      },
      {
        "number": 6,
        "planning": [
          "Recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, character suffers 2 damage.",
          "Buy Job. Then place a goal token on card's destination.",
          "Eliminate the lowest class contact on this planet and gain 2k."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ bounty location, encounter bounty.",
          "If @ job destination, complete it.",
          "Spend 8k to gain 1 fame."
        ]
      },
      {
        "number": 7,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, lose 1 reputation w/planet's faction (if any).",
          "If all cargo slots full, buy Tech. Otherwise buy Cargo. Then place a goal token on card's destination.",
          "If @ bounty destination, deliver it."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ bounty location, encounter bounty.",
          "If @ job destination, complete it.",
          "Spend 8k to gain 1 fame."
        ],
        "special": [
          "If a crew slots is filled, take a bounty from the market."
        ]
      },
      {
        "number": 8,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it.",
          "Buy Tech.",
          "If @ bounty destination, deliver it."
        ],
        "encounter": [
          "If (= or -) reputation matching closest patrol within 4 spaces to Bossk,  encounter that patrol. If Bossk succeeds gain additional 1 fame.",
          "If @ bounty location, encounter bounty.",
          "If @ job destination, complete it.",
          "Spend 8k to gain 1 fame."
        ]
      },
      {
        "number": 9,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it.",
          "Buy a Ship",
          "If @ bounty destination, deliver it."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ bounty location, encounter bounty.",
          "If @ job destination, complete it.",
          "Gain 4k. Then lose 1 reputaion w/this planet's faction (if any)."
        ],
        "special": [
          "If ship is Hounds Tooth, gain 1 fame."
        ]
      },
      {
        "number": 10,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it.",
          "Buy Cargo. Then place a goal token on card's destination.",
          "If @ bounty destination, deliver it."
        ],
        "encounter": [
          "If (= or -) reputation matching closest patrol within 3 spaces to Bossk,  encounter that patrol.",
          "If @ bounty location, encounter bounty.",
          "If @ job destination, complete it.",
          "Spend 8k to gain 1 fame."
        ],
        "special": [
          "Discard the top card of the Bounty and Tech market decks. Then shuffle this AI card back into the AI deck."
        ]
      }
    ]
  },
  {
    "name": "Doctor Aphra",
    "slug": "doctor-aphra",
    "image": "/splash/doctoraphra.jpg",
    "hoverImage": "/splash/doctoraphra-color.jpg",
    "ship": [
      "Check Ship Goal. If applicable, complete it and gain reward. Then flip ship card."
    ],
    "notes": [
      "Doctor Aphra starting ship is G9 Rigger.",
      "Use Doctor Aphra starting card.",
      "Doctor Aphra does not purchase bounties."
    ],
    "cards": [
      {
        "number": 1,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "Check Personal Goal. If completed, gain reward and flip character card. Planning text becomes active as follows: Market action can be taken when movement ends on a navpoint.",
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, ship suffers 2 damage.",
          "If all cargo slots full, buy Job. Otherwise buy Cargo. Then place a goal token on card's destination."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ job destination, complete it.",
          "Spend 8k to gain 1 fame.",
          "Gain 1 reputation w/this planet's faction (if any)."
        ],
        "special": [
          "Reveal a facedown white contact token  on this planet and gain the crew on its card if it is a droid."
        ]
      },
      {
        "number": 2,
        "planning": [
          "Recover all damage.",
          "Move toward closest goal. If patrol in path is empire, ignore reputation and pass through the patrol.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, ship suffers 2 damage.",
          "If all job slots full, buy Cargo. Otherwise buy Job. Then place a goal token on card's destination.",
          "Take a 2nd market action. Buy a Cargo if slot is available. Then place a goal on card's destination."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ job destination, complete it.",
          "Reveal the facedown contact token of the lowest class on this planet and gain the crew on its card for free."
        ]
      },
      {
        "number": 3,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal. If patrol in path is empire, ignore reputation and pass through the patrol.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, character suffers 2 damage.",
          "Buy Job. Then place a goal token on card's destination."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "Spend 8k to gain 1 fame.",
          "Gain 4k. Then lose 1 reputaion w/the nearest patrol's faction."
        ],
        "special": [
          "Reveal a facedown green contact token  on this planet and gain the crew on its card if it is a droid."
        ]
      },
      {
        "number": 4,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it.",
          "Buy Cargo. Then place a goal token on card's destination.",
          "Take a 2nd market action. Buy a Job if slot is available. Then place a goal on card's destination."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ job destination, complete it.",
          "Reveal the facedown contact token of the lowest class on this planet and gain the crew on its card for free.",
          "Spend 8k to gain 1 fame."
        ]
      },
      {
        "number": 5,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, ship suffers 3 damage.",
          "Buy Job. Then place a goal token on card's destination.",
          "Take a 2nd market action. Buy a Cargo if slot is available. Then place a goal on card's destination."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "Spend 8k to gain 1 fame.",
          "Reveal the facedown contact token of the lowest class on this planet and gain the crew on its card for free."
        ]
      },
      {
        "number": 6,
        "planning": [
          "Recover all damage.",
          "Move toward closest goal. If patrol in path is empire, ignore reputation and pass through the patrol.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, character suffers 2 damage.",
          "Buy Job. Then place a goal token on card's destination.",
          "Take a 2nd market action. Buy a Cargo if slot is available. Then place a goal on card's destination."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ job destination, complete it.",
          "Spend 8k to gain 1 fame."
        ]
      },
      {
        "number": 7,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, lose 1 reputation w/planet's faction (if any).",
          "If all cargo slots full, buy Tech. Otherwise buy Cargo. Then place a goal token on card's destination."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ job destination, complete it.",
          "Spend 8k to gain 1 fame."
        ],
        "special": [
          "Reveal a facedown yellow contact token  on this planet and gain the crew on its card if it is a droid."
        ]
      },
      {
        "number": 8,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it.",
          "Buy Tech.",
          "Reveal the facedown contact token of the lowest class on this planet."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ job destination, complete it.",
          "Spend 8k to gain 1 fame.",
          "Gain 1 reputation w/the nearest patrol's faction."
        ],
        "special": [
          "Discard all non-droid crew members and gain 1 fame."
        ]
      },
      {
        "number": 9,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal. If patrol in path is empire, ignore reputation and pass through the patrol.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it.",
          "Buy a Ship"
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ job destination, complete it.",
          "Gain 4k. Then lose 1 reputaion w/this planet's faction (if any)."
        ],
        "special": [
          "Reveal a facedown  contact token  on this planet and gain the crew on its card if it is a droid."
        ]
      },
      {
        "number": 10,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it.",
          "Buy Cargo. Then place a goal token on card's destination.",
          "Take a 2nd market action. Buy a Job if slot is available. Then place a goal on card's destination."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ job destination, complete it.",
          "Spend 8k to gain 1 fame."
        ],
        "special": [
          "Discard the top card of the Bounty and Luxury market decks. Then shuffle this AI card back into the AI deck."
        ]
      }
    ]
  },
  {
    "name": "Han Solo",
    "slug": "han-solo",
    "image": "/splash/hansolo.jpg",
    "hoverImage": "/splash/hansolo-color.jpg",
    "ship": [
      "Check Ship Goal. If applicable, complete it and gain reward. Then flip ship card."
    ],
    "notes": [
      "Han Solo starting ship is G9 Rigger.",
      "Use Han Solo starting card.",
      "Han Solo does not take bounties."
    ],
    "cards": [
      {
        "number": 1,
        "planning": [
          "If defeated, recover all damage."
        ],
        "do 1st that applies": [
          "+2 Movement bonus is active.",
          "Move toward closest goal. If any patrol in path, ignore reputation and pass through the patrol(s).",
          "Gain 2k."
        ],
        "action": [
          "Check Personal Goal. If completed, gain reward and flip character card. Only movement bonus is active.",
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, ship suffers 2 damage.",
          "If all cargo slots full, buy Job. Otherwise buy Cargo. Then place a goal token on card's destination."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ job destination, complete it.",
          "Spend 8k to gain 1 fame.",
          "Gain 1 reputation w/this planet's faction (if any)."
        ]
      },
      {
        "number": 2,
        "planning": [
          "Recover all damage."
        ],
        "do 1st that applies": [
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, ship suffers 2 damage.",
          "If all job slots full, buy Cargo. Otherwise buy Job. Then place a goal token on card's destination.",
          "Take a 2nd market action. Buy a Cargo if slot is available. Then place a goal on card's destination."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ job destination, complete it.",
          "Reveal facedown contact token of the lowest class on this planet and gain the crew on its card. Only replace existing crew if revealed contact is Chewbacca."
        ]
      },
      {
        "number": 3,
        "planning": [
          "If defeated, recover all damage."
        ],
        "do 1st that applies": [
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, character suffers 2 damage.",
          "Buy Job. Then place a goal token on card's destination."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "Spend 8k to gain 1 fame.",
          "Gain 4k. Then lose 1 reputaion w/the nearest patrol's faction."
        ],
        "special": [
          "Reveal all green contacts on this planet. If Greedo, eliminate and gain 1 fame."
        ]
      },
      {
        "number": 4,
        "planning": [
          "If defeated, recover all damage."
        ],
        "do 1st that applies": [
          "Move toward closest goal. If any patrol in path, ignore reputation and pass through the patrol(s).",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it.",
          "Buy Cargo. Then place a goal token on card's destination."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ job destination, complete it.",
          "Reveal facedown contact token of the lowest class on this planet and gain the crew on its card. Only replace existing crew if revealed contact is Chewbacca.",
          "Spend 8k to gain 1 fame."
        ],
        "special": [
          "Reveal all yellow contacts on this planet. If Kaz, gain crew for free. If Chewbacca, gain crew for free and gain 1 fame."
        ]
      },
      {
        "number": 5,
        "planning": [
          "If defeated, recover all damage."
        ],
        "do 1st that applies": [
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, ship suffers 3 damage.",
          "Buy Job. Then place a goal token on card's destination."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, discard all cargo and gain 1 fame.",
          "Spend 8k to gain 1 fame.",
          "Reveal facedown contact token of the lowest class on this planet and gain the crew on its card. Only replace existing crew if revealed contact is Chewbacca."
        ]
      },
      {
        "number": 6,
        "planning": [
          "Recover all damage."
        ],
        "do 1st that applies": [
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, character suffers 2 damage.",
          "Buy Job. Then place a goal token on card's destination.",
          "Take a 2nd market action. Buy a Job if slot is available. Then place a goal on card's destination."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ job destination, complete it.",
          "Spend 8k to gain 1 fame."
        ],
        "special": [
          "Reveal all green contacts on this planet. If Greedo, eliminate and gain 1 fame."
        ]
      },
      {
        "number": 7,
        "planning": [
          "If defeated, recover all damage."
        ],
        "do 1st that applies": [
          "Move toward closest goal. If any patrol in path, ignore reputation and pass through the patrol(s).",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, lose 1 reputation w/planet's faction (if any).",
          "If all cargo slots full, buy Tech. Otherwise buy Cargo. Then place a goal token on card's destination."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ job destination, complete it.",
          "Spend 8k to gain 1 fame."
        ]
      },
      {
        "number": 8,
        "planning": [
          "If defeated, recover all damage."
        ],
        "do 1st that applies": [
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it.",
          "Buy Tech.",
          "Reveal the facedown contact token of the lowest class on this planet."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ job destination, complete it.",
          "Spend 8k to gain 1 fame.",
          "Gain 1 reputation w/the nearest patrol's faction."
        ],
        "special": [
          "Reveal all yellow contacts on this planet. If Kaz, gain crew for free. If Chewbacca, gain crew for free and gain 1 fame."
        ]
      },
      {
        "number": 9,
        "planning": [
          "If defeated, recover all damage."
        ],
        "do 1st that applies": [
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it.",
          "Buy a Ship. If Current ship is YT-1300, upgrade to Millennium Falcon."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ job destination, complete it.",
          "Gain 4k. Then lose 1 reputaion w/this planet's faction (if any)."
        ],
        "special": [
          "If ship is Millennium Falcon, gain 1 fame."
        ]
      },
      {
        "number": 10,
        "planning": [
          "If defeated, recover all damage."
        ],
        "do 1st that applies": [
          "Move toward closest goal. If any patrol in path, ignore reputation and pass through the patrol(s).",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it.",
          "Buy Cargo. Then place a goal token on card's destination."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ job destination, complete it.",
          "Spend 8k to gain 1 fame."
        ],
        "special": [
          "Discard the top card of the Bounty and Luxury market decks. Then shuffle this AI card back into the AI deck."
        ]
      }
    ]
  },
  {
    "name": "IG-88",
    "slug": "ig-88",
    "image": "/splash/ig88.jpg",
    "hoverImage": "/splash/ig88-color.jpg",
    "ship": [
      "Check Ship Goal. If applicable, complete it and gain reward. Then flip ship card."
    ],
    "notes": [
      "IG-88 starting ship is G-1A Starfighter.",
      "Use IG-88 starting card.",
      "Place starting contact token face up on first location found in market decks that matches contact color. This will determine location of first bounty encounter. Place this before all other contacts of same color.",
      "When bounty location is not revealed, IG-88 heads towards next closest goal location. If no goal available, he heads to closest planet with matching bounty contact color.",
      "IG-88 reveals a contact that matches color of bounty on each planet he ends movement on until bounty location is found.",
      "IG-88 must roll a success to capture a bounty from a bounty encounter. If initial capture fails, he will continue to attempt capture on following turns till successful.",
      "IG-88 always eliminates the bounty if the fame is the same as a capture."
    ],
    "cards": [
      {
        "number": 1,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "Check Personal Goal. Until completed, IG-88 will take a droid crew from any player in his space. If completed, gain reward and flip character card. Only combat dice reroll text is active.",
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, ship suffers 2 damage.",
          "If all cargo slots full, buy Job. Otherwise buy Cargo. Then place a goal token on card's destination.",
          "If @ bounty destination, deliver it."
        ],
        "encounter": [
          "Combat dice reroll text is active.",
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ bounty location, encounter bounty.",
          "If @ job destination, complete it.",
          "Spend 8k to gain 1 fame."
        ],
        "special": [
          "Reveal the facedown white contact token  on this planet and gain the crew on its card if it is a droid."
        ]
      },
      {
        "number": 2,
        "planning": [
          "Recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, ship suffers 2 damage.",
          "If all job slots full, buy Cargo. Otherwise buy Job. Then place a goal token on card's destination.",
          "If 1 crew is a droid, gain 2k."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ bounty location, encounter bounty.",
          "If @ job destination, complete it.",
          "Reveal the facedown contact token of the lowest class on this planet and gain the crew on its card for free."
        ]
      },
      {
        "number": 3,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, character suffers 2 damage.",
          "Buy Bounty. Then place a goal token on card's bounty destination.",
          "If @ bounty destination, deliver it."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ bounty location, encounter bounty.",
          "Spend 8k to gain 1 fame.",
          "Gain 4k. Then lose 1 reputaion w/the nearest patrol's faction."
        ],
        "special": [
          "Reveal the facedown green contact token  on this planet and gain the crew on its card  if it is a droid."
        ]
      },
      {
        "number": 4,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it.",
          "Buy Bounty. Then place a goal token on card's bounty destination.",
          "If 1 crew is a droid, gain 2k."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ bounty location, encounter bounty.",
          "If @ job destination, complete it.",
          "Reveal the facedown contact token of the lowest class on this planet and gain the crew on its card for free."
        ]
      },
      {
        "number": 5,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, ship suffers 3 damage.",
          "Buy Job. Then place a goal token on card's destination.",
          "If 2 crew are droids, gain 5k."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ bounty location, encounter bounty.",
          "Spend 8k to gain 1 fame.",
          "Reveal the facedown contact token of the lowest class on this planet and gain the crew on its card for free."
        ]
      },
      {
        "number": 6,
        "planning": [
          "Recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, character suffers 2 damage.",
          "Buy Job. Then place a goal token on card's destination.",
          "If @ bounty destination, deliver it."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ bounty location, encounter bounty.",
          "If @ job destination, complete it.",
          "Spend 8k to gain 1 fame."
        ],
        "special": [
          "Discard all non-droid crew members. Gain 5k for each discarded crew member."
        ]
      },
      {
        "number": 7,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, lose 1 reputation w/planet's faction (if any).",
          "If all cargo slots full, buy Tech. Otherwise buy Cargo. Then place a goal token on card's destination.",
          "If @ bounty destination, deliver it."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ bounty location, encounter bounty.",
          "If @ job destination, complete it.",
          "Spend 8k to gain 1 fame."
        ],
        "special": [
          "Reveal the facedown yellow contact token  on this planet and gain the crew on its card if it is a droid."
        ]
      },
      {
        "number": 8,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it.",
          "Buy Tech.",
          "Reveal the facedown contact token of the lowest class on this planet."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ bounty location, encounter bounty.",
          "If @ job destination, complete it.",
          "Spend 8k to gain 1 fame."
        ],
        "special": [
          "Reveal the facedown green contact token  on this planet and gain the crew on its card if it is a droid."
        ]
      },
      {
        "number": 9,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it.",
          "Buy a Ship",
          "Take a 2nd market action. Buy a Job if slot is available. Then place a goal on card's destination."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ bounty location, encounter bounty.",
          "If @ job destination, complete it.",
          "Gain 4k. Then lose 1 reputaion w/this planet's faction (if any)."
        ],
        "special": [
          "If ship is IG-2000, gain 1 fame."
        ]
      },
      {
        "number": 10,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it.",
          "Buy Bounty. Then place a goal token on card's bounty destination.",
          "If @ bounty destination, deliver it."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ bounty location, encounter bounty.",
          "If @ job destination, complete it.",
          "Spend 8k to gain 1 fame."
        ],
        "special": [
          "Discard the top card of the Bounty and Tech market decks. Then shuffle this AI card back into the AI deck."
        ]
      }
    ]
  },
  {
    "name": "Jyn Erso",
    "slug": "jyn-erso",
    "image": "/splash/jynerso.jpg",
    "hoverImage": "/splash/jynerso-color.jpg",
    "ship": [
      "Check Ship Goal. If applicable, complete it and gain reward. Then flip ship card."
    ],
    "notes": [
      "Jyn Erso starting ship is G9 Rigger.",
      "Use Jyn Erso Solo starting card.",
      "Jyn Erso does not take bounties."
    ],
    "cards": [
      {
        "number": 1,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "Check Personal Goal. Action text inactive. Combat text active. If completed, gain reward and flip character card. Only combat text is active.",
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, ship suffers 2 damage.",
          "If all cargo slots full, buy Job. Otherwise buy Cargo. Then place a goal token on card's destination.",
          "If on an imperial planet, place 1 damage token."
        ],
        "encounter": [
          "Combat dice reroll text is active.",
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ job destination, complete it.",
          "Spend 8k to gain 1 fame.",
          "Gain 1 reputation w/this planet's faction (if any)."
        ]
      },
      {
        "number": 2,
        "planning": [
          "Recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, ship suffers 2 damage.",
          "If all job slots full, buy Cargo. Otherwise buy Job. Then place a goal token on card's destination.",
          "If on an imperial planet, place 1 damage token."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ job destination, complete it.",
          "Reveal the facedown contact token of the lowest class on this planet and gain the crew on its card."
        ],
        "special": [
          "Reveal all yellow contacts on this planet. If K-2S0, gain crew and gain 1 fame."
        ]
      },
      {
        "number": 3,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal. If patrol in path is rebel, ignore reputation and pass through the patrol.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, character suffers 2 damage.",
          "Buy Job. Then place a goal token on card's destination.",
          "If on an imperial planet, place 1 damage token."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "Spend 8k to gain 1 fame.",
          "Gain 4k. Then lose 1 reputaion w/the nearest patrol's faction."
        ],
        "special": [
          "Reveal the facedown yellow contact token  on this planet and gain the crew on its card for free if it is a droid."
        ]
      },
      {
        "number": 4,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it.",
          "Buy Cargo. Then place a goal token on card's destination.",
          "If on an imperial planet, place 1 damage token."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ job destination, complete it.",
          "Reveal the facedown contact token of the lowest class on this planet and gain the crew on its card.",
          "Spend 8k to gain 1 fame."
        ]
      },
      {
        "number": 5,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal. If patrol in path is rebel, ignore reputation and pass through the patrol.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, ship suffers 3 damage.",
          "Buy Job. Then place a goal token on card's destination.",
          "If on an imperial planet, place 1 damage token."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "Spend 8k to gain 1 fame.",
          "Reveal the facedown contact token of the lowest class on this planet and gain the crew on its card."
        ]
      },
      {
        "number": 6,
        "planning": [
          "Recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, character suffers 2 damage.",
          "Buy Job. Then place a goal token on card's destination.",
          "If on an imperial planet, place 1 damage token."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ job destination, complete it.",
          "Spend 8k to gain 1 fame."
        ],
        "special": [
          "If damage tokens are on 2 imperial planets, gain 1 fame."
        ]
      },
      {
        "number": 7,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, lose 1 reputation w/planet's faction (if any).",
          "If all cargo slots full, buy Tech. Otherwise buy Cargo. Then place a goal token on card's destination.",
          "If on an imperial planet, place 1 damage token."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, move that patrol 3 spaces towards your ship.",
          "If @ job destination, complete it.",
          "Spend 8k to gain 1 fame."
        ]
      },
      {
        "number": 8,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it.",
          "Buy Tech.",
          "Reveal the facedown contact token of the lowest class on this planet."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ job destination, complete it.",
          "Spend 8k to gain 1 fame.",
          "Gain 1 reputation w/the nearest patrol's faction."
        ],
        "special": [
          "Reveal all yellow contacts on this planet. If K-2S0, gain crew and gain 1 fame."
        ]
      },
      {
        "number": 9,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal. If patrol in path is rebel, ignore reputation and pass through the patrol.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it.",
          "Buy a Ship",
          "If on an imperial planet, place 1 damage token."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, move that patrol 3 spaces towards your ship.",
          "If @ job destination, complete it.",
          "Gain 4k. Then lose 1 reputaion w/this planet's faction (if any)."
        ]
      },
      {
        "number": 10,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it.",
          "Buy Cargo. Then place a goal token on card's destination.",
          "If on an imperial planet, place 1 damage token."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ job destination, complete it.",
          "Spend 8k to gain 1 fame."
        ],
        "special": [
          "Discard the top card of the Ship and Luxury market decks. Then shuffle this AI card back into the AI deck."
        ]
      }
    ]
  },
  {
    "name": "Ketsu Onyo",
    "slug": "ketsu-onyo",
    "image": "/splash/ketsuonyo.jpg",
    "hoverImage": "/splash/ketsuonyo-color.jpg",
    "ship": [
      "Check Ship Goal. If applicable, complete it and gain reward. Then flip ship card."
    ],
    "notes": [
      "Ketsu Onyo starting ship is G-1A Starfighter.",
      "Use Ketsu Onyo starting card.",
      "Place starting contact token face up on first location found in market decks that matches contact color. This will determine location of first bounty encounter. Place this before all other contacts of same color.",
      "When bounty location is not revealed, Ketsu Onyo heads towards next closest goal location. If no goal available, he heads to closest planet with matching bounty contact color.",
      "Ketsu Onyo reveals a contact that matches color of bounty on each planet he ends movement on until bounty location is found.",
      "Ketsu Onyo must roll a success to capture a bounty from a bounty encounter. If initial capture fails, she will continue to attempt capture on following turns till successful.",
      "Ketsu Onyo always eliminates the bounty if the fame is the same as a capture."
    ],
    "cards": [
      {
        "number": 1,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "Check Personal Goal. Encounter text inactive. If completed, gain reward and flip character card. Only combat credit text is active.",
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, ship suffers 2 damage.",
          "If all cargo slots full, buy Job. Otherwise buy Cargo. Then place a goal token on card's destination.",
          "If @ bounty destination, deliver it."
        ],
        "encounter": [
          "Once Personal Goal is met, combat credit text is active.",
          "Encounter a patrol within 3 spaces of Ketsu.",
          "If @ bounty location, encounter bounty.",
          "If @ job destination, complete it.",
          "Spend 8k to gain 1 fame."
        ]
      },
      {
        "number": 2,
        "planning": [
          "Recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, ship suffers 2 damage.",
          "If all job slots full, buy Cargo. Otherwise buy Job. Then place a goal token on card's destination.",
          "If @ bounty destination, deliver it."
        ],
        "encounter": [
          "Encounter a patrol within 3 spaces of Ketsu.",
          "If @ bounty location, encounter bounty.",
          "If @ job destination, complete it.",
          "Reveal the facedown contact token of the lowest class on this planet and gain the crew."
        ]
      },
      {
        "number": 3,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, character suffers 2 damage.",
          "Buy Bounty. Then place a goal token on card's bounty destination.",
          "If @ bounty destination, deliver it."
        ],
        "encounter": [
          "Encounter a patrol within 2 spaces of Ketsu.",
          "If @ bounty location, encounter bounty.",
          "Spend 8k to gain 1 fame.",
          "Gain 4k. Then lose 1 reputaion w/the nearest patrol's faction."
        ],
        "special": [
          "Reveal the facedown white contact token  on this planet and gain the crew on its card for free if it is syndicate or no affiliation."
        ]
      },
      {
        "number": 4,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it.",
          "Buy Cargo. Then place a goal token on card's destination.",
          "If @ bounty destination, deliver it."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ bounty location, encounter bounty.",
          "If @ job destination, complete it.",
          "Reveal the facedown contact token of the lowest class on this planet and gain the crew."
        ],
        "special": [
          "Reveal the facedown white contact token  on this planet and gain the crew on its card for free if it is syndicate or no affiliation."
        ]
      },
      {
        "number": 5,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, ship suffers 3 damage.",
          "Buy Job. Then place a goal token on card's destination.",
          "Take a 2nd market action. Buy a Tech if slot is available."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ bounty location, encounter bounty.",
          "Spend 8k to gain 1 fame.",
          "Reveal the facedown contact token of the lowest class on this planet and gain the crew."
        ]
      },
      {
        "number": 6,
        "planning": [
          "Recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, character suffers 2 damage.",
          "Buy Job. Then place a goal token on card's destination.",
          "If @ bounty destination, deliver it."
        ],
        "encounter": [
          "Encounter a patrol within 3 spaces of Ketsu. If combat is won, take no credits and gain additional 1 fame.",
          "If @ bounty location, encounter bounty.",
          "If @ job destination, complete it.",
          "Spend 8k to gain 1 fame."
        ]
      },
      {
        "number": 7,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, lose 1 reputation w/planet's faction (if any).",
          "If all cargo slots full, buy Tech. Otherwise buy Cargo. Then place a goal token on card's destination.",
          "If @ bounty destination, deliver it."
        ],
        "encounter": [
          "Encounter a patrol within 3 spaces of Ketsu.",
          "If @ bounty location, encounter bounty.",
          "If @ job destination, complete it.",
          "Spend 8k to gain 1 fame."
        ],
        "special": [
          "Reveal the facedown green contact token  on this planet and gain the crew on its card for free if it is syndicate or no affiliation."
        ]
      },
      {
        "number": 8,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it.",
          "Buy Tech.",
          "Reveal the facedown contact token of the lowest class on this planet."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ bounty location, encounter bounty.",
          "If @ job destination, complete it.",
          "Spend 8k to gain 1 fame."
        ]
      },
      {
        "number": 9,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it.",
          "Buy a Ship",
          "If @ bounty destination, deliver it."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ bounty location, encounter bounty.",
          "If @ job destination, complete it.",
          "Gain 4k. Then lose 1 reputaion w/this planet's faction (if any)."
        ],
        "special": [
          "Reveal the facedown yellow contact token  on this planet and gain the crew on its card for free if it is syndicate or no affiliation."
        ]
      },
      {
        "number": 10,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it.",
          "Buy Bounty. Then place a goal token on card's bounty destination.",
          "If @ bounty destination, deliver it."
        ],
        "encounter": [
          "Encounter a patrol within 3 spaces of Ketsu.",
          "If @ bounty location, encounter bounty.",
          "If @ job destination, complete it.",
          "Spend 8k to gain 1 fame."
        ],
        "special": [
          "Discard the top card of the Bounty and Luxury market decks. Then shuffle this AI card back into the AI deck."
        ]
      }
    ]
  },
  {
    "name": "Lando Calrissian",
    "slug": "lando-calrissian",
    "image": "/splash/landocalrissian.jpg",
    "hoverImage": "/splash/landocalrissian-color.jpg",
    "ship": [
      "Check Ship Goal. If applicable, complete it and gain reward. Then flip ship card."
    ],
    "notes": [
      "Lando Calrissian starting ship is G9 Rigger.",
      "Use Lando Calrissian starting card.",
      "Lando Calrissian always moves toward closest goal that allows him to land on a planet.",
      "Lando Calrissian does not take bounties."
    ],
    "cards": [
      {
        "number": 1,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "Check Personal Goal. Dice reroll text active as follows - Reroll any 1 blank die. If completed, gain reward and flip character card. All text is active as follows - Reroll any 1 blank die; Pay 1k to gain 1 reputation with planet faction.",
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, ship suffers 2 damage. Receive no credits for delivery. Instead gain additional 1 fame.",
          "If all cargo slots full, buy Job. Otherwise buy Cargo. Then place a goal token on card's destination."
        ],
        "encounter": [
          "Dice reroll text active as follows - Reroll any 1 blank die.",
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ job destination, complete it.",
          "Spend 8k to gain 1 fame.",
          "Gain 1 reputation w/this planet's faction (if any)."
        ]
      },
      {
        "number": 2,
        "planning": [
          "Recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, ship suffers 2 damage.",
          "If all job slots full, buy Cargo. Otherwise buy Job. Then place a goal token on card's destination."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ job destination, complete it.",
          "Reveal the facedown contact token of the lowest class on this planet and gain the crew on its card for free."
        ],
        "special": [
          "Reveal all green and yellow contacts on this planet.  If Chewbacca or a droid, gain as crew."
        ]
      },
      {
        "number": 3,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, character suffers 2 damage.",
          "Buy Job. Then place a goal token on card's destination.",
          "Take a 2nd market action. Buy a Cargo if slot is available. Then place a goal on card's destination."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "Spend 8k to gain 1 fame.",
          "Gain 4k. Then lose 1 reputaion w/the nearest patrol's faction."
        ]
      },
      {
        "number": 4,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it.",
          "Buy Cargo. Then place a goal token on card's destination.",
          "Take a 2nd market action. Buy a Job if slot is available. Then place a goal on card's destination."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ job destination, complete it.",
          "Reveal the facedown contact token of the lowest class on this planet and gain the crew on its card for free.",
          "Spend 8k to gain 1 fame."
        ]
      },
      {
        "number": 5,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, ship suffers 3 damage.",
          "Sabacc Skills! Receive Luxury item for free."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "Spend 8k to gain 1 fame.",
          "Reveal the facedown contact token of the lowest class on this planet and gain the crew on its card for free."
        ]
      },
      {
        "number": 6,
        "planning": [
          "Recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, character suffers 2 damage.",
          "Buy Cargo. Then place a goal token on card's destination."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ job destination, complete it.",
          "Spend 8k to gain 1 fame."
        ]
      },
      {
        "number": 7,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, lose 1 reputation w/planet's faction (if any).",
          "If all cargo slots full, buy Tech. Otherwise buy Cargo. Then place a goal token on card's destination."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ job destination, complete it.",
          "Spend 8k to gain 1 fame."
        ],
        "special": [
          "Reveal all green and yellow contacts on this planet.  If Chewbacca or a droid, gain as crew."
        ]
      },
      {
        "number": 8,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it. If cargo is ILLEGAL, receive no credits for delivery. Instead gain 1 fame.",
          "Buy Tech.",
          "Reveal the facedown contact token of the lowest class on this planet."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ job destination, complete it.",
          "Spend 8k to gain 1 fame.",
          "Gain 1 reputation w/the nearest patrol's faction."
        ]
      },
      {
        "number": 9,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it.",
          "Buy a Ship"
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, encounter that patrol.",
          "If @ job destination, complete it.",
          "Gain 4k. Then lose 1 reputaion w/this planet's faction (if any)."
        ],
        "special": [
          "If ship is Millennium Falcon, gain 5k."
        ]
      },
      {
        "number": 10,
        "planning": [
          "If defeated, recover all damage.",
          "Move toward closest goal.",
          "Gain 2k."
        ],
        "action": [
          "If @ cargo destination, deliver it.",
          "Buy Cargo. Then place a goal token on card's destination."
        ],
        "encounter": [
          "If (-) reputation matching a patrol in this space, gain reputation of faction.",
          "If @ job destination, complete it.",
          "Spend 8k to gain 1 fame."
        ],
        "special": [
          "Discard the top card of the Bounty and Luxury market decks. Then shuffle this AI card back into the AI deck."
        ]
      }
    ]
  },
];

