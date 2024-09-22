<template>
    <div class="app">
        <h1>{{ msg }},学生姓名是{{ studentName }}</h1>
        <!-- 第一种写法： 通过父组件给子组件传递函数类型绑定一个自定义事件实现： 子给父传递数据 -->
        <student v-on:atguigu="getStudentName"></student>
        <!-- <student v-on:atguigu="getStudentName" @demo="m1"></student> -->
        
        <!-- <student @atguigu="getStudentName"></student> -->
        <!-- 第二种写法： ref -->
        <!-- <student ref="student"></student> -->
        <hr>
        <!-- 通过父组件给子组件传递函数类型props实现： 子给父传递数据 -->
        <school :getSchoolName="getSchoolName"></school>
        
    </div>
</template>
<script>
// 引入组件
import student from './components/Student.vue';
import school from './components/School.vue';

export default {
    name: 'App',
    components: {
        student,
        school
    }, 
    data() {
        return {
            msg: '你好啊!',
            studentName: ''
        }
    },
    methods:{
        getSchoolName(name) {
            console.log('app收到了学校名:',name)
            
        },
        getStudentName(name) {
            console.log('demo被调用了!',name);
            this.studentName = name
        },
        m1() {
            console.log('demo事件被触发了')
        },
        
        
    },
    mounted() {
        // this.$refs.student.$on('atguigu',this.getStudentName) // 绑定自定义事件
        // this.$refs.student.$once('atguigu',this.getStudentName) // 绑定自定义事件(一次)
    }
}
</script>
<style scoped>
    .app {
        background-color: gray;
        padding: 5px;
    }
</style>