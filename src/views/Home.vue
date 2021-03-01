<template>
	<div class="home">

		<div class="top">
			<img src="@/assets/images/me-selfie.png" alt="" />
			<div class="nav">
				<router-link to="/">/////</router-link>
				<router-link to="/webdev">web dev</router-link>
				<router-link to="/data">data science</router-link>
				<router-link to="/video">video</router-link>
				<router-link to="/music">music</router-link>
			</div>
			<div class="intro">
				<h1>Hello. i like a few things:</h1>
				<p>[or would like to try them]</p>
			</div>
		</div>
        <timeline />
		<!-- <languages /> -->
    </div>
</template>

<script>
// import languages from "@/components/languages.vue";

import timeline from "@/components/timeline.vue";

export default {
	name: "Home",
	components: {
		// languages,
        timeline
	},
};
</script>

<style lang="scss" scoped>
.top {
    display: flex;
    flex-direction: row;
    justify-content: center;
    & > * {
        padding: 2.6rem;
        }
	.intro {
		h1 {
			margin: 0;
            padding-bottom: 1.6rem;
            max-width: 53rem;
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
        margin-top: 8rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 7px 21px;

		a {
			padding-bottom: 4rem;
		}
	}
}
</style>
