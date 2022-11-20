import React from 'react'
import { useNavigate } from 'react-router-dom'

function MainPage() {
  const navigate = useNavigate();
  const toAdmin = () => {
    naviagate('/admin')
  }
  const toUser = () => {
    naviagate('/user')
  }

  return (
    <div class='bg-[#202020] h-screen flex justify-center '>
      <div class="bg-[#706f6f] h-[500px] w-1/5 align-middle m-auto rounded-2xl pb-2">
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
        <div class='flex justify-center mt-20 h-[240px] bg-[#323232] rounded-2xl mx-3 mb-3'>
          <div class='w-4/5 flex justify-center m-auto'>
            <div>
              <div class='bg-[#706f6f] mx-1 w-72 h-20 rounded-lg mb-10 hover:bg-[#7a5ea6] hover:text-white text-center align-middle pt-[20px]'
                   onClist={toAdmin}> 
                <div class='text-2xl'>관리자 페이지 연결</div> 
              </div>
              <div class='bg-[#706f6f] mx-1 w-72 h-20 rounded-lg mt-10 hover:bg-[#7a5ea6] hover:text-white text-center align-middle pt-[20px]'
                  onClist={toAdmin}> 
                <div class='text-2xl'>고객용 페이지 연결</div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage 