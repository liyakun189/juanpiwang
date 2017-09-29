<template>
<div>
    <div class="go-app">
        <a href="">
            <img src="https://jp.juancdn.com/jpwebapp/images/go_load_new.png?20161115">
        </a>
    </div>
    <div class="header">
        <div class="search">
            <a href="" class="search-input">
                <img src="../../img/search.jpg" alt="">
                <label for="">搜索商品</label>
            </a>
        </div>
<<<<<<< HEAD
        <span class="user"><a href="/sort"><img src="../../img/user.jpg" alt=""></a></span>
=======
        <span class="user"><a href="/sort"><img src="../../img/user.jpg" alt=""></a>
        </span>
>>>>>>> lyk/juanpiwang
    </div>
    <nav class="nav">
         <a href="" v-for='(item,inex) in List' :key='item.id'>{{ item.title }}</a>
    </nav>
    <div class="banner">
        <img src='https://goods2.juancdn.com/jas/170818/3/d/5996dbed8150a12f501eecb1_1080x418.png?imageMogr2/thumbnail/750x290!/quality/80!/format/png'>
    </div>
    <div class="kong"></div>
    <div class="type">
<<<<<<< HEAD
        <div><a href="/ping"><img src="https://goods8.juancdn.com/jas/170828/e/7/59a3f55e8150a1637e478d48_270x267.png?imageMogr2/quality/85!/format/png" alt=""></a></div>
        <div><a href=""><img src="https://goods8.juancdn.com/jas/170809/e/8/598a7504a9fcf866ab51bcfe_270x267.png?imageMogr2/quality/85!/format/png" alt=""></a></div>
=======
        <div><a href=""><img src="https://goods8.juancdn.com/jas/170828/e/7/59a3f55e8150a1637e478d48_270x267.png?imageMogr2/quality/85!/format/png" alt=""></a></div>
        <div><a href="/ping"><img src="https://goods8.juancdn.com/jas/170809/e/8/598a7504a9fcf866ab51bcfe_270x267.png?imageMogr2/quality/85!/format/png" alt=""></a></div>
