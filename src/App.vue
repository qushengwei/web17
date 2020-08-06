<template>
	<div id="app">

		<router-view />
		
	</div>
	
</template>


<script>
	
	
	export default {
    name:"App"
}

	// import TabBar from 'TabBar.vue';
	// export default{
	// 		name:'Movie',
	// 			components:{
				
	// 				TabBar
	// 			}
	// }
	
</script>



<style lang="scss" >
	
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
