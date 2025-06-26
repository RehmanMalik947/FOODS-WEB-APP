import { createSlice} from "@reduxjs/toolkit";

const cartStlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        AddItem:(state,action)=>{
            let existItems=state.find((item)=>item.id===action.payload.id)
            if(existItems){
                state.map((item)=>{
                    if(item.id===action.payload.id){
                        item.qty+=1
                        item.price+=action.payload.price
                    }

                })
            }
            else{
                state.push(action.payload)
            }
        },
        RemoveItem:(state,action)=>{
            return state.filter((item)=>item.id!==action.payload)
        },
        IncrementQty:(state,action)=>{
            state.map((item)=>{
                if(item.id===action.payload){
                    item.qty+=1
                    item.price+=item.price/item.qty
                }
            })
        },
        DecrementQty:(state,action)=>{
            state.map((item)=>{
                if(item.id===action.payload){
                    item.qty-=1
                    item.price-=item.price/item.qty
                }
            })
        }
    }
});
 
export const {AddItem,RemoveItem,IncrementQty,DecrementQty}=cartStlice.actions;
export default cartStlice.reducer; 