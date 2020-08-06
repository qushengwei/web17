<template>
	<div id="footer">
		<ul>
			
		
			<router-link tag="li" to="/App2">
				<i class="fa fa-codiepie"></i>
				<p>首页</p>
			</router-link>
	
			<router-link  tag="li" to="/App3">
				<i class="fa fa-caret-square-o-right"></i>
				<p>客片</p>
			</router-link>
			
			<router-link  tag="li" to="/App4">
				<i class="fa fa-lightbulb-o"></i>
				<p>发现</p>
			</router-link>

			<router-link  tag="li" to="/App5">
				<i class="fa fa-volume-control-phone"></i>
				<p>在线咨询</p>
			</router-link>

			<router-link  tag="li" to="/App6">
				<i class="fa fa-user-circle"></i>
				<p>我的</p>
			</router-link>
			
		</ul>
	</div>
</template>

<script>
	export default{name:"Tabbar"}
</script>

<style>
	#footer{
		width: 100%;
		height: 60px;
		background: white;
		border-top: 2px solid #ebe8e3;
		position: fixed;
		left: 0;
		bottom: 0;
	}
		#footer ul{
			display: flex;
			text-align: center;
			height: 50px;
			align-items: center;
			list-style: none;
			margin: 0;
			padding: 0;
		}
			#footer ul li{
				flex: 1;
				height: 40px;
			}
			
				#footer li.router-link-exact-active{
					color: #107086;
				}
				
				#footer ul i{
					font-size: 20px;
				}
				#footer ul p{
					font-size: 12px;
					line-height: 18px;
				}
</style>
