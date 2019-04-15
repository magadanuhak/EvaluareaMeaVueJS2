import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        x: 0,
        y: 0,
        results: []
    },
    mutations: {
        changeX(state, x) {
            state.x = x
        },
        changeY(state, y) {
            state.y = y
        },
        changeResults(state, result){
            state.results = result;
        }
    },
    getters: {
        getX: state => state.x,
        getY: state => state.y
    },
    actions: {
        fetchUsers({ commit }, { self })  {
            Vue.http.get("http://localhost:3000/results")
                .then((response) => {
                    commit("changeResults", response.body);
                })
                .catch((error => {
                    console.log(error.statusText)
                }))
        }
    }
})