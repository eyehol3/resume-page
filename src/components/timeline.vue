
<template>
<h2>Timeline</h2>
    <!-- {{tree}} -->
<div class="timeline">
<!-- <div v-if="timelinePoints && timelinePoints.length" v-html="tree" class="timeline"> -->
<!-- </div> -->

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
           
			timelinePoints: [
				{ year: 2001, event: "birth" },
				{ year: 2015, event: "Lviv Physics and Mathematics Lyceum" },
				{
					year: 2019,
					event:
						"student of Computer Science, Artifitial Intellegnce at Lviv Polytechnic National University",
                    height: 2,
				},
				{
					year: 2020,
					event:
						"member of Non-profit organization <a href='http://'>BEST Lviv</a>",
				},
				{ year: 2021, event: "? ?" },
            ],
            // fuck: timelinePoints.map((p,i)=>(p.event))
		}
	},
    computed: {
        tree() {

            // console.log( this.timelinePoints.length, this.timelinePoints)
            return this.timelinePoints.map((p, i)=>{
                let first = (i===0);
                let last = (i===this.timelinePoints.length-1);
                let height = p.height!=null?p.height:1 -1

                return "<div class='node'>"+
                "<pre class='tree'>"+ 
                (first?".\n":"│\n") + 
                (last?
                "└─ " + p.year +  " ─ ":
                "├─ " + p.year +  " ─ " +
                "\n│".repeat(height))
                 + 
                "</pre>" +
                "<pre class='events'>"+ p.event + "\n" +
                "</pre>"
                +"</div>"
            })
            // return this.timelinePoints[0]
            // return "<div>HELLo</div>"
        }
    },
    // render: ()=>{
    //     console.log(this.tree())
    //     return(
    //         this.tree()
    //     )
    // }
	
};
</script>

<style lang="scss">
h2 {
	text-align: center;
}
// .node {
//     display: flex;
// }
pre {
    margin: 0;
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
