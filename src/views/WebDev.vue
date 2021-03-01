<template>
    <h1>Web developement</h1>
    <div class="chart">
        <PolarAreaChart/>
        <!-- <WebSkillsChart/> -->
    </div>
</template>


<script>

import PolarAreaChart from '../components/PolarAreaChart.vue'

export default {
  components: { PolarAreaChart },
    name: "WebDev",
    data() {
        return {
            chartData: {
                labels: ['HTML', 'js', 'css', 'react', 'vue','sql', 'django'],
                datasets: [{
                    label: 'skillz',
                    data: [80,50,60,80,20,70,65]
                }]
            }
        }
    },

    // modules: {
        // PolarAreaChart
    // }
}
</script>