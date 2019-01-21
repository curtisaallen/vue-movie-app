import Vue from "vue";
import Vuex from "vuex";

import api from "./api";

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
       moviesNowPlaying: [],
       moviesHero: [],
       moviesDeatils: [],
       moviecCasts: [],
       crews: [],
       search: [],
       isloading: false,
    },
    mutations: {
        setmoviesNowPlaying(state, movies) {
            state.moviesNowPlaying = movies;
        },
        setPopularMovies(state, movies) {
            state.moviesHero = movies;
        },
        setMovieDetails(state, movies) {
            state.moviesDeatils = movies;
        },
        setMovieCasts(state, movies) {
            state.moviecCasts = movies;
        },
        setSearchMovie(state, query) {
            state.search = query;
        }
    },
    actions: {
        async getmoviesNowPlaying({ commit }) {
            const results = await api.getNowPlayingMovies();
            commit("setmoviesNowPlaying", results);
        },
        async getPopularMovies({ commit }) {
            const results = await api.getPopularMovies();
            commit('setPopularMovies', results);
        },
        async getMovieDetails({ commit }, movieId) {
            const results = await api.getMovieDetails(movieId)
            commit("setMovieDetails", results); 
        },
        async getMovieCasts({ commit }, movieId) {
            const results = await api.getMovieCasts(movieId);
            results.cast.filter(function(cast) {
                return cast.profile_path  !== null
            });
            commit("setMovieCasts", results); 
        },
        async searchMovie({ commit }, query) {
            const results = await api.searchMovie(query);
            commit("setSearchMovie", results);
        }
    }
});    