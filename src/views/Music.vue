<template>
     <div class="container">
        <!-- 播放器头部 -->
        <div class="play-top">
            <input type="text" v-model="query" placeholder="试试搜索一下">
            <button class="book-btn" @click="searchMusic">搜索</button>
        </div>
          <!-- 播放列表 -->
          <div class="play-list">
              <div class="song-wrapper">
                  <ul class="song-list">
                    <li v-for="(item,index) in musicList" :key="index">
                      <a href="javascript:;" @click="playMusic(item.id)"></a>
                      <b>{{ item.name }}</b>
                  </li>
                  </ul>
              </div>
          </div>
          <div class="audio-con">
              <audio ref="audio" @play="play" @pause="pause" :src="musicUrl" controls autoplay loop class="myaudio"></audio>
          </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
       query: "",
            musicList: [],
            musicUrl: "",
            // musicCover: "",
            // hotComments: [],
            isPlaying:false
    }
  },
  methods: {
        searchMusic() {
            axios.get('https://autumnfish.cn/search?keywords='+this.query)
                .then( res => {
                    console.log(res)
                    this.musicList = res.data.result.songs
                })
                .catch( err => {
                    console.log(err)
                })
        },
        playMusic(id) {
            axios.get('https://autumnfish.cn/song/url?id='+id)
                .then( res => {
                    console.log(res)
                    this.musicUrl = res.data.data[0].url
                })
                .catch( err => {
                    console.log(err)
                })
            // axios.get("https://autumnfish.cn/song/detail?ids=" + id)
            //     .then( res => {
            //         console.log(res)
            //         this.musicCover = res.data.songs[0].al.picUrl;
            //     })
            //     .catch( err => {
            //         console.log(err)
            //     })
        },
        play() {
            this.isPlaying = true
        },
        pause() {
            this.isPlaying = false
        }
    }
}
</script>
<style lang="scss" scoped>
  .container{
    position: relative;
    height: 100%;
    .play-top{
      width: 100%;
      box-sizing: border-box;
      padding-left: 0.1rem;
      position: absolute;
      top: 0.1rem;
      background: #f1f3f4;
      font-size: 0;
      input{
        height: 0.8rem;
        box-sizing: border-box;
        width: 74%;
        border: 1px solid #ffbe76;
        padding-left: 0.2rem;
        font-size: 16px;
      }
      .book-btn{
        width: 24%;
        height: 0.8rem;
        background: #ffbe76;
        border: 1px solid #ffbe76;
        line-height: 0.3rem;
        font-size: 0.3rem;
        color: #ffffff;
        vertical-align: top;
      }
    }
    .song-list{
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    position: fixed;
    top: 2rem;
      .song-list::-webkit-scrollbar{
        display: none;
      } 
      li{
        font-size: 14px;
        color: #333;
        height: 0.8rem;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        width: 100%;
        padding-left: 10px;
        box-sizing: border-box;
        position: relative;
        // border-bottom: 1px solid #cccccc;
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
        a{
          display: block;
          width: 0.4rem;
          height: 0.4rem;
          background-image: url("../assets/imgs/play.png");
          background-size: 100%;
          margin-right: 0.2rem;
          box-sizing: border-box;
        }
        b{
        font-weight: normal;
        width: 6rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        }
      }
    }
    .audio-con{
      position: fixed;
      bottom: 0.8rem;
      width: 100%;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      .myaudio{
        width: 100%;
        height: 1005;
        outline: none;
        background-color: #f1f3f4;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    }
  }
</style>