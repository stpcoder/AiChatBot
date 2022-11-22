import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import UserPage from './pages/UserPage'
import AdminPage from './pages/AdminPage'

function Routing() {
  //주문, 제품, 배송, 예약, 매장, 교환_환불_반품, 구매, 결제
  const [one, setOne] = useState(""); //주문
  const [two, setTwo] = useState(""); //제품
  const [thr, setThr] = useState(""); //배송
  const [fur, setFur] = useState(""); //예약
  const [fiv, setFiv] = useState(""); //매장
  const [six, setSix] = useState(""); //교환
  const [sev, setSev] = useState(""); //구매
  const [eig, setEig] = useState(""); //결제
  const [err, setErr] = useState(""); //없는 말일 경우
  const [init, setInit] = useState("");

  return (
    <Routes>
      <Route path = "/" element = {<MainPage/>} />
      <Route path = "/admin" element = {<AdminPage setOne={setOne} setTwo={setTwo} setThr={setThr} setFur={setFur} setFiv={setFiv} setSix={setSix} setSev={setSev} setEig={setEig} setErr={setErr} setInit={setInit}/>} />
      <Route path = "/user" element = {<UserPage one={one} two={two} thr={thr} fur={fur} fiv={fiv} six={six} sev={sev} eig={eig} err={err} init={init} />} />
    </Routes>
  )
}

export default Routing