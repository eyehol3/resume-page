<template>
	<css-doodle class="rectangles">
        @grid: 15x1;
:doodle{
    column-gap: 15px;
}
        @size: 22.5px; 
        @shape: rhombus;
        margin: auto;

        @nth(3n+0){
        background: #FF6CFF
        }

        @nth(3n+1){
        background: #48DDE7
        }

        @nth(3n+2){
        background: #FF9F9F
        }
    </css-doodle>
</template>


<script>
import 'css-doodle'

export default {
    name: 'rectangles'
}
</script>

<style scoped lang='scss'>
.rectangles {
    width: 60rem;
    margin: 50px auto;
    // align-items: center;
    // justify-content: center;
}
</style>
