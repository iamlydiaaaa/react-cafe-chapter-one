import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'


// local storage에서 cart 상태 가져오기
function loadFromLocalStorage(){
    try{
        const serializedState = localStorage.getItem('cart');
        if(serializedState === null) return [];
        return JSON.parse(serializedState);
    } catch(e){
        console.warn('Local Storage에서 cart 상태를 불러오는 데 실패함')
        return [];
    }
}

// local storage에서 cart 상태 저장
function saveCart(state){
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem('cart', serializedState);
    } catch(e){
        console.warn('local storage에 cart 상태를 저장하는 데 실패함')
    }
}

//Cart slice 생성
let cart = createSlice({ //useState와 같은 역할임
    name: 'cart',
    initialState: loadFromLocalStorage().length > 0 ? loadFromLocalStorage() : [] ,
    reducers: {
        addCount(state, action){
            let num = state.findIndex((a)=> a.name === action.payload)
            console.log(action.payload)
            if (num !== -1){
                state[num].count ++
                saveCart(state) //상태 변경 후 저장
            }
        },
        decreaseCount(state, action){
            let num = state.findIndex((a)=> a.name === action.payload)
            if(num !== -1 && state[num].count > 0){
                state[num].count --
                //수량이 0으로 바뀌면, 삭제하시겠습니까? 알림창 뜬 후, 확인을 누르면 리스트에서 삭제
                if(state[num].count === 0){
                    if(window.confirm('Delete from cart?')) {
                        state.splice(num,1)
                        alert('Deleted.')
                    }
                    else state[num].count = 1
                }
                saveCart(state) //상태 변경 후 저장            
            }
            
        },
        addCart(state, action){
            let num = state.findIndex((item) => item.name === action.payload)

            console.log(num +' '+action.payload)
            if (num !== -1) state[num].count ++;
            else state.push({
                id: state.length,
                name: action.payload,
                count: 1
            })

            saveCart(state) //상태 변경 후 저장
            console.log("added "+action.payload+" to the cart ")
        }
    }
})
export let {addCount, decreaseCount, addCart} = cart.actions


export default configureStore({
  reducer: {
    cart : cart.reducer,
    user : user.reducer,
   }
})