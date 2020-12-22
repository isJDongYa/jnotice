import Vue from 'vue'

export interface jnoticeSetup {
  text?:string;
  duraiton?:number;
  position?:'top'|'bottom'|'t-left'|'b-left'|'t-right'|'b-right';
  background?:string;
  color?:string;
  width?:string;
  mheight?:string;
  type?:'info'|'success'|'error';
}

declare module 'vue/types/vue' {
  // 可以使用 `VueConstructor` 接口
  // 来声明全局 property
  interface Vue {
    $jnotice: (setup:jnoticeSetup) => void
  }
}