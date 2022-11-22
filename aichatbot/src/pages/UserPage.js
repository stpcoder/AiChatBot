import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function UserPage() {
  const [input, setInput] = useState("");
  const [chatList, setChatList] = useState([]);
  const navigate = useNavigate()
  const goMain = () => {
    navigate("/");
  }
  const inputChg = (e) => {
    setInput(e.target.value);
  }

  const sendMsg = () => {
    console.log(input);
    
    setInput("");
  }

  // const chatList = [{user : 0, text : '환영합니다'}, {user : 1, text : '반갑구만'}]

  

  return (
    <div class='bg-[#202020] h-screen flex justify-center '>
      <div class="flex flex-col flex-grow h-4/5 m-auto w-1/5 max-w-xl bg-white shadow-xl rounded-lg overflow-hidden">
        <div>
          <button onClick={goMain} class="hover:text-gray-300 ml-2 text-sm">{`< 메인페이지 돌아가기`}</button>
        </div>
        <div class="flex flex-col flex-grow h-0 p-4 overflow-auto">
        {chatList.map((chat) => (
          chat.user === 0 ? (
          <div class="flex w-full mt-2 space-x-3 max-w-xs">
            <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
              <div>
              <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                <p class="text-sm">{chat.text}</p>
              </div>
            </div>
          </div>) : (          
          <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                <p class="text-sm">{chat.text}</p>
              </div>
            </div>
            <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
          </div>)
        ))}
        </div>
        
        <div class="bg-gray-300 p-4 flex">
          <input class="flex items-center h-10 w-5/6 rounded px-3 text-sm" type="text" placeholder="글을 입력해주세요" value={input} onChange={inputChg} />
          <button class="bg-gray-200 w-1/6 ml-2 text-center" onClick={sendMsg}>보내기</button>
        </div>

      </div>
    </div>
  )
}

export default UserPage