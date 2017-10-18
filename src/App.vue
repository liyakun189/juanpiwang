<template>
  <div id="app">
   <!-- 引入tab-bar组件  footer.... -->
    <fo></fo>
    <router-view :index="i" @changeurl="changeu"></router-view>
  </div>
</template>

<script>
import Fo from './components/Taber'
export default {
  name: 'app',
  components: {
    Fo
  },
  data(){
    return {
      i: 0
    }
  },
  methods: {
    changeu(index){
      this.i =  index;
    }
  }
}
</script>

<style>
</style>
