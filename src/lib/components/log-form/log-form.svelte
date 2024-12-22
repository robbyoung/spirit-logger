<script lang="ts">
	import {getLocalTimeZone, today, type DateValue} from "@internationalized/date";
	import Button from "../ui/button/button.svelte";
	import * as Card from "../ui/card";
	import DatePicker from "../ui/date-picker/date-picker.svelte";
	import {Label} from "../ui/label";

	let datePlayed: DateValue | undefined = $state(today(getLocalTimeZone()));
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

				<Button>Submit</Button>
			</div>
		</form>
		
	</Card.Content>
	
</Card.Root>