<script lang="ts">
  import { Input } from '../ui/input';
  import { Label } from '../ui/label';
  import { Switch } from '../ui/switch';

  interface Props {
    difficulty: number;
    spiritCount: number;
  }

  let victory: boolean = $state(true);
  let remainingInvaderCards: number | undefined = $state(undefined);
  let revealedInvaderCards: number | undefined = $state(undefined);
  let remainingDahan: number | undefined = $state(undefined);
  let blightOnIsland: number | undefined = $state(undefined);

  let { difficulty, spiritCount: playerCount }: Props = $props();

  let score: number | undefined = $derived(
    calculateScore(
      difficulty,
      playerCount,
      victory,
      remainingInvaderCards,
      revealedInvaderCards,
      remainingDahan,
      blightOnIsland
    )
  );

  function calculateScore(
    difficulty: number,
    playerCount: number,
    victory: boolean,
    remainingInvaderCards: number | undefined,
    revealedInvaderCards: number | undefined,
    remainingDahan: number | undefined,
    blightOnIsland: number | undefined
  ): number | undefined {
    let score: number;

    if (remainingDahan === undefined || blightOnIsland === undefined) {
      return undefined;
    }

    if (victory) {
      if (remainingInvaderCards === undefined) {
        return undefined;
      }

      score = 5 * difficulty + 10 + 2 * remainingInvaderCards;
    } else {
      if (revealedInvaderCards === undefined) {
        return undefined;
      }

      score = 2 * difficulty + 1 * revealedInvaderCards;
    }

    const dahanBonus = Math.floor(remainingDahan / playerCount);
    const blightPenalty = Math.floor(blightOnIsland / playerCount);

    return score + dahanBonus - blightPenalty;
  }
</script>

<div class="flex flex-col gap-2">
  <div class="flex items-center space-x-2">
    <Switch
      bind:checked={victory}
      id="victory-toggle"
      class="data-[state=checked]:bg-green-400 data-[state=unchecked]:bg-red-400">Victory</Switch
    >
    <Label for="victory-toggle" class="cursor-pointer">Victory</Label>
    <p class="my-auto text-sm">+{victory ? 5 * difficulty + 10 : 2 * difficulty} points</p>
  </div>

  <div>
    {#if victory}
      <label class="text-sm font-medium leading-none" for="">Invader Cards remaining in deck</label>
      <div class="flex gap-3">
        <Input bind:value={remainingInvaderCards} class="w-[100px]" type="number" />
        {#if remainingInvaderCards !== undefined}
          <p class="my-auto text-sm">+{remainingInvaderCards} points</p>
        {/if}
      </div>
    {:else}
      <label class="text-sm font-medium leading-none" for="">Invader Cards not in deck</label>
      <div class="flex gap-3">
        <Input bind:value={revealedInvaderCards} class="w-[100px]" type="number" />
        {#if revealedInvaderCards !== undefined}
          <p class="my-auto text-sm">+{revealedInvaderCards} points</p>
        {/if}
      </div>
    {/if}
  </div>

  <div>
    <label class="text-sm font-medium leading-none" for="">Dahan remaining on island</label>
    <div class="flex gap-3">
      <Input bind:value={remainingDahan} class="w-[100px]" type="number" />
      {#if remainingDahan !== undefined}
        <p class="my-auto text-sm">-{Math.floor(remainingDahan / playerCount)} points</p>
      {/if}
    </div>
  </div>

  <div>
    <label class="text-sm font-medium leading-none" for="">Blight on island</label>
    <div class="flex gap-3">
      <Input bind:value={blightOnIsland} class="w-[100px]" type="number" />
      {#if blightOnIsland !== undefined}
        <p class="my-auto text-sm">-{Math.floor(blightOnIsland / playerCount)} points</p>
      {/if}
    </div>
  </div>

  <p class="text-lg font-semibold">Score: {score === undefined ? 'TBD' : score}</p>
</div>
