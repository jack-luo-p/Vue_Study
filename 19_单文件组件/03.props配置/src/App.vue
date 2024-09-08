<template>
    <div>
        <student name="李四" sex ="女" :age="18"></student>
    </div>
</template>
<script>
// 引入组件
import student from './components/Student.vue';

export default {
    name: 'App',
    components: {
        student
    }
}
</script>