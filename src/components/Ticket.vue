<template>
  <div>
    <h1> ticket </h1>
    <b-table striped hover :items="movieID"> </b-table>
  </div>
</template>
<script>
// import axios from "axios";
export default {
  name: "Ticket",
//   data() {
//       return {
//           movieID: []
//       }
//   },
  computed: {
    movieID() {
      console.log(this.$store.getters.getMovie);
      return this.$store.getters.getMovie;
    },
  },
//   mounted() {
//     axios
//       .get(
//         "https://api.themoviedb.org/3/discover/movie?api_key=46d234cc6703473b204fdcae0ed69364&language=en-US&sort_by=popularity.desc&page=1&year=$%7Byear%7D"
//       )
//       .then((res) => {
//         this.movielist = res.data.results;
//         console.log(this.movielist);
//       });
//   },
};
</script>
<style></style>