>>>>>>> lyk/juanpiwang
        <div><a href=""><img src="https://goods4.juancdn.com/jas/170828/7/1/59a3f5768150a16da3399c8f_270x267.png?imageMogr2/quality/85!/format/png" alt=""></a></div>
        <div><a href=""><img src="https://goods1.juancdn.com/jas/170906/1/c/59af976b8150a15198156939_270x267.png?iopcmd=convert&Q=85&dst=webp" alt=""></a></div>
    </div>
    <div class="kong"></div>
    <div class="style1">
        <div class="style1_left">
            <div class="countTime">
                <p>
                    <span>00</span>
                    <b>:</b>
                    <span>57</span>
                    <b>:</b>
                    <span>45</span>
                </p>
            </div>
            <img src="https://goods2.juancdn.com/jas/170925/3/e/59c86d9f8150a1401a43bc5a_540x656.png?imageMogr2/quality/85!/format/png" alt="">
        </div>
        <div class="style1_right">
            <div class="right_top">
                <img src="https://goods8.juancdn.com/jas/170922/e/e/59c4f47fa9fcf854472724c2_540x328.png?imageMogr2/quality/85!/format/png" alt="">
            </div>
            <div class="right_bottom">
                <img src="https://goods1.juancdn.com/jas/170925/0/2/59c86299a9fcf82f0a749c74_540x328.png?iopcmd=convert&Q=85&dst=webp" alt="">
            </div>
        </div>
    </div>
    <div class="kong"></div>
    <div class="img">
        <div><img src="https://goods6.juancdn.com/jas/170920/a/c/59c256a68150a10f1f02c1e1_270x360.png?imageMogr2/quality/85!/format/png" alt=""></div>
        <div><img src="https://goods3.juancdn.com/jas/170920/5/5/59c256e18150a10e787b2434_270x360.png?iopcmd=convert&Q=85&dst=webp" alt=""></div>
        <div><img src="https://s2.juancdn.com/jas/170920/0/3/59c256fb8150a10ee71f22cf_270x360.gif" alt=""></div>
        <div><img src="https://goods7.juancdn.com/jas/170920/c/9/59c25736a9fcf8b19540fccc_270x360.png?iopcmd=convert&Q=85&dst=webp" alt=""></div>
    </div>
    <div class="kong"></div>
    <div class="every">
        <img src="https://goods1.juancdn.com/bao/170310/0/f/58c20db7a43d1f63427015d8_750x96.jpg?iopcmd=convert&Q=85&dst=webp" alt="">
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
            url:'../../static/data.json',
            url2:'https://shop.juanpi.com/zxg?key=zuixinzhekou&type=1&zhouyi_ids=p8_c4_l1_51_1064_18_5_128&machining=gsortzxg&page=1&rows=10&dtype=JSONP&price_range=&cat_threeids=&cm=1&cm_channel=1&callback=gsort_callback',
            List:[],
            List2:[],
        };
    },
    created(){
            this.$http.get(this.url).then(res=>{
                console.log(res);
                this.List = res.data.menu_list[0].subtab;
            },err=>{
                console.log('kkkkk');
            });
            this.$http.jsonp(this.url2).then(res=>{
                console.log(res);
                this.List2 = res.data.list;
                console.log(res.data.list);
            },err=>{
                console.log('123');
            });
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
    z-index: 199;
    height: 2.21rem;
    width: 100%;
    overflow: inherit;
    border-bottom: 1px solid #ebebeb;
<<<<<<< HEAD
=======

    /* 新增样式 */
>>>>>>> lyk/juanpiwang
    position: relative;
}
.header .search{
    position: absolute;
    padding-right: 1.87733rem;
    padding-left: .59733rem;
    width: 100%;
    box-sizing: border-box;
    font-size: 0.68rem;
    color: #bbb;
}
.search a{
    color: #666;
    display: flex;
    align-items:center;
}
.search a lable{
    margin-left: 1.2rem;
}
.search-input{
    position: relative;
    display: block;
    height: 1.4rem;
    line-height: 1.4rem;
    margin-top: 0.5rem;
    background-color: #f2f2f2;
    border-radius: .17067rem;
}
.search-input  img{
    padding: 0 0 0 0.36rem;
    vertical-align: middle;
    width:1rem;
    height: 0.65rem;
}
 .user {
    margin-top: 0.5rem;
    display: block;
   margin-right: 0.5rem;
    float: right;
    width: 1rem;
    height: 1.2rem;
<<<<<<< HEAD
    position: relative;
    right: 0;
    bottom: auto;
    z-index: 99;
=======
    /*新增样式  */
    position: absolute;
    z-index: 999;
    right:0;
    bottom: auto;
>>>>>>> lyk/juanpiwang
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
.banner img{
    width: 100%;
    height: 100%;
    vertical-align: middle
}
.kong{
     background-color: #f2f2f2;
     height: 0.41rem;
}
.type{
    height: 4rem;
    overflow: hidden;
}
.type div{
    float: left;
    width: 4rem;
    height: 2.6rem;
}
.type div img{
    width: 100%;
}
.style1{
    height: 9.7rem;
}
.style1_left{
    float: left;
    width: 8rem;
    height: 9.7rem;
    position: relative;
}
.style1_left .countTime{
    position: absolute;
    left: .42667rem;
    z-index: 9;
    top: 2.048rem;
}
.style1_left .countTime p{
    height: .768rem;
    line-height: .768rem;
    text-align: center;
    font-size: 0.512rem;
}
.style1_left .countTime p span{
    display: inline-block;
    width: 0.768rem;
    height: 0.768rem;
    background:#333;
    color: #fff;
}
.style1_left img{
    width: 100%;
    height: 100%;
    vertical-align: middle;
}
.style1_right{
    float: left;
    width: 8rem;
    height: 9.7rem;
    border-left: 1px solid #ebebeb;
}
.style1_right img{
    width: 100%;
    vertical-align: middle;
}
.right_top{
    height: 4.8rem;
}
.right_bottom{
    border-top: 1px solid #ebebeb;
    height: 4.9rem;
}
.img{
    height: 5.3rem;
}
.img div{
    float: left;
    width: 4rem;
}
.img div img{
    vertical-align: middle;
    width: 100%;
} 
.every{
    height: 2rem;
}
.every img{
    width: 100%;
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
    /* bottom: -0.6rem; */
    line-height: 1.1; 
}
.lable{
     font-size:0.55rem;
     color: #bbb;
     position: absolute;
     top: 0.4rem;
     left: 1.7rem;
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
.footer{
    position: fixed;
    width: 100%;
    height: 2.45rem;
    line-height:3rem;
    background-color: #fff;
    bottom: 0;
    z-index: 400;
    background-size: 100% 100%;
    border-top: 1px solid #ebebeb;
    text-align: center;
}
.footer a{
    float: left;
    display: block;
    width: 20%;
    text-align: center;
    font-size:0.5rem;
    height: 100%;
}

.footer a img{
    width:1.2rem; 
    display: block;
    margin: 0 auto;
    margin-top: 0.375rem;
    margin-bottom: 0.25rem;
}
.footer a span {
    display:block;
    width: 100%;
    height: 0.5rem;
    text-align: center;
    line-height: 0.5rem;
}
</style>