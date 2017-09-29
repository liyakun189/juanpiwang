<template>
    <div class="ping">
        <header class="header">
            <h3 class="tit">
                <span>为你推荐</span>
            </h3>
        </header>
        <ul class="nav">
            <li class="item">
                <a href="#">
                    <img src="https://goods1.juancdn.com/bao/170726/0/0/597833ada9fcf8960b5009d3_800x800.png?iopcmd=thumbnail&type=11&height=200&width=200%7Ciopcmd=convert&Q=88&dst=webp" alt="">
                    <p class="price">￥9.9</p>
                </a>
            </li>
             <li class="item">
                <a href="#">
                    <img src="https://goods1.juancdn.com/bao/170726/0/0/597833ada9fcf8960b5009d3_800x800.png?iopcmd=thumbnail&type=11&height=200&width=200%7Ciopcmd=convert&Q=88&dst=webp" alt="">
                    <p class="price">￥9.9</p>
                </a>
            </li>
             <li class="item">
                <a href="#">
                    <img src="https://goods1.juancdn.com/bao/170726/0/0/597833ada9fcf8960b5009d3_800x800.png?iopcmd=thumbnail&type=11&height=200&width=200%7Ciopcmd=convert&Q=88&dst=webp" alt="">
                    <p class="price">￥9.9</p>
                </a>
            </li> <li class="item">
                <a href="#">
                    <img src="https://goods1.juancdn.com/bao/170726/0/0/597833ada9fcf8960b5009d3_800x800.png?iopcmd=thumbnail&type=11&height=200&width=200%7Ciopcmd=convert&Q=88&dst=webp" alt="">
                    <p class="price">￥9.9</p>
                </a>
            </li>
             <li class="item">
                <a href="#">
                    <img src="https://goods1.juancdn.com/bao/170726/0/0/597833ada9fcf8960b5009d3_800x800.png?iopcmd=thumbnail&type=11&height=200&width=200%7Ciopcmd=convert&Q=88&dst=webp" alt="">
                    <p class="price">￥9.9</p>
                </a>
            </li>
        </ul>
        <div class="main">
            <div class="tit">
                <h3>
                    <span>要新团</span>
                </h3>
            </div>
            <ul class="list">
                <li class="item">
                    <a href="#">
                        <div class="cnt">
                            <div class="pic">
                                <img src="https://goods2.juancdn.com/bao/170614/3/e/59410b63ad0a49c4808b457d_800x800.jpg?imageMogr2/thumbnail/350x350!/quality/88!&dst=webp" alt="">
                            </div>
                            <div class="info">
                                <p class="dec">【外携神器】【粉色好心情】舒心小熊抽纸6包100抽/包 3层呵护纸巾卫生纸巾</p>
                                <p class="num">5.2万人已团</p>
                                <div class="bottom">
                                    <div class="price_box">
                                        <p class="price">
                                            <span class="new">￥4.9</span>
                                            <span class="old">￥14.9</span>
                                        </p>
                                        <button>
                                            <span>去开团</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
                 <li class="item">
                    <a href="#">
                        <div class="cnt">
                            <div class="pic">
                                <img src="https://goods2.juancdn.com/bao/170614/3/e/59410b63ad0a49c4808b457d_800x800.jpg?imageMogr2/thumbnail/350x350!/quality/88!&dst=webp" alt="">
                            </div>
                            <div class="info">
                                <p class="dec">【外携神器】【粉色好心情】舒心小熊抽纸6包100抽/包 3层呵护纸巾卫生纸巾</p>
                                <p class="num">5.2万人已团</p>
                                <div class="bottom">
                                    <div class="price_box">
                                        <p class="price">
                                            <span class="new">￥4.9</span>
                                            <span class="old">￥14.9</span>
                                        </p>
                                        <button>
                                            <span>去开团</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
    
<script>
export default {
  name: "ping",
  data () {
    return {
        
    };
  }
}
</script>
    
<style lang="css" scoped>
    .header{
        width: 100%;
    }
    .header .tit,.main .tit{
        line-height: 1.87733rem;
        text-align: center;
        font-size: 100%;
        font-weight: 400;
    }
    .header .tit span,.main .tit span {
        font-size: .59733rem;
        color: #151515;
        position: relative;
    }
     .header .tit span:before,.header .tit span:after, .main .tit span:before,.main .tit span:after{
        content: '';
        width: .59733rem;
        height: .04267rem;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: #151515;
     }
     .header .tit span:before,.main .tit span:before{
         left: -.896rem;
     }
     .header .tit span:after, .main .tit span:after{
         right: -.896rem;
     }
    .nav{
        margin: 0 .21333rem;
        overflow: auto;
        font-size: 0;
        white-space: nowrap;
    }
    .nav .item{
        padding: 0 .21333rem .512rem;
        display: inline-block;
    }
    .nav .item img{
        margin-bottom: .2048rem;
        width: 3.84rem;
        height: 3.84rem;
        /* background: #fafafa url(//act.juancdn.com/jpwebapp/common/images/wapblank.png) no-repeat center; */
    }
    .nav .item .price{
        text-align: center;
        font-size: .512rem;
        color: #333;
    }
    .main{
        width: 100%;
    } 
    .list .item{
        padding: .42667rem;
        border-top: 1px solid #ebebeb;
    }
    .list .item a{
     color: #666;   
    }
    .list .item .cnt{
        display: flex;
        align-items: stretch;
    }
    .list .item .pic{
        width: 5.71733rem;
        height: 5.71733rem;
        flex: 0 0 auto;
        margin-right: .512rem;
        position: relative;
        background: #fafafa
    }
    .list .item .pic img{
        width: 100%;
        height: 100%;
    }
    .list .item .info{
        flex: 1 1 auto;
        height: 5.71733rem;
        position: relative;
    }
    .list .item .info .dec{
        font-size: .55467rem;
        color: #333;
        margin-bottom: .256rem;
    }
    .list .item .info .num{
        font-size: .512rem;
        color: #999;
    }
     .list .item .info .price_box{
         display: flex;
         justify-content:space-between;
     }
     .info .price_box .price .new{
        font-size: .85333rem;
        color: #ff464e;
        margin-right: .17067rem;
     }
     .list .info .price_box{
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
     }
     .info .price_box .price .old{
        font-size: .512rem;
        color: #bbb;
        text-decoration: line-through;  
     }
     .info .price_box button{
        font-size: .512rem;
        border-radius: 4.26667rem;
        padding: .17067rem .512rem;
        border: none;
        color: #fff;
        background: #ff464e;
     }
     .info .price_box button span{
        position: relative;
        margin-right: .384rem;
     }
     .item .info .price_box button span:after{
        content: '';
        width: .29867rem;
        height: .512rem;
        position: absolute;
        right: -.384rem;
        top: 50%;
        transform: translateY(-50%);
        background: url(https://tuan.juancdn.com/build/img/icon_gogroup.png) no-repeat;
        background-size: 100% 100%;
     }
</style>