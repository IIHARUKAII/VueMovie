<template >
    <div class="box">
        <h3 class="title"> {{ movieId }} </h3>
        <div class="columns" >
            <div v-for="m in movies" :key="m" :class="className(m.id)" @click="chooseMovie(m.id)">
                <figure class="image" id="time">
                    <img :src="imgSrc(m.id)">
                </figure>
            </div>
        </div>
        
    </div>
</template>
<script>
import {movies} from '../other/movie.json'

console.log(movies)
export default {
    name: "round",
    props:[' movieId '],
    data(){
        return{
            movies
        }
    },
    methods:{
        imgSrc(movieId){
            return `/movies/${ movieId }.jpg`
        },
       chooseMovie(movieId){
           this.$emit('chooseMovie', movieId);
       },
       className(movieId){
           return [
               'column', 'pointer',
               {'chosen': this.movieId === movieId}
           ]
       }
    },
    mounted(){
        this.chooseMovie(movies[0].id)
    }
    
}
</script>
<style >
    .pointer{
        cursor:pointer;
    }
    .chosen{
        border-style: solid ;
    }
    #time{
        border-style: solid ;
        color: black;
        border-width: 7px;
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        border-bottom-left-radius: 16px;
        border-bottom-right-radius: 16px;
    }
</style>