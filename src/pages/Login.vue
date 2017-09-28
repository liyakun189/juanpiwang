<template>
    <div>
       <div class="go-app">
                <a href="">
                    <img src="https://jp.juancdn.com/jpwebapp/images/go_load_new.png?20161115">
                </a>
        </div>
        <header class="header">

            <router-link to='/Mine'>
                <a href=""><img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/user/arrow_white.png?ts=390cfa98cd666aa7_1506420199-1&sv=a8351a1e" alt=""></a>
            </router-link>

            <span>登录</span>
            <a href="">注册</a>
        </header>
        <div class="wrap_login">
            <ul class="my_ul">
                <li class="active">卷皮账号登录</li>
                <li>手机快捷登录</li>
            </ul>
            <form action="">
                <ul>
                    <li><input type="" placeholder="手机号/邮箱/用户名"></li>
                    <li><input type="text" name="" placeholder="密码"></li>
                </ul>
                <a href="" class="deng">登录</a>
                <div class="action">
                    <label for=""><input type="checkbox"><span class="before"><img src ='https://jp.juancdn.com/jpwebapp_v1/images_v1/user/label_on.png?ts=390cfa98cd666aa7_1506420199-1&sv=a8351a1e'></span>两周内免登录</label>
                    <a href="">忘记密码？</a>
                </div>
            </form>
            <div class="wap_app">
                <h3>第三方账号快速登录</h3>
                <div class="pic">
                    <a href=""><img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/user/tencent.png?ts=390cfa98cd666aa7_1506420199-1&sv=a8351a1e" alt=""></a>
                    <a href=""><img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/user/taobao.png?ts=390cfa98cd666aa7_1506420199-1&sv=a8351a1e" alt=""></a>
                    <a href=""><img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/user/sina.png?ts=390cfa98cd666aa7_1506420199-1&sv=a8351a1e" alt=""></a>
                </div>
                <ul></ul>
            </div>
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
.header{
    height: 2.25rem;
    line-height: 2.25rem;
    background: linear-gradient(150deg,#ff5a61 50%,#fd631c);
}
.header a{
    display: inline-block;
    text-align: center;
    font-size: 0.7rem;
    color: #fff;
}
.header a img{
    display: inline-block;
    vertical-align: middle;
}
.header a:first-child{
    width: 2.25rem;
    height: 2.25rem;
}
.header a:last-child{
    width: 2.25rem;
}
.header span{
    width: 10.5rem;
    display: inline-block;
    font-size: 0.9rem;
    color: #fff;
    text-align: center;
}
.wrap_login{
    padding: 0 0.6rem;
    height: 23rem;
}
.my_ul{
    display: flex;
    height: 2.2rem;
    line-height: 2.2rem;
    position: relative;
}
.my_ul li{
    flex: 1;
    width:50%;
    font-size: 0.7rem;
    text-align: center;
    color: #999;
}
.my_ul  .active:after{
    content: '';
    left: 1.5rem;
    right: 0.75rem;
    height: 0.1rem;
    text-align: center;
    width: 30%;
    background: #ff464e;
    color: #ff464e;
    position: absolute;
    bottom: 0;
}
form{
    width: 14.8rem;
    height: 10.35rem;
    margin-bottom: 2.6rem;
}
form ul{
    height: 4.85rem;
}
form ul li{
    border-bottom: 0.03rem solid #ebebeb;
}
form ul li input{
    height: 2.425rem;
    line-height: 2.425rem;
    display: block;
    border: none;
    width:1000px;
    font-size: 0.7rem;
}
form .deng{
    display: block;
    height: 2.4rem;
    line-height: 2.4rem;
    margin: 1.25rem 0 0 0;
    background: #dbdbdb;
    font-size: 0.9rem;
    text-align: center;
    width: 100%;
    color: #ffffff;
}
.action{
    height: 1.85rem;
    font-size: 0.7rem;
    color: #999;
    
}
.action label{
    width: 5.375rem;
    height: 1.85rem;
    display: inline-block;
    line-height: 1.85rem;
}
.action label input{
    width: 0;
    height: 0;
    left: 0;
    top: 0;
    opacity: 0;
}
.action label  .before{
    display: inline-block;
    width: 0.7rem;
    height: 0.7rem;
    border-color: #ff464e;
    background: #ff464e;
    margin: 0.1rem 0.425rem -0.1rem 0 ;
}
.action  a{
    float: right;
    height: 1.85rem;
    line-height: 1.85rem;
    font-size: 0.7rem;
    color: #999;
}
.wap_app{
    height: 7.775rem;
}
.wap_app h3{
    font-size: 0.6rem;
    color: #999;
    text-align: center;
    margin-bottom: 1.5rem;
}
.wap_app .pic{
    display: flex;
    margin-bottom: 1.15rem;
}
.wap_app .pic a{
    flex: 1;
    display: inline-block;
    width: 2.4rem;
    height: 2.4rem;
    line-height: 2.4rem;
    text-align: center;
    margin: 0 1rem;
}
.wap_app .pic a img{
    margin: 0 auto;
}
</style>