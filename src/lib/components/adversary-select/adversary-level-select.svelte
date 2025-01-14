<script lang="ts">
  import * as ToggleGroup from '$lib/components/ui/toggle-group';
  import { type Adversary } from './adversaries';

  interface Props {
    adversary: Adversary | undefined;
    value: number | undefined;
  }

  let { adversary, value = $bindable() }: Props = $props();
</script>

<ToggleGroup.Root
  size="sm"
  bind:value={() => (value === undefined ? undefined : `${value}`),
  (v) => (value = v === undefined || v === null ? undefined : parseInt(v))}
  type="single"
  disabled={adversary === undefined}
  class="justify-end"
>
  <ToggleGroup.Item value="0">B</ToggleGroup.Item>
  <ToggleGroup.Item value="1">1</ToggleGroup.Item>
  <ToggleGroup.Item value="2">2</ToggleGroup.Item>
  <ToggleGroup.Item value="3">3</ToggleGroup.Item>
  <ToggleGroup.Item value="4">4</ToggleGroup.Item>
  <ToggleGroup.Item value="5">5</ToggleGroup.Item>
  <ToggleGroup.Item value="6">6</ToggleGroup.Item>
</ToggleGroup.Root>
