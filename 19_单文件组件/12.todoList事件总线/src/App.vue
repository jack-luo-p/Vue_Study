<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <MyHeader/>
                <MyList :todos="todos"/>
                <MyFooter :todos="todos"/>
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
    mounted() {
        this.$bus.$on('clearAllTodo',()=> {
            this.todos = this.todos.filter( n => !n.done)
        })
        this.$bus.$on('checkAllTodo',(done)=> {
            this.todos.forEach((todo)=> {
                //函数体
                todo.done = done
            })
        })
        this.$bus.$on('deleteTodo',(id) => {
            this.todos = this.todos.filter(todo=> todo.id !== id)
        })
        this.$bus.$on('addTodo',(x)=> {
            this.todos.unshift(x)
        })
        this.$bus.$on('checkTodo',(id)=> {
            this.todos.forEach( (n) => {
                if (n.id === id) {
                    n.done = !n.done
                }
            })
        })
    },
    beforeDestroy() {
        this.$bus.$off('clearAllTodo')
        this.$bus.$off('checkAllTodo')
        this.$bus.$off('deleteTodo')
        this.$bus.$off('addTodo')
    },
    methods: {
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