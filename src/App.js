import React, { Component, Suspense, useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Message from './views/pages/postMessage/postMessage'
import FileUpload from './views/pages/fileUpload/fileUpload'

// interface resultMessage {
//   message: string,
// }
export default function App() {
  const [resultList, setResultList] = useState<any>([{
    message: '请求结果：sucess ---' + new Date().getTime()
  }]);
  return (
    <div>
      <Message history={resultList} changeHistory={setResultList}></Message>
      <FileUpload history={resultList} changeHistory={setResultList}></FileUpload>
    </div>
  )
}