import { fetch_completed } from "./action";

const initialState ={
    quizzes : []
}

export const quizReducer = (state = initialState , action)=>{
    switch (action.type){
        case fetch_completed:
            return{
                ...state,
                quizzes : action.payload,
            }
            default : return state
    }
}

export default quizReducer