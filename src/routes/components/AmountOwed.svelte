<script>	
	import { 
		purchaseAmount, 
		billSubtotal, 
		billTotal } from '$lib/stores'
	
	$: amountOwed = calculateAmountOwed($purchaseAmount, $billSubtotal, $billTotal)
	
	function calculateAmountOwed(purchaseAmount, billSubtotal, billTotal) {
		const portion = purchaseAmount / billSubtotal
		const amountOwed = billTotal * portion

    if (isNaN(amountOwed) || !isFinite(amountOwed) || billSubtotal > billTotal) {
      return '0.00'
    }

    return amountOwed.toFixed(2)
	}
</script>

<span>${amountOwed}</span>

<style>
	span {
		color: #80b380;
		font-size: 3rem;
		font-weight: 600;
		margin: 3rem auto;
	}

    @media only screen and (max-height: 812px) {
        span {
            margin: 2rem auto;
        }
    }
</style>