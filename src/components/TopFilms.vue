<template>
  <div class="container">
    <div class="row text-center">
      <div class="text-center"  v-if="!movies">
        <b-spinner label="Spinning"></b-spinner>
      </div>
      <carousel-3d v-if="movies">
        <slide :key="movie.id" :index="index" class="shadow" v-for=" (movie,index) in movies">
          <img :alt="index" :src="'http://image.tmdb.org/t/p/original/'+movie.poster_path" />
        </slide>
      </carousel-3d>
      <!-- <b-card-group deck v-if="movies">
    <b-card  v-for="movie in [movies[0],movies[1],movies[2],movies[3],movies[4]]" v-bind:key="movie.id" :title="movie.title" :img-src="'http://image.tmdb.org/t/p/original/'+movie.poster_path" img-alt="Image" img-top>
      <b-card-text v-if="movie.overview<150" >
        {{ movie.overview }}
      </b-card-text>
       <b-card-text v-else> {{ movie.overview.substring(0,150)+"..." }}</b-card-text>
      <span v-if="movie.vote_average>7" class="badge badge-pill badge-success">Note : {{ movie.vote_average }} /10 </span>
      <span  v-if="movie.vote_average<=7 && movie.vote_average >= 5" class="badge badge-pill badge-warning" style="color:white">Note : {{ movie.vote_average }} /10  </span>
           <span v-if="movie.vote_average< 5" class="badge badge-pill badge-danger">Note : {{ movie.vote_average }} /10</span>
      <template v-slot:footer>
        <small class="text-muted">Sortit le {{ movie.release_date }}</small>
      </template>
    </b-card>

      </b-card-group>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "TopFilm",
  mounted() {
    this.$axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=3c3266bf0ea1f3b6659164a3af46ff98&language=fr-FR&page=1"
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
#topTitle {
  padding-top: 16px;
  text-align: center;
}

.badge-warning {
  background-color: #ff9800 !important;
}
img {
  height: 100% !important;
}
.carousel-3d-container {
  height: 500px !important;
}
.carousel-3d-slide {
  height: 500px !important;
  width: 300px !important;
  border-radius: 5px !important;
  border: rgba(1, 1, 1, 1);
}
</style>
