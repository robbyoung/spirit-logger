export enum SpiritId {
	Lightning,
	Earth,
	River,
	Shadows,
	Thunderspeaker,
	Green,
	Ocean,
	Bringer
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
