<template>
    <div class="accueil">
        <Home></Home>
    </div>
</template>

<script>
 const Home = ()=>import("@/components/Home.vue");
export default {
    name:"Accueil",
    components:{
        Home
    }
}
</script>