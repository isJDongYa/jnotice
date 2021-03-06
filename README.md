# jnotice

## 安装

```shell
npm install @jdorg/jnotice --save
```

## 使用

先引入：

```js
import JNotice from '@jdorg/jnotice'

import '@jdorg/jnotice/dist/jnotice.css'

Vue.use(JNotice)
```

然后在vue实例中：

```js
this.$jnotice(setup:jnoticeSetup) // setup 为jnoticeSetup类型的对象
```

## 说明

接口：
```ts
interface jnoticeSetup {
  text?:string;   // 要显示的文字
  duraiton?:number; // 多久会消失
  position?:'top'|'bottom'|'t-left'|'b-left'|'t-right'|'b-right'; // 所在位置
  background?:string; // 与css一致
  color?:string; // 与css一致
  width?:string; // 与css一致
  mheight?:string; // 与css min-height一致
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
  mheight: '50px',
  type: 'info'
}
```

## example

```html
<div id="app">
  <button class="btn" @click="click">Click to jnotice!</button>
</div>
```

```ts
export default class App extends Vue {
  public click() {
    this.$jnotice({
      background: '#424242',
      color: '#fff',
      position: 'top'
    })
  }
}
```

```less
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
```

![example](https://raw.githubusercontent.com/isJDongYa/jnotice/master/src/assets/example.gif)

## others

@jdorg是一个开源前端组件的社区，如果你有开源组件的想法，欢迎加入我们

![qqgroup](https://raw.githubusercontent.com/isJDongYa/jnotice/master/src/assets/@jdorg_z_rs.jpg)