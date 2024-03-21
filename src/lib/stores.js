import { writable } from 'svelte/store'

const purchaseAmount = writable(0)
const billSubtotal = writable(0)
const billTotal = writable(0)
const activeInputId = writable('purchaseAmount')
const activeInput = writable(null)

export {
	purchaseAmount,
	billSubtotal,
	billTotal,
    activeInputId,
    activeInput
}