<template>
	<div id="app">

		<div id="nav">

			<div class="lenby">
				<router-link to="/App2">
					<img src="../../public/css/img/44.png" width="100%" />
				</router-link>
				<img src="../../public/css/img/45.png" width="100%" />

				<input class="index" value="城市" style=" width: 65px;" />-
				<input class="index" value="详细地址" style=" width: 120px;" />


				<input class="index" value="请选择日期" style=" width: 85%;" />
				<span style="float: right;margin-right: 10%;margin-bottom: 20px;">多日预约默认按天计算</span>
				<input class="index" value="开机时间" style=" width: 85%;" />
				
				<input class="index" value="拍摄时长" style=" width: 85%;" />
				
				
				<Button class="index"  style=" width: 85%;background-color: #3da3af;color: #fff;" >下一步
					</Button>
			</div>

			<TabBar></TabBar>
		</div>
		<router-view />

	</div>

</template>

<script>
	import TabBar from '@/components/TabBar.vue';
	export default {
		name: 'App2_1',
		components: {
			TabBar
		}
	}
</script>



<style lang="scss">
	.index {
		background-color: #f2f2f2;
		padding: 10px 20px !important;
		margin: 0 5% 20px !important;
	}

	#nav {
		padding-bottom: 150px;
		background-color: #fff;

	}

	#ssk {
		text-align: center;
		padding-left: 50px;
		padding-right: 50px;
		padding-top: 20px;

		margin-bottom: 1.25rem;
	}


	#ssk>ul {
		display: flex;
		text-align: center;
		height: 50px;
		align-items: center;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	#ssk>ul li {
		flex: 1;
		height: 40px;
		font-size: 16px;



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


	.zti {
		padding: 0 5%;
	}
</style>
