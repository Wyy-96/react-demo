import React, { Component, useState } from 'react'
import { UploadOutlined } from '@ant-design/icons'
import { Upload, message, Divider, Button } from 'antd'

export default function FileUpload({ history, changeHistory }: { history: any, changeHistory: any }) {
  const props = {
    name: 'file',
    action: 'wyy/abroadLeave/fileUpload',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info:any) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`)
        changeHistory(`请求结果：sucess ---${new Date().getTime()}`)
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
        changeHistory(`请求结果：failed ---${new Date().getTime()}`)
      }
    },
  }
  return (
    <div>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>上传文件</Button>
      </Upload>
      <Divider />
    </div>
  )
}
