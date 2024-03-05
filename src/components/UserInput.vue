<template>
	<section id="user-input">
		<div class="input-group">
			<p>
				<label>Initial investment</label>
				<input
					type="number"
					v-model="investmentStore.userInput.initialInvestment"
					required
					@change="
						investmentStore.handleChange(
							'initialInvestment',
							investmentStore.userInput.initialInvestment
						)
					"
				/>
			</p>
			<p>
				<label>Annual investment</label>
				<input
					type="number"
					v-model="investmentStore.userInput.annualInvestment"
					required
					@change="
						investmentStore.handleChange(
							'annualInvestment',
							investmentStore.userInput.annualInvestment
						)
					"
				/>
			</p>
		</div>
		<div class="input-group">
			<p>
				<label for="">Expected return</label>
				<input
					type="number"
					v-model="investmentStore.userInput.expectedReturn"
					required
					@change="
						investmentStore.handleChange(
							'expectedReturn',
							investmentStore.userInput.expectedReturn
						)
					"
				/>
			</p>
			<p>
				<label>Duration</label>
				<input
					type="number"
					v-model="investmentStore.userInput.duration"
					required
					@change="
						investmentStore.handleChange(
							'duration',
							investmentStore.userInput.duration
						)
					"
				/>
			</p>
		</div>
	</section>
</template>

<script setup>
import { useInvestmentStore } from "../store/investmentStore"
const investmentStore = useInvestmentStore()
</script>
