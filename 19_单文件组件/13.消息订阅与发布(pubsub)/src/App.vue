<template>
    <div class="app">
        <student></student>
        <school></school>
        
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
        }
    },
    mounted() {
        
    }
}
</script>
<style scoped>
    .app {
        background-color: gray;
        padding: 5px;
    }
</style>