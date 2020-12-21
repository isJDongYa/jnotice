# jnotice

## 安装

```shell
npm install @jdorg/jnotice --save
```

## 使用

先引入：

```js
import JNotice from 'jnotice'

Vue.use(JNotice)
```

然后在vue实例中：

```js
this.$jnotice(setup:jnoticeSetup)
```

## 说明

接口：
```ts
export interface jnoticeSetup {
  text?:string;   // 要显示的文字
  duraiton?:number; // 多久会消失
  position?:'top'|'bottom'|'t-left'|'b-left'|'t-right'|'b-right'; // 所在位置
  background?:string; // 与css一致
  color?:string; // 与css一致
  width?:string; // 与css一致
  height?:string; // 与css一致
  type?:'info'|'success'|'error';  // icon 类型
}
```

默认值：

```ts
const jnoticeDefaultSetup:jnoticeSetup = {
  text: 'This is jnotice!',
  duraiton: 3000,
  position: 'top',
  background: '#ddd',
  color: '#000',
  width: '400px',
  height: '50px',
  type: 'info'
}
```