<template>
<div id="app">
  <common-header :cur="cur"></common-header>

  <div class="container">
    <router-view></router-view>
  </div>

  <common-footer :nav-list="navList" @choose="choose"></common-footer>
</div>
  
</template>

<script>

  import commonHeader from '@/components/CommonHeader.vue'
  import commonFooter from '@/components/CommonFooter.vue'
export default {
  data () {
    return {
      cur: {
              path: '/movie',
              name: '电影',
            },
      navList: [
            {
                path: '/movie',
                name: '电影',
            },{
                path: '/music',
                name: '音乐',  
            },
            {
                path: '/book',
                name: '小说', 
            },
            {
                path: '/photo',
                name: '图库',
            },
        ]   
    }
  },
  methods: {
    choose(_data) {
      console.log(_data)
      this.cur = _data
    }
  },
  components: {
    commonHeader,
    commonFooter
  }
}
</script>

<style lang="scss" scoped>
  .container{
    margin: 1rem 0;
  }
</style>