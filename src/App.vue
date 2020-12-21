<template>
  <div id="app">
    <button class="btn" @click="click">Click to jnotice!</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'App'
})
export default class App extends Vue {
  

  public click() {
    this.$jnotice({
      background: '#424242',
      color: '#fff',
      position: 't-right'
    })
  }
}
</script>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn {
  width: 200px;
  height: 80px;
}
</style>
