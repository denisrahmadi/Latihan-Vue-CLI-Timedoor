Vue.component("app-button", {
    data: function(){
        return {
            counter: 0
        }
    },
    template: `
        <div>
            <h1>{{ counter }}</h1>
            <button @click="counter++">Add</button>
            <button @click="counter--">Substract</button>
        </div>
    `
})


new Vue({
    el: "#app"
})