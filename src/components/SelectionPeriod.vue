<script setup>
    import { computed, ref, watch } from "vue";

    const years = ref([]);
    const months = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    const time = new Date();
    const nowYear = time.getFullYear();
    const nowMonth = time.getMonth() + 1;
    const selectedYear = ref(nowYear);
    const selectedMonth = ref(nowMonth);
    
    const lastDay = computed(() => {
        return new Date(selectedYear.value, selectedMonth.value, 0).getDate();
    })
    
    for(let i = nowYear; i >= 0; --i) {
        years.value.push(i);
    }

    const emit = defineEmits(["year", "month", "lastDay"]);
    watch(selectedYear, (selectedYear) => {
        emit("year", selectedYear);
        emit("lastDay", lastDay.value);
    });

    watch(selectedMonth, (selectedMonth) => {
        emit("month", selectedMonth);
        emit("lastDay", lastDay.value);
    });
</script>

<template>
    <select v-model="selectedYear">
        <option v-for="year in years" :value="year" :key="year">{{ year }}</option>
    </select>
    <select v-model="selectedMonth">
        <option v-for="month in months" :value="month" :key="month">{{ month }}</option>
    {{ selectedYear }}
    </select>
</template>

<style scoped>
    select {
        margin-left: 10px;
    }
</style>