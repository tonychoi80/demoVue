<template>
  <div>
    <h1>상세 내용</h1>
    {{movie.name}}
    <div>
        <strong>{{movie.name}}</strong>, <i>{{movie.director}}</i> [{{movie.year}}]
        <div><img v-bind:src="movie.poster" class="poster"></div>
        <router-link :to="{ name: 'index' }">목록</router-link>
    </div>
  </div>  
</template>

<script>
export default {
  created: function () {
    var id = this.$route.params.id
    this.$http.get(`/api/movies/${id}`)
    .then((response) => {
      this.movie = response.data[0]
    })
  },
  data: function () {
    return {
      movie: {}
    }
  }
}
</script>


<style scoped>
.poster {
  width: 210px;
  vertical-align: middle;
}
</style>