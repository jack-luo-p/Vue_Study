export default {
    install(Vue,x,y,z) {
        // console.log('@@@install')
        console.log(x,y,z)
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
}
