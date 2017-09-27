<template>
    <div>
       <div class="go-app">
            <a href="">
                <img src="https://jp.juancdn.com/jpwebapp/images/go_load_new.png?20161115">
            </a>
        </div>
   </div>
</template>
    
<script>
export default {
  name: "component_name",
  data () {
    return {
        
    };
  }
}
</script>
    
<style lang="css" scoped>
.go-app{
    background: hsla(0,0%,100%,.7);
    z-index: 99999;
    width: 100%;
    -webkit-transition: all .2s linear 0s;
    transition: all .2s linear 0s;
    height: 2.4rem;
}
.go-app a{
    display: inline-block; 
    width: 100%;
}
.go-app a img{
    width: 100%;
}
</style>