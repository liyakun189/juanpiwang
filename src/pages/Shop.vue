<template>
  <div >
      <div class="main">
		  <!-- <router-link to="/shop/product"></router-link>
		  <router-view></router-view> -->
		<div class="app">
			<header id="head">
				<span id="t-index">全球购</span>
				<span id="user">
					<a href="#" class="btn btn-right"></a>
				</span>
			</header> 
			<!-- 主体内容 -->
			<section class="goods" id="goods" style="min-height: inherit; display: block;">
				<ul class="goods-list clear" id="goods_block">
					<!-- 每个小块 -->
					<li class="brand-home-group">
						<!-- 每个小块上面的banner -->
						<a href="#" class="banner">
							<!-- banner左上角的小图标 -->
							<div class="top-jiaobiao">
								<img src="../../img/top-jiaobiao.png">
								<div class="text">
									<p>低至</p>
									<p>5.3折起</p>
								</div>	
							</div>
							<!-- banner图片 -->
							<img src="https://goods1.juancdn.com/goods/170905/1/c/59ae0b4a8150a16af45b9019_750x360.jpg?iopcmd=convert&Q=88&dst=jpg" alt="">
							<span class="triangle"></span>
						</a>
						<!-- 每个小块下面的横排内容 -->
						<div class="yinliu-box">
							<!-- 每个小块下面的横排的商品列表 -->
							<div class="yinliu-list">
								<!-- 横排的商品列表里面的每一件商品的整体 -->
								<div class="yinliu-good">
							
									<!-- 每件小商品的图片 -->
									<a href="/product" class="good-pic">
										<img src="https://goods5.juancdn.com/bao/170224/9/3/58afff9c151ad1c4598b458c_800x800.jpg?iopcmd=thumbnail&type=11&height=310&width=310%7Ciopcmd=convert&Q=88&dst=jpg">
									</a>
									<!-- 每件小商品的描述 -->
									<a href="#" class="good-detail">
										<!-- 小商品的价格 -->
										<div class="good-price">
											<span class="price-new">￥51.3</span>
											<span class="price-del">￥85</span>
										</div>
										<!-- 小商品的名称 -->
										<div class="good-name">五色花瓣雕刻腮红 5#</div>
									</a>

								</div>
								<div class="yinliu-good">
									<!-- 每件小商品的图片 -->
									<a href="#" class="good-pic">
										<img src="https://goods3.juancdn.com/bao/170224/4/8/58b00e24151ad1a8058b4567_800x800.jpg?iopcmd=thumbnail&type=11&height=310&width=310%7Ciopcmd=convert&Q=88&dst=jpg" alt="五色花瓣雕刻腮红 5#">
									</a>
									<!-- 每件小商品的描述 -->
									<a href="#" class="good-detail">
										<!-- 小商品的价格 -->
										<div class="good-price">
											<span class="price-new">￥51.3</span>
											<span class="price-del">￥85</span>
										</div>
										<!-- 小商品的名称 -->
										<div class="good-name">五色花瓣雕刻腮红 5#</div>
									</a>
								</div>
								<div class="yinliu-good">
									<!-- 每件小商品的图片 -->
									<a href="#" class="good-pic">
										<img src="https://goods2.juancdn.com/bao/170224/3/6/58afeef4151ad1d3388b4573_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg" alt="五色花瓣雕刻腮红 5#">
									</a>
									<!-- 每件小商品的描述 -->
									<a href="#" class="good-detail">
										<!-- 小商品的价格 -->
										<div class="good-price">
											<span class="price-new">￥51.3</span>
											<span class="price-del">￥85</span>
										</div>
										<!-- 小商品的名称 -->
										<div class="good-name">五色花瓣雕刻腮红 5#</div>
									</a>
								</div>
								<div class="yinliu-good">
									<!-- 每件小商品的图片 -->
									<a href="#" class="good-pic">
										<img src="https://goods2.juancdn.com/bao/161114/3/a/58294c1ddb01d910138b4635_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg" alt="五色花瓣雕刻腮红 5#">
									</a>
									<!-- 每件小商品的描述 -->
									<a href="#" class="good-detail">
										<!-- 小商品的价格 -->
										<div class="good-price">
											<span class="price-new">￥51.3</span>
											<span class="price-del">￥85</span>
										</div>
										<!-- 小商品的名称 -->
										<div class="good-name">五色花瓣雕刻腮红 5#</div>
									</a>
								</div>
                                <div class="yinliu-good">
									<!-- 每件小商品的图片 -->
									<a href="#" class="good-pic">
										<img src="https://goods8.juancdn.com/bao/170321/e/6/58d0f83da43d1f23030fda28_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg" alt="五色花瓣雕刻腮红 5#">
									</a>
									<!-- 每件小商品的描述 -->
									<a href="#" class="good-detail">
										<!-- 小商品的价格 -->
										<div class="good-price">
											<span class="price-new">￥51.3</span>
											<span class="price-del">￥85</span>
										</div>
										<!-- 小商品的名称 -->
										<div class="good-name">五色花瓣雕刻腮红 5#</div>
									</a>
								</div>
                                <div class="yinliu-good">
									<!-- 每件小商品的图片 -->
									<a href="#" class="good-pic">
										<img src="https://goods8.juancdn.com/bao/170321/e/6/58d0f83da43d1f23030fda28_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg" alt="五色花瓣雕刻腮红 5#">
									</a>
									<!-- 每件小商品的描述 -->
									<a href="#" class="good-detail">
										<!-- 小商品的价格 -->
										<div class="good-price">
											<span class="price-new">￥51.3</span>
											<span class="price-del">￥85</span>
										</div>
										<!-- 小商品的名称 -->
										<div class="good-name">五色花瓣雕刻腮红 5#</div>
									</a>
								</div>
                                <div class="yinliu-good">
									<!-- 每件小商品的图片 -->
									<a href="#" class="good-pic">
										<img src="https://goods8.juancdn.com/bao/170321/e/6/58d0f83da43d1f23030fda28_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg" alt="五色花瓣雕刻腮红 5#">
									</a>
									<!-- 每件小商品的描述 -->
									<a href="#" class="good-detail">
										<!-- 小商品的价格 -->
										<div class="good-price">
											<span class="price-new">￥51.3</span>
											<span class="price-del">￥85</span>
										</div>
										<!-- 小商品的名称 -->
										<div class="good-name">五色花瓣雕刻腮红 5#</div>
									</a>
								</div>
								<!-- 中间还有其他商品yinliu-good，暂时省略 -->
								<!-- 横排商品列表最后面的查看更多 -->
								<div class="yinliu-good go-more">
									<a href="#" class="good-pic">
										<img src="../../img/see-more.png" alt="查看更多">
									</a>
								</div>
							</div>
						</div>
					</li>
					
					
					<li class="brand-home-group">
						<!-- 每个小块上面的banner -->
						<a href="#" class="banner">
							<!-- banner左上角的小图标 -->
							<div class="top-jiaobiao">
								<img src="../../img/top-jiaobiao.png">
								<div class="text">
									<p>低至</p>
									<p>5.3折起</p>
								</div>	
							</div>
							<!-- banner图片 -->
							<img src="https://goods6.juancdn.com/goods/170919/a/5/59c0f3188150a14292328f43_750x360.jpg?imageMogr2/quality/88!/format/jpg" alt="">
							<span class="triangle"></span>
						</a>
						<!-- 每个小块下面的横排内容 -->
						<div class="yinliu-box">
							<!-- 每个小块下面的横排的商品列表 -->
							<div class="yinliu-list">
								<!-- 横排的商品列表里面的每一件商品的整体 -->
								<div class="yinliu-good">
									<!-- 每件小商品的图片 -->
									<a href="#" class="good-pic">
										<img src="https://goods6.juancdn.com/bao/161216/a/e/5853abf5db01d9f9578b4622_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg" alt="五色花瓣雕刻腮红 5#">
									</a>
									<!-- 每件小商品的描述 -->
									<a href="#" class="good-detail">
										<!-- 小商品的价格 -->
										<div class="good-price">
											<span class="price-new">￥51.3</span>
											<span class="price-del">￥85</span>
										</div>
										<!-- 小商品的名称 -->
										<div class="good-name">五色花瓣雕刻腮红 5#</div>
									</a>
								</div>
								<div class="yinliu-good">
									<!-- 每件小商品的图片 -->
									<a href="#" class="good-pic">
										<img src="https://goods7.juancdn.com/bao/170322/d/8/58d1fbcfa43d1f28d26d8dd2_800x800.jpg?iopcmd=thumbnail&type=11&height=310&width=310%7Ciopcmd=convert&Q=88&dst=jpg" alt="五色花瓣雕刻腮红 5#">
									</a>
									<!-- 每件小商品的描述 -->
									<a href="#" class="good-detail">
										<!-- 小商品的价格 -->
										<div class="good-price">
											<span class="price-new">￥51.3</span>
											<span class="price-del">￥85</span>
										</div>
										<!-- 小商品的名称 -->
										<div class="good-name">五色花瓣雕刻腮红 5#</div>
									</a>
								</div>
								<div class="yinliu-good">
									<!-- 每件小商品的图片 -->
									<a href="#" class="good-pic">
										<img src="https://goods1.juancdn.com/bao/161227/0/f/5861c3e2db01d9ea708b45e5_800x800.jpg?iopcmd=thumbnail&type=11&height=310&width=310%7Ciopcmd=convert&Q=88&dst=jpg" alt="五色花瓣雕刻腮红 5#">
									</a>
									<!-- 每件小商品的描述 -->
									<a href="#" class="good-detail">
										<!-- 小商品的价格 -->
										<div class="good-price">
											<span class="price-new">￥51.3</span>
											<span class="price-del">￥85</span>
										</div>
										<!-- 小商品的名称 -->
										<div class="good-name">五色花瓣雕刻腮红 5#</div>
									</a>
								</div>
								<div class="yinliu-good">
									<!-- 每件小商品的图片 -->
									<a href="#" class="good-pic">
										<img src="https://goods7.juancdn.com/bao/161227/d/3/5861c464db01d9ea708b45e8_800x800.jpg?iopcmd=thumbnail&type=11&height=310&width=310%7Ciopcmd=convert&Q=88&dst=jpg" alt="五色花瓣雕刻腮红 5#">
									</a>
									<!-- 每件小商品的描述 -->
									<a href="#" class="good-detail">
										<!-- 小商品的价格 -->
										<div class="good-price">
											<span class="price-new">￥51.3</span>
											<span class="price-del">￥85</span>
										</div>
										<!-- 小商品的名称 -->
										<div class="good-name">五色花瓣雕刻腮红 5#</div>
									</a>
								</div>
                                <div class="yinliu-good">
									<!-- 每件小商品的图片 -->
									<a href="#" class="good-pic">
										<img src="https://goods8.juancdn.com/bao/170321/e/6/58d0f83da43d1f23030fda28_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg" alt="五色花瓣雕刻腮红 5#">
									</a>
									<!-- 每件小商品的描述 -->
									<a href="#" class="good-detail">
										<!-- 小商品的价格 -->
										<div class="good-price">
											<span class="price-new">￥51.3</span>
											<span class="price-del">￥85</span>
										</div>
										<!-- 小商品的名称 -->
										<div class="good-name">五色花瓣雕刻腮红 5#</div>
									</a>
								</div>
                                <div class="yinliu-good">
									<!-- 每件小商品的图片 -->
									<a href="#" class="good-pic">
										<img src="https://goods8.juancdn.com/bao/170321/e/6/58d0f83da43d1f23030fda28_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg" alt="五色花瓣雕刻腮红 5#">
									</a>
									<!-- 每件小商品的描述 -->
									<a href="#" class="good-detail">
										<!-- 小商品的价格 -->
										<div class="good-price">
											<span class="price-new">￥51.3</span>
											<span class="price-del">￥85</span>
										</div>
										<!-- 小商品的名称 -->
										<div class="good-name">五色花瓣雕刻腮红 5#</div>
									</a>
								</div>
                                <div class="yinliu-good">
									<!-- 每件小商品的图片 -->
									<a href="#" class="good-pic">
										<img src="https://goods8.juancdn.com/bao/170321/e/6/58d0f83da43d1f23030fda28_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg" alt="五色花瓣雕刻腮红 5#">
									</a>
									<!-- 每件小商品的描述 -->
									<a href="#" class="good-detail">
										<!-- 小商品的价格 -->
										<div class="good-price">
											<span class="price-new">￥51.3</span>
											<span class="price-del">￥85</span>
										</div>
										<!-- 小商品的名称 -->
										<div class="good-name">五色花瓣雕刻腮红 5#</div>
									</a>
								</div>
								<!-- 中间还有其他商品yinliu-good，暂时省略 -->
								<!-- 横排商品列表最后面的查看更多 -->
								<div class="yinliu-good go-more">
									<a href="#" class="good-pic">
										<img src="../../img/see-more.png" alt="查看更多">
									</a>
								</div>
							</div>
						</div>
					</li>
					<li class="brand-home-group">
						<!-- 每个小块上面的banner -->
						<a href="#" class="banner">
							<!-- banner左上角的小图标 -->
							<div class="top-jiaobiao">
								<img src="../../img/top-jiaobiao.png">
								<div class="text">
									<p>低至</p>
									<p>5.3折起</p>
								</div>	
							</div>
							<!-- banner图片 -->
							<img src="https://goods1.juancdn.com/goods/170905/1/c/59ae0b4a8150a16af45b9019_750x360.jpg?iopcmd=convert&Q=88&dst=jpg" alt="">
							<span class="triangle"></span>
						</a>
						<!-- 每个小块下面的横排内容 -->
						<div class="yinliu-box">
							<!-- 每个小块下面的横排的商品列表 -->
							<div class="yinliu-list">
								<!-- 横排的商品列表里面的每一件商品的整体 -->
								<div class="yinliu-good">
									<!-- 每件小商品的图片 -->
									<a href="#" class="good-pic">
										<img src="https://goods5.juancdn.com/bao/170224/9/3/58afff9c151ad1c4598b458c_800x800.jpg?iopcmd=thumbnail&type=11&height=310&width=310%7Ciopcmd=convert&Q=88&dst=jpg">
									</a>
									<!-- 每件小商品的描述 -->
									<a href="#" class="good-detail">
										<!-- 小商品的价格 -->
										<div class="good-price">
											<span class="price-new">￥51.3</span>
											<span class="price-del">￥85</span>
										</div>
										<!-- 小商品的名称 -->
										<div class="good-name">五色花瓣雕刻腮红 5#</div>
									</a>
								</div>
								<div class="yinliu-good">
									<!-- 每件小商品的图片 -->
									<a href="#" class="good-pic">
										<img src="https://goods3.juancdn.com/bao/170224/4/8/58b00e24151ad1a8058b4567_800x800.jpg?iopcmd=thumbnail&type=11&height=310&width=310%7Ciopcmd=convert&Q=88&dst=jpg" alt="五色花瓣雕刻腮红 5#">
									</a>
									<!-- 每件小商品的描述 -->
									<a href="#" class="good-detail">
										<!-- 小商品的价格 -->
										<div class="good-price">
											<span class="price-new">￥51.3</span>
											<span class="price-del">￥85</span>
										</div>
										<!-- 小商品的名称 -->
										<div class="good-name">五色花瓣雕刻腮红 5#</div>
									</a>
								</div>
								<div class="yinliu-good">
									<!-- 每件小商品的图片 -->
									<a href="#" class="good-pic">
										<img src="https://goods2.juancdn.com/bao/170224/3/6/58afeef4151ad1d3388b4573_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg" alt="五色花瓣雕刻腮红 5#">
									</a>
									<!-- 每件小商品的描述 -->
									<a href="#" class="good-detail">
										<!-- 小商品的价格 -->
										<div class="good-price">
											<span class="price-new">￥51.3</span>
											<span class="price-del">￥85</span>
										</div>
										<!-- 小商品的名称 -->
										<div class="good-name">五色花瓣雕刻腮红 5#</div>
									</a>
								</div>
								<div class="yinliu-good">
									<!-- 每件小商品的图片 -->
									<a href="#" class="good-pic">
										<img src="https://goods2.juancdn.com/bao/161114/3/a/58294c1ddb01d910138b4635_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg" alt="五色花瓣雕刻腮红 5#">
									</a>
									<!-- 每件小商品的描述 -->
									<a href="#" class="good-detail">
										<!-- 小商品的价格 -->
										<div class="good-price">
											<span class="price-new">￥51.3</span>
											<span class="price-del">￥85</span>
										</div>
										<!-- 小商品的名称 -->
										<div class="good-name">五色花瓣雕刻腮红 5#</div>
									</a>
								</div>
                                <div class="yinliu-good">
									<!-- 每件小商品的图片 -->
									<a href="#" class="good-pic">
										<img src="https://goods8.juancdn.com/bao/170321/e/6/58d0f83da43d1f23030fda28_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg" alt="五色花瓣雕刻腮红 5#">
									</a>
									<!-- 每件小商品的描述 -->
									<a href="#" class="good-detail">
										<!-- 小商品的价格 -->
										<div class="good-price">
											<span class="price-new">￥51.3</span>
											<span class="price-del">￥85</span>
										</div>
										<!-- 小商品的名称 -->
										<div class="good-name">五色花瓣雕刻腮红 5#</div>
									</a>
								</div>
                                <div class="yinliu-good">
									<!-- 每件小商品的图片 -->
									<a href="#" class="good-pic">
										<img src="https://goods8.juancdn.com/bao/170321/e/6/58d0f83da43d1f23030fda28_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg" alt="五色花瓣雕刻腮红 5#">
									</a>
									<!-- 每件小商品的描述 -->
									<a href="#" class="good-detail">
										<!-- 小商品的价格 -->
										<div class="good-price">
											<span class="price-new">￥51.3</span>
											<span class="price-del">￥85</span>
										</div>
										<!-- 小商品的名称 -->
										<div class="good-name">五色花瓣雕刻腮红 5#</div>
									</a>
								</div>
                                <div class="yinliu-good">
									<!-- 每件小商品的图片 -->
									<a href="#" class="good-pic">
										<img src="https://goods8.juancdn.com/bao/170321/e/6/58d0f83da43d1f23030fda28_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg" alt="五色花瓣雕刻腮红 5#">
									</a>
									<!-- 每件小商品的描述 -->
									<a href="#" class="good-detail">
										<!-- 小商品的价格 -->
										<div class="good-price">
											<span class="price-new">￥51.3</span>
											<span class="price-del">￥85</span>
										</div>
										<!-- 小商品的名称 -->
										<div class="good-name">五色花瓣雕刻腮红 5#</div>
									</a>
								</div>
								<!-- 中间还有其他商品yinliu-good，暂时省略 -->
								<!-- 横排商品列表最后面的查看更多 -->
								<div class="yinliu-good go-more">
									<a href="#" class="good-pic">
										<img src="../../img/see-more.png" alt="查看更多">
									</a>
								</div>
							</div>
						</div>
					</li>
					<li class="brand-home-group">
						<!-- 每个小块上面的banner -->
						<a href="#" class="banner">
							<!-- banner左上角的小图标 -->
							<div class="top-jiaobiao">
								<img src="../../img/top-jiaobiao.png">
								<div class="text">
									<p>低至</p>
									<p>5.3折起</p>
								</div>	
							</div>
							<!-- banner图片 -->
							<img src="https://goods3.juancdn.com/bao/170626/4/f/59506b8ca43d1f7454740b83_750x350.jpg?iopcmd=convert&Q=88&dst=jpg" alt="">
							<span class="triangle"></span>
						</a>
						<!-- 每个小块下面的横排内容 -->
						<div class="yinliu-box">
							<!-- 每个小块下面的横排的商品列表 -->
							<div class="yinliu-list">
								<!-- 横排的商品列表里面的每一件商品的整体 -->
								<div class="yinliu-good">
									<!-- 每件小商品的图片 -->
									<a href="#" class="good-pic">
										<img src="https://goods8.juancdn.com/bao/170321/e/6/58d0f83da43d1f23030fda28_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg" alt="五色花瓣雕刻腮红 5#">
									</a>
									<!-- 每件小商品的描述 -->
									<a href="#" class="good-detail">
										<!-- 小商品的价格 -->
										<div class="good-price">
											<span class="price-new">￥51.3</span>
											<span class="price-del">￥85</span>
										</div>
										<!-- 小商品的名称 -->
										<div class="good-name">五色花瓣雕刻腮红 5#</div>
									</a>
								</div>
								<div class="yinliu-good">
									<!-- 每件小商品的图片 -->
									<a href="#" class="good-pic">
										<img src="https://goods8.juancdn.com/bao/170321/e/6/58d0f83da43d1f23030fda28_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg" alt="五色花瓣雕刻腮红 5#">
									</a>
									<!-- 每件小商品的描述 -->
									<a href="#" class="good-detail">
										<!-- 小商品的价格 -->
										<div class="good-price">
											<span class="price-new">￥51.3</span>
											<span class="price-del">￥85</span>
										</div>
										<!-- 小商品的名称 -->
										<div class="good-name">五色花瓣雕刻腮红 5#</div>
									</a>
								</div>
								<div class="yinliu-good">
									<!-- 每件小商品的图片 -->
									<a href="#" class="good-pic">
										<img src="https://goods8.juancdn.com/bao/170321/e/6/58d0f83da43d1f23030fda28_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg" alt="五色花瓣雕刻腮红 5#">
									</a>
									<!-- 每件小商品的描述 -->
									<a href="#" class="good-detail">
										<!-- 小商品的价格 -->
										<div class="good-price">
											<span class="price-new">￥51.3</span>
											<span class="price-del">￥85</span>
										</div>
										<!-- 小商品的名称 -->
										<div class="good-name">五色花瓣雕刻腮红 5#</div>
									</a>
								</div>
								<div class="yinliu-good">
									<!-- 每件小商品的图片 -->
									<a href="#" class="good-pic">
										<img src="https://goods8.juancdn.com/bao/170321/e/6/58d0f83da43d1f23030fda28_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg" alt="五色花瓣雕刻腮红 5#">
									</a>
									<!-- 每件小商品的描述 -->
									<a href="#" class="good-detail">
										<!-- 小商品的价格 -->
										<div class="good-price">
											<span class="price-new">￥51.3</span>
											<span class="price-del">￥85</span>
										</div>
										<!-- 小商品的名称 -->
										<div class="good-name">五色花瓣雕刻腮红 5#</div>
									</a>
								</div>
                                <div class="yinliu-good">
									<!-- 每件小商品的图片 -->
									<a href="#" class="good-pic">
										<img src="https://goods8.juancdn.com/bao/170321/e/6/58d0f83da43d1f23030fda28_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg" alt="五色花瓣雕刻腮红 5#">
									</a>
									<!-- 每件小商品的描述 -->
									<a href="#" class="good-detail">
										<!-- 小商品的价格 -->
										<div class="good-price">
											<span class="price-new">￥51.3</span>
											<span class="price-del">￥85</span>
										</div>
										<!-- 小商品的名称 -->
										<div class="good-name">五色花瓣雕刻腮红 5#</div>
									</a>
								</div>
                                <div class="yinliu-good">
									<!-- 每件小商品的图片 -->
									<a href="#" class="good-pic">
										<img src="https://goods8.juancdn.com/bao/170321/e/6/58d0f83da43d1f23030fda28_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg" alt="五色花瓣雕刻腮红 5#">
									</a>
									<!-- 每件小商品的描述 -->
									<a href="#" class="good-detail">
										<!-- 小商品的价格 -->
										<div class="good-price">
											<span class="price-new">￥51.3</span>
											<span class="price-del">￥85</span>
										</div>
										<!-- 小商品的名称 -->
										<div class="good-name">五色花瓣雕刻腮红 5#</div>
									</a>
								</div>
                                <div class="yinliu-good">
									<!-- 每件小商品的图片 -->
									<a href="#" class="good-pic">
										<img src="https://goods8.juancdn.com/bao/170321/e/6/58d0f83da43d1f23030fda28_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg" alt="五色花瓣雕刻腮红 5#">
									</a>
									<!-- 每件小商品的描述 -->
									<a href="#" class="good-detail">
										<!-- 小商品的价格 -->
										<div class="good-price">
											<span class="price-new">￥51.3</span>
											<span class="price-del">￥85</span>
										</div>
										<!-- 小商品的名称 -->
										<div class="good-name">五色花瓣雕刻腮红 5#</div>
									</a>
								</div>
								<!-- 中间还有其他商品yinliu-good，暂时省略 -->
								<!-- 横排商品列表最后面的查看更多 -->
								<div class="yinliu-good go-more">
									<a href="#" class="good-pic">
										<img src="../../img/see-more.png" alt="查看更多">
									</a>
								</div>
							</div>
						</div>
					</li>
					<!-- 中间内容还有很多个li，总共80个,布局都一样 -->
				</ul>
			</section>
			<!-- 返回顶部图标 -->
			<div id="back_top" class="slide-box" style="display: block; bottom: 168px">
				<a href="#" class="back-top">
					<img src="">
				</a>
			</div>
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
.main{
	width: 100%;
	height: 100%;
}
.app{
	width: 16rem;
	height: auto;
	padding-bottom: 1rem;
	
}
#head{
	height: 1.76rem;
	border-bottom: .03rem solid #dedede;
}
#head #t-index{
	display: block;
	height: 1.76rem;
	line-height: 1.76rem;
	text-align: center;
	cursor: default;
	color: #666;
    font-size: .76rem;
}
.goods-list{
	border-bottom: 1.4rem solid #fff;
}
.brand-home-group{
	border-bottom: .4rem solid #f9f9f9;
}

