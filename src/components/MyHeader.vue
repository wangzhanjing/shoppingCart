<template>
  <div class="my-header"
       :style="{backgroundColor:bgc,color:color}">{{title}}</div>
</template>

<script>
// 自定义头部组件样式，标题、字体颜色、背景颜色
export default {
  props: {
    bgc: String,
    color: {
      type: String,     // 规定数据类型，不是该类型会报错
      default: '#fff'   // 默认值
    },
    title: {
      type: String,
      require: true     // 必须传入
    }
  }
}
</script>

<style lang="less" scoped>
.my-header {
  height: 45px;
  line-height: 45px;
  text-align: center;
  background-color: #1d7bff;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}
</style>