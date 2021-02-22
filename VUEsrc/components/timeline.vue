
<template>
<h2>Timeline</h2>
<div class="timeline">

    <pre class="tree">.
├─ 2021 ─ 
│ 
├─ 2020 ─ 
│ 
├─ 2019 ─ 
│
│ 
├─ 2015 ─  
│  
└─ 2001 ─ </pre>
<pre class="events">

? ?

member of Non-profit organization BEST Lviv

student of Computer Science, Artifitial Intellegnce
at Lviv Polytechnic National University

Lviv Physics and Mathematics Lyceum

birth
</pre>
</div>
</template>
<script>


export default {
	name: "timeline",
	data() {
		return {
           
			// timelinePoints: [
			// 	{ year: 2001, event: "birth" },
			// 	{ year: 2015, event: "Lviv Physics and Mathematics Lyceum" },
			// 	{
			// 		year: 2019,
			// 		event:
			// 			"student of Computer Science, Artifitial Intellegnce at Lviv Polytechnic National University",
			// 	},
			// 	{
			// 		year: 2020,
			// 		event:
			// 			"member of Non-profit organization <a href='http://'>BEST Lviv</a>",
			// 	},
			// 	{ year: 2021, event: "? ?" },
            // ],
            // fuck: timelinePoints.map((p,i)=>(p.event))
		};
	},
	
};
</script>

<style lang="scss">
h2 {
	text-align: center;
}
.timeline {
	font-size: 2.4rem;
	line-height: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
	.tree {
		font-family: "Source Code Pro", monospace;
	}
	// .events {
	// }
}
</style>
