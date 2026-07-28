<script lang="ts">
    interface Props {
        data: number[]
        textA: string
        textB: string
    }
    let {data, textA, textB}: Props = $props();

    let isReversed = $state(false)
</script>


<div class="py-6 md:py-0">
    <div class="w-[384px] mx-auto flex justify-between">
        <div class="flex gap-2 items-center py-4">
            <div class="w-4 h-4 colorA"></div>
            <p>{isReversed ? textB : textA}</p>
            <div class="w-4 h-4 colorB"></div>
            <p>{isReversed ? textA : textB}</p>
        </div>
        <button onclick={() => isReversed = !isReversed} title="swap" class="pr-2 md:pr-0">
            <i class="ph ph-swap text-xl"></i>
        </button>
    </div>
    
    <div class="grid-container mx-auto">
        {#each data as num}
            {#if num === 1 && !isReversed}
                <div class="w-3 h-3 colorA"></div>
            {:else if num === 1 && isReversed}
                <div class="w-3 h-3 colorB"></div>
            {:else if num === 0 && !isReversed}
                <div class="w-3 h-3 colorB"></div>
            {:else if num === 0 && isReversed}
                <div class="w-3 h-3 colorA"></div>
            {/if}
        {/each}
    </div>
</div>


<style>
.grid-container {
    width: 384px;
    display: grid;
    grid-template-columns: repeat(32, minmax(0, 1fr));
    grid-template-rows: repeat(32, minmax(0, 1fr));
    gap: 0
}

.colorA {
background-color: #1B4EF5;
}
.colorB {
background-color: #F4CEFF;
}
</style>
