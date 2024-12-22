<script lang="ts">
	import * as Avatar from "../ui/avatar";
    import * as Select from "../ui/select";
	import { SpiritId, spirits, type Spirit } from "./spirits";

    interface Props {
        id: string;
        placeholder: string;
        value: SpiritId | undefined;
    }

    let { id, placeholder, value = $bindable() }: Props = $props();

    let selectedSpirit: Spirit | undefined = $derived(spirits.find(s => s.id === value))

</script>

<Select.Root portal={null} selected={{ value: selectedSpirit?.id, label: selectedSpirit?.name }} onSelectedChange={newValue => value = newValue?.value as SpiritId}>
    <Select.Trigger class="w-full">
      <Select.Value {placeholder} />
    </Select.Trigger>
    <Select.Content>
      <Select.Group>
        {#each spirits as spirit}
          <Select.Item value={spirit.id} label={spirit.name} class="flex gap-2 cursor-pointer"
            ><Avatar.Root>
                <Avatar.Image class="mr-2" src={spirit.imageUrl} alt={spirit.name} />
                <Avatar.Fallback>{spirit.name[0]}</Avatar.Fallback>
            </Avatar.Root><span>{spirit.name}</span></Select.Item
          >
        {/each}
      </Select.Group>
    </Select.Content>
    <Select.Input name={id} bind:value />
  </Select.Root>