# 笔记

## ref属性
 1.被用来给元素或子组件注册引用信息(id的替代者)
 2.应用在html标签上获取的是真实DOM元素,应用在组件标签上是组件实例对象(vc)
 3.使用方式
    打标识: <h1 ref="xxx">......</h1> 或 <School ref="xxx"></School>
    获取: this.$refs.xxx

## 配置项props
   功能： 让组件接受外部传进来的数据
   (1). 传递数据:
      <Demo name="xxx"/>
   (2). 接收数据:
      第一种方式(只接收)
         props: ['name']
      第二种方式(限制类型)
         props: {
            name: Number
         }
      第三种方式(限制类型、限制必要性、指定默认值):
         props: {
            name: {
               type: String,
               required: true,
               defalut: '老王'
            }
         }
   备注： props是只读的,Vue底层会检测你对props的修改,如果进行了修改,就会发出警告,
         若业务需求确实需要修改,那么复制props的内容到data中一份,然后去修改data中
         的数据。

## mixin(混入)
   功能： 可以把多个组件共用的配置提取成为一个混入对象
   使用方法：
      第一步定义混合,例如：
         {
            data(){......}
         }
      第二部使用混入,例如：
         (1). 全局混入: Vue.mixin(xxx),
         (2). 局部混入： mixins:['xxx']

## 插件
   功能： 用于增强Vue
   本质： 包含install方法的一个对象,install的第一个参数是Vue,第二个以后的参数使用者传递的数据.
   定义插件：
      对象.install = function (Vue,options) {
         // 全局过滤器
        Vue.filter('mySlice',function(value){
            return value.slice(0,4)
        })

        // 定义混入
        Vue.mixin({
            data() {
                return {
                    x: 1,
                    y: 2
                }
            }
        })
        // 添加实例方法
        Vue.prototype.hello = () =>{alert('hello')}
      }
   使用插件: Vue.use()

## scoped样式
   作用： 让样式在局部生效,防止冲突
   写法：<style scoped>

## 总结TodoList案例
   1. 组件化编码流程：
      (1). 拆分静态组件：组件要按照功能点拆分,名字不要与html元素冲突
      (2). 实现动态组件: 考虑好数据的存放位置,数据是一个组件再用,还是一些组件在用:
         a.一个组件在用： 放在组件自身即可.
         b.一些组件在用：放在他们共同的父组件上
      (3). 实现交互: 从绑定事件开始
   2. props适用于：
      (1). 父组件 ==> 从绑定事件开始.
      (2). 子组件 ==> 父组件 通信(要求父先给子一个函数)
   3. 使用v-model时要切记: v-model时要切记: v-model绑定的值不能是props传过来的值,因为props是不可以修改的!                                                                                                                                                                                                               