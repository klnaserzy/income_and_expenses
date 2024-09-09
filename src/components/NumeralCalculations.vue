<script setup>
    
</script>

<template>
    <div class="assetRecords">
        <div class="expensesMonth grid">
            <h1>本月支出</h1>
            <p>20000</p>
        </div>
        <div class="divider"></div>
        <div class="incomeMonth grid">
            <h1>本月收入</h1>
            <p>25000</p>
        </div>
        <div class="divider"></div>
        <div class="netIncome grid">
            <h1>淨收入</h1>
            <p>+5000</p>
        </div>
    </div>
</template>

<style scoped>
    .assetRecords {
        width: 20vw;
        height: 100%;
        margin: 0 30px 0 30px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    h1, p {
        text-align: center;
        font-size: 1.8rem;
        margin: 0;
        word-break: keep-all;
    }

    .grid {
        margin: 40px auto 60px auto;
    }

    .divider {
        border: 1px solid #000;
        width: 100%;
    }

    @media (max-width: 1024px) {
        .assetRecords {
            flex-direction: row;
            margin: 0;
            padding: 0;
            justify-content: space-around;
            width: 100vw;
            gap: 10px;
        }

        .divider {
            display: none;
        }

        .grid {
            margin: 10px auto 10px auto;
        }
    }

    @media (max-width: 400px) {
        h1, p {
            font-size: 1.4rem;
        }
    }
</style>