
<template>
  <div id="app">
    <NavBar></NavBar>
    <Header></Header>
    <ListTopFilms></ListTopFilms>
    <PubAbonnement></PubAbonnement>
    <GlideSide></GlideSide>
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
const ListTopFilms = () => import("@/components/ListTopFilms.vue");
const NavBar = ()=> import("@/components/NavBar.vue");
const Header = ()=>import("@/components/Header.vue");
const PubAbonnement = ()=>import("@/components/PubAbonnement.vue");
const GlideSide = ()=>import("@/components/GlideSlide.vue");
// import ListTopFilms from "@/components/ListTopFilms.vue";
export default {
  components: {
    ListTopFilms,
    NavBar,
    Header,
    PubAbonnement,
    GlideSide
  }
  // rest of the component
};
</script>