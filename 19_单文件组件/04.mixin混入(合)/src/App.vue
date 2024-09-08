<template>
    <div>
        <student></student>
        <hr>
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
    }
}
</script>