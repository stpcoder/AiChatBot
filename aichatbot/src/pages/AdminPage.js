import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AdminPage({setOne, setTwo, setThr, setFur, setFiv, setSix, setSev, setEig, setErr, setInit}) {
  //주문, 제품, 배송, 예약, 매장, 교환_환불_반품, 구매, 결제
  const [var1, var1Set] = useState("주문하신 제품의 주문이 승인되었습니다");
  const [var2, var2Set] = useState("제품 자체에 대한 문의는 본사에 부탁드립니다");
  const [var3, var3Set] = useState("제공하신 운송장 번호를 토대로 OO택배 사이트 확인 부탁드립니다");
  const [var4, var4Set] = useState("예약은 유선전화로만 가능합니다");
  const [var5, var5Set] = useState("매장은 단 하나만 운영하고 있습니다");
  const [var6, var6Set] = useState("영수증과 카드를 지참해서 매장으로 방문 부탁드립니다");
  const [var7, var7Set] = useState("인터넷 구매 시 무통장 입금 (OO은행 / xxx) 로 부탁드립니다");
  const [var8, var8Set] = useState("결제 승인은 1~2시간 소요됩니다 추가 문의는 유선으로 부탁드립니다");
  const [var9, var9Set] = useState("이해할 수 없는 질문입니다 핵심만 포함한 다른 질문 부탁드립니다");
  const [var10, var10Set] = useState("환영합니다! 모두를 위한 마켓! 모마켓의 상담 챗봇입니다!");

  const [sel1, sel1Set] = useState(true);
  const [sel2, sel2Set] = useState(true);
  const [sel3, sel3Set] = useState(true);
  const [sel4, sel4Set] = useState(true);
  const [sel5, sel5Set] = useState(true);
  const [sel6, sel6Set] = useState(true);
  const [sel7, sel7Set] = useState(true);
  const [sel8, sel8Set] = useState(true);
  
  const save = () => {
    if (sel1) {
      setOne(var1);
    } else {
      setOne("");
    }

    if (sel2) {
      setTwo(var2);
    } else {
      setTwo("");
    }

    if (sel3) {
      setThr(var3);
    } else {
      setThr("");
    }

    if (sel4) {
      setFur(var4);
    } else {
      setFur("");
    }

    if (sel5) {
      setFiv(var5);
    } else {
      setFiv("");
    }

    if (sel6) {
      setSix(var6);
    } else {
      setSix("");
    }

    if (sel7) {
      setSev(var7);
    } else {
      setSev("");
    }

    if (sel8) {
      setEig(var8);
    } else {
      setEig("");
    }

    setErr(var9);
    setInit(var10);
    alert("저장이 완료되었습니다")
  }
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
        <div class="mx-6 text-2xl mt-5 mb-5 ">대화 구성하기</div>
        <div class="m-auto">
          <div class="flex  text-xl mb-3 ml-5 ">
            <div class="mr-3 ">주문</div>
            <input class="mr-3 mt-2 " type='checkbox' checked={sel1} onChange={e => sel1Set(!sel1)}/>
            <input class="rounded-xl text-lg w-4/5" type='text' value={var1} onChange={e => var1Set(e.target.value)}></input>
          </div>
          <div class="flex  text-xl mb-3 ml-5 ">
            <div class="mr-3 ">제품</div>
            <input class="mr-3 mt-2 " type='checkbox' checked={sel2} onChange={e => sel2Set(!sel2)}/>
            <input class="rounded-xl text-lg w-4/5" type='text' value={var2} onChange={e => var2Set(e.target.value)}></input>
          </div>
          <div class="flex  text-xl mb-3 ml-5 ">
            <div class="mr-3 ">배송</div>
            <input class="mr-3 mt-2 "  type='checkbox' checked={sel3} onChange={e => sel3Set(!sel3)}/>
            <input class="rounded-xl  text-lg w-4/5" type='text' value={var3} onChange={e => var3Set(e.target.value)}></input>
          </div>
          <div class="flex  text-xl mb-3 ml-5 ">
            <div class="mr-3 ">예약</div>
            <input class="mr-3 mt-2 "  type='checkbox' checked={sel4} onChange={e => sel4Set(!sel4)}/>
            <input class="rounded-xl  text-lg w-4/5" type='text' value={var4} onChange={e => var4Set(e.target.value)}></input>
          </div>
          <div class="flex  text-xl mb-3 ml-5 ">
            <div class="mr-3 ">매장</div>
            <input class="mr-3 mt-2 "  type='checkbox' checked={sel5} onChange={e => sel5Set(!sel5)}/>
            <input class="rounded-xl  text-lg w-4/5" type='text' value={var5} onChange={e => var5Set(e.target.value)}></input>
          </div>
          <div class="flex  text-xl mb-3 ml-5 ">
            <div class="mr-3 ">교환/환불/반품</div>
            <input class="mr-3 mt-2 "  type='checkbox' checked={sel6} onChange={e => sel6Set(!sel6)}/>
            <input class="rounded-xl text-lg w-4/6" type='text' value={var6} onChange={e => var6Set(e.target.value)}></input>
          </div>
          <div class="flex  text-xl mb-3 ml-5 ">
            <div class="mr-3 ">구매</div>
            <input class="mr-3 mt-2 "  type='checkbox' checked={sel7} onChange={e => sel7Set(!sel7)}/>
            <input class="rounded-xl text-lg w-4/5" type='text' value={var7} onChange={e => var7Set(e.target.value)}></input>
          </div>
          <div class="flex  text-xl mb-3 ml-5 ">
            <div class="mr-3 ">결제</div>
            <input class="mr-3 mt-2 "  type='checkbox' checked={sel8} onChange={e => sel8Set(!sel8)}/>
            <input class="rounded-xl text-lg w-4/5" type='text' value={var8} onChange={e => var8Set(e.target.value)}></input>
          </div>
          <div class="flex  text-xl mb-3 ml-5 ">
            <div class="mr-3 ">오류 발생 시</div>
            <input class="rounded-xl text-lg w-4/5" type='text' value={var9} onChange={e => var9Set(e.target.value)}></input>
          </div>
          <div class="flex  text-xl mb-3 ml-5 ">
            <div class="mr-3 ">초기 메세지</div>
            <input class="rounded-xl text-lg w-4/5" type='text' value={var10} onChange={e => var10Set(e.target.value)}></input>
          </div>
        </div>
        <div class="flex justify-center absolute inset-x-0 bottom-0">
          <button class=" bg-[#7a5ea6] rounded-lg shadow-xl px-3 py-2 mb-5 hover:text-white text-lg" onClick={save} >저장하기</button>
        </div>
      </div>
    </div>
  )
}

export default AdminPage