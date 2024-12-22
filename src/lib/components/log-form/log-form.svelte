<script lang="ts">
	import {getLocalTimeZone, today, type DateValue} from "@internationalized/date";
	import Button from "../ui/button/button.svelte";
	import * as Card from "../ui/card";
	import DatePicker from "../ui/date-picker/date-picker.svelte";
	import {Label} from "../ui/label";
	import SpiritSelect from '../spirit-select/spirit-select.svelte';
	import { SpiritId } from "../spirit-select/spirits";

	let datePlayed: DateValue | undefined = $state(today(getLocalTimeZone()));

	let spirits: Array<SpiritId | undefined> = $state([SpiritId.Lightning]);

	function addSpirit() {
		spirits.push(undefined);
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
				
				<Button>Submit</Button>
			</div>
		</form>
		
	</Card.Content>
	
</Card.Root>