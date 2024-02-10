<template>
	<div>
		<Header />
		<UserInput :userInput="userInput" />
		<Results />
	</div>
</template>

<script setup>
import Header from "./components/Header.vue"
import Results from "./components/Results.vue"
import UserInput from "./components/UserInput.vue"
import { ref } from "vue"
</script>

<style scoped></style>
