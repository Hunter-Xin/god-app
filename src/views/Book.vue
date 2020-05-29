<template>
  <div class="book">
      <div class="search">
        <input class="book-search" type="text" placeholder="试试搜索一下" v-model="query">
        <button class="book-btn" @click="bookSearch">搜索</button>
      </div>
      <ul class="list">
        <li class="book-list" v-for="(obj,index) in bookList" :key="index">
          <img :src="obj.images.medium" alt="">
          <div>
            <h2>{{ obj.title }}</h2>
            <p>作者： {{ obj.author[0] }}</p>
            <p>评分： {{ obj.rating.average }}</p>
            <p>出版社： {{ obj.publisher }}</p>
          </div>
          
        </li>
      </ul>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  data () {
    return {
      bookList: []
    }
  },
  methods: {
    bookSearch() {
      axios.get('https://douban.uieee.com/v2/book/search?q='+this.query)
      .then( res => {
        console.log(res)
        this.bookList = res.data.books
      })
      .catch( err => {
        console.log(err)
      })
    }
    
  }

}
</script>

<style lang="scss" scoped>
  .book{
    // background-image: url('https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1608281924,919508025&fm=26&gp=0.jpg');
    // // width: 100%;
    // // height: 100%;
    // background-position:center;
    // background-attachment:fixed;
    // background-repeat: no-repeat;
      position: relative;
      height: 100%;
    .search{
      width: 100%;
      box-sizing: border-box;
      padding-left: 0.1rem;
      position: absolute;
      top: 0.1rem;
      background: #f1f3f4;
      font-size: 0;
    }
      .book-search{
        height: 0.8rem;
        box-sizing: border-box;
        width: 74%;
        border: 1px solid #f1c40f;
        padding-left: 0.2rem;
        font-size: 16px;
    }
      .book-btn{
        width: 24%;
        height: 0.8rem;
        background: #f1c40f;
        border: 1px solid #f1c40f;
        line-height: 0.3rem;
        font-size: 0.3rem;
        color: #ffffff;
        vertical-align: top;
      }
    .list{

      .book-list{
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
      }
    }
  }
</style>