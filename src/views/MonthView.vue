<script setup>
    import { ref, defineProps, computed } from 'vue';
    import SelectionPeriod from "../components/SelectionPeriod.vue"

    const time = new Date();
    const nowYear = time.getFullYear();
    const nowMonth = time.getMonth() + 1;
    const year = ref(nowYear);
    const month = ref(nowMonth);
    const lastDay = ref(new Date(year.value, month.value, 0).getDate());
    const props = defineProps({
        amountRecordProp: Object
    });
    const wholeMonthData = computed(() => props.amountRecordProp?.["y" + year.value]?.[month.value] || 0);
    const monthIncomeAndExpenses = computed(() => {
        const monthData = [];
        Object.values(wholeMonthData.value).map(daily => {
            const dailyData = [];
            dailyData.push(...Object.keys(daily.income));
            dailyData.push(...Object.keys(daily.expenses));
            monthData.push(dailyData);
        })
        return monthData;
    });
    const simpleMonth = computed(() => 
        monthIncomeAndExpenses.value.map(dailyArr => 
            dailyArr.filter((data, index) => index < 4)
        )
    )
    
    const changeYear = (selectedYear, selectedLastDay) => {
        year.value = selectedYear;
        lastDay.value = selectedLastDay;
    }

    const changeMonth = (selectedMonth, selectedLastDay) => {
        month.value = selectedMonth;
        lastDay.value = selectedLastDay;
    }
</script>

<template>
    <div class="calendar">
        <div class="date">
            <SelectionPeriod 
                @year="(selectedYear, selectedLastDay) => changeYear(selectedYear, selectedLastDay)" 
                @month="(selectedMonth, selectedLastDay) => changeMonth(selectedMonth, selectedLastDay)"
                @lastDay="(selectedLastDay) => lastDay = selectedLastDay"
            ></SelectionPeriod>
        </div>
        <div class="monthContainer">
            <div class="day" v-for="day, index in simpleMonth" :key="index">
                <p style="text-align: right; padding-right: 5px; font-weight: 700;">{{ index + 1 }}</p>
                <div class="assetDetails" v-for="asset, index in day" :key="asset">
                <p class="dailyAmountUsed">{{ index < 3 ? 
                                                asset : index > 3 ? 
                                                    "" : "..."}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .date {
        text-align: right;
        padding-top: 20px;
    }

    h1 {
        display: inline;
        margin-left: 20px;
        word-wrap: nowrap;
    }

    .monthContainer {
        padding: 30px;
        background-color: #88888800;
        width: 70vw;
        height: 80vh;
        gap: 10px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    }

    .day {
        background-color: rgba(0, 255, 255, 0.39);
    }

    .day:hover {
        background-color: rgba(0, 255, 255, 0.642);
    }
    
    .dailyAmountUsed {
        font-size: 0.6em;
    }

    @media (max-width: 1024px) {
        .monthContainer {
            width: 100vw;
        }
        .date {
            padding-top: 0px;
        }
    }

    @media (max-width: 720px) {
        .monthContainer {
            gap: 0px;
            padding: 0 5px 0 5px;
            height: 40vh;
        }
        .day {
            border: 1px solid #777777;
        }
        h1 {
            font-size: 1.6rem;
        }
    }
</style> 