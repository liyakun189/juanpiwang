<template>
    <div id="sort">
       <header class="header">
         <div class="header_cnt">
          <span class="icon_box">
            <a href="#">
              <span class="icon" @click="goback">
                <img src="../../img/sort.jpg" alt="">
              </span>
            </a>
          </span>
          <span class="tit">全部分类</span>
         </div>
       </header>
       <div class="main">
         <div class="search">
          <div class="search_box">
            <span class="icon" @click="goback">
              <img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/icon/search.png?ts=390cfa98cd666aa7_1506359253-1&sv=a8351a1e" alt="">
            </span>
            <input type="search" name="" id="" placeholder="搜索商品">
          </div>
         </div>
         <div class="goods_list">
          <div class="list_left">
            <ul class="list_tit">
              <li class="active item"><a href="#">女装</a> </li>
              <li class="item"><a href="#">男装</a></li>
              <li class="item"><a href="#">母婴</a></li>
              <li class="item"><a href="#">鞋类</a></li>
              <li class="item"><a href="#">箱包</a></li>
              <li class="item"><a href="#">居家百货</a></li>
              <li class="item"><a href="#">家电数码</a></li>
              <li class="item"><a href="#">女装</a> </li>
              <li class="item"><a href="#">男装</a></li>
              <li class="item"><a href="#">母婴</a></li>
              <li class="item"><a href="#">鞋类</a></li>
              <li class="item"><a href="#">箱包</a></li>
              <li class="item"><a href="#">居家百货</a></li>
              <li class="item"><a href="#">家电数码</a></li>
            </ul>
          </div>
          <div class="list_right">
            <div class="cnt">
              <div class="goods">
                <a href="/sortInfo">
                  <img src="https://s2.juancdn.com/bao/170824/8/d/599e9f6ba9fcf8902a706e88_200x200.png?iopcmd=convert&dst=webp" alt="">
                  <p>秋款外套</p>
                </a>
              </div>
              <div class="goods">
                <a href="#">
                  <img src="https://s2.juancdn.com/bao/170824/a/4/599e9f318150a103bd52fe63_200x200.png?iopcmd=convert&dst=webp" alt="">
                  <p>连衣裙</p>
                </a>
              </div>
              <div class="goods">
                <a href="#">
                  <img src="https://s2.juancdn.com/bao/170824/a/4/599e9ff7a9fcf87f902f81c8_200x200.png?iopcmd=convert&dst=webp" alt="">
                  <p>针织衫</p>
                </a>
              </div>
              <div class="goods">
                <a href="#">
                  <img src="https://s2.juancdn.com/bao/170824/c/b/599e9e528150a11e835e8117_200x200.png?iopcmd=convert&dst=webp" alt="">
                  <p>针织衫</p>
                </a>
              </div>
               <div class="goods">
                <a href="#">
                  <img src="https://s2.juancdn.com/bao/170824/8/d/599e9f6ba9fcf8902a706e88_200x200.png?iopcmd=convert&dst=webp" alt="">
                  <p>秋款外套</p>
                </a>
              </div>
              <div class="goods">
                <a href="#">
                  <img src="https://s2.juancdn.com/bao/170824/a/4/599e9f318150a103bd52fe63_200x200.png?iopcmd=convert&dst=webp" alt="">
                  <p>连衣裙</p>
                </a>
              </div>
              <div class="goods">
                <a href="#">
                  <img src="https://s2.juancdn.com/bao/170824/a/4/599e9ff7a9fcf87f902f81c8_200x200.png?iopcmd=convert&dst=webp" alt="">
                  <p>针织衫</p>
                </a>
              </div>
              <div class="goods">
                <a href="#">
                  <img src="https://s2.juancdn.com/bao/170824/c/b/599e9e528150a11e835e8117_200x200.png?iopcmd=convert&dst=webp" alt="">
                  <p>针织衫</p>
                </a>
              </div>
            </div>
          </div>
         </div>
       </div>
    </div>
</template>
    
<script>
export default {
  name: "sort",
  data () {
    return {
        
    };
  },
  methods:{
    goback(){
      history.back();
    }
  }
}
</script>
    
<style lang="css" scoped>
    #sort{
      width: 100%;
      height: 100%;
      font-family: PingFang-SC-Regular,Helvetica Neue,Helvetica,Droid Sans Fallback,microsoft yahei,sans-serif;
    }
    .header{
      height: 2.2rem;
      width: 100%;
      max-width: 16rem;
      min-width: 8rem;
      overflow: inherit;
      position: relative;
      z-index: 199;
      display: flex;
      border-bottom: 1px solid #dedede;
    }
    .header .header_cnt{
      padding-left: 0.6rem;
      width: 100%;
      display: flex;
      align-items: center;
    }
    .header .icon{
      display: inline-block;
    }
    .header .icon img{
      width:0.6rem;
    }
    .header .tit{
      font-size: 0.9rem;
      line-height: 2.2rem;
      padding-left: 5.8rem
    }
    .main{
      width: 100%;
      font-size:0.75rem;
    }
    .search{
      margin: .5rem;
      border: 1px solid #bbb;
      border-radius: 5px;
      background-color: #fff;
      padding: .125rem 0;
      color: #666;
    }
    .search_box{
      display:flex;
      height: 0.6rem;
      line-height: 0.6rem;
      margin: 0.3rem;
      align-items: center;
    }
    .search_box input{
      font-size: 0.625rem;
      line-height: 0.6rem;
      margin-left: 0.5rem;
      color: #999;
      border: none
    }
    .search_box .icon{
      /* width:1.2rem; */
      height: 1.2rem;
      line-height: 1.2rem;
    }
    .search_box .icon img{
      width: 1.2rem;
    }
    .goods_list{
      width: 100%;
      display: flex;
    }
    .list_left {
      /* width:4.5rem; */
      /* float: left; */
      width: 25%;
      background: #f9f9f9;
      overflow: hidden;
    }
    .list_left .list_tit{
      text-indent: 0.75rem;
      text-align: left;
      font-size: 0.7rem;
      background: #f9f9f9;
    }
    .list_left .item{
      height: 2.25rem;
      line-height: 2.25rem;
      border-bottom: 1px solid #ebebeb;
      border-left: 4px solid #f9f9f9;
      /* padding-right: 0.3rem; */
    }
    .list_left .active{
      color: #ff464e;
      border-left: 4px solid #ff464e;
      background-color: #fff;
    }
    .list_right{
      /* width: 100%; */
      float: right;
      float: left;
      width: 75%;
      font-size: 12px;
      padding-left: 4%;
    }
    .list_right .cnt{
     margin-top: 0.5rem;
     width: 100%;
     display: flex;
     flex-wrap: wrap;
    }
    .list_right .cnt .goods{
      height: 4rem;
      width: 3.625rem;
      padding: 0 5%;
      display: inline-block;
      text-align: center;
    }
    .list_right .cnt .goods img{
      width:100%;
    }
    .list_right .cnt .goods p{
      font-size: 0.6rem;
      line-height: 0.6rem;
      color: #333;
    }
</style>