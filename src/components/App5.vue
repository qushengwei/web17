<template>
	<div id="app">

		<div id="nav" style="padding-bottom: 0px">

			<div class="lenby">
				<router-link to="/App2">
					<img src="../../public/css/img/27.png" width="100%" />
				</router-link>
				<Input />
				<img src="../../public/css/img/28.png" width="100%" style="margin-bottom:0px" />
			</div>

			<TabBar></TabBar>
		</div>
		<router-view />

	</div>

</template>

<script>
	export default {
		name: 'App5'

	}
</script>



<style lang="scss">

	Input {
		width: 100%;
		border: 0px solid red !important;
		padding-left: 10% !important;
	}

	.ivu-input {
		display: inline-block;
		width: 133%;
		height: 32px;
		line-height: 1.5;
		padding: 4px 40px;
		font-size: 12px;
		border: 0px solid #dcdee2;
		border-radius: 4px;
		color: #515a6e;
		background-color: #fff;
		background-image: none;
		position: relative;
		cursor: text;
		transition: border .2s ease-in-out, background .2s ease-in-out, box-shadow .2s ease-in-out;
	}

	#nav {
		padding-bottom: 0px;
		background-color: #f6f7f9;

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


	.zti {
		padding: 0 5%;
	}
</style>
