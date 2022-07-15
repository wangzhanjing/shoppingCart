<template>
  <div id="app">
    <MyHeader title="购物车案例"
              bgc="red"></MyHeader>
    <div class="main">
      <MyGoods v-for="item in list"
               :key="item.id"
               :item="item"></MyGoods>
    </div>
    <MyFooter :list="list"></MyFooter>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
import MyGoods from './components/MyGoods'
export default {
  data () {
    return {
      msg: '购物车案例',
      list: []
    }
  },
  components: {
    MyHeader,
    MyFooter,
    MyGoods,
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      this.$axios({
        url: '/api/cart',
        methods: 'GET'
      }).then(res => {
        this.list = res.data.list
        console.log(this.list);
      })
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.main {
  padding: 45px 0 50px;
}
</style>
