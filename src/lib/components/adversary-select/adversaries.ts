export enum AdversaryId {
  BrandenbergPrussia = 'BBP',
  England = 'EGD',
  Sweden = 'SWN',
  France = 'FPC',
  HabsburgLivestock = 'HLC',
  Russia = 'RSA',
  Scotland = 'SLD',
  HabsburgMining = 'HMC'
}

export interface Adversary {
  id: AdversaryId;
  name: string;
  imageUrl: string;
  levels: AdversaryLevel[];
}

export interface AdversaryLevel {
  level: number;
  difficulty: number;
}

const BASE_IMAGE_PATH = '/adversaries';

export const adversaries: Adversary[] = [
  {
    id: AdversaryId.BrandenbergPrussia,
    name: 'Kingdom of Brandenberg-Prussia',
    imageUrl: `${BASE_IMAGE_PATH}/brandenberg.png`,
    levels: [
      {
        level: 0,
        difficulty: 1
      },
      {
        level: 1,
        difficulty: 2
      },
      {
        level: 2,
        difficulty: 4
      },
      {
        level: 3,
        difficulty: 6
      },
      {
        level: 4,
        difficulty: 7
      },
      {
        level: 5,
        difficulty: 9
      },
      {
        level: 6,
        difficulty: 10
      }
    ]
  },
  {
    id: AdversaryId.England,
    name: 'Kingdom of England',
    imageUrl: `${BASE_IMAGE_PATH}/england.png`,
    levels: [
      {
        level: 0,
        difficulty: 1
      },
      {
        level: 1,
        difficulty: 3
      },
      {
        level: 2,
        difficulty: 4
      },
      {
        level: 3,
        difficulty: 6
      },
      {
        level: 4,
        difficulty: 7
      },
      {
        level: 5,
        difficulty: 9
      },
      {
        level: 6,
        difficulty: 11
      }
    ]
  },
  {
    id: AdversaryId.Sweden,
    name: 'Kingdom of Sweden',
    imageUrl: `${BASE_IMAGE_PATH}/sweden.png`,
    levels: [
      {
        level: 0,
        difficulty: 1
      },
      {
        level: 1,
        difficulty: 2
      },
      {
        level: 2,
        difficulty: 3
      },
      {
        level: 3,
        difficulty: 5
      },
      {
        level: 4,
        difficulty: 6
      },
      {
        level: 5,
        difficulty: 7
      },
      {
        level: 6,
        difficulty: 8
      }
    ]
  },
  {
    id: AdversaryId.France,
    name: 'Kingdom of France (Plantation Colony)',
    imageUrl: `${BASE_IMAGE_PATH}/france.png`,
    levels: [
      {
        level: 0,
        difficulty: 2
      },
      {
        level: 1,
        difficulty: 3
      },
      {
        level: 2,
        difficulty: 5
      },
      {
        level: 3,
        difficulty: 7
      },
      {
        level: 4,
        difficulty: 8
      },
      {
        level: 5,
        difficulty: 9
      },
      {
        level: 6,
        difficulty: 10
      }
    ]
  },
  {
    id: AdversaryId.HabsburgLivestock,
    name: 'Habsburg Monarchy (Livestock Colony)',
    imageUrl: `${BASE_IMAGE_PATH}/habsburg-livestock.png`,
    levels: [
      {
        level: 0,
        difficulty: 2
      },
      {
        level: 1,
        difficulty: 3
      },
      {
        level: 2,
        difficulty: 5
      },
      {
        level: 3,
        difficulty: 6
      },
      {
        level: 4,
        difficulty: 8
      },
      {
        level: 5,
        difficulty: 9
      },
      {
        level: 6,
        difficulty: 10
      }
    ]
  },
  {
    id: AdversaryId.Russia,
    name: 'Tsardom of Russia',
    imageUrl: `${BASE_IMAGE_PATH}/russia.png`,
    levels: [
      {
        level: 0,
        difficulty: 1
      },
      {
        level: 1,
        difficulty: 3
      },
      {
        level: 2,
        difficulty: 4
      },
      {
        level: 3,
        difficulty: 6
      },
      {
        level: 4,
        difficulty: 7
      },
      {
        level: 5,
        difficulty: 9
      },
      {
        level: 6,
        difficulty: 11
      }
    ]
  },
  {
    id: AdversaryId.Scotland,
    name: 'Kingdom of Scotland',
    imageUrl: `${BASE_IMAGE_PATH}/scotland.png`,
    levels: [
      {
        level: 0,
        difficulty: 1
      },
      {
        level: 1,
        difficulty: 3
      },
      {
        level: 2,
        difficulty: 4
      },
      {
        level: 3,
        difficulty: 6
      },
      {
        level: 4,
        difficulty: 7
      },
      {
        level: 5,
        difficulty: 8
      },
      {
        level: 6,
        difficulty: 10
      }
    ]
  },
  {
    id: AdversaryId.HabsburgMining,
    name: 'Habsburg Mining Expedition',
    imageUrl: `${BASE_IMAGE_PATH}/habsburg-mining.png`,
    levels: [
      {
        level: 0,
        difficulty: 1
      },
      {
        level: 1,
        difficulty: 3
      },
      {
        level: 2,
        difficulty: 4
      },
      {
        level: 3,
        difficulty: 5
      },
      {
        level: 4,
        difficulty: 7
      },
      {
        level: 5,
        difficulty: 9
      },
      {
        level: 6,
        difficulty: 10
      }
    ]
  }
];
