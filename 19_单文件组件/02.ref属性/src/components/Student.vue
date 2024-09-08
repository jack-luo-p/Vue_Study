<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学生姓名: {{ name }}</h2>
        <h2>学生地址: {{ age }}</h2>
        <button @click="showName">点我提示学校名</button>
    </div>
</template>
<script>
// 交互相关代码
export default {
    name: 'Student',
    data() {
        return {
            name: '张三',
            age: 18
        }
    },
    methods: {
        showName() {
            alert(this.name)
        }
    }
}
</script>