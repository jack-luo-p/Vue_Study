<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <MyHeader :addTodo="addTodo"/>
                <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
                <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"/>
            </div>
        </div>
    </div>
</template>
<script>
// 引入组件
import MyFooter from './components/MyFooter.vue';
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'

export default {
    name: 'App',
    components: {
        MyFooter,
        MyHeader,
        MyList
    },
    data() {
        return {
            todos: JSON.parse(localStorage.getItem('todos')) || []
        }
    },
    methods: {
        // 添加一个todo
        addTodo(x) {
            this.todos.unshift(x)
        },
        // 勾选或取消选择
        checkTodo(id) {
            this.todos.forEach( (n) => {
                if (n.id === id) {
                    n.done = !n.done
                }
            })
        },
        // 删除
        deleteTodo(id){
            this.todos = this.todos.filter(todo=> todo.id !== id)
        },
        // 全选勾选或取消
        checkAllTodo(done){
            this.todos.forEach((todo)=> {
                //函数体
                todo.done = done
            })
        },
        clearAllTodo() {
            this.todos = this.todos.filter( n => !n.done)
        }
    },
    watch: {
        deep: true,
        todos: {
            handler(value) {
                console.log('@@@@@@@@@@@',value)
                localStorage.setItem('todos',JSON.stringify(value))
            }
        }
    }
}
</script>

<style>
    body {
        background: #fff;
    }

    .btn {
        display: inline-block;
        padding: 2px 12px;
        margin-bottom: 0;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        box-shadow: inset 0 1px 0 rgba(255,255,255,0.2), 0 1px 2px rgba(0,0,0,0.05);
        border-radius: 4px;
    }
    .btn-danger {
        color: #fff;
        background-color: #da4f49;
        border: 1px solid #bd362f
    }
    .btn-danger:hover {
        color: #fff;
        background-color: #bd362f
    }
    .btn:focus {
        outline: none;
    }
    .todo-container .todo-wrap {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
    
</style>