'use client'

import { Grid2 } from '@mui/material'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import * as React from 'react'

export default function Page() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Card className='mb-3'>
        <h2 className='p-4'>รออนุมัติปรับปรุงโครงสร้างหนี้</h2>
      </Card>
      <Card>
        <Grid2 container size={2}>
          <Grid2 size={4} className='p-5'>
            <Card style={{ backgroundColor: '#bf83ff' }}>
              <div className='text-center py-8'>
                <h2 className='pb-3 text-white'>10</h2>
                <h2 className='text-white'>งานทั้งหมด</h2>
              </div>
            </Card>
          </Grid2>
          <Grid2 size={4} className='p-5'>
            <Card style={{ backgroundColor: '#ff947a' }}>
              <div className='text-center py-8'>
                <h2 className='pb-3 text-white'>10</h2>
                <h2 className='text-white'>พิจารณาตรวจสอบ</h2>
              </div>
            </Card>
          </Grid2>
          <Grid2 size={4} className='p-5'>
            <Card style={{ backgroundColor: '#fa5a7d' }}>
              <div className='text-center py-8'>
                <h2 className='pb-3 text-white'>10</h2>
                <h2 className='text-white'>อนุมัติ</h2>
              </div>
            </Card>
          </Grid2>
        </Grid2>
      </Card>
      {/*
        <DataTableComponent>

        </DataTableComponent> */}
    </Box>
  )
}
