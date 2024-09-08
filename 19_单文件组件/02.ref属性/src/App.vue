<template>
    <div>
        <school></school>
        <student></student>
    </div>
</template>
<script>
// 引入组件
import school from './components/School.vue';
import student from './components/Student.vue';

export default {
    name: 'App',
    components: {
        school,
        student
    }
}
</script>