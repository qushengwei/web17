<template>
	<div id="app">

		<div id="nav">
			<div id="ssk">
				<Input icon="ios-search" placeholder="搜索感兴趣的客片" style="width: 300px" />
			</div>
			<div  class="lenby">
				<img src="../../public/css/img/01.png" />
						
						
								
			</div>
			<div  class="lenby">
				<router-link  tag="Button" to="/App2_1">
					<span>Sho0ting</span> <h4 style="font-size: 1.25rem;">摄像服务</h4>
				</router-link>
				<router-link  tag="Button" to="/App2_2">
					POST PRODUCTION<h4 style="font-size: 1.25rem;">后期服务</h4>
				</router-link>
			
						
			</div>
			<div  class="lenby">
				<img src="../../public/css/img/02.png"/>				
			</div>
			
			<div class="zti">
				<h2>热门推荐</h2>
			</div>
			<div  class="lenby">
				<img src="../../public/css/img/03.png"/>				
			</div>
			<div  class="lenby">
				<img src="../../public/css/img/04.png"/>				
			</div>
			<div  class="lenby">
				<img src="../../public/css/img/05.png"/>				
			</div>
			<div  class="lenby">
				<img src="../../public/css/img/06.png"/>				
			</div>
			<div  class="lenby">
				<img src="../../public/css/img/07.png"/>				
			</div>
			
			
		</div>
		<TabBar></TabBar>
		
	</div>
	
</template>

<script>
import TabBar from '@/components/TabBar.vue';
	export default {
    name:'App2',
		components:{
			TabBar
		}
}


	
</script>



<style >
	#nav{
		padding-bottom: 40px!important;
		
		}
	#ssk {
		text-align: center;
		padding-top: 20px;
		margin-bottom: 1.25rem;
	}

	#ssk Input {
		background-color: #f2f6f9;
		padding-left: 30px;
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
