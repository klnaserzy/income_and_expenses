<script setup>
import NumeralCalculations from './components/NumeralCalculations.vue';
import MouthView from './views/MonthView.vue';
import { ref, onMounted } from 'vue';
import { data, fetchData } from './fetch/fetchApi.js'

const show  = ref(true);
const amountRecord = ref(data.value);

const getData = async () => {
  await fetchData("data/moneyData.json");
  amountRecord.value = data.value;
};

onMounted(() => {
  getData();
})

</script>

<template>
  <button @click="show = !show">{{ show ? "hidden" : "show" }}</button>
  <div class="background">
    <div v-show="show" class="left-recorder">
      <NumeralCalculations></NumeralCalculations>
    </div>
    <div v-show="show" class="display">
      <MouthView :amountRecordProp="amountRecord"></MouthView>
    </div>
  </div>
</template>

<style scoped>
  .background  {
    background-image: url("@/assets/cat.jpg");
    background-position: 50%;
    width: 100vw;
    background-size: cover;

    display: flex;
  }

  button {
    position: absolute;
    background-color: transparent;
    border: none;
    margin: 10px;
  }

  
  button:hover {
    cursor: pointer;
  }
</style>
