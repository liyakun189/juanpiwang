<template>
    <div>
       <header class="header">
          <i><img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/head/top-logo.png?67655ac3-1&sv=a8351a1e" alt=""></i>
          <span class="user"><img src="../../img/user.jpg" alt=""></span>
       </header>
       <nav class="nav">
        <a href="" v-for='(item,inex) in List' :key='item.id' @click.prevent="showPage(item.goods_url,item.top_url)">{{ item.title }}</a>
         <!-- <span v-for='(item,inex) in List' :key='item.id' @click="showPage(item.goods_url)">{{ item.title }}</span> -->
    </nav>
    <div class="cloth">
        <div class="cloth_top">
          <ul>
            <li v-for='(item,index) in nav1' :key="item.id"><img :src='item.pic'></li>
            <!-- <li><img src="https://goods8.juancdn.com/jas/170818/f/0/5996370c8150a10af70b7843_200x212.png?imageMogr2/quality/85!/format/png" alt=""></li>
            <li><img src="https://goods8.juancdn.com/jas/170818/f/0/5996370c8150a10af70b7843_200x212.png?imageMogr2/quality/85!/format/png" alt=""></li>
            <li><img src="https://goods8.juancdn.com/jas/170818/f/0/5996370c8150a10af70b7843_200x212.png?imageMogr2/quality/85!/format/png" alt=""></li>
            <li><img src="https://goods8.juancdn.com/jas/170818/f/0/5996370c8150a10af70b7843_200x212.png?imageMogr2/quality/85!/format/png" alt=""></li> -->
          </ul>
        </div>
        <div class="cloth_top">
          <ul>
            <li v-for='(item,index) in nav2' :key="item.id"><img :src='item.pic'></li>
            <!-- <li><img src="https://goods8.juancdn.com/jas/170818/f/0/5996370c8150a10af70b7843_200x212.png?imageMogr2/quality/85!/format/png" alt=""></li>
            <li><img src="https://goods8.juancdn.com/jas/170818/f/0/5996370c8150a10af70b7843_200x212.png?imageMogr2/quality/85!/format/png" alt=""></li>
            <li><img src="https://goods8.juancdn.com/jas/170818/f/0/5996370c8150a10af70b7843_200x212.png?imageMogr2/quality/85!/format/png" alt=""></li>
            <li><img src="https://goods8.juancdn.com/jas/170818/f/0/5996370c8150a10af70b7843_200x212.png?imageMogr2/quality/85!/format/png" alt=""></li> -->
          </ul>
        </div>
        <div class="today_new"><img src="https://goods1.juancdn.com/bao/170310/0/f/58c20db7a43d1f63427015d8_750x96.jpg?iopcmd=convert&Q=85&dst=webp" alt=""></div>
      </div>
      <section class="section">
        <ul>
            <li v-for="(item,index) in List2" :key='item.id'>
                <a href="" class="first"><img :src= 'item.pic_url' /></a>
                <a href="" class="last">

                    <!-- 如果有item.coupon执行 item.coupon.rules[0].aeBankInfo-->
                    <div class="list_price" v-if="item.coupon">
                        <span class="span_top">{{ item.coupon.rules[0].aeBankInfo }}</span>
                    </div>
                    <!-- 否则的话执行 item.cprice/oprice-->
                    <div class="list_price" v-else>
                        <span class="span_top">{{ '￥' + item.cprice }}</span>
                        <span class="lable">{{ '￥' + item.oprice }}</span>
                    </div>
                    <!-- 上新数据 -->
                     <span class="span_bottom">{{ item.residue }}</span>
                     <!-- 如果有item.coupon 就继续执行item.coupon.abName 否则的话就执行item.title -->
                    <h3 class="short" >{{ item.coupon &&  item.coupon.abName || item.title  }}</h3>
                </a>
            </li>
        </ul>
    </section>
   </div>
</template>
    
