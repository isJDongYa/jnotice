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
  display: none;
  align-items: center;
}
.jnotice-icon {
  margin-right: auto;
  margin-left: 20px;
}
.jnotcie-text {
  margin-right: auto;
  margin-left: -20px;
}

</style>