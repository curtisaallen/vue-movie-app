<template>
   <div class="album py-5 bg-light">
            <div class="container">
              <div v-if="isLoading !== 0" class="row">
                <div class="col-md-4">
                  <img class="img-thumbnail" :src="'https://image.tmdb.org/t/p/original/' + moviesDetails.poster_path" />
                </div>
                <div class="col-md-8 detail-page">
                        <div class="card mb-4 shadow-sm">
                          <div class="card-body">
                                <h3 class="card-title">
                                        {{ moviesDetails.title }}
                                        <span>
                                                <i class="fas fa-star"></i> {{ moviesDetails.vote_average }}
                                        </span>
                                  </h3>
                                  <h5>
                                        Overview
                                  </h5>
                                  <p class="card-text">
                                    {{ moviesDetails.overview }}
                                  </p>
                                  <h5>
                                        Casts
                                  </h5>
                                  <ul class="castList" v-if="typeof castIsLoaded  !== 'undefined'">
                                    <li  v-for="cast in casts" :key="cast.cast_id" >
                                        <img :src="'https://image.tmdb.org/t/p/original/' + cast.profile_path" :alt="'cast.name'" class="img-thumbnail" />
                                    </li>                                  
                                  </ul>   
                                  <h5>
                                        Crew
                                  </h5>
                                  <ul class="castList" v-if="typeof castIsLoaded !== 'undefined'">
                                      <li v-for="crew in crews" :key="crew.cast_id">
                                          <img :src="'https://image.tmdb.org/t/p/original/' + crew.profile_path" :alt="'crew.name'" class="img-thumbnail" />
                                      </li>
                                  </ul>                                 
                                  <h5>
                                        Trailers
                                  </h5>
                                  <ul class="trailersList" v-if="moviesDetails.videos.results[0].site === 'YouTube'">
                                        <li><iframe :src="`https://www.youtube.com/embed/${moviesDetails.videos.results[0].key}`" allowfullscreen=""></iframe></li>
                                  </ul>
                          </div>
                        </div>
                      </div>

              </div>

              <div v-else>
                    <div class="row">
                                <div class="col-md-12 spining-loader">
                                        <i class="fa fa-spinner fa-spin"></i>
                                        <div>
                                            loading... {{isLoading}}
                                        </div>
                                </div>
                        </div>
              </div>

            </div>



          </div>
</template>


<script>
export default {
    watch: {
    '$route' (to) {
        this.$store.dispatch("getMovieDetails", to.params.id);
      }
    },
    data() {
        return {
          movieId: this.$route.params.id,
          isloading: true,
        }
    },
    created() {
       this.$store.dispatch("getMovieDetails", this.movieId);
       this.$store.dispatch("getMovieCasts", this.movieId);
    },
    computed: {
       moviesDetails() {
         return this.$store.state.moviesDeatils;
       },
       isLoading() {
           return this.$store.state.moviesDeatils.length;
        }, 
       casts() {
                return this.$store.state.moviecCasts.cast.filter(function(cast) {
                    return cast.profile_path  !== null
                })
        

       },
       crews(){
                return this.$store.state.moviecCasts.crew.filter(function(crew) {
                    return crew.profile_path  !== null
                })
       },
       castIsLoaded() {
         return this.$store.state.moviecCasts.cast;  
       }
    }
}
</script>


<style scoped>

</style>