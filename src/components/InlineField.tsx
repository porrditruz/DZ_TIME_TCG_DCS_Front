/*
  InlineField Component
  Create Date: 04/04/2025
  Updated Date: 08/04/2025
  Create By @porrditruz (Ditruz.co.ltd)
*/

'use client'
import { Button, TextField } from '@mui/material'
import { Check, X } from 'lucide-react'

export default function InlineField(props: any) {
  return (
    <div className='flex flex-row'>
      <div className='input m-2 justify-items-center'>
        <TextField
          type='text'
          placeholder={props.placeholder && props.placeholder} // props.placeholder = ข้อความชั่วคราวที่อยู่ในช่องกรอกข้อมูล มีลักษณะเป็นตัวอักษรสีเทา
          value={props.value && props.value} //props.value = ข้อมูลที่อยู่ในช่องกรอก
        />
      </div>
      <div className='flex items-center'>
        {/* props.btnColorTrue = สีของปุ่มยืนยันแก้ไข */}
        <Button variant='text' color={props.btnColorTrue && props.btnColorTrue}>
          <Check color={props.colorTrue && props.colorTrue} /> {/* props.colorTrue = สีของสัญลักษณ์ถูก */}
        </Button>
      </div>
      <div className='flex items-center'>
        <Button variant='text' color='error'>
          {/* props.colorFalse = สีของสัญลักษณ์ผิด */}
          <X color={props.colorFalse && props.colorFalse} />
        </Button>
      </div>
    </div>
  )
}
