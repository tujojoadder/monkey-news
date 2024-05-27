 const increment="increment";
 const decrement="decrement";

export const incrementCount=() => {
  return{
    type:increment
  }
}                                                                        
export const decrementCount=() => {
    return{
      type:decrement
    }
  }
  