<script>
	import { createEventDispatcher } from 'svelte'
	import Input from './Input.svelte'
	import InputLabel from './InputLabel.svelte'
	
	export let labelText
    export let inputId

	const dispatch = createEventDispatcher()

	function updateStoreValue(e) {
		dispatch('updateStoreValue', e.detail)
	}
</script>

<div>
	<InputLabel 
        {inputId} 
        text={labelText} 
    />
	<Input 
        {inputId} 
        on:updateStoreValue={updateStoreValue} 
    />
</div>

<style>
	div {
		position: relative;
	}
</style>