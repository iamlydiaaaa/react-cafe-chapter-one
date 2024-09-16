import { createSlice } from '@reduxjs/toolkit'
let user = createSlice({ //useState와 같은 역할임
    name: 'user',
    initialState: {name: 'lydia', age: '27'},
    reducers : {
        changeName(state){ //state는 기존 함수(lydia)
            state.name = 'jenny'
        }
    }
})

export let { changeName } = user.actions

export default user