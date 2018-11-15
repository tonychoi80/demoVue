<template>
  <div class="movies">
    <h1>영화 목록</h1>
    <div v-for="movie in movies" v-bind:key="movie.id" class="movie">
      <router-link :to="{ name: 'show', params: { id: movie.id }}"><img v-bind:src="movie.poster" class="poster"></router-link>
      <div>
        <strong>{{movie.name}}</strong>
      </div>
      <div>
        감독:{{movie.director}}<br>[{{movie.year}}년]
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.$http.get('/api/movies')
    .then((response) => {
      this.movies = response.data
    })
  },
  data () {
    return {
      movies: []
    }
  }
}
</script>


<style scoped>
.poster {
  width: 185px;
  vertical-align: middle;
}
.movie {
  display: inline-block;
  padding: 10px;
  text-align: center;
  width: 185px;
  height: 330px;
  vertical-align: text-top;
}
</style>