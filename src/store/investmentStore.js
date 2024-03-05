import { defineStore } from "pinia"

export const useInvestmentStore = defineStore("investmentStore", {
	state: () => ({
		userInput: {
			initialInvestment: 10000,
			annualInvestment: 1200,
			expectedReturn: 6,
			duration: 10,
		},
	}),
	getters: {
		r() {
			return this.userInput
		},
	},
	actions: {
		handleChange(inputIdentifire, newValue) {
			return {
				...this.userInput,
				[inputIdentifire]: +newValue,
			}
		},
	},
})
