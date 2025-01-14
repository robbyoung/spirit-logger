export enum SpiritId {
	Lightning = 'LSS',
	River = 'RSS',
	Shadows = 'SFF',
	Earth = 'VSE',
	Thunderspeaker = 'TSR',
	Green = 'SRG',
	Bringer = 'BDN',
	Ocean = 'OHG',
	Keeper = 'KFW',
	Fangs = 'SFL',
	Wildfire = 'HWF',
	Serpent = 'SSB',
	Trickster = 'GTT',
	Lure = 'LDW',
	Minds = 'MMO',
	Memory = 'SMA',
	Stone = 'SUD',
	Volcano = 'VLH',
	Shroud = 'SSM',
	Vengeance = 'VBP',
	Fractured = 'FDS',
	Starlight = 'SSF',
	Downpour = 'DDW',
	Finder = 'FPU',
	Teeth = 'DTU',
	Eyes = 'EWT',
	Mud = 'FMS',
	Heat = 'RHS',
	Whirlwind = 'SBW',
	Behemoth = 'EEB',
	Vigil = 'HVG',
	Roots = 'TRJ',
	Darkness = 'BDS',
	Sun = 'RGS',
	Voice = 'WVD',
	Waters = 'WWB',
	Earthquakes = 'DUE'
}

export interface Spirit {
	id: SpiritId;
	name: string;
	imageUrl: string;
}

const BASE_IMAGE_PATH = '/spirits';

