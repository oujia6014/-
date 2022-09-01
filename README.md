

```
8.25
promise，深拷贝

深拷贝
1、JSON.parse(JSON.stringify(obj))
2、手写，for in 遍历对象，逐个拷贝值
3、lodash库 lodash.cloneDeep()
手写promise.race,手写深拷贝

Object.prototype.toString.call



promise原理：
https://febook.hzfe.org/awesome-interview/book1/coding-promise#4-%E5%AE%8C%E6%95%B4%E4%BB%A3%E7%A0%81

babel原理：
https://febook.hzfe.org/awesome-interview/book2/engineer-babel

diff算法：
https://febook.hzfe.org/awesome-interview/book3/frame-diff#2-vue2x-diff


HTTP区别：
https://febook.hzfe.org/awesome-interview/book3/network-http-1-2





双向数据绑定的原理
采用数据劫持结合发布者-订阅者模式的方式
vue2中 通过Object.defineProperty()方法来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调
由于监听是绑定在属性上的，所以无法监听对象属性的添加和删除，需要借用$set和$delete实现
vue3是使用proxy直接对对象进行监听，可以直接监听数组的变化
```









```
https://www.nowcoder.com/discuss/805812 高频提速刷
https://juejin.cn/column/6961195794527420452 重点知识点

https://www.nowcoder.com/discuss/856818?type=all&order=recall&pos=&page=1&ncTraceId=&channel=-1&source_id=search_all_nctrack&gio_id=F844F4AB93AFDE1F9CBF92569E3E3E92-1661498444880 美的前端题


https://blog.csdn.net/liang1169/article/details/115312932 md面筋
https://www.v2ex.com/t/440370 总结挺好
https://v2ex.com/t/766511 面试官系列

https://juejin.cn/post/7074055897349095454#heading-8 要过的基础点
https://juejin.im/post/6850037277675454478
https://juejin.im/post/6857800782276902919
https://juejin.im/post/6855129007852093453
https://juejin.im/post/6844904025993773063
https://juejin.im/entry/6844903591317094407


说一下Vue的生命周期
computed和watch的区别？
Vue2和Vue3在数据劫持方面的区别？
Vue2无法监听数组的哪些操作？如何解决？
Vue组件通信的方式有哪些？
频繁使用EventBus会造成什么问题？
刷新浏览器后，Vuex的数据是否存在？如何解决？
nextTick的原理和使用场景？
vue对数组的监听?

1. $nextTick 的功能
2. $set 的功能
3. keepalive 组件的功能与注意点
1. ref 与 reactive 的功能与区别
2. toRef 的功能
3. vue3 与 vue2 生命周期的不同


原型链 继承 class
深拷贝
ES6 promise,set
手写双向绑定
Babel
柯里化
前端安全
https ssl/tls 对称非对称
事件委托
微前端是什么，如何使用微前端？




* vue 路由懒加载

1.vue的异步组件：resolve=>require(['需要异步加载的组件']，resolve)
2.es6的import方法：（）=>import(需要异步加载的组件)
3.webpack的 require.ensure： r => require.ensure([],()=>r( require(需要异步加载的组件))，chunkName)


* vue-router路由有几种模式？说说它们的区别？

hash模式：
1.url路径会出现“#”号字符
2.hash值不包括在Http请求中，它是交由前端路由处理，所以改变hash值时不会刷新页面，也不会向服务器发送请求
3.hash值的改变会触发hashchange事件
history模式：
1.整个地址重新加载，可以保存历史记录，方便前进后退
2.依赖H5 API和后台配置，没有后台配置的话，页面刷新时会出现404

* vue-router有哪几种导航钩子（ 导航守卫 ）？

共有三种守卫：
1：全局守卫：beforeEach,afterEach
2: 路由独享守卫：beforeEnter
3: 组件级别的守卫beforeRouteEnter,beforeRouteUpdate,beforeRouteLeave
他们执行顺序：全局》路由》组件
除了afterEach全局后置外，其他的守卫中务必要调用next(),否则无法完成导航
还有注意全局前置守卫可以用来进行拦截，（登录拦截）

* 你理解的vuex是什么呢？
1. 多个组件共享同一个状态。
2. 多个组件需要变更同一个状态。

* vue权限管理
https://github.com/febobo/web-interview/issues/29

* 双向绑定理解
https://github.com/febobo/web-interview/issues/2

* 什么是虚拟DOM？如何实现一个虚拟DOM？说说你的思路
https://github.com/febobo/web-interview/issues/23

* 了解过vue中的diff算法吗？
https://github.com/febobo/web-interview/issues/24

* 怎么缓存当前的组件？缓存后怎么更新？说说你对keep-alive的理解是什么？
https://github.com/febobo/web-interview/issues/19

* Vue中的$nextTick有什么作用？
https://github.com/febobo/web-interview/issues/14


```



