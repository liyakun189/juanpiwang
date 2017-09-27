<template>
  <div id="app">
   <!-- 引入tab-bar组件  footer.... -->
    <fo></fo>
    <router-view></router-view>
  </div>
</template>

<script>
import Fo from './components/Taber'
export default {
  name: 'app',
  components: {
    Fo
  }
}
</script>

<style>
</style>
