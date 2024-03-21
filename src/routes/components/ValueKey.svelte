<script>
    import { 
		purchaseAmount, 
		billSubtotal, 
		billTotal,
        activeInput,
        activeInputId } from '$lib/stores'

    export let val
    export let className = ''

    function handleKeyMousedown(val) {
        $activeInput.value += val
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
    class:delete={className === 'delete'} 
    on:mousedown|preventDefault={() => handleKeyMousedown(val)}
>
    {val}
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
        font-size: 1.5rem;
        font-weight: 500;
    }

    @media only screen and (max-height: 812px) {
        button {
            border-radius: 1rem;
            font-size: 1rem;
        }
    }
</style>