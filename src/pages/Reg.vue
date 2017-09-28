<template>
    <div>
       <header class="header">
         <router-link  to='/Mine'>
          <a href="">
            <img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/user/arrow_black.png?ts=390cfa98cd666aa7_1506420199-1&sv=a8351a1e" alt="">
          </a>
         </router-link>
         <span>注册</span>
       </header>
       <div class="wap_login">
         <p>请确保你的手机通畅，用于接收验证码短信</p>
          <ul>
              <li><input type="" placeholder="请输入手机号"></li>
              <li><input type="text" name="" placeholder="请输入验证码"><a href="">获取验证码</a></li>
          </ul>
          <a href="" class="next">下一步</a>
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
    .header{
      width: 100%;
      height: 2.2rem;
      line-height: 2.2rem;
      font-size: 0.9rem;
      color:#666;
      border-bottom: 0.03rem solid #dedede;
      
    }
    .header a{
      display: inline-block;
      width: 2.25rem;
      height: 2.25rem;
    }
    .header a img{
      display: inline-block;
      vertical-align: middle;
    }
    .header span{
      display: inline-block;
      width: 11rem;
      text-align: center;
    }
    .wap_login{
      height: 9.75rem;
      padding: 0 0.6rem;
      
    }
   .wap_login p{
     text-align: center;
      margin-top: 1.4rem;
      margin-bottom: 0.2rem;
      font-size: 0.6rem;
      color: #999;
    }
    ul li{
      border-bottom: 0.03rem solid #ebebeb;
    }
    ul li a{
      color: #999;
      float: right;
      font-size: 0.7rem;
      height: 2.425rem;
      line-height: 2.425rem;
    }
    ul li input{
      height: 2.425rem;
      border: none;
      font-size: 0.7rem;
    }
    .next{
      width: 100%;
      height:2.4rem ;
      line-height: 2.4rem;
      margin-top: 1.25rem;
      background: #dbdbdb;
      font-size: 0.9rem;
      color: #fff;
      display: block;
      text-align: center;
    }
</style>