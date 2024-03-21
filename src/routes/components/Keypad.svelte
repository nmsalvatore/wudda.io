<script>
    import ValueKey from './ValueKey.svelte'
    import DeleteKey from './DeleteKey.svelte'
</script>

<div class="keypad">
    {#each [1,2,3,4,5,6,7,8,9,0] as number}
        <ValueKey val={number} />
    {/each}

    <ValueKey val="." />
    <DeleteKey />
</div>

<style>
    div {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(4, 1fr);
        height: 100%;
        width: 100%;
        padding: 0.5rem 2rem 0 2rem;
        gap: 1rem;
    }

    @media only screen and (max-height: 812px) {
        div {
            gap: 0.5rem;
        }
    }
</style>