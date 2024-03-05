<template>
	<table id="result">
		<thead>
			<tr>
				<th>Year</th>
				<th>Investment Value</th>
				<th>Interest</th>
				<th>Total Interest</th>
				<th>Invested Capital</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="yearData in resultData" :key="yearData.year">
				<td>{{ yearData.year }}</td>
				<td>{{ formatter.format(yearData.valueEndOfYear) }}</td>
				<td>{{ formatter.format(yearData.interest) }}</td>
				<td>
					{{
						formatter.format(
							calculateTotalInterest(
								yearData.valueEndOfYear,
								yearData.annualInvestment,
								yearData.year,
								initialInvestment.value
							)
						)
					}}
				</td>
				<td>
					{{
						formatter.format(
							calculateInvestedCapital(
								yearData.valueEndOfYear,
								calculateTotalInterest(
									yearData.valueEndOfYear,
									yearData.annualInvestment,
									yearData.year,
									initialInvestment.value
								)
							)
						)
					}}
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script setup>
import { ref, onMounted, watchEffect } from "vue"
import { useInvestmentStore } from "../store/investmentStore"

import { calculateInvestmentResults, formatter } from "../util/investment"
const investmentStore = useInvestmentStore()
let resultData = ref()
let initialInvestment = ref(0)

onMounted(() => {
	resultData.value = calculateInvestmentResults(investmentStore.userInput)
	calculateData()
})

watchEffect(() => {
	resultData.value = calculateInvestmentResults(investmentStore.userInput)
	calculateData()
})

function calculateData() {
	if (resultData.value.length > 0) {
		initialInvestment.value =
			resultData.value[0].valueEndOfYear -
			resultData.value[0].annualInvestment -
			resultData.value[0].interest
	}
}

function calculateTotalInterest(valueEndOfYear, annualInvestment, year) {
	return valueEndOfYear - annualInvestment * year - initialInvestment.value
}

function calculateInvestedCapital(valueEndOfYear, totalInterest) {
	return valueEndOfYear - totalInterest
}
</script>
