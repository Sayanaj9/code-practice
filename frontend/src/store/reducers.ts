import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"

export  const fetchQuestions=createAsyncThunk(
 "questions/fetchQuestions",
 async ()=>{
    const response=await fetch('/api/questions');
    const data=await response.json()
    return data
 }
)

const questionSlice=createSlice({
    name:"questions",
    initialState: {
        questions: [],
        loading: false,
        error: null as string | null,
    },
    reducers:{},
     extraReducers: (builder) => {
            builder.addCase(fetchQuestions.fulfilled, (state, action) => {
                       state.loading = false;
                       state.questions = action.payload;
            }),
            builder.addCase(fetchQuestions.pending, (state) => {
                       state.loading = true;
            }),
            builder.addCase(fetchQuestions.rejected, (state,action) => {
                       state.loading = false;
                       state.error = "Failed to fetch questions";
            })
  },
})


export default questionSlice.reducer