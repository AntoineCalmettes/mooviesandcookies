<template>
 <div class=" pt-5 bg-gradient-dark text-white">
  <b-jumbotron class="bg-gradient-dark">
    <template v-slot:header>Abonnement</template>

    <template v-slot:lead>
  Nos offres d'abonnements mensuels et annuels vous permet de suivre l'actualité des films en France
    </template>

    <hr class="my-4" style="bac:white">

    <p>
      Découvrir nos offres
    </p>

    <b-button variant="primary" href="#">Mensuel</b-button>
    <b-button variant="success" class="ml-3" href="#">Annuels</b-button>
  </b-jumbotron>
</div>
</template>

<script>

    export default {
  name: "PubAbonnement"
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-gradient-dark{
background: #0F2027;  /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


}
</style>
