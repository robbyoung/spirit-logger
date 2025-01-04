<script lang="ts">
	import {getLocalTimeZone, today, type DateValue} from "@internationalized/date";
	import Button from "../ui/button/button.svelte";
	import * as Card from "../ui/card";
	import DatePicker from "../ui/date-picker/date-picker.svelte";
	import {Label} from "../ui/label";
	import SpiritSelect from '../spirit-select/spirit-select.svelte';
	import { SpiritId } from "../spirit-select/spirits";
	import { adversaries as allAdversaries, type AdversaryId } from "../adversary-select/adversaries";
	import AdversarySelect from "../adversary-select/adversary-select.svelte";
	import ScoreCalculator from "../score-calculator/score-calculator.svelte";

	interface AdversaryWithLevel {
		id: AdversaryId | undefined;
		level: number | undefined;
	}

	let datePlayed: DateValue | undefined = $state(today(getLocalTimeZone()));

	let spirits: Array<SpiritId | undefined> = $state([undefined]);

	let adversaries: Array<AdversaryWithLevel> = $state([{
		id: undefined,
		level: undefined,
	}]);

	let difficulty = $derived(adversaries.map(adversary => {
		if (adversary.id === undefined || adversary.level === undefined) {
			return 0;
		}

		return allAdversaries.find(a => a.id === adversary.id)?.levels[adversary.level].difficulty ?? 0;
	}).reduce((accumulator, currentValue) => accumulator + currentValue));

	function addSpirit() {
		spirits.push(undefined);
	}

	function addAdversary() {
		adversaries.push({
			id: undefined,
			level: undefined,
		});
	}
</script>

<Card.Root class="w-[400px]">
	<Card.Header>
		<Card.Title>Log game</Card.Title>
	</Card.Header>
	<Card.Content>
		<form>
			<div class="grid w-full items-center gap-4">
				<div>
					<Label for="date-picker">Date played</Label>
					<DatePicker id="date-picker" bind:value={datePlayed} />
				</div>
				
				<div>
					<Label for="spirits">Spirits</Label>
					<fieldset id="spirits" class="flex flex-col gap-1">
						{#each spirits as _, i}
							<SpiritSelect id={`spirit-${i}`} bind:value={spirits[i]} placeholder={`Player ${i + 1} Spirit`}></SpiritSelect>
						{/each}
						
						{#if spirits.length < 6}
							<Button variant="outline" on:click={addSpirit}>Add another Spirit</Button>
						{/if}
					</fieldset>
				</div>

				<div>
					<Label for="adversaries">Adversaries</Label>
					<fieldset id="adversaries" class="flex flex-col gap-1">
						{#each adversaries as _, i}
							<AdversarySelect id={`adversary-${i}`} bind:value={adversaries[i].id} bind:level={adversaries[i].level} placeholder={`Select an Adversary`}></AdversarySelect>
						{/each}
						
						{#if adversaries.length < 5}
							<Button variant="outline" on:click={addAdversary}>Add another Adversary</Button>
						{/if}
					</fieldset>
				</div>

				<ScoreCalculator difficulty={difficulty} spiritCount={spirits.length}/>

				<Button>Submit</Button>
			</div>
		</form>
		
	</Card.Content>
	
</Card.Root>