<script setup>
import NumeralCalculations from './components/NumeralCalculations.vue';
import MouthView from './views/MouthView.vue';
import { ref, onMounted } from 'vue';
import { data, fetchData } from './fetch/fetchApi.js'

const show  = ref(true);
const amountRecord = ref(data.value); // 使用ref來監聽響應性數據的變化

const getData = async () => {
  await fetchData("src/data/moneyData.json");
  amountRecord.value = data.value; // 更新本地數據
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
