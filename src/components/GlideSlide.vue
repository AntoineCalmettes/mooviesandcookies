<template>
  <div class="container">
    <div class="row">
      <h2 style="text-align:center">Les meilleurs notes</h2>
      <div class="text-center" v-if="!movies">
        <b-spinner label="Spinning"></b-spinner>
      </div>
      <vue-glide v-model="active" v-if="movies" :bound="true">
        <vue-glide-slide
          :key="movie.id"
          :index="index"
          class="shadow"
          v-for=" (movie,index) in movies"
        >
          <img :alt="index" :src="'http://image.tmdb.org/t/p/w500/'+movie.poster_path" />
          <b-badge variant="success">Note : {{ movie.vote_average }} /10</b-badge>
          <br />
           <i class="font-weight-bold">{{ movie.title }}</i> <br>
          <i>Réalisé en {{ movie.release_date }}</i>
        </vue-glide-slide>
        <template slot="control">
           
          <b-button variant="dark" data-glide-dir="<">Precedent</b-button>
          <b-button style="float:right" variant="dark" data-glide-dir=">">Suivant</b-button>
      
        </template>
      </vue-glide>
    </div>
  </div>
</template>

<script>
export default {
  name: "GlideSlide",
  mounted() {
    this.$axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=3c3266bf0ea1f3b6659164a3af46ff98&language=fr-FR&page=1"
      )
      .then(response => {
        this.movies = response.data.results;
        console.log(this.movies[0]);
      });
  },
  data() {
    return {
      movies: null,
      name: null,
      index: null
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  height: 500px;
}
</style>
