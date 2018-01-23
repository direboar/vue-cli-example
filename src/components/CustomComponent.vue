<!--単一ファイルコンポーネントを自作。-->
<template>
<button @click="inclement">{{count}}</button>
</template>

<script>
export default {
  data: function () {
    return {
      count: 0
    }
  },
  methods: {
    inclement: function () {
      this.count++
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.message {
  color: #42b983
}
</style>
