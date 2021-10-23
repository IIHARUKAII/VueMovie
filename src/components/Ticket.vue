<template>
  <div>
    <h1>{{ movie.title }}</h1>
    <img v-bind:src="'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path">
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Ticket",
  data() {
    return {
      movie: null,
      movieTH: null
    };
  },
  computed: {},
  mounted() {
    axios
      .get("https://api.themoviedb.org/3/movie/" + this.$route.params.id, {
        params: {
          api_key: "46d234cc6703473b204fdcae0ed69364",
          language: "en-US",
          sort_by: "popularity.desc",
          page: "1",
          year: "2021",
        },
      })
      .then((res) => {
        this.movie = res.data;
      });
    // axios
    //   .get("https://api.themoviedb.org/3/movie/" + this.$route.params.id, {
    //     params: {
    //       api_key: "46d234cc6703473b204fdcae0ed69364",
    //       language: "th-TH",
    //       sort_by: "popularity.desc",
    //       page: "1",
    //       year: "2021",
    //     },
    //   })
    //   .then((res) => {
    //     this.movieTH = res.data;
    //   });
  },
};
</script>
<style></style>
