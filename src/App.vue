<template>
  <div id="nav">
    
  </div>
  <router-view/>
</template>

<style lang="scss">
$font-cl: #f0f0f0;
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  background: #0A0A0A;
  color: $font-cl;
}

#nav {
  padding: 30px;
}

a {
  font-weight: bold;
  color: $font-cl;
//   padding: 30px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
