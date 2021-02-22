<script>
    import { Router, Link, Route } from "svelte-routing";
    import Home from "./routes/About.svelte";

	export let name;
    export let url = "";
</script>


<div class="home">
        <!-- <rectangles /> -->
		<div class="top">
            <img src="@/assets/images/me-selfie.png" alt="" />
			<div class="nav">
                <Router url="{url}">
                    <Link to="about">About</Link>
                    <!-- <Route path="/">/////</Route> -->
                    <Route path="about" component="{About}"/>
                    <!-- <Route path="/webdev">web dev</Route> -->
                    <!-- <Route path="/data">data science</Route> -->
                    <!-- <Route path="/video">video</Route> -->
                    <!-- <Route path="/music">music</Route> -->
                </Router>
			</div>
			<div class="intro">
				<h1>Hello. i like a few things:</h1>
				<p>[or would like to try them]</p>
			</div>
		</div>
        <!-- <timeline /> -->
		<!-- <languages /> -->
		<!-- <Footer /> -->
	</div>