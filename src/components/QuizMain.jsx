import React, { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { fetch_completed } from "../Redux/action";

const QuizMain = ()=>{
    const dispatch = useDispatch();
    const quizzes = useSelector((state) =>state.quizzes)

    useEffect(()=>{
        dispatch(fetch_completed())
    },[dispatch]);
     
    return (
        <div>
            <h1>Quiz</h1>
            <ul>
                {data.map((QuizMain)=>(
                    <li key={QuizMain.id}>
                        <button onClick={()=>alert('Quiz is startting Get Ready! $ {quizMain.question}')}>
                            {QuizMain.question}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default QuizMain