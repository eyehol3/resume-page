<template>
	<rectangles />

	<router-view />
	<Footer />
</template>

<script>
import Footer from "@/components/footer.vue";
import rectangles from "@/components/rectangles.vue";
export default {
    components: {
        Footer,
        rectangles,
    }
}
</script>

<style lang="scss">
#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

a {
	font-weight: bold;
	color: $font-cl;
	//   padding: 30px;
}
</style>
