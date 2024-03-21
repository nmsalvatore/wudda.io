<script>
    import BackspaceIcon from './BackspaceIcon.svelte'
    import { 
		purchaseAmount, 
		billSubtotal, 
		billTotal,
        activeInput,
        activeInputId } from '$lib/stores'

    function handleKeyMousedown() {
        $activeInput.value = $activeInput.value.slice(0, -1)
        updateInputValueStore($activeInput.value)
    }

    function updateInputValueStore(val) {
        if ($activeInputId === 'purchaseAmount') {
            purchaseAmount.update(() => val)
        }

        if ($activeInputId === 'billSubtotal') {
            billSubtotal.update(() => val)
        }

        if ($activeInputId === 'billTotal') {
            billTotal.update(() => val)
        }
    }
</script>

<button 
    class="delete"
    on:mousedown|preventDefault={() => handleKeyMousedown()}
>
    <BackspaceIcon />
</button>

<style>
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
        border: none;
        box-shadow: 0 1px 8px -6px;
        color: #6f6f6f;
        border-radius: 1.5rem;
        font-size: 1.25rem;
        font-weight: 500;
    }

    @media only screen and (max-height: 812px) {
        button {
            border-radius: 1rem;
        }
    }
</style>