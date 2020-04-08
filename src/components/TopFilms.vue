<template>
   <div>
  <b-card-group deck v-if="movies">
    <b-card  v-for="movie in [movies[0],movies[1],movies[2],movies[3],movies[4],movies[5]]" v-bind:key="movie.id" :title="movie.title" :img-src="'http://image.tmdb.org/t/p/w500/'+movie.poster_path" img-alt="Image" img-top>
      <b-card-text v-if="movie.overview<150" >
        {{ movie.overview }}
      </b-card-text>
       <b-card-text v-else> {{ movie.overview.substring(0,150)+"..." }}</b-card-text>
     
       <h5>Note : {{ movie.vote_average }} /10</h5>
      <template v-slot:footer>
        <small class="text-muted">Sortit le {{ movie.release_date }}</small>
      </template>
    </b-card>

  </b-card-group>
</div>
</template>

<script>
    export default {
  name: "TopFilm",
    mounted(){
    this.$axios
    .get('https://api.themoviedb.org/3/movie/popular?api_key=3c3266bf0ea1f3b6659164a3af46ff98&language=fr-FR&page=1')
    .then(response => { 
      console.log(response);
      this.movies = response.data.results
      })
  },
  data(){
     return {
      movies: null
      }
  }

}

  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#topTitle{
    padding-top: 16px;
    text-align: center;
}
</style>
