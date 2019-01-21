import axios from 'axios'

export const API_URL = "https://api.themoviedb.org/3";
export const API_KEY = "?api_key=YOUR-API-KEY-HERE";


export default {
    getNowPlayingMovies() {
        return axios.get(`${API_URL}/movie/now_playing${API_KEY}`).then(response => {
            return response.data.results;
        }, e => {return e; })
     },
     getPopularMovies() {
        return axios.get(`${API_URL}/movie/popular${API_KEY}`).then(response => {
            let featMovie = []
            for (let index = 0; index < 3; index++) {
                const element = response.data.results[index];
                featMovie.push(element)  
            }
            return featMovie;
        }, e => {return e; });        
     },
     getMovieDetails(id) {
        return axios.get(`${API_URL}/movie/${id}${API_KEY}&append_to_response=videos`).then(response => {
            return response.data;
        }, e => {return e; });  
     },
     getMovieCasts(id) {
        return axios.get(`${API_URL}/movie/${id}/credits${API_KEY}`).then(response => {
            return response.data;
        }, e => {return e; });  
     },
     searchMovie(query) {
        return axios.get(`${API_URL}/search/movie${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`).then(response => {
            return response.data.results;
        }, e => {return e; });          
     }

}
