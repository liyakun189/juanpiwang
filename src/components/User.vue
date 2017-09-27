<template>
    <header class="header">
        <div class="userCenter">
            <a href="" class="a_img"><img src="../../img/0.jpg" alt=""></a>
            <span class="myself">个人中心</span>
        </div>
        <div class="userLogin">
            <a href="">注册</a>
            <i></i>
            <a href="">登录</a>
        </div>
    </header>
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
    .header{
    width:16rem ;
    height: 7.2rem;
    background: #ff464e;
    background-image: url(https://jp.juancdn.com/jpwebapp_v1/images_v1/user/user_center_bg.png);
}
.header .userCenter{
    height: 2.2rem;
    line-height: 2.2rem;
    width: 16rem;
    text-align: center;
    /* background: pink; */
    color: #fff 
}
.header .a_img{
    display: block;
    width: 2.6rem;
    height: 2.2rem;
    float: left;
    padding: 0.7rem 0 0 0.7rem;
}
.header .a_img img{
    float: left;
    width: 0.6rem;
    vertical-align: middle;
}
.header .myself{
    font-size: 0.9rem;
    display: inline-block;
}
.userLogin{
    height: 5rem;
    line-height: 5rem;
    text-align: center;
    position: relative;
}
.userLogin i{
    position: absolute;
    top: 50%;
    left: 50%;
    height: 1rem;
    width: 2px;
    background-color: #fff;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
}
.userLogin a{
    display: inline-block;
    width: 6.75rem;
    color: #fff ;
}
</style>