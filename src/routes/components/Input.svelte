<script>
	import { createEventDispatcher } from 'svelte'
    import { activeInput, activeInputId } from '$lib/stores'

    export let inputId
    
	const dispatch = createEventDispatcher()
	
	let value
    let inputElement

    $: if (inputElement) {
        if (inputElement.id === $activeInputId) {
            activeInput.set(inputElement)
            inputElement.focus()
        }
    }

	function updateStoreValue() {
		dispatch('updateStoreValue', value)
	}

    function updateActiveInput(e) {
        activeInputId.update(() => e.target.id)
    }
</script>

<input
    readonly
    id={inputId}
	type="text"
	placeholder="0.00"
    bind:this={inputElement}
	bind:value={value}
	on:input={updateStoreValue}
    on:focus={updateActiveInput}
/>

<style>
	input {
		color: #555;
		font-size: 2rem;
        font-weight: 500;
		padding: 1.5rem;
		border: none;
        border-radius: 0.5rem;
		background: #eee;
		text-align: center;
        margin: 0 0 0.5rem 0;
        width: 100%;
	}

	input:focus {
		outline: 2px solid darkseagreen;
	}

	input::placeholder {
		color: #aaa;
	}

    @media only screen and (max-height: 812px) {
        input {
            font-size: 1.5rem;
            padding: 1.5rem 1rem 1rem;
        }
    }
</style>
	