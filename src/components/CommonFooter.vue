<template>
  <ul id="footer">
      <li class="footer-list" v-for="(item,index) in navList" :key="index" @click="$emit('choose',item)">
          <router-link :to="item.path">{{ item.name }}</router-link>
      </li>
  </ul>
  
</template>

<script>
export default {
    data () {
        return {
            // navList: [
            //     {
            //         path: '/movie',
            //         name: '电影',
            //     },{
            //         path: '/music',
            //         name: '音乐',  
            //     },
            //     {
            //         path: '/book',
            //         name: '小说', 
            //     },
            //     {
            //         path: '/photo',
            //         name: '图库',
            //     },
            // ]
        }
    },
    props: ['navList']

}
</script>

<style lang="scss" scoped>
    #footer{
    width: 100%;
    height: 1rem;
    background-image: linear-gradient(135deg, #FFD000 0%, #FFBD00 100%);
    text-align: center;
    line-height: 1rem;
    color: #ffffff;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;

    .footer-list{
        flex: 1;

        a{
            color: #111111;
        }

        .router-link-active{
            color: #ffffff;
        }
    }


}
</style>