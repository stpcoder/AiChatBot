import React from 'react'
import { useNavigate } from 'react-router-dom'
function AdminPage() {
  const navigate = useNavigate()
  const goMain = () => {
    navigate("/");
  }

  return (
    <div class='bg-[#202020] h-screen flex justify-center '>
      <div class="bg-[#706f6f] h-3/5 w-2/5 align-middle m-auto rounded-2xl pb-2 shadow-2xl">
        <div><button class="text-lg ml-2 mt-2 hover:text-white" onClick={goMain}>{`<- 메인 페이지`}</button></div>
        <div class="mx-6 my-3 h-[470px] bg-white">설정내용</div>
        <div class="flex justify-center">
          <button class=" bg-[#7a5ea6] rounded-lg shadow-xl px-3 py-2 hover:text-white text-lg" >저장하기</button>
        </div>
      </div>
    </div>
  )
}

export default AdminPage