<template>
<div>
    <apexchart type="bar" :options="options" :series="series"></apexchart>
    <v-btn small color="primary" @click="updateChart">Primary</v-btn>
</div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';
export default {
    
    data() {
        return {
        
        options: {
            chart: {
            id: 'vuechart-example'
            },
            xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
            }
        },
        series: [{
            name: 'series-1',
            data: [30, 40, 45, 50, 49, 60, 70, 91]
        }]
        }
    },
    methods: {
        updateChart() {
            const max = 90;
            const min = 20;
            const newData = this.series[0].data.map(() => {
                return Math.floor(Math.random() * (max - min + 1)) + min
            })
            this.options = {
                xaxis:{
                    categories: ['qwe', 123, 'de']
                }
            }
            // In the same way, update the series option
            this.series = [{
                data: newData
            }]
        }
    },
    
}
</script>

<style>

</style>