<template>
  <ul class="movie">
    <li class="movieHot-inner" @click="goHot">
      最近热播
    </li>
    <li class="movieTop-inner" @click="goTop">
      排行榜
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  methods: {
    goHot() {
      this.$router.push('/movieHot')
    },
    goTop() {
      this.$router.push('/movieTop')
    },
  }

}
</script>

<style lang="scss" scoped>
  .movie{
    width: 100%;
    height: 100vh;
    background-image: url('https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1958764986,938762131&fm=26&gp=0.jpg');
    text-align: center;
    color: #FFBD92;
    line-height: 5rem;
    font-size: 0.5rem;
    
    .movieHot-inner{
    width: 5rem;
    height: 5.2rem;
    background-image: url('https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4096125893,1901378422&fm=26&gp=0.jpg');
    background-size: cover;
    position: fixed;
    top: 1.2rem;
    left: 0.2rem;
    border-radius: 25px;
    }
  .movieTop-inner{
    width: 5rem;
    height: 5.2rem;
    background-image: url('https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4203870538,1873165013&fm=11&gp=0.jpg');
    background-size: cover;
    position: fixed;
    bottom: 1.2rem;
    right: 0.2rem;
    border-radius: 25px;
    }
  }
  

</style>