<template>
	<section id="user-input">
		<div class="input-group">
			<p>
				<label>Initial investment</label>
				<input
					type="number"
					v-model="userInput.initialInvestment"
					required
					@change="
						handleChange('initialInvestment', userInput.initialInvestment)
					"
				/>
			</p>
			<p>
				<label>Annual investment</label>
				<input
					type="number"
					v-model="userInput.annualInvestment"
					required
					@change="handleChange('annualInvestment', userInput.annualInvestment)"
				/>
			</p>
		</div>
		<div class="input-group">
			<p>
				<label for="">Expected return</label>
				<input
					type="number"
					v-model="userInput.expectedReturn"
					required
					@change="handleChange('expectedReturn', userInput.expectedReturn)"
				/>
			</p>
			<p>
				<label>Duration</label>
				<input
					type="number"
					v-model="userInput.duration"
					required
					@change="handleChange('duration', userInput.duration)"
				/>
			</p>
		</div>
	</section>
</template>

<script setup>
import { ref } from "vue"

// const { userInput } = defineProps(["userInput"])
const userInput = ref({
	initialInvestment: 10000,
	annualInvestment: 1200,
	expectedReturn: 6,
	duration: 10,
})

function handleChange(inputIdentifire, newValue) {
	console.log(userInput.value)
	return {
		...userInput,
		[inputIdentifire]: newValue,
	}
}

console.log(userInput.value)
</script>

<style lang="scss" scoped></style>
