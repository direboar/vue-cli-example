<!--単一ファイルコンポーネントを自作。-->
<template>
<button @click="execute">{{label}} : {{count}}</button>
</template>

<script>
export default {
  props: {
    isInclement: {
      type: Boolean,
      default: true
    },
    label: {
      type: String,
      default: 'ボタン'
    }
  },
  data: function () {
    return {
      count: 0
    }
  },
  methods: {
    execute () {
      if (this.isInclement === true) {
        this.count++
      } else {
        this.count--
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.message {
  color: #42b983;
}
</style>
