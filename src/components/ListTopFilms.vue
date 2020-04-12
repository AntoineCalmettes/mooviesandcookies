<template>
    <div>
        <h1 id="topTitle">Films les plus populaire du moment
        </h1>
        <TopFilms></TopFilms>
    </div>
</template>

<script>
const TopFilms = () => import("@/components/TopFilms.vue");

    export default {
  name: "ListTopFilms",
  components: {
    TopFilms,
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#topTitle{
    padding-top: 16px;
    text-align: center;
}
</style>
