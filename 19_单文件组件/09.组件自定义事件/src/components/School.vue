<template>
    <!-- 组件的结构 -->
    <div class="school">
        <h2>学习名称: {{ name }}</h2>
        <h2>学校地址: {{ address }}</h2>
        <button @click="sendSchoolName">把学校名给App</button>
    </div>
</template>
<script>
export default {
    name: 'Student',
    data() {
        return { 
            name: '尚硅谷atguigu',
            address: '北京'
        }
    },
    props:['getSchoolName'],
    methods: {
        sendSchoolName() {
            this.getSchoolName(this.name)
        }
    }
}
</script>

<style lang="less" scoped>
    .school {
        background-color: skyblue;
        padding: 5px;
    }
</style>