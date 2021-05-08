<template>
    <div>
        <!-- {{ todos }} -->
     <ul>
         <li v-for="todo in todos" :key="todo.id">
          <!-- {{ todo }} -->
          <input type="checkbox" :checked="todo.done"
          @change="toggle(todo)">
          <span v-bind:class="{ done: todo.done }">
           {{ todo.name }} 
           <!-- {{ todo.created　| dateFilter }} -->
          </span>
          <button @click="remove(todo.id)">remove</button>
         </li>
     </ul>
    <div class="form">
      <form v-on:submit.prevent="add">
        <input v-model="name">
        <button>Add</button>
      </form>
    </div>
  </div>
</template>

<script>
    import moment from 'moment'
    export default {
    data: function() {
      return {
        name: '',
        done: false
      }
    },
    created: function() {
      this.$store.dispatch('todos/init')
    },
    methods: {
      add() {
        this.$store.dispatch('todos/add', this.name)
        this.name = ''
      },
      remove(id) {
          this.$store.dispatch('todos/remove', id)
      },
      toggle(todo) {
          this.$store.dispatch('todos/toggle', todo)
      }
    },
    computed: {
        
        todos() {
            console.log(this.$store.state.todos.todos)
            return this.$store.state.todos.todos
      }
    },
    filers: {
        dateFilter: function(date) {
            return moment(date).format('YYYY/MM/DD HH:mm:ss')
        }
        }
    }
  
</script>

<style> 
 li > span.done {
     text-decoration: line-through;
 }
</style>