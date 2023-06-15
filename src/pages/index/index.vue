<template>
  <!-- <u-action-sheet :list="list" v-model="show"></u-action-sheet> -->
	<view style="padding: 20px;">
		<u-button type="primary" text="确定"></u-button>
		<u-button type="primary" :plain="true" text="镂空"></u-button>
		<u-button type="primary" :plain="true" :hairline="true" text="细边"></u-button>
		<u-button type="primary" :disabled="disabled" text="禁用"></u-button>
		<u-button type="primary" loading loadingText="加载中"></u-button>
		<u-button type="primary" icon="map" text="图标按钮"></u-button>
		<u-button type="primary" shape="circle" text="按钮形状"></u-button>
		<u-button text="渐变色按钮" color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"></u-button>
		<u-button type="primary" size="small" text="大小尺寸"></u-button>
	</view>
</template>

<script>
export default {
		data() {
			return {
				list: [{
					text: '点赞',
					color: 'blue',
					fontSize: 28
				}, {
					text: '分享'
				}, {
					text: '评论'
				}],
				show: true
			}
		}
	}
</script>

<style scoped lang="scss">

</style>
