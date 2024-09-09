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
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    width: 100%;
    overflow-x: hidden;

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
  
  @media (max-width: 1024px) {
    .background {
      flex-direction: column;
    }
  }
  
  @media (max-width: 720px) {
    .background {
      background-position: 20%;
    }
  }
</style>
