<template>
	<h1>Web dev</h1>
	<h2>skills</h2>
	<div class="chart">
		<PolarAreaChart />
		<!-- <WebSkillsChart/> -->
	</div>
	<div class="text-content">
		<h2>~portfolio</h2>

		<ul>
			<li>
				currently working on interactive menu for cafés (React.js +
				django) [no site yet]
			</li>
			<li>
				designer of
				<a href="https://best-lviv.org.ua/btw/">BEST Traninig Week</a>
				(2020)
			</li>
			<li>
				personal blog connected to dropbox - update to markdown document
				in your dropbox triggers site build (2020)
			</li>
		</ul>
		<!-- <a href="#" class="link" -->
        <router-link to="/">
			<h2>
				about me
			</h2>
        </router-link>
		<!-- </a> -->
	</div>
</template>

<script>
import PolarAreaChart from "../components/PolarAreaChart.vue";

export default {
	components: { PolarAreaChart },
	name: "WebDev",
	data() {
		return {
			chartData: {
				labels: ["HTML", "js", "css", "react", "vue", "sql", "django"],
				datasets: [
					{
						label: "skillz",
						data: [80, 50, 60, 80, 20, 70, 65],
					},
				],
			},
		};
	},

	// modules: {
	// PolarAreaChart
	// }
};
</script>
<style lang="scss" scoped>
h1 {
	text-align: center;
    margin-bottom: 3rem;
}
</style>
