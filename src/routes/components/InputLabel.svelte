<script>
	export let text
    export let inputId
</script>

<label for={inputId} >{text}</label>

<style>
	label {
		position: absolute;
		top: 6px;
		left: 8px;
		font-size: 11px;
		font-weight: 500;
		color: #8f8f8f;
		font-variant: all-small-caps;
		letter-spacing: 0.05em;
	}

    @media only screen and (max-height: 812px) {
        label {
            font-size: 10px;
        }
    }
</style>