import axios from "axios";

 export const fetch_completed = 'fetch_completed'
export const Quiz = ()=>{
    return async (dispatch) =>{
        try {
            const response = await axios.get('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz?')
            dispatch({
                type : fetch_completed,
                payload : response.data
            })
        } catch (error){
            console.log('error in fetching quizes',error)
        }

    }
}

export default Quiz