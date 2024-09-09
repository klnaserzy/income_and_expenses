<script setup>
    import { computed, ref, watch } from "vue";

    const years = ref([]);
    const months = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    const time = new Date();
    const nowYear = time.getFullYear();
    const nowMonth = time.getMonth() + 1;
    const selectedYear = ref(nowYear);
    const selectedMonth = ref(nowMonth);
    const emit = defineEmits(["year", "month", "lastDay"]);
    
    const lastDay = computed(() => {
        return new Date(selectedYear.value, selectedMonth.value, 0).getDate();
    })
    
    for(let i = nowYear; i >= 0; --i) {
        years.value.push(i);
    }

    watch(selectedYear, (newVal) => {
        emit("year", newVal);
        emit("lastDay", lastDay.value);
    });

    watch(selectedMonth, (newVal) => {
        emit("month", newVal);
        emit("lastDay", lastDay.value);
    });
</script>

<template>
    <select v-model="selectedYear">
        <option v-for="year in years" :value="year" :key="year">{{ year }}</option>
    </select>
    <p>年</p>
    <select v-model="selectedMonth">
        <option v-for="month in months" :value="month" :key="month">{{ month }}</option>
    {{ selectedYear }}
    </select>
    <p>月</p>
</template>

<style scoped>
    select {
        margin-left: 10px;
    }
    p {
        display: inline;
        padding-left: 5px;
    }
    p, select {
        font-size: 1.6rem;
    }

    @media (max-width: 400px) {
        p, select {
            font-size: 1rem;
        }
    }
</style>