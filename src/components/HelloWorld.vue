<template>
<p class="message">メッセージ :{{prop1}}<br/>
  <!--componentsで指定したコンポーネント名のタグで定義できる。-->
  <CustomComponent></CustomComponent>
</p>
</template>

<script>
//  自作した単一ファイルコンポーネントを取り込み。
import CustomComponent from './CustomComponent.vue'

export default {
  props: {
    prop1: {
      type: String,
      default: 'こんにちは世界！'
    }
  },
  //  他の単一ファイルコンポーネントのロード。
  components: {
    CustomComponent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.message {
  color: #42b983
}
</style>
