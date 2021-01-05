<template>
	<div class="home">
    <rectangles />
		<div class="intro">
			<h1>Hello. i like a few things:</h1>
			<p>[or would like to try them]</p>
		</div>
		<img src="@/assets/images/me-selfie.png" alt="" />
		<div class="nav">
			<router-link to="/">/////</router-link>
			<router-link to="/webdev">web dev</router-link>
			<router-link to="/data">data science</router-link>
			<router-link to="/video">video</router-link>
			<router-link to="/music">music</router-link>
		</div>
		<languages />
		<Footer />
	</div>
</template>

<script>
import languages from "@/components/languages.vue";
import Footer from "@/components/footer.vue";
import rectangles from "@/components/rectangles.vue";

export default {
	name: "Home",
	components: {
		languages,
        Footer,
        rectangles,
	},
};
</script>

<style lang="scss" scoped>
.intro {
	h1 {
		margin: 0;
		padding-bottom: 1.6rem;
	}
	p {
		margin: 0;
	}
}
img {
	mix-blend-mode: color-dodge;
	// opacity: 0.6;
}
.nav {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 7px 21px;

	a {
		padding-bottom: 4rem;
	}
}
</style>
