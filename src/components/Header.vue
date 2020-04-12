<template>
<div id="header" class="text-center pt-5" >
  <h2 class="pt-5" style="color:white">Bienvenue sur Moovies and Cookies</h2>
  <h3 style="color:white"><i>La référence des films en France</i></h3>
     <input id="search" type="text" class="form-control mt-2" placeholder="Rechercher un film..."><button type="button" class="btn btn-dark">Rechercher</button>
</div>
</template>

<script>

    export default {
  name: "Header"
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header{
    background-image: url('../assets/header.jpg');
    height: 600px;
}

#search{
display: inline-block;
width: 250px;
}
</style>
