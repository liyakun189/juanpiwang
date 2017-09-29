<template>
   <div id="card">
       <div class="header">
           <span class="back"><</span>
           <span class="cart">购物车</span>
           <span class="edit">编辑</span>
       </div>
       <div class="goods-list">
           <div class="top">
               <input type="checkbox"/>
               <span>卷皮直发</span>
           </div>
          <ul>
              <li class="good">
                  <div class="good-top">
                      <a href="###">
                          <span class="left">任选</span>
                          <span class="center">购买22元3件任选</span>
                          <span class="right">去凑单 ></span>
                      </a>
                  </div>
                  <div class="good-msg">
                      <div class="check">
                          <input type="checkbox">
                      </div>
                      <div class="img">
                          <img src="https://goods6.juancdn.com/bao/170329/a/e/58db8175a43d1f21721628b6_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg"/>
                      </div>
                      <div class="des">
                          <p class="name">可折叠厨用保鲜菜罩</p>
                          <p class="size">红色刀叉 37*37*15</p>
                          <p class="price">
                              <span class="newPrice">￥14.9</span>
                              <span class="oldPrice">￥64.9</span>
                              <span class="count">
                                  <span class="red">-</span>
                                  <span class="many">1</span>
                                  <span class="add">+</span>
                              </span>
                          </p>
                      </div>
                  </div>
              </li>
          </ul>        
       </div>
        <div class="bottom">
            <div class="allcheck">
                <input type="checkbox"> 全选
            </div>
            <div class="allmoney">
                <p>合计 ￥<span>0.00</span></p>
                <p>总额￥<span>0.00</span> 立减<span>0</span></p>
            </div>
            <div class="gopay">去结算</div>
        </div>
   </div>
</template>
    
<script>
export default {
  name: "cart",
  data () {
    return {
        
    };
  }
}
</script>
    
<style lang="css" scoped>
    html{
        font-size: 40px;
    }
    .header{
        z-index: 199;
        height: 2rem;
        width: 100%;
        overflow: inherit;
        border-bottom: 0.025rem solid #ebebeb;
    }
    .header .back{
        font-size: 0.9rem;
        color:#4a4a4a;
        font-weight: bold;
        padding-left: 0.5rem;         
    }
    .header .cart{
        cursor: default;
        width: 100%;
        z-index: -1;
        padding-left: 6.5rem;
        height: 2rem;
        line-height: 2rem;
        font-size: 0.9rem;
        box-sizing: border-box;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .header .edit{
        font-size: 0.75rem;
        color: #4a4a4a;
        padding-right: 0.5rem;
        line-height: 2rem;
        float: right;
    }
    .top{
        height: 2rem;
        line-height: 2rem;
        padding-left: 0.7rem;
        border-bottom: 0.025rem solid #ebebeb;
    }
    .top input{
        height: 0.5rem;
        width: 0.5rem;
        border-radius: 50%;
        background: #fff;
        border: 0.025rem solid gray;
    }
    .top span{
        font-size: 0.75rem;
        color: #333;
    }
    .good-top a{
        display: block;
        height: 1.8rem;
        padding-right: 0.7rem;
        padding-left: 2.6rem;
    }
    .good-top a .left{
        font-size: 0.5rem;
        padding: 0.05rem 0.15rem;
        margin-right:0.3rem;
        color: #ff464e;
        border: 0.025rem solid #ff464e; 
    }
    .good-top a .center{
        font-size: 0.6rem;
        color:#333;
    }
    .good-top a .right{
        display: inline-block;
        font-size: 0.6rem;
        color: #ff464e;
        width:5.5rem;
        text-align: right;
    }
    .good-msg{
        /* background: green; */
        height: 4.5rem;        
    }
    .good-msg div{
        float: left;
        height: 4.5rem;        
    }
    .good-msg input{
        height: 0.5rem;
        width: 0.5rem;
        background: #fff;
        margin-left: 0.7rem;
    }
    .good-msg .check{
        width: 1.55rem;
        line-height: 4.5rem;
        /* background: red; */
    }
    .good-msg .img{
        height: 4.5rem;
        width: 4.5rem;
        margin-right: 0.6rem;
    }
    .good-msg .img img{
        height: 100%;
        width: 100%;
        vertical-align: middle;
    }
    .good-msg .des{
        font-size: 0.7rem;
    }
    .good-msg .des .name{
        color:rgb(51, 51, 51);
    }
    .good-msg .des .size{
        margin-top: 0.3rem;
        color: #bbb;
    }
    .good-msg .des .price{
        font-size: 0.7rem;
        margin-top: 1rem;
    }
    .good-msg .des .price .newPrice{
        color: #ff464e;
    }
    .good-msg .des .price .oldPrice{
        font-size: 0.5rem;
        margin-left: 0.2rem;
        color: #bbb;

    }
    .good-msg .price .red,.good-msg .price .add{
        display: inline-block;
        height: 1.15rem;
        width: 1.15rem;
        line-height: 1.15rem;
        color: #ccc;
        background-color: #f4f4f8;
        cursor: pointer;
        text-align: center;
        font-size: 0.7rem;
    }
    .good-msg .price .red{
        margin-left: 0.5rem;
    }
    .good-msg .price .many{
        font-size: 0.7rem;
        display: inline-block;
        height: 1.15rem;
        width: 1.15rem;
        text-align: center;
    }
    .bottom{
        min-width: 6.82667rem;
        max-width: 16rem;
        position: fixed;
        bottom: 2.45rem;
        left: 0;
        right: 0;
        margin: auto;
        z-index: 5;
        border-top: 1px solid #ebebeb;
        background: #fff;
    }
    .bottom div{
        display: inline-block;
    }
    .bottom .allcheck{
        font-size: 0.8rem;
        height: 2.425rem;
        line-height: 2.425rem;
        background-color: #fff;
        color: #333;
        text-align: center;
        width: 25%;
    }
    .bottom .allcheck input{
        height: 25px;
        width: 25px;
    }
    .bottom .allmoney{
        font-size: 0.9rem;
        height: 2.425rem;
        line-height: 1;
        text-align: right;
        padding-right: .21333rem;
        width: 40%;
    }
    .bottom .allmoney p:nth-of-type(1){
        margin-top: 0.9rem;
        font-size: 0.7rem;
    }
     .bottom .allmoney p:nth-of-type(1) span{
         color: #ff464e;
    }
    .bottom .allmoney p:nth-of-type(2){
        padding-top: 0.2rem;
        font-size: 0.5rem;
        color: #999;
    }
    .bottom .gopay{
        font-size: 0.9rem;
        height: 2.425rem;
        background: #ff464e;
        color: #fff;
        width: 30%;
        text-align: center;
        line-height: 2.425rem;
    }
</style>