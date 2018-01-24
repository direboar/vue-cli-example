<template>
<p class="message">メッセージ :{{prop1}}<br/>
  <!--componentsで指定したコンポーネント名のタグで定義できる。-->
  <InclementButton :isInclement='true' label="インクリメントする"></InclementButton>
  <InclementButton :isInclement='false' label="デクリメントする"></InclementButton>
</p>
</template>

<script>
//  自作した単一ファイルコンポーネントを取り込み。
import InclementButton from './InclementButton.vue';

export default {
  props: {
    prop1: {
      type: String,
      default: 'こんにちは世界！'
    }
  },
  //  他の単一ファイルコンポーネントのロード。
  components: {
    InclementButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.message {
  color: #42b983;
}
</style>
