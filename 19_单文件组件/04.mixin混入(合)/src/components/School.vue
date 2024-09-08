<template>
    <!-- 组件的结构 -->
    <div>
        <h2 @click="showName">学习名称: {{ name }}</h2>
        <h2>学校地址: {{ address }}</h2>
    </div>
</template>
<script>
// 引入一个混合(局部)
// import {mixin,mixin2} from '../mixin'
// 交互相关代码
export default {
    name: 'Student',
    data() {
        return { 
            name: '尚硅谷',
            address: '北京'
        }
    },
    // mixins: [mixin,mixin2]
}
</script>