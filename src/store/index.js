import {createStore} from 'vuex'

import { auth } from '../firebase/config.js'

import { createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth'
import { async } from '@firebase/util'

const store = createStore({
    state:{
       user: null
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
            console.log('use state changed: ',state.user)
        }
    },
    actions: {
        async signup(conext, {email, password}) {
            console.log('signup action')

            const res = await createUserWithEmailAndPassword(auth, email, password)
            if (res) {
                conext.commit('setUser',res.user)
            } else {
                throw new Error('Could Not Complete SignuP')
            }
        },
        async login(conext, {email , password}) {
            console.log('login action')

            const res = await signInWithEmailAndPassword(auth, email, password)
            if (res) {
                conext.commit('setUser',res.user)
            } else {
                throw new Error('Could Not Complete Login')
            }
        }
    }
})


export default store