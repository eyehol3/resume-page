<template>
	<div class="chart-container">
		<canvas ref="chartRef" id="chart"></canvas>
	</div>
</template>

<script>
import Chart from "chart.js";
import { ref, onMounted } from "vue";

export default {
	name: "webSkillsChart",
	setup() {
		const chartRef = ref(null);
		const chartData = {
			labels: ["HTML", "js", "css", "react", "vue", "sql", "django"],
			datasets: [
				{
					label: "skillz",
					data: [80, 60, 60, 80, 20, 70, 45],
					backgroundColor: [
						"#F07540",
						"#F8E438",
						"#389BF8",
						"#51DDD5",
						"#24C17C",
						"#3E7FB1",
						"#107950",
					],
					borderColor: "rgba(0,0,0,0)",
					// 	backgroundColor: function(context) {
					// 		var index = context.dataIndex;
					// 		var value = context.dataset.data[index];
					// 		return value < 0
					// 			? "red" // draw negative values in red
					// 			: index % 2
					// 			? "blue" // else, alternate values in blue and green
					// 			: "green";
					// 	},
				},
			],
		};
		onMounted(() => {
			// the DOM element will be assigned to the ref after initial render
			// console.log(chartRef);
			let ctx = chartRef.value.getContext("2d");
			new Chart(ctx, {
				// 	new Chart(this.$refs.["chart"], {
				// The type of chart we want to create
				type: "polarArea",

				// The data for our dataset
				data: chartData,

				// Configuration options go here
				options: {
					maintainAspectRatio: false,
					scale: {
						display: false,
					},
					legend: {
						// display: false,
						labels: {
							fontColor: "#F1E8D2",
						},
					},
				},
			});
		});

		return {
			chartRef,
		};
	},
};
</script>

<style lang="scss">
.chart-container {
	position: relative;
	// max-height: 500px;
	height: 300px;
}
</style>
