<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h1>{{ msg }}</h1>
        <h2>学生姓名: {{ name }}</h2>
        <h2>学生年龄: {{ myAge }}</h2>
        <h2>学生性别: {{ sex }}</h2>
        <button @click="updateAge">尝试修改收到的年龄</button>
    </div>
</template>
<script>
// 交互相关代码
export default {
    name: 'Student',
    data() {
        return { 
            msg: '我是学生',
            myAge: this.age
        }
    },

    methods: {
        updateAge() {
            this.myAge++
        }
    },
    // props: ['name','sex','age'] 简单声明接收

    // 接收的同时对数据进行类型限制
    // props: {
    //     name: String,
    //     age: Number,
    //     sex: String
    // }

    // 接收的同时对数进行数据类型限制,默认值的指定,必要性限制
    props: {
       name: {
        type: String,
        require: true // 名字是必要的
       },
       age: {
        type: Number,
        default: 99 // 默认值
       },
       sex: {
        type: String,
        require: true // 性别是必要的
       },
    },
    
}
</script>