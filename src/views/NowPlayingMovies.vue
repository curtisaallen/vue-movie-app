<template>
<div class="album py-5 bg-light">
        <div class="container">
            <div class="row"> 
                <div class="col-md-12 intro-header"> 
                    <header> 
                        <h2>Upcoming Movies</h2>
                        <p class="text-big">below is a list of some movies that will becoming out soon.</p>
                    </header>  
                </div>
            </div>
        <div v-if="isLoading">
            <div class="row">
                <template v-if="movienowplaying < isLoading">
                <div class="col-md-4" v-for="movienowplaying in moviesNowPlaying" :key="movienowplaying.id">
                  <div class="card mb-4 shadow-sm">
                    <img class="bd-placeholder-img card-img-top" width="100%" height="225" :src="'https://image.tmdb.org/t/p/original/' + movienowplaying.backdrop_path" />
                    <div class="card-body">
                      <h3 class="card-title">
                            {{movienowplaying.title}}
                            <span>{{ movienowplaying.release_date | moment("YYYY") }}</span>
                      </h3>
                      <p class="card-text">
                        {{movienowplaying.overview.substring(0,80)+"..."}}                      
                      </p>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                          <router-link :to="`/details/${movienowplaying.id}`" class="btn btn-sm btn-outline-secondary">View</router-link>
                        </div>
                        <small class="text-muted"><i class="fas fa-star"></i> {{movienowplaying.vote_average}}</small>
                      </div>
                    </div>
                  </div>
                </div>
                </template>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <button @click="movieToShow += 3">show more movies</button>
                </div>
            </div>
        </div>
        <div v-else>
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
</div>

</template>

<script>
// TODO: Add Load More Button to code
export default {
    data() {
        movieToShow: 3
    },
    computed: {
        moviesNowPlaying() {
           return this.$store.state.moviesNowPlaying;
        },
        isLoading() {
           return this.$store.state.moviesNowPlaying.length;
        }
    },
    created() {
        this.$store.dispatch("getmoviesNowPlaying");
     }
}
</script>

<style scoped>

</style>