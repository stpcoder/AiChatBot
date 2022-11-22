import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { axiosPost } from '../axios';
import Loading from '../Spinner';

function UserPage({one, two, thr, fur, fiv, six, sev, eig, init, err}) {
  //주문, 제품, 배송, 예약, 매장, 교환_환불_반품, 구매, 결제
  const [input, setInput] = useState("");
  const [chatList, setChatList] = useState([]);
  const [load, setLoading] = useState(false);
  const navigate = useNavigate()
  const goMain = () => {
    navigate("/");
  }
  
  useEffect(() => {
    const newList = chatList.concat({user : 0, text : init});
    setChatList(newList);
  }, []);

  const inputChg = (e) => {
    setInput(e.target.value);
  }

  const getMsg = async (input) => {
    const answer = await axiosPost(input);
    setLoading(false)
    return answer
  }

  const keyAction = async (e) => {
    if (e.key  === 'Enter') {
      await sendMsg()
    }
  }

  const sendMsg = async () => {
    console.log(input);
    setLoading(true);
    let newList = [...chatList]
    newList = newList.concat({user : 1, text : input})

    const result = await getMsg(input)
    console.log(result);
    if (result == "주문") {
      if (one != "") {
        newList = newList.concat({user : 0, text : one})
      } else {
        newList = newList.concat({user : 0, text : err})
      }
    } else if (result == "제품") {
      if (two != "") {
        newList = newList.concat({user : 0, text : two})
      } else {
        newList = newList.concat({user : 0, text : err})
      }
    } else if (result == "배송") {
      if (thr != "") {
        newList = newList.concat({user : 0, text : thr})
      } else {
        newList = newList.concat({user : 0, text : err})
      }
    } else if (result == "예약") {
      if (fur != "") {
        newList = newList.concat({user : 0, text : fur})
      } else {
        newList = newList.concat({user : 0, text : err})
      }
    } else if (result == "매장") {
      if (fiv != "") {
        newList = newList.concat({user : 0, text : fiv})
      } else {
        newList = newList.concat({user : 0, text : err})
      }
    } else if (result == "교환") {
      if (six != "") {
        newList = newList.concat({user : 0, text : six})
      } else {
        newList = newList.concat({user : 0, text : err})
      }
    } else if (result == "구매") {
      if (sev != "") {
        newList = newList.concat({user : 0, text : sev})
      } else {
        newList = newList.concat({user : 0, text : err})
      }
    } else if (result == "결제") {
      if (eig != "") {
        newList = newList.concat({user : 0, text : eig})
      } else {
        newList = newList.concat({user : 0, text : err})
      }
    } else {
      newList = newList.concat({user : 0, text : err})
    }

    setChatList(newList);
    setInput("");
  }

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
            <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300  shadow-xl"></div>
              <div>
              <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg  shadow-xl">
                <p class="text-sm">{chat.text}</p>
              </div>
            </div>
          </div>) : (          
          <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div class="bg-[#7a5ea6] text-white p-3 rounded-l-lg rounded-br-lg shadow-xl">
                <p class="text-sm">{chat.text}</p>
              </div>
            </div>
            <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300  shadow-xl"></div>
          </div>)
        ))}
        </div>
        
        <div class="bg-[#7a5ea6] p-4 flex" onKeyPress={keyAction}>
          <input class="flex items-center h-10 w-5/6 rounded px-3 text-sm" type="text" placeholder="글을 입력해주세요" value={input} onChange={inputChg} />
          <button class="hover:rounded-2xl bg-[#7a5ea6] text-white hover:text-[#7a5ea6] hover:bg-white w-1/6 ml-2 text-center"  onClick={sendMsg}>보내기</button>
        </div>

      </div>
      {load && <Loading/> }
    </div>
  )
}

export default UserPage