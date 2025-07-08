import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './components/counter.slice'
import taskReducer from './pages/Task/task.slice'
import authReducer from './pages/auth/auth.slice'
// ...

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        taskList: taskReducer,
        auth: authReducer
    },
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch