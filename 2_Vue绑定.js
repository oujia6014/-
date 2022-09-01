/*
1. 响应式对象
Vue2 通过 Object.defineProperty，Vue3 通过 Proxy 来劫持 state中各个属性的 setter， getter，通过 getter 收集依赖。当 state 中的数据发生变动之后发布通知给订阅者更新数据

2. 双向绑定
Vue 通过 v-model 实现双向绑定。v-model 实际是 v-bind:xxx 和 v-on:xxx 的语法糖。当触发元素对应的事件（如 input、change 等）时更新数据（ViewModel），当数据（ViewModel）更新时同步更新到元素的对应属性（View）上。

3. MVVM（Model-View-ViewModel）
Model：模型层，负责处理业务逻辑以及和服务器端进行交互。
View：视图层，将数据通过 UI 展现出来。
ViewModel：视图模型层，连接 Model 层和 View 层。
 */

