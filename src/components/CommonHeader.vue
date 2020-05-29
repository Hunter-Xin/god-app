<template>
  <div id="header">
        <span class="header-home" @click="goHome" v-show="this.$route.path !== '/movie'"> 返回 </span>
        <span class="header-title">{{ cur.name }}</span>
  </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },

    props: ['cur'],
    methods: {
        goHome() {
            if (this.$route.path == '/movie') {
                return
            } else {
                this.$router.go(-1)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    #header{
        width: 100%;
        height: 1rem;
        background-image: linear-gradient(135deg, #FFD000 0%, #FFBD00 100%);
        text-align: center;
        line-height: 1rem;
        color: #ffffff;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
    }
    .header-home{
        position: absolute;
        left: 0.2rem;
    }
</style>