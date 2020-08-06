<template>
	<div id="app">

		<div id="nav">
			<div id="ssk">
				<ul>
					
						<router-link tag="li" to="/App4">
				
				<p style="">活动</p>
			</router-link>
				<router-link tag="li" to="/App4_1">
			
				<p >文章</p>
			</router-link>
				<router-link tag="li" to="/App4_2">
			
				<p style="font-size: 18px;color:#09627a ;">策划</p>
			</router-link>
				</ul>
				<Input icon="ios-search" placeholder="搜索感兴趣的客策划" style="width: 300px" />
			</div>
			
			<div  class="lenby">
				<img src="../../public/css/img/21.png" width="100%"/>
				<img src="../../public/css/img/22.png" width="100%"/>
				<img src="../../public/css/img/23.png" width="100%"/>
				<img src="../../public/css/img/24.png" width="100%"/>
				<img src="../../public/css/img/25.png" width="100%"/>
				<img src="../../public/css/img/26.png" width="100%"/>
				
								
			</div>
			
			<TabBar></TabBar>
		</div>
		<router-view />
		
	</div>
	
</template>

<script>
import TabBar from '@/components/TabBar.vue';
	export default {
    name:'App4_2',
		components:{
			TabBar
		}
}


	
</script>



<style lang="scss">
	#nav{
		padding-bottom: 50px;
		background-color: #e8e8e896;
		
		}
	#ssk {
		text-align: center;
		padding-left: 50px;
		padding-right: 50px;
		padding-top: 20px;
		
		margin-bottom: 1.25rem;
	}

	
	ul{
			display: flex;
			text-align: center;
			height: 50px;
			align-items: center;
			list-style: none;
			margin: 0;
			padding: 0;
		}
		ul li{
				flex: 1;
				height: 40px;
				font-size: 16px;
				
					color: #c1c3d0;
				
			}
			
	.ivu-input-icon {
		width: 32px;
		height: 32px;
		line-height: 32px;
		font-size: 16px;
		text-align: center;
		color: #808695;
		position: absolute;
		left: 0;
		z-index: 3;
	}

	.lenby {
		text-align: center;
	}

	.lenby>img {
		margin-bottom: 1.5rem;
	}

	.lenby>Button {
		color: #000;
		margin: 1.25rem;
		padding: 1rem 2rem;
		width: 180px;
		text-align: center;
	}


.zti{
	padding: 0 5%;
}
	
</style>