export const spirits: Spirit[] = [
	{
		id: SpiritId.Lightning,
		name: "Lightning's Swift Strike",
		imageUrl: `${BASE_IMAGE_PATH}/lightning.png`
	},
	{
		id: SpiritId.River,
		name: 'River Surges in Sunlight',
		imageUrl: `${BASE_IMAGE_PATH}/river.png`
	},
	{
		id: SpiritId.Shadows,
		name: 'Shadows Flicker Like Flame',
		imageUrl: `${BASE_IMAGE_PATH}/shadows.png`
	},
	{
		id: SpiritId.Earth,
		name: 'Vital Strength of the Earth',
		imageUrl: `${BASE_IMAGE_PATH}/earth.png`
	},
	{
		id: SpiritId.Green,
		name: 'A Spread of Rampant Green',
		imageUrl: `${BASE_IMAGE_PATH}/green.png`
	},
	{
		id: SpiritId.Thunderspeaker,
		name: 'Thunderspeaker',
		imageUrl: `${BASE_IMAGE_PATH}/thunderspeaker.png`
	},
	{
		id: SpiritId.Bringer,
		name: 'Bringer of Dreams and Nightmares',
		imageUrl: `${BASE_IMAGE_PATH}/bringer.png`
	},
	{
		id: SpiritId.Ocean,
		name: "Ocean's Hungry Grasp",
		imageUrl: `${BASE_IMAGE_PATH}/ocean.png`
	},
	{
		id: SpiritId.Keeper,
		name: 'Keeper of the Forbidden Wilds',
		imageUrl: `${BASE_IMAGE_PATH}/keeper.png`
	},
	{
		id: SpiritId.Fangs,
		name: 'Sharp Fangs Behind the Leaves',
		imageUrl: `${BASE_IMAGE_PATH}/fangs.png`
	},
	{
		id: SpiritId.Wildfire,
		name: 'Heart of the Wildfire',
		imageUrl: `${BASE_IMAGE_PATH}/wildfire.png`
	},
	{
		id: SpiritId.Serpent,
		name: 'Serpent Slumbering Beneath the Island',
		imageUrl: `${BASE_IMAGE_PATH}/serpent.png`
	},
	{
		id: SpiritId.Trickster,
		name: 'Grinning Trickster Stirs Up Trouble',
		imageUrl: `${BASE_IMAGE_PATH}/trickster.png`
	},
	{
		id: SpiritId.Lure,
		name: 'Lure of the Deep Wilderness',
		imageUrl: `${BASE_IMAGE_PATH}/lure.png`
	},
	{
		id: SpiritId.Minds,
		name: 'Many Minds Move as One',
		imageUrl: `${BASE_IMAGE_PATH}/minds.png`
	},
	{
		id: SpiritId.Memory,
		name: 'Shifting Memory of Ages',
		imageUrl: `${BASE_IMAGE_PATH}/memory.png`
	},
	{
		id: SpiritId.Stone,
		name: "Stone's Unyielding Defiance",
		imageUrl: `${BASE_IMAGE_PATH}/stone.png`
	},
	{
		id: SpiritId.Volcano,
		name: 'Volcano Looming High',
		imageUrl: `${BASE_IMAGE_PATH}/volcano.png`
	},
	{
		id: SpiritId.Shroud,
		name: 'Shroud of Silent Mist',
		imageUrl: `${BASE_IMAGE_PATH}/shroud.png`
	},
	{
		id: SpiritId.Vengeance,
		name: 'Vengeance as a Burning Plague',
		imageUrl: `${BASE_IMAGE_PATH}/vengeance.png`
	},
	{
		id: SpiritId.Fractured,
		name: 'Fractured Days Split the Sky',
		imageUrl: `${BASE_IMAGE_PATH}/fractured.png`
	},
	{
		id: SpiritId.Starlight,
		name: 'Starlight Seeks Its Form',
		imageUrl: `${BASE_IMAGE_PATH}/starlight.png`
	},
	{
		id: SpiritId.Downpour,
		name: 'Downpour Drenches the World',
		imageUrl: `${BASE_IMAGE_PATH}/downpour.png`
	},
	{
		id: SpiritId.Finder,
		name: 'Finder of Paths Unseen',
		imageUrl: `${BASE_IMAGE_PATH}/finder.png`
	},
	{
		id: SpiritId.Teeth,
		name: 'Devouring Teeth Lurk Underfoot',
		imageUrl: `${BASE_IMAGE_PATH}/teeth.png`
	},
	{
		id: SpiritId.Eyes,
		name: 'Eyes Watch from the Trees',
		imageUrl: `${BASE_IMAGE_PATH}/eyes.png`
	},
	{
		id: SpiritId.Mud,
		name: 'Fathomless Mud of the Swamp',
		imageUrl: `${BASE_IMAGE_PATH}/mud.png`
	},
	{
		id: SpiritId.Heat,
		name: 'Rising Heat of Stone and sand',
		imageUrl: `${BASE_IMAGE_PATH}/heat.png`
	},
	{
		id: SpiritId.Whirlwind,
		name: 'Sun-Bright Whirlwind',
		imageUrl: `${BASE_IMAGE_PATH}/whirlwind.png`
	},
	{
		id: SpiritId.Behemoth,
		name: 'Ember-Eyed Behemoth',
		imageUrl: `${BASE_IMAGE_PATH}/behemoth.png`
	},
	{
		id: SpiritId.Vigil,
		name: 'Hearth-Vigil',
		imageUrl: `${BASE_IMAGE_PATH}/vigil.png`
	},
	{
		id: SpiritId.Roots,
		name: 'Towering Roots of the Jungle',
		imageUrl: `${BASE_IMAGE_PATH}/roots.png`
	},
	{
		id: SpiritId.Darkness,
		name: 'Breath of Darkness Down Your Spine',
		imageUrl: `${BASE_IMAGE_PATH}/darkness.png`
	},
	{
		id: SpiritId.Sun,
		name: 'Relentless Gaze of the Sun',
		imageUrl: `${BASE_IMAGE_PATH}/sun.png`
	},
	{
		id: SpiritId.Voice,
		name: 'Wandering Voice Keens Delirium',
		imageUrl: `${BASE_IMAGE_PATH}/voice.png`
	},
	{
		id: SpiritId.Waters,
		name: 'Wounded Waters Bleeding',
		imageUrl: `${BASE_IMAGE_PATH}/waters.png`
	},
	{
		id: SpiritId.Earthquakes,
		name: 'Dances Up Earthquakes',
		imageUrl: `${BASE_IMAGE_PATH}/earthquakes.png`
	}
];
