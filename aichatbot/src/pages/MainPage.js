import React from 'react'
import { useNavigate } from 'react-router-dom'

function MainPage() {
  const navigate = useNavigate();
  const toAdmin = () => {
    navigate('/admin')
  }
  const toUser = () => {
    navigate('/user')
  }

  return (
    <div class='bg-[#202020] h-screen flex justify-center '>
      <div class="bg-gray-200 h-3/5 w-2/5 max-w-xl align-middle m-auto rounded-2xl pb-2 shadow-2xl">
        <div class='flex justify-center mt-6'>
          <div class='text-3xl'>모두의 대화👂</div>
        </div>
        <div class='flex justify-center mt-5'>
          <div class='text-lg'>소상공인, 소규모 쇼핑몰 등 자영업자들을 위한 </div>
        </div>
        <div class='flex justify-center'>
          <div class='text-lg'> 무료 챗봇 구현 '모두의 대화👂'의 데모 웹사이트</div>
        </div>
        <div class='flex justify-center mt-3'>
          <div class='text-sm'> 개발자 연락처 - thbrian@postech.ac.kr </div>
        </div>
        <div class='flex justify-center mt-10 h-1/4'>
          <button class='m-auto bg-[#7a5ea6] shadow-xl mx-1 w-4/6 h-2/3 rounded-2xl hover:bg-[#7a5ea6] hover:text-blue-200 text-white text-center align-middle '
                      onClick={toAdmin}> 
            <div class='text-2xl'>관리자 페이지 연결</div>
          </button>
        </div>
        <div class='flex justify-center h-1/4'>
          <button class='m-auto bg-[#7a5ea6] shadow-xl mx-1 w-4/6 h-2/3 rounded-2xl hover:bg-[#7a5ea6] hover:text-blue-200 text-white text-center align-middle '
                    onClick={toUser}> 
            <div class='text-2xl'>고객용 페이지 연결</div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default MainPage 