<template>
  <div class="jnotcie-contain">
    <span :class="['jnotice-icon', 'jnotice-iconfont', `jnotice-icon-${type}`]"></span>
    <div class="jnotcie-text">{{ text }}</div>
  </div>
</template>
<script lang="ts">
import { VueConstructor } from 'vue';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'JNotice'
})
export default class JNotice extends Vue {

  @Prop({default: 'info'}) private type?:string;
  @Prop({default: 'This is jnotice!'}) private text?:string;
  
  
  
}
</script>
<style lang="less" scoped>
@import url('./css/iconfont.css');



.jnotcie-contain {
  position: fixed;
  align-items: center;
  display: flex;
  z-index: 10000;
  transition: opacity .3s, transform .3s;
}
.jnotice-icon {
  margin-right: auto;
  margin-left: 20px;
  max-width: 20%;
}
.jnotcie-text {
  margin-right: auto;
  margin-left: -20px;
  max-width: 80%;
  max-width: 80%;
}

</style>