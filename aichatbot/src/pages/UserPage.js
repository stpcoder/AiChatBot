import React from 'react'
import { useNavigate } from 'react-router-dom'

function UserPage() {
  const navigate = useNavigate()
  const goMain = () => {
    navigate("/");
  }

  return (
    <div class='bg-[#202020] h-screen flex justify-center '>
      <div class="bg-[#706f6f] h-4/5 w-1/5 align-middle m-auto rounded-2xl pb-2">
        <button class="text-lg ml-2 hover:text-white" onClick={goMain}>{`<- 메인 페이지`}</button>

        
      </div>
    </div>
  )
}

export default UserPage