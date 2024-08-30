<script setup>
    import { ref } from 'vue';
    import SelectionPeriod from "../components/SelectionPeriod.vue"

    const time = new Date();
    const nowYear = time.getFullYear();
    const nowMonth = time.getMonth() + 1;
    const year = ref(nowYear);
    const month = ref(nowMonth);
    const lastDay = ref(new Date(year.value, month.value, 0).getDate());
    const props = defineProps({
        amountRecord: Object
    });
    const incomeAndExpenses = ref();

    const changeYear = (selectedYear, selectedLastDay) => {
        year.value = selectedYear;
        lastDay.value = selectedLastDay;
        changeIncomeAndExpenses();
    }

    const changeMonth = (selectedMonth, selectedLastDay) => {
        month.value = selectedMonth;
        lastDay.value = selectedLastDay;
        changeIncomeAndExpenses();
    }

    const changeIncomeAndExpenses = () => {
        console.log(props.amountRecord["y" + year.value]["month"][month.value]["13"]);
        console.log(props.amountRecord["y" + year.value]["month"][month.value]);
    }

    

</script>

<template>
    <div class="date">
        <SelectionPeriod 
            @year="(selectedYear, selectedLastDay) => changeYear(selectedYear, selectedLastDay)" 
            @month="(selectedMonth, selectedLastDay) => changeMonth(selectedMonth, selectedLastDay)"
            @lastDay="(selectedLastDay) => lastDay = selectedLastDay"
        ></SelectionPeriod>
        <h1>{{ year }}年</h1>
        <h1>{{ month }}月</h1>
    </div>
    <div class="mouthContainer">
        <div class="day" v-for="day in lastDay" :key="day">
            <p style="text-align: right; padding-right: 5px; font-weight: 700;">{{ day }}</p>
            <div class="assetDetails" v-for="asset in 10" :key="asset">
            </div>
        </div>
    </div>
</template>

<style scoped>
    .date {
        text-align: right;
    }

    h1 {
        display: inline;
        margin-left: 20px;
    }

    .mouthContainer {
        padding: 30px;
        background-color: #888;
        width: 70vw;
        height: 80vh;
        gap: 10px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    }

    .day {
        background-color: aqua;
    }
</style> 