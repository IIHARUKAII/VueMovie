<template lang="">
  <div>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Prompt"
    />
    <div>
      <a class="text">
        WELCOME
        <vue-typer
          :text="['MAJOR CINEPLEX']"
          :repeat="Infinity"
          :shuffle="false"
          initial-action="typing"
          :pre-type-delay="70"
          :type-delay="250"
          :pre-erase-delay="2000"
          :erase-delay="250"
          erase-style="clear"
          :erase-on-complete="false"
          caret-animation="phase"
        ></vue-typer
      ></a>
    </div>
    <!-- <b-table striped hover :items="movieData"> </b-table> -->
    <div class="go">
      <form @submit="addMovie">
        <b-card
          bg-variant="dark"
          text-variant="white"
          id="listMovie"
          v-for="item in movieData"
          v-bind:key="item.id"
          v-bind:img-src="'https://image.tmdb.org/t/p/w500/' + item.poster_path"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 260px; margin:10px"
          class="mb-2"
        >
          <!-- <button type="submit" class="primary"   v-bind:href="'/ticket/' + item.id">จองตั๋ว</button> -->
          <b-button
            type="submit"
            variant="danger"
            v-bind:href="'/ticket/' + item.id"
            >จองตั๋ว</b-button
          >
        </b-card>
      </form>
    </div>
  </div>
</template>
<script>
// import axios from "axios";
import Router from "vue-router";
const router = new Router({
  mode: "history",
});
export default {
  name: "movie",
  computed: {
    movieData() {
      return this.$store.getters.getMovie;
    },
  },
  mounted() {
    this.$store.dispatch("fetchSetMovie");
    // this.saveID {this.$store.getters.getMovie.id = this.$route.params.id } ;
  },
  methods: {
    addMovie() {
      // router.push(`/ticket/${this.saveID}`);
      router.push("/ticket/:id");
      router.go();
    },
  },
};
</script>
<style>
#listMovie {
  display: inline-block;
}
h1 {
  color: white;
  font-size: 30px;
  font-family: "Prompt", sans-serif;
}
div {
  background-color: rgb(31, 31, 31);
  font-family: "Prompt", sans-serif;
}
.vue-typer {
  font-family: monospace;
}
.vue-typer .custom.char {
  color: #ffffff;
  font-size: 30px;
  font-family: "Prompt", sans-serif;
}
.vue-typer .custom.char.selected {
  background-color: #ffffff;
}
.vue-typer .custom.caret {
  color: #ffffff;
}
.text {
  color: white;
  font-size: 30px;
  font-family: "Prompt", sans-serif;
}

.go {
  margin-bottom: -1250px;
}
</style>
