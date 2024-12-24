<script lang="ts">
	import * as Avatar from "../ui/avatar";
    import * as Select from "../ui/select";
	import { AdversaryId, adversaries, type Adversary } from "./adversaries";

    interface Props {
        id: string;
        placeholder: string;
        value: AdversaryId | undefined;
    }

    let { id, placeholder, value = $bindable() }: Props = $props();

    let selectedAdversary: Adversary | undefined = $derived(adversaries.find(a => a.id === value))

</script>

<Select.Root portal={null} selected={{ value: selectedAdversary?.id, label: selectedAdversary?.name }} onSelectedChange={newValue => value = newValue?.value as AdversaryId}>
    <Select.Trigger class="w-full h-auto">
        <div class="flex gap-2 h-[40px]">
            {#if selectedAdversary}
                <Avatar.Root>
                <Avatar.Image class="mr-2" src={selectedAdversary.imageUrl} alt={selectedAdversary.name} />
                <Avatar.Fallback>{selectedAdversary.name[0]}</Avatar.Fallback>
                </Avatar.Root>
                <p class="h-[1.25rem] my-auto">{selectedAdversary.name}</p>
            {:else}
                <p data-placeholder class="h-[1.25rem] my-auto text-muted-foreground font-normal">{placeholder}</p>
            {/if}
        </div>
    </Select.Trigger>
    <Select.Content>
      <Select.Group>
        {#each adversaries as adversary}
          <Select.Item value={adversary.id} label={adversary.name} class="flex gap-2 cursor-pointer"
            ><Avatar.Root>
                <Avatar.Image class="mr-2" src={adversary.imageUrl} alt={adversary.name} />
                <Avatar.Fallback>{adversary.name[0]}</Avatar.Fallback>
            </Avatar.Root>
            <span>{adversary.name}</span>
          </Select.Item>
        {/each}
      </Select.Group>
    </Select.Content>
    <Select.Input name={id} bind:value />
  </Select.Root>