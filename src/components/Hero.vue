<template>
<div>
 <template v-if="isLoading">
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
              <li data-target="#myCarousel" data-slide-to="1" class=""></li>
              <li data-target="#myCarousel" data-slide-to="2" class=""></li>
            </ol>
            <div class="carousel-inner">

              <div v-for="(movie, index) in moviesHero" :key="movie.id" :class="{ 'active': index === 0 }" class="carousel-item">
                <div class="overlay"></div>  
                <img :src="'https://image.tmdb.org/t/p/original/' + movie.backdrop_path" class="bd-placeholder-img" width="100%">
                <div class="container">
                  <div class="carousel-caption text-left">
                    <h1>{{movie.original_title}}</h1>
                    <p>{{movie.overview}}</p>
                    <p><router-link :to="`/details/${movie.id}`"  class="hero-link">Discover More</router-link></p>
                  </div>
                </div>
              </div>

            </div>
            <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
    </div>
 </template>

 <template v-else>
     <div class="heroLoader">
    <div class="container">
        <div class="row">
                <div class="col-md-12 spining-loader">
                        <i class="fa fa-spinner fa-spin"></i>
                        <div>
                            loading...
                        </div>
                </div>
        </div>
    </div>
</div>
 </template>
</div>

</template>

<script>
export default {
    data() {
        return {
         className: 'active',
        }
    },
    computed: {
        moviesHero() {
           return this.$store.state.moviesHero;
        },
        isLoading() {
           return this.$store.state.moviesHero.length;
        }
    },
    created() {
        this.$store.dispatch("getPopularMovies");
    }
}
</script>

<style scoped>

</style>