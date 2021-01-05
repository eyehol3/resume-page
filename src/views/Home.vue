<template>
	<div class="home">
        <h1>Lolmadf</h1>
		<div class="nav">
			<router-link to="/">/////</router-link>
			<router-link to="/webdev">web dev</router-link>
			<router-link to="/bigdata">bigdata</router-link>
			<router-link to="/video">video</router-link>
			<router-link to="/music">music</router-link>
		</div>
		<languages/>
        <contact/>
	</div>
</template>

<script>
import languages from "@/components/languages.vue";
import contact from "@/components/contact.vue";

export default {
	name: "Home",
	components: {
        languages,
        contact,
	},
};
</script>

<style lang="scss">
.nav {
	display: flex;
	flex-direction: column;
}
</style>
