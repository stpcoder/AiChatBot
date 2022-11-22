import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { axiosPost } from '../axios';

function AdminPage({setOne, setTwo, setThr, setFur, setFiv, setSix, setSev, setEig, setErr, setInit}) {
  //주문, 제품, 배송, 예약, 매장, 교환_환불_반품, 구매, 결제
  const [var1, var1Set] = useState();
  const [var2, var2Set] = useState();
  const [var3, var3Set] = useState();
  const [var4, var4Set] = useState();
  const [var5, var5Set] = useState();
  const [var6, var6Set] = useState();
  const [var7, var7Set] = useState();
  const [var8, var8Set] = useState();
  const [var9, var9Set] = useState();
  const [var10, var10Set] = useState();

  const [sel1, sel1Set] = useState();
  const [sel2, sel2Set] = useState();
  const [sel3, sel3Set] = useState();
  const [sel4, sel4Set] = useState();
  const [sel5, sel5Set] = useState();
  const [sel6, sel6Set] = useState();
  const [sel7, sel7Set] = useState();
  const [sel8, sel8Set] = useState();

  

  const navigate = useNavigate()
  const goMain = async () => {
    navigate("/");
  }

  return (
    <div class='bg-[#202020] h-screen flex justify-center '>
      <div class="bg-gray-200 relative h-3/5 w-2/5 align-middle m-auto rounded-2xl pb-2 shadow-2xl">
        <div>
          <button onClick={goMain} class="hover:text-gray-300 ml-2 text-sm">{`< 메인페이지 돌아가기`}</button>
        </div>
        <div class="mx-6 text-2xl mt-5 ">대화 구성하기</div>
        <div class="flex">
          <div>주문</div>
          <input type='checkbox' checked={sel1} onChange={e => sel1Set(!sel1)}/>
          <input type='text' value={var1} onChange={e => var1Set(e.target.value)}></input>
        </div>
        <div class="flex">
          <div>제품</div>
          <input type='checkbox' checked={sel2} onChange={e => sel1Set(!sel2)}/>
          <input type='text' value={var2} onChange={e => var1Set(e.target.value)}></input>
        </div>
        <div class="flex">
          <div>배송</div>
          <input type='checkbox' checked={sel3} onChange={e => sel1Set(!sel3)}/>
          <input type='text' value={var3} onChange={e => var1Set(e.target.value)}></input>
        </div>
        <div class="flex">
          <div>예약</div>
          <input type='checkbox' checked={sel4} onChange={e => sel1Set(!sel4)}/>
          <input type='text' value={var4} onChange={e => var1Set(e.target.value)}></input>
        </div>
        <div class="flex">
          <div>매장</div>
          <input type='checkbox' checked={sel5} onChange={e => sel1Set(!sel5)}/>
          <input type='text' value={var5} onChange={e => var1Set(e.target.value)}></input>
        </div>
        <div class="flex">
          <div>교환/환불/반품</div>
          <input type='checkbox' checked={sel6} onChange={e => sel1Set(!sel6)}/>
          <input type='text' value={var6} onChange={e => var1Set(e.target.value)}></input>
        </div>
        <div class="flex">
          <div>구매</div>
          <input type='checkbox' checked={sel7} onChange={e => sel1Set(!sel7)}/>
          <input type='text' value={var7} onChange={e => var1Set(e.target.value)}></input>
        </div>
        <div class="flex">
          <div>결제</div>
          <input type='checkbox' checked={sel8} onChange={e => sel1Set(!sel8)}/>
          <input type='text' value={var8} onChange={e => var1Set(e.target.value)}></input>
        </div>
        <div class="flex justify-center absolute inset-x-0 bottom-0">
          <button class=" bg-[#7a5ea6] rounded-lg shadow-xl px-3 py-2 mb-5 hover:text-white text-lg" >저장하기</button>
        </div>
      </div>
    </div>
  )
}

export default AdminPage