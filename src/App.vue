
<template>
  <div id="app">
    <NavBar></NavBar>
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


.selector-for-some-widget {
  box-sizing: content-box;
}
</style>
<script>
const NavBar = ()=> import("@/components/NavBar.vue");
export default {
  components: {
    NavBar
  }
  // rest of the component
};
</script>