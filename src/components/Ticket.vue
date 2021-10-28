<template>
  <div class="title2">
    <div class="box">
      <br><br><br><br><br><br><br><br><br><br>
       <h1 class="title3">{{ movie.title }} </h1>
      <img v-bind:src="'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path">
        <h3 class="title"> {{ movieId }} </h3>
        <h1 id="price">Count:{{status.count}}, Price:{{status.price}} </h1>
        <movies @chooseMovie="handleChooseMovie" :movieId="movieId"/>
        <seat 
        :movieId="movieId" 
        @chooseSeat="handleChooseSeat"
        :selectSeats="selectSeats"
        :firebaseSeats="firebaseSeats"
        />
        <button class="buy" type="button" @click="alert">Buy Ticket</button>
        <!-- <button class="buy">Buy Ticket</button> -->
    </div>
  </div>
</template>
<script>
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/firestore'
import 'firebase/compat/database'
import _ from 'lodash'
import { pushToArray} from '../other/lib'
import axios from "axios";
// import Movie from '../components/round.vue'
import movies from '../components/round.vue'
import Seat from '../components/Seat.vue'

const config = {
   apiKey: "AIzaSyBqNUZMvod5nVFhpdgp-vucDmMWHFhz-uM",
  authDomain: "vuetest-edc92.firebaseapp.com",
  databaseURL: "https://vuetest-edc92-default-rtdb.firebaseio.com",
  projectId: "vuetest-edc92",
  storageBucket: "vuetest-edc92.appspot.com",
  messagingSenderId: "298256454479",
  appId: "1:298256454479:web:b58554edfa7b3b3c10ab3a"
};

firebase.initializeApp(config);
// const app = initializeApp(config);

const db = firebase.database()
// const dbRef = db.ref('/')
// dbRef.push('yyy')



export default {
  name: "Ticket",
  components:{ movies, Seat },
  data() {
    return {
      movie: null,
      movieTH: null,
      movieId: '',
      selectSeats: [],
      firebaseSeats: [],
      status: {count:0, price: 0}
    };
  },
  computed: {},
  methods:{
    handleChooseMovie(movieId){
           if(this.status.count){
               if(confirm('Data will be lost???')){
                   this.status = { count:0, price :0}
                   this.selectSeats = []
               }else{
                   return false
               }
           }
           this.movieId = movieId

           const movieRef = db.ref('/').child(this.movieId)
           movieRef.on('value', snapshot => {
             console.log(snapshot.val())
             const seats = snapshot.val()
             this.firebaseSeats = []



             _.forOwn(seats, s=> {
              //  console.log(s)
              pushToArray(s, this.firebaseSeats)
             })

            //  console.log(this.firebaseSeats.length)
           })

          //  const movieRef = db.ref('/').child(this.movieId)
          //  movieRef.on('value', snapshot => {
          //     //  console.log(snapshot.val())
          //      const seats = snapshot.val()
          //      this.firebaseSeats = []

          //      _.forOwn(seats, s => {
          //          pushToArray(s, this.firebaseSeats)
          //      })
          //      console.log(this.firebaseSeats.length)
          //  })
           
       },
       handleChooseSeat(seat){
          //  const ids = this.selectSeats.map(s => s.id )
          //  const idx = ids.indexOf(seat.id)
          //  if(idx === -1 ){
          //       this.selectSeats.push(seat)
          //  }else{
          //      this.selectSeats.splice(idx, 1)
          //  }

          //  pushToArray( seat, this.selectSeats)

          //  const movieRef = db.ref().child(this.movieId)
          //  movieRef.push(seat)
          pushToArray(seat, this.selectSeats)

          const movieRef = db.ref().child(this.movieId)
          movieRef.push(seat)

         

           this.status = this.selectSeats.reduce((summary, s) => {
               summary.count ++
               summary.price += s.price
               return summary
           },{count:0, price:0})
          
           console.log(this.selectSeat.length)
       },
       alert(){
           return alert("Thank You for buy ticket, you ticket price is" + this.status.price);
       }
  },
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
<style>
#price{
        font-weight: bold;  
        font-size: 50px;
    }
    .buy{
       transition-duration: 0.4s;
       background-color: white; /* Green */
      border: none;
        color: black;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
    }
    .buy:hover{
        background-color: lightgray; /* Green */
        color:black;
    }
 .title2{
   margin-top:150px
 }

 
    
</style>
