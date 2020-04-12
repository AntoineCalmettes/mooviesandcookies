<template>
  <div class="container">
    <div class="row text-center">
      <div class="text-center"  v-if="!movies">
        <b-spinner class="text-center" label="Spinning"></b-spinner>
      </div>
      <carousel-3d v-if="movies">
        <slide :key="movie.id" :index="index" class="shadow" v-for=" (movie,index) in movies">
          <img :alt="index" :src="'http://image.tmdb.org/t/p/original/'+movie.poster_path" />
        </slide>
      </carousel-3d>
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