/*商品列表上面的banner*/
#goods .banner{
	display: block;
	position: relative;
}
#goods .banner img{
	width: 16rem;
	height: 7.1rem;
}
/*小三角样式*/
#goods .banner .triangle{
	display: inline-block;
	border: .3rem solid transparent;
	border-bottom: .3rem solid #fff;
	z-index: 10;
	position: absolute;
	bottom: 0;
	left: 49%;

}
#goods .banner .top-jiaobiao{
	width: 1.8rem;
	height: 1.28rem;
	position: absolute;
	top: 0;
	left: 0.42rem;	
	color: white;	
}
#goods .banner .top-jiaobiao img{
	width: 1.8rem;
	height: 1.28rem;
	position: absolute;
	z-index: 9;
}
#goods .banner .top-jiaobiao .text {
	width: 1.8rem;
	position: absolute;
	z-index: 10;
}
#goods .banner .top-jiaobiao .text p{
	font-size: .38rem;
	text-align: center;
	height: .6rem;
	line-height: .6rem;
}

/*商品列表下面的横排商品*/
.brand-home-group .yinliu-box{	
	height: 6.5rem;
	padding-top: .2rem;
	padding-bottom: 1rem;
	width: auto;
	overflow-x: auto;
	overflow-y: hidden;
	white-space: nowrap;
}
.brand-home-group .yinliu-box .yinliu-list{
	height: 6.8rem;
	width: 34.5rem;
}
.yinliu-good{
	float: left;
	width: 4rem;
	margin-left: .3rem;
	padding: 0;

}
.go-more{
    margin-top: .4rem;
}
.yinliu-good .good-pic{
    margin-top:.2rem; 
	display: block;
	width: 3.4rem;
	height: 3.4rem;
}
.yinliu-good .good-pic img{
	width: 3.4rem;
	height: 3.4rem;
}
.yinliu-good .good-detail{
	display: block;
	width: 3.4rem;
	height: 3rem;
	font-size: .48rem;
}
.yinliu-good .good-detail .good-price{
	margin-left: .5rem;
	margin-top: .12rem;
	height: .56rem;
	color: #bbb;
}
.yinliu-good .good-detail .good-price .price-new{
	color: #60e;
}
.yinliu-good .good-detail .good-price .price-del{
	font-size: smaller;
	text-decoration: line-through;
}
.yinliu-good .good-detail .good-name{
	margin-top: .1rem;
	width: 3.6rem;
	text-align: center;
	height: 2rem;
	color: #666;
	line-height: .7rem;
	white-space: normal;
	word-break: break-all;
}
</style>
