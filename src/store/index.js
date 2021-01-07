import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        cartList: []
    },
    mutations: {
        addCartList(state, payload) {
            payload.checked = true
            let oldProduct = state.cartList.find(item => item.iid === payload.iid)
            if (oldProduct) {
                oldProduct.count += 1
            }
            else {
                payload.count = 1,
                    state.cartList.push(payload)
            }
        },
        // checkClicked(state) {
        //     for (let item of state.cartList) {
        //         item.checked = !item.checked
        //     }
        // }
    }
})
export default store
