<template lang="">
  <div>
    <h1>
      Movie Page
    </h1>
    <div>
      <form @submit="addMovie">
      <b-card
        id="listMovie"
        v-for="item in movielist"
        v-bind:key="item.id"
        v-bind:img-src="'https://image.tmdb.org/t/p/w500/' + item.poster_path"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <!-- <b-card-text>
          {{ item.overview }}
        </b-card-text> -->

          <b-button type="submit" variant="primary" v-model="item.id">จองตั๋ว</b-button>

      </b-card>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Router from "vue-router"

const router = new Router({
    mode: "history",
})

export default {
  name: "movie",
  data() {
    return {
      movielist: [],
    };
  },
  mounted() {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=46d234cc6703473b204fdcae0ed69364&language=en-US&sort_by=popularity.desc&page=1&year=$%7Byear%7D"
      )
      .then((res) => {
        this.movielist = res.data.results;
        console.log(this.movielist);
      
      });
  },
  methods: {
    addMovie() {
      this.$store.dispatch("setMovie", this.movielist.id);
      router.push(`/ticket/${this.movielist.id}`);
      router.go()
    },
  },
};
</script>
<style>
#listMovie {
  display: inline-block;
}
</style>