<script>
export default {
  name: "component_name",
  data () {
    return {
        url:'../../static/nav.json',
        List:[],
        List2:[],
        nav1:[],
        nav2:[],
        nav3:[]
    };
  },
   created(){
            this.$http.get(this.url).then(res=>{
                console.log(res);
                this.List = res.data.menu_list[0].subtab;
            },err=>{
                console.log('kkkkk');
            });

            //  this.$http.jsonp(this.url2).then(res=>{
            //     console.log(res);
            //     this.List2 = res.data.list;
            //     console.log(res.data.list);
            // },err=>{
            //     console.log('123');
            // });
        },
    methods: {
        showPage(goods_url,top_url) {
          console.log(goods_url);
          //图片列表数据
          this.$http.jsonp(goods_url).then( res => {
            this.List2 = res.data.list;
          }, err => {
            console.log(err);
          });
          //上边图片列表数据
          this.$http.jsonp(top_url).then( res =>{
            this.nav1 = res.data.module_ads.multi_block[0].data[0].child;
            this.nav2 = res.data.module_ads.multi_block[1].data[0].child;
            this.nav3 = res.data.module_ads.multi_block[2].data[0].child;
            // console.log(this.List3);
          },err=>{
            console.log('error');
          })
        }
      }
    }

</script>
    
<style lang="css" scoped>
    .header{
      height: 2.2rem;
      line-height: 2.2rem;
      border-bottom: 1px solid #ebebeb;
      text-align: center;
    }
    .header img{
      vertical-align: middle;
    }
    .header i{
      display: inline-block;
    }
    .header i img{
      padding: 0.5rem 0 0 0;
    }
    .user {
      margin-top: 0.5rem;
      display: block;
      margin-right: 0.5rem;
      float: right;
      width: 1rem;
      height: 1.2rem;
      top: -0.5rem;
      position: relative;
      right: 0;
      z-index: 99;
    }
    .user img{
      display: inline-block;
      width: 100%;
    }
    .nav{
    height: 1.7rem;
    line-height: 1.7rem;
    /* position: static; */
    white-space: nowrap;
    overflow: auto;
    overflow-y: hidden;
    margin-bottom: 0.1rem;
    z-index: 199;
  }
  .nav a{
      line-height: 1.9rem;
      height: 1.9rem;
      display: inline-block;
      font-size: 0.63rem;
      text-align: center;
      color: #333;
      padding: 0 .2rem;
      margin: 0 .27rem;
      background: #fff;
  }
  .cloth{
    height: 10.95rem;
    background: #f4f4f8;
  }
  .cloth img{
    width: 100%;
  }
  .cloth_top{
    height: 4.24rem;
  }
  .cloth_top ul{
    display: flex;
  }
  .cloth_top ul li{
    width:4rem ;
    flex: 1;
  }
  .today_new{
    margin-top: 0.4rem;
  }
  .section{
    height: 100%;
    margin-bottom:2.45rem; 
}
.section ul{
    display: flex;
    flex-wrap: wrap;
}
.section ul li{
    width: 8rem;
    /* margin-right: .08533rem; */
    margin-top: .08533rem; 
    position: relative;
}
.section ul li:nth-child(n+1) :after{
    width: 2px;
    position: absolute;
    top: 0;
    right: -1px;
    height: 100%;
    content:'';
    background: white;
}
.section .first{
    display: inline-block;
    height: 8rem;
    width: 8rem;
}
.section .first img{
    vertical-align: middle;
    width: 100%;
}
.section .last{
    display: inline-block;
    height: 2.3rem;
    width: 8rem;
}
.list_price{
    width: 92%;
    position: relative;
    bottom: 0;
    margin-left:0.5rem;
    height: 1.2rem;
}
.span_top{
    font-size: 0.7rem;
    position: absolute;
    bottom: 0;
    color: #ff464e;
}

.span_bottom{
    position: absolute;
    color: #bbb;
    font-size:0.6rem;
    text-align: right;
    right: 0.2rem;
    bottom: -0.6rem;
    line-height: 1.1; 
}
.lable{
     font-size:0.55rem;
     color: #bbb;
     position: absolute;
     top: 0.4rem;
     left: 2.5rem;
     text-decoration: line-through;
}
.short{
    font-size: 0.6rem;
    font-weight: 300;
    color: #333;
    background: hsla(0,0%,100%,.8);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    margin-left: 0.5rem;
    width: 5rem;
}
</style>