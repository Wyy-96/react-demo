import React, { Component, useState } from 'react'
import { Upload, message, Input, Button, Divider } from 'antd';
const { TextArea } = Input;
import axios from 'axios'

export default function Message({history, changeHistory}) {
  // 文本框内容
  const [value, setValue] = useState('');
  // 发送消息
  const handlePostMessage = () => {
    axios.post('wyy/abroadLeave',{text:value}).then(res => {
      changeHistory(`请求返回结果${JSON.stringify(res.data)}`)
    }).catch((err)=>{
      changeHistory(`请求返回结果${JSON.stringify(err.data)}`)
    })
  }
  // 获取消息
  const handleGetMessage = () => {
    axios.get('wyy/abroadLeave/getMessage').then(res => {
      if(res.data && res.data.result){
        setValue(res.data.msg)
      }
      changeHistory(`请求结果：${JSON.stringify(res.data.code)}---${new Date().getTime()}`)
    }).catch((err)=>{
      changeHistory(`请求结果：${JSON.stringify(err.data.code)}---${new Date().getTime()}`)
    })
  }
  return (
    <div>
    <TextArea
      value={value}
      style={{ height: 320, marginBottom: 24 }}
      onChange={(e) => setValue(e.target.value)}
      placeholder="输入内容"
    />
    <Button onClick={handlePostMessage}>发送消息</Button>
    <Button onClick={handleGetMessage}>获取信息</Button>
    <Divider />
  </div>
  )
}