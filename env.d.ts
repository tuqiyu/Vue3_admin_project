/// <reference types="vite/client" />
/* 写类型声明的文件  将demo声明成一个组件，而不是any类型	*/

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent

  export default component
}
declare module '*.mjs'
