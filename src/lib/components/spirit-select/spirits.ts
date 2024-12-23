export enum SpiritId {
	Lightning = 'LSS',
	Earth = 'VSE',
	River = 'RSS',
	Shadows = 'SFF',
	Thunderspeaker = 'TSR',
	Green = 'SRG',
	Ocean = 'OHG',
	Bringer = 'BDN'
}

export interface Spirit {
	id: SpiritId;
	name: string;
	imageUrl: string;
}

export const spirits: Spirit[] = [
	{
		id: SpiritId.Lightning,
		name: "Lightning's Swift Strike",
		imageUrl: '/lightning.png'
	},
	{
		id: SpiritId.Earth,
		name: 'Vital Strength of the Earth',
		imageUrl: '/earth.png'
	}
];
