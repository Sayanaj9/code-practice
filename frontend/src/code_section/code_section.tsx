import Question from "./question"
import Testcase from "./testcase"
import Code from "./code"

function CodeSection() {

  return (
  <div className="h-screen bg-gray-200 flex flex-col">
        <div className="h-20 p-4"></div>
        <div className='grid grid-cols-12 gap-4 p-4 flex-1 overflow-auto'>
                    
                   
                   
                    <div className='col-span-4 bg-white p-4 rounded-xl text-black-500 font-bold'>
                       <Question/>
                    </div>
                    <div className='col-span-5 bg-white p-4 rounded-xl text-black-500 font-bold'>
                         <Code/>
                    </div>
                    <div className='col-span-3 bg-white p-4 rounded-xl text-black-500 font-bold'>
                         <Testcase/>
                    </div>
        </div>
   </div>
    
  )
}

export default CodeSection
