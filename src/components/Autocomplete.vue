<template>
    <form class="form-inline mt-2 mt-md-0 ml-auto">
            <div class="autocomplete">
                <input 
                class="form-control mr-sm-2" 
                type="text"
                @input="onChange" 
                v-model="search" 
                placeholder="Search" >
                <ul v-if="isOpen">
                    <li v-for="result in moviesResults" :key="result.id">
                        <router-link :to="`/details/${result.id}`">
                            <span v-on:click="onSelected">{{result.title}}</span>
                        </router-link >
                    </li>
                </ul>
            </div>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><i class="fab fa-searchengin"></i> Search</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
          isOpen: false,
          search: '',
        }
    },
    methods: {
       searchMovie(query) {
           if(query != '') {
            this.$store.dispatch("searchMovie", query);
            this.isOpen = true;
           }
       }, 
      onChange() {  
        this.searchMovie(this.search);
       },
       onSelected() {
         this.isOpen = false;  
         this.search = '';
       } 
    },
    computed: {
        moviesResults() {
           return this.$store.state.search;
        }
    }
}
</script>

<style scoped>

</style>