<script lang="ts">
  import * as Avatar from '../ui/avatar';
  import { SpiritId, spirits, type Spirit } from './spirits';
  import Check from 'lucide-svelte/icons/check';
  import ChevronsUpDown from 'lucide-svelte/icons/chevrons-up-down';
  import * as Command from '$lib/components/ui/command/index.js';
  import * as Popover from '$lib/components/ui/popover/index.js';
  import { Button } from '$lib/components/ui/button/index.js';
  import { cn } from '$lib/utils.js';
  import { tick } from 'svelte';

  interface Props {
    id: string;
    placeholder: string;
    value: SpiritId | undefined;
  }

  let { id, placeholder, value = $bindable() }: Props = $props();

  let open = $state(false);

  let search = $state();

  let selectedSpirit: Spirit | undefined = $derived(spirits.find((s) => s.id === value));

  function closeAndFocusTrigger() {
    open = false;
    tick().then(() => {
      document.getElementById(id)?.focus();
    });
  }
</script>

<Popover.Root bind:open>
  <Popover.Trigger asChild let:builder>
    <Button
      {id}
      builders={[builder]}
      variant="outline"
      role="combobox"
      aria-expanded={open}
      class="h-auto w-full justify-between py-2"
    >
      <div class="flex h-[40px] gap-2">
        {#if selectedSpirit}
          <Avatar.Root>
            <Avatar.Image class="mr-2" src={selectedSpirit.imageUrl} alt={selectedSpirit.name} />
            <Avatar.Fallback>{selectedSpirit.name[0]}</Avatar.Fallback>
          </Avatar.Root>
          <p class="my-auto h-[1.25rem]">{selectedSpirit.name}</p>
        {:else}
          <p data-placeholder class="my-auto h-[1.25rem] font-normal text-muted-foreground">
            {placeholder}
          </p>
        {/if}
      </div>
      <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
    </Button>
  </Popover.Trigger>
  <Popover.Content class="w-[400px] p-0">
    <Command.Root>
      <Command.Input bind:value={search} placeholder="Type to search spirits..." />
      <Command.List>
        <Command.Empty>No spirits found.</Command.Empty>
        {#key search}
          <Command.Group>
            {#each spirits as spirit}
              <Command.Item
                value={spirit.name}
                onSelect={() => {
                  value = spirit.id;
                  closeAndFocusTrigger();
                }}
                class="cursor-pointer"
              >
                <Check class={cn('mr-2 h-4 w-4', value !== spirit.id && 'text-transparent')} />
                <Avatar.Root>
                  <Avatar.Image class="mr-2" src={spirit.imageUrl} alt={spirit.name} />
                  <Avatar.Fallback>{spirit.name[0]}</Avatar.Fallback>
                </Avatar.Root>
                <p class="my-auto ml-2 h-[1.25rem]">{spirit.name}</p>
              </Command.Item>
            {/each}
          </Command.Group>
        {/key}
      </Command.List>
    </Command.Root>
  </Popover.Content>
</Popover.Root>
