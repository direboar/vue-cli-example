import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import CustomComponent from '@/components/CustomComponent'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
    props: {
      prop1: 'ルーターから指定!'
    }
  }]
})
