
<template>
  <div>
    <Header></Header>
    <ListTopFilms></ListTopFilms>
    <PubAbonnement></PubAbonnement>
    <GlideSide></GlideSide>
    <Footer></Footer>
  </div>
</template>

<style>

</style>
<script>
const ListTopFilms = () => import("@/components/ListTopFilms.vue");
const Header = ()=>import("@/components/Header.vue");
const PubAbonnement = ()=>import("@/components/PubAbonnement.vue");
const GlideSide = ()=>import("@/components/GlideSlide.vue");
const Footer = ()=>import("@/components/Footer.vue");
// import ListTopFilms from "@/components/ListTopFilms.vue";
export default {
  name : "Home",
  components: {
    ListTopFilms,
    Header,
    PubAbonnement,
    GlideSide,
    Footer
  }
  // rest of the component
};
</script>