```
webpack优化
1. 开发环境 speed-measure-webpack-plugin，添加持久化缓存 memory 修改为 filesystem
https://juejin.cn/post/7129690544468393992#heading-14
```





### Vue常考基础知识点

#### 1. 声明周期钩子函数

在`beforeCreate`钩子函数调用的时候，是获取不到`props`或者`data`中的数据的，因为这些数据的初始化都在`initState`中。

然后执行`created`钩子函数，在这一步的时候已经可以访问到之前不能访问到的数据，但是这时候的组件还没被挂载，所以是看不到的。

接下来会先执行`beforeMount`钩子函数，开始创建`VDOM`，最后执行`mounted`钩子，并将VDOM渲染未真实DOM并且渲染数据。组件中如果有子组件的话，会递归挂载子组件，只有当所有子组件全部挂载完毕，最后才会执行根组件的挂载钩子函数。

接下来数据更新时会调用的钩子函数`beforeUpdate`和`update`，这两个钩子函数分别在数据更新前和更新后才会调用。

另外还有`keep-alive`独有的生命周期，分别为`activated`和`deactivated`。用`keep-alive`包裹的组件在切换时不会进行销毁二手缓存到内存中并执行`decactiveed`钩子函数，命中缓存渲染后会执行`actived`钩子函数

最后就是销毁组件的钩子函数`beforeDestroy`和`destroyed`。前者适合移除时间定时器等等，否者会引起内存泄露问题，然后进行一系列的销毁操作，如果有子组件的话，也会递归销毁组件，所有子组件都销毁完毕后才会执行根组件的`destroyed`

```
beforeCreate -> created -> beforeMount -> mounted ->

beforeUpdate -> update -> beforeDestroy -> destroyed
```



#### 2.组件通信

* 父子组件通信

* 兄弟组件通信

* 跨多层级组件通信

* 任意组件

  

##### 2.1父子通信

 父组件通过`props`传递数据给子组件，子组件通过`emit`发送时间传递数据给父组件，这种方式是最常用的父子通信实现办法。

这种父子通信方式就是典型的单向数据流，父组件通过`props`传递数据，子组件不能直接修改`props`，必须通过发送时间的方式告知父组件修改数据。

还可以使用语法糖`v-model`来直接实现，因为`v-model`默认会解析成名未`value`的`props`和名为`input`的时间。这种语法糖的方式是典型的双向绑定，常用于UI控件上，但是究其根本，还是通过事件的方法让父组件修改数据。

当然我们还可以通过访问`$parent`或者`$children`对象来访问组件实例中的方法和数据。

##### 2.2 兄弟组件通信

​	可以通过查找父组件的子组件实现，也就是`this.$parent.$children`,在`$children`中可以通过组件`name`查询到需要	的组件实例，然后进行通信

##### 2.3 跨多层次组件通信

对于这种情况可以使用 Vue 2,2新增的API `provide / inject`，虽然文档中不推荐直接使用在业务中，但是如果用的好的话还是很有用的。

假设有父组件A，然后右一个跨多层级的子组件B

```
//父组件A
export default {
	provide:{
		data:1
	}
}

//子组件B
exprort default {
	inject:['data'],
	mount(){
		console.log(this.data)
	}
}

```

##### 2.5 任意组件

这种方式可以通过 Vuex 或者 Event Bus 解决，可以解决上诉所有的通信情况

#### 2.响应式原理

`vue`内部使用了`object.defindProperty()`来实现数据响应式，通过这个函数可以监听到`set`和`get`事件

```


//数据
const data = {
	text:'default'
};
const input = document.getElementById('input');
const span = document.getElementById('span');

 *** defineProperty 版本
Object.defineProperty(data,'text',{
	set(newVal){
		input.value = newVal;
		span.innerHTML = newVal;
	}
})


 *** proxy 版本
const handler = {
	set(target,key,value){
		target[key] = value;
		//数据变化 --> 修改视图
		input.value = value;
		span.iunnerHTML = value;
		return value;
	}
}

const proxy = new Proxy(data,handler);

// 视图更改 --> 数据变化
input.addEventListener('keyup',function(e){
	//defineProperty 版本
	data.text = e.target.value;
	
	//proxy 版本
	proxy.text = e.target.value;
})




```

