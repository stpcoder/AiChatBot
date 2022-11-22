import axios from "axios";

export const axiosPost = async (input) => {
  const open = {
    "version": "v2",
    "userId": "U47b00b58c90f8e47428af8b7bddcda3d12",
    "userIp": "8.8.8.8",
    "timestamp": 12345678,
    "bubbles": [ {
    "type": "text",
    "data" : { "description" : input } } ],
    "event": "send"
  }

  const HmacSHA256 = require('crypto-js/hmac-sha256');
  const EncBase64 = require('crypto-js/enc-base64');
  const signatureHeader = HmacSHA256(JSON.stringify(open), 'Z2N3d3VzelNKRUxmUFhmVnlvdlFxVnRGamZTTXd3Q3k=').toString(EncBase64);
  const header = {
    'Content-Type' : "application/json;UTF-8", 
    'X-NCP-CHATBOT_SIGNATURE' : signatureHeader
  }

  const data = await axios.post('https://cors-everywhere.herokuapp.com/https://9zkhu3dgaw.apigw.ntruss.com/aichatbot/aichatbot1/', open , {
    headers : header,
    withCredentials : false
  });
  console.log(data);
  const type = data.data.conversation.scenarioName 
  console.log(type);
  return type;
};




