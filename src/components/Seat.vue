<template >
    <div class="box" >
        <div class="space">
        <template v-for="s in seats" >
            <button 
                :class="className(s)" :key="s"
                id="seat" 
                :disabled="s.seated"
                @click="chooseSeat(s)"
                > {{s.id}} {{s.price}}  </button> 
                <!-- > {{s.id}} {{s.price}}  </button>  -->
                
            </template>   
            </div>
            <!-- <span> {{selectSeats}} </span> -->
    </div>
</template>
<script>
import movie from '../other/movie.json'
export default {
    props: ['movieId', 'selectSeats'],
    methods:{
        className(seat){
            const ids = this.selectSeats.map(s => s.id)
            const idx = ids.indexOf(seat.id)
           return [
               'button',
               { 'is-danger': seat.seated, 'is-primary': idx != -1 }
           ] 
        },
        chooseSeat(seat){
            this.$emit('chooseSeat', seat);
        }
    },
    computed:{
        seats(){
            return movie[this.movieId]
        }
    }
}
</script>

<style >
    *{
    box-sizing: border-box;
}
body{
    background-color: #242323;
    color:#fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin:0;
}
#movie-container{
    margin:20px 0;
}
#movie-container select{
    background-color: #fff;
    border:0;
    border-radius: 5px;
    font-size: 14px;
    padding: 5px 15px 5px 15px;
    appearance: none;
}
#seat{
    /* text-indent: -9999px;  */
    border-style: ridge;
    height: 50px;
    width: 75px;
    margin:3px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
}
  
#row{
    display: flex;
}
/* #seat#selected{
    background-color:greenyellow;
}
#seat#occupied{
    background-color:red;
} */
/* #seat:nth-of-type(2){
    margin-right: 18px;
}
#seat:nth-last-of-type(2){
    margin-left: 18px;
} */
.box{
    background-color:gray ;
    
}
.space{
    padding-left: 300px;
    padding-right: 300px;
}
</style>