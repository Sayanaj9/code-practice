
import { useEffect } from 'react'
import './App.css'
import CodeSection from './code_section/code_section'
import { useAppDispatch,useAppSelector } from "./store/hooks";
import { fetchQuestions } from "./store/reducers"

function App() {
  const dispatch=useAppDispatch()
  const allQuestionList = useAppSelector(
    (state) => state.questionsList.questions
  )
  console.log(allQuestionList)
  useEffect(()=>{
      dispatch(fetchQuestions())
    
  },[])
  return (
   <div className='min-h-screen'>
      <CodeSection/>
   </div>
    
  )
}

export default App
