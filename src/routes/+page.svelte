<script>
	import InputContainer from './components/InputContainer.svelte'
	import AmountOwed from './components/AmountOwed.svelte'
    import Keypad from './components/Keypad.svelte';
	import { 
		purchaseAmount, 
		billSubtotal, 
		billTotal } from '$lib/stores'

	function updatePurchaseAmount(e) {
		purchaseAmount.update(() => e.detail)
	}

	function updateBillSubtotal(e) {
		billSubtotal.update(() => e.detail)
	}

	function updateBillTotal(e) {
		billTotal.update(() => e.detail)
	}
</script>

<div>
	<InputContainer 
        inputId="purchaseAmount"
		labelText="Purchase amount ($)" 
		on:updateStoreValue={updatePurchaseAmount}
	/>
	<InputContainer 
        inputId="billSubtotal"
		labelText="Bill subtotal ($)" 
		on:updateStoreValue={updateBillSubtotal}
	/>
	<InputContainer 
        inputId="billTotal"
		labelText="Bill total + tip ($)" 
		on:updateStoreValue={updateBillTotal}
	/>
	<AmountOwed />
    <Keypad />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
        align-items: center;
        width: 340px;
        height: 780px;
	}

    @media only screen and (max-height: 812px) {
        div {
            width: 260px;
            height: 600px;
        }
    }
</style>