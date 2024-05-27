import { buy_book } from "./BookType";

const initialState={
    NumberOfBook:20
}
const  BookReducer=(state=initialState,action)=>{

    switch (action.type) {
        case buy_book:
           return{
            ...state,NumberOfBook:state.initialState-1
           }
    
        default:
            return state
    }

}
export default BookReducer;