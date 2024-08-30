<script setup>
import NumeralCalculations from './components/NumeralCalculations.vue';
import MouthView from './views/MouthView.vue';
import moneyData from './data/moneyData.json'

const { amountRecord } = moneyData;

</script>

<template>
  <div class="left-recorder">
    <NumeralCalculations></NumeralCalculations>
  </div>
  <div class="display">
    <MouthView :amountRecord="amountRecord"></MouthView>
  </div>
  </template>

<style scoped>
</style>
