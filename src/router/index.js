import Vue from 'vue'
import VueRouter from 'vue-router'
import Movie from '../views/Movie.vue'//电影主界面
import MovieHot from '../views/MovieHot.vue'//热播电影
import MovieTop from '../views/MovieTop.vue'//电影排行
import MovieInner from '../views/MovieInner.vue'//热播电影详情
import MovieInner2 from '../views/MovieInner2.vue'//排行电影详情
import Music from '../views/Music.vue'//音乐入口
import Book from '../views/Book.vue'//小说入口
import Photo from '../views/Photo.vue'//图片入口
// import PhotoDetails from '../views/PhotoDetails.vue'//图片详情

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'movie',
    component: Movie
  },
  {
    path: '/movieHot',
    name: 'movieHot',
    component: MovieHot
  },
  {
    path: '/movieTop',
    name: 'movieTop',
    component: MovieTop
  },
  {
    path: '/movie',
    name: 'movie',
    component: Movie
  },
  {
    path: '/movieInner/:id',
    name: 'movieInner',
    component: MovieInner
  },
  {
    path: '/movieInner2/:id',
    name: 'movieInner2',
    component: MovieInner2
  },
  {
    path: '/music',
    name: 'music',
    component: Music
  },
  {
    path: '/book',
    name: 'book',
    component: Book
  },
  {
    path: '/photo',
    name: 'photo',
    component: Photo
  },
  // {
  //   path: '/photodetails/:index',
  //   name: 'PhotoDetails',
  //   component: PhotoDetails
  // }
]

const router = new VueRouter({
  routes
})

export default router
