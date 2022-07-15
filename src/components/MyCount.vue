<template>
  <div class="my-counter">
    <button type="button"
            class="btn btn-light"
            :disabled="item.goods_count === 1"
            @click="del">-</button>
    <input type="number"
           class="form-control inp"
           v-model.number="item.goods_count">
    <button type="button"
            class="btn btn-light"
            @click="add">+</button>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    }
  },
  watch: {
    item: {
      deep: true,
      handler () {
        if (this.item.goods_count < 1) {
          this.item.goods_count = 1
        }
      }
    }
  },
  methods: {
    add () {
      this.item.goods_count++
    },
    del () {
      this.item.goods_count > 1 ? this.item.goods_count-- : this.item.goods_count = 1
    }
  }
}
</script>

<style lang="less" scoped>
.my-counter {
  display: flex;
  .inp {
    width: 45px;
    text-align: center;
    margin: 0 10px;
  }
  .btn,
  .inp {
    transform: scale(0.9);
  }
}
</style>