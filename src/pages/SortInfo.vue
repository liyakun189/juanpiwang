<template>
    <div>
      <header class="header">
         <div class="header_cnt">
          <span class="icon_box">
            <span class="icon" @click="goback">
            <img src="../../img/sort.jpg" alt="">
            </span>
            <span class="tit">双肩包</span>
          </span>
          <a href="/search" class="search">
            <img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/icon/search.png?ts=390cfa98cd666aa7_1506359253-1&sv=a8351a1e" alt="">
          </a>
          <a href="/link" class="link">
            <img src="../../img/more.jpg" alt="">
          </a>
         </div>
       </header>
       <div class="condition">
           <div class="con_cnt">
               <ul class="list">
                   <li class="item active"><a href="#">推荐</a></li>
                   <li class="item price">
                     <a href="#">价格
                       <span class="icon"></span>
                     </a>
                   </li> 
                   <li class="item"><a href="#">销量</a></li>
                   <li class="item"><a href="#">上新</a></li>
                   <li class="item screen">
                     <a href="#">筛选
                       <span class="icon"></span>
                     </a>
                   </li>
               </ul>
           </div>
       </div>
       <div class="main">
         <ul class="good_list">
           <li class="good">
             <a href="#">
               <img src="https://goods2.juancdn.com/goods/170906/2/4/59afb255a9fcf86565368a20_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg" alt="" class="img">
               <p class="price">
                 <span class="new">￥88</span>
                 <span class="old">￥199</span>
               </p>
               <p class="info">宽松蝙蝠针织开衫外套</p>
             </a>
           </li>
           <li class="good">
             <a href="#">
               <img src="https://goods8.juancdn.com/goods/170915/f/3/59bb9c278150a175bd0b5321_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg" alt="" class="img">
               <p class="price">
                 <span class="new">￥88</span>
                 <span class="old">￥199</span>
               </p>
               <p class="info">秋季宽松百搭牛仔外套</p>
             </a>
           </li>
           <li class="good">
             <a href="#">
               <img src="https://goods2.juancdn.com/goods/170906/2/4/59afb255a9fcf86565368a20_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg" alt="" class="img">
               <p class="price">
                 <span class="new">￥88</span>
                 <span class="old">￥199</span>
               </p>
               <p class="info">宽松蝙蝠针织开衫外套</p>
             </a>
           </li>
          <li class="good">
             <a href="#">
               <img src="https://goods2.juancdn.com/goods/170906/2/4/59afb255a9fcf86565368a20_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg" alt="" class="img">
               <p class="price">
                 <span class="new">￥88</span>
                 <span class="old">￥199</span>
               </p>
               <p class="info">宽松蝙蝠针织开衫外套</p>
             </a>
           </li>
           <li class="good">
             <a href="#">
               <img src="https://goods2.juancdn.com/goods/170906/2/4/59afb255a9fcf86565368a20_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg" alt="" class="img">
               <p class="price">
                 <span class="new">￥88</span>
                 <span class="old">￥199</span>
               </p>
               <p class="info">宽松蝙蝠针织开衫外套</p>
             </a>
           </li>
          <li class="good">
             <a href="#">
               <img src="https://goods2.juancdn.com/goods/170906/2/4/59afb255a9fcf86565368a20_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg" alt="" class="img">
               <p class="price">
                 <span class="new">￥88</span>
                 <span class="old">￥199</span>
               </p>
               <p class="info">宽松蝙蝠针织开衫外套</p>
             </a>
           </li>
         </ul>
       </div>
    </div>
</template>
    
<script>
export default {
  name: "component_name",
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
      position: relative;
    }
    .header .header_cnt{
      padding-left: 0.6rem;
      width: 100%;
      display: flex;
      align-items: center;
    }
    .header .icon_box{
        display:flex;
    }
    .header .icon{
      display: inline-block;
    }
    .header .icon img{
      width:0.6rem;
    }
    .header .tit{
      font-size: 0.9rem;
      padding-left: 5rem;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .header .search{
        position: absolute;
        top:0.4rem;
        right: 2.7rem;
    }
    .header .link{
        position: absolute;
        top:0.8rem;
        right: 1rem;
    }
    .header .search img{
        width: 1.2rem;
        height: 1.2rem;
    }
    .header .link img{
        width:1.5rem;
    }
    .condition{
      width: 100%;
      background: #fff;
       max-width: 16rem;
      min-width: 8rem;
      height: 2rem;
    }
    .condition .con_cnt{
      width: 100%;
      overflow-x: auto;
      overflow-y: hidden;
      max-width: 16rem;
      min-width: 8rem;
      text-align: center;
      padding-top:0.25rem;
      padding-bottom: 0.25rem;
      font-size: 0.7rem;
      border-bottom: 1px solid #ebebeb;
    }
    .condition .con_cnt .list{
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .condition .con_cnt .list .active a{
      color: #ff464e;
    }
    .condition .list .price .icon{
      display: inline-block;
      /* width: 0.4rem; */
      width:0.375rem;
      height: 0.75rem;
      margin-left: 0.25rem;
      background: url(https://jp.juancdn.com/jpwebapp_v1/images_v1/icon/sort_sprite.png) no-repeat;
      background-position-x: 0;
      background-size: 2.45rem;
    }
    .condition .list .screen .icon{
      display:inline-block;
      width: 0.55rem;
      height: 0.65rem;
      background: url(https://jp.juancdn.com/jpwebapp_v1/images_v1/icon/sort_sprite.png) no-repeat;
      background-position-x: -46px;
      background-position-y: 0;
      background-size: 2.45rem;
    }
    .main{
      background-color: #f9f9f9;
      width: 100%;
      overflow: hidden;
      min-height: 17.06667rem;
    }
   .main .good_list{
      width: 16.21333rem;
      display: flex;
      flex-flow: wrap;
      justify-content:space-between;
    }
    .good_list .good{
      width: 8rem;
      margin-top: .08533rem;
      background-color: #fff;
      height:10.85rem ;
    }
    .good_list .good img{
      width: 100%;
    }
    .good_list .good .price{
      height: 1.2rem;
      line-height: 1.2rem;
      margin:0 0.4rem 0 0.4rem;
    }
    .good_list .good .price .new{
      margin-right: 0.2rem;
      font-size: 0.75rem;
      color: #ff464e;
    }
    .good_list .good .price .old{
      font-size: 0.55rem;
      color: #bbb;
      text-decoration: line-through;
    }
    .good_list .good .info{
      height: 1rem;
      line-height: 1rem;
      margin-left: 0.4rem;
      font-size: 0.6rem;
      margin-top: 0.1rem;
      font-weight: 300;
      color: #333;
      background: hsla(0,0%,100%,.8);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
</style>