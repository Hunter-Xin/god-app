<template>
  <ul class="movieHot">
    <li class="movieHot-list" v-for="(obj,index) in menuList" :key="index" @click="goInner(obj.id)">
      <img :src="obj.images.medium" alt="">
      <div class="movie-text">
        <h3>{{ obj.title }}</h3>
        <p>上映年份： {{ obj.year }}</p>
        <p>演员： <span v-for="item in obj.casts" :key="item.id">{{ item.name }}</span></p>
        <p>评分： {{ obj.rating.average }}</p>
        <div class="movie-click">
          查看详情
        </div>
      </div>
    </li>
        <div class="loading" v-show="loadingStar">
          <img src="@/assets/imgs/loading.gif" alt="" class="loading-img">
        </div>
  </ul>
</template>

<script>

import axios from 'axios'

export default {
  data () {
    return {
      menuList: [],
      loadingStar: true,
      total: -1
    }
  },
  methods: {
      getList() {
        if(this.menuList.length == this.total) {
          return
        }
        //接口调用
        this.loadingStar = true
        if(this.menuList.length == this.total) {
          return
        }
        axios.get(`https://douban.uieee.com/v2/movie/in_theaters?start=${this.menuList.length}&count=10`)
            .then( res => {
            console.log(res);
            //this.menuList = res.data.subjects
            this.total = res.data.total
            this.menuList = [...this.menuList,...res.data.subjects]
            this.loadingStar = false
            })
            .catch( err => {
            console.log(err);
            this.loadingStar = false
        })
      },
      goInner(id) {
        this.$router.push('/movieInner/'+id)
      }
  },
  created () {
      //接口调用
    // axios.get('https://douban.uieee.com/v2/movie/top250?start=0&count=10')
    //   .then( res => {
    //     console.log(res);
    //     this.menuList = res.data.subjects
    //   })
    //   .catch( err => {
    //     console.log(err);
    //   })
    this.getList();
    window.onscroll = () => {

        //页面滚出去的高度
        let top = document.documentElement.scrollTop;
        //页面屏幕的高度
        let height = document.documentElement.clientHeight;
        //页面实际高度
        let tall = document.documentElement.scrollHeight;

        //console.log(top,height,tall)

        if(top + height == tall ) {
            this.getList();
        }
    }
  }
}
</script>

<style lang="scss" scoped>
  .loading{
    width: 2rem;
    position: fixed;
    background: rgba(255,255,255,0.1);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .loading-img{
      width: 2rem;
      border-radius: 50px;
    }
  }
  .movieHot-list{
    display: flex;
    position: relative;
    padding: 0.4rem 0.2rem;

    &::after{
      content: '';
      display: block;
      position: absolute;
      left: 0.2rem;
      right: 0.2rem;
      bottom: 0;
      border-bottom: 1px solid #cccccc;
      transform: scaleY(0.5);
      }

      img{
      width: 2rem;
      height: 3rem;
      margin-right: 0.2rem;
      background: #cccccc;
      }

      .movie-text{

        p{
          color: #888888;
          font-size: 15px;
          line-height: 20px;

        }

        .movie-click{
          width: 1.5rem;
          height: 0.6rem;
          // border: 1px solid #cccccc;
          background: coral;
          border-radius: 15px;
          text-align: center;
          line-height: 0.6rem;
          color: #ffffff;
          position: absolute;
          right: 0.2rem;
          bottom: 0.4rem;
        }
      }
    }

</style>