import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk("posts/getPosts", async ()=>{
    return fetch(`https://cors-anywhere.herokuapp.com/https://fakestoreapi.com/products/categories`).then((res)=>
    res.json()
    );
});

const Newuser = createSlice({
    name:"posts",
    initialState:{
        posts:[],
        loading:false
    },
    extraReducers:{
        [getPosts.pending]:(state,action)=>{
            state.loading=true
        },
        [getPosts.fulfilled]:(state,action)=>{
            state.loading=false;
            state.posts = action.payload;
        },
        [getPosts.rejected]:(state,action)=>{
            state.loading=false;
        },
    },
});
export default Newuser.reducer;