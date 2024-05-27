import { combineReducers, createStore } from "redux"


const initialstates={
    count:766
}
const ten={
    num:0
}
 export const counterReducer=(state=initialstates,action)=>{
    switch (action.type) {
        case "increment":
           return{
            ...state,count:state.count+1
           }
           case "decrement":
            return{
             ...state,count:state.count-1
            }
        
        default:
            return state
    }
}
export const sum=(state=ten,action)=>{
    switch (action.type) {
        case "increment":
           return{
            ...state,num:state.num+10
           }
           case "decrement":
            return{
             ...state,num:state.num-10
            }
        
        default:
            return state
    }
}

const rootReducer = combineReducers({
   increase:counterReducer,
   sum:sum
   
  });
  

export const store=createStore(rootReducer);
