<template>
  <div class="movie-inner2">
      <img :src="inner.images.medium" alt="">
      <p>电影时长： {{ inner.durations[0] }}</p>
      <p class="movie-text">电影简介： {{ inner.summary }}</p>

  </div>
</template>

<script>

import axios from 'axios'

export default {
    data () {
        return {
            inner: {}
            
        }
    },
    created () {
        axios.get('https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/subject/' + this.$route.params.id)
            .then( res => {
                console.log(res)
                this.inner = res.data
            })
            .catch( err => {
                console.log(err)
            })
    }

}
</script>

<style lang="scss" scoped>
    .movie-inner2{
        height: 100%;
        color: #111;
        background-image: url('https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1958764986,938762131&fm=26&gp=0.jpg');
        img{
            width: 100%;
        }
        .movie-text{
            text-indent: 2em;
        }
    }
</style>