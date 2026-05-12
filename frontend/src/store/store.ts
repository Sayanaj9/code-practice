import { configureStore } from '@reduxjs/toolkit'
import questionsReducer from './reducers'
export const store = configureStore({
  reducer: {
    questionsList:questionsReducer
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;