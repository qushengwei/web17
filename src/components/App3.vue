<template>
	<div id="app">

		<div id="nav">
			<div id="ssk">
				<Input icon="ios-search" placeholder="搜索感兴趣的客片" style="width: 300px" />
			</div>
			<div  class="lenby">
				<img src="../../public/css/img/08.png" width="100%"/>
				<img src="../../public/css/img/09.png" width="100%"/>
				<img src="../../public/css/img/10.png" width="100%"/>
				<img src="../../public/css/img/11.png" width="100%"/>
				<img src="../../public/css/img/12.png" width="100%"/>
				<img src="../../public/css/img/09.png" width="100%"/>
				<img src="../../public/css/img/10.png" width="100%"/>
				<img src="../../public/css/img/11.png" width="100%"/>
				<img src="../../public/css/img/12.png" width="100%"/>
								
			</div>
			
			<TabBar></TabBar>
		</div>
		<router-view />
		
	</div>
	
</template>

<script>
import TabBar from '@/components/TabBar.vue';
	export default {
    name:'App3',
		components:{
			TabBar
		}
}


	
</script>



<style lang="scss">
	#nav{
		padding-bottom: 50px;
		
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
