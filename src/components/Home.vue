<template>
  <div>
    <Hero /> 
    <NowPlayingMovies /> 
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import NowPlayingMovies from "@/views/NowPlayingMovies";
export default {
 components: {
    Hero,
    NowPlayingMovies
  }
}
</script>

<style scoped>

</style>
