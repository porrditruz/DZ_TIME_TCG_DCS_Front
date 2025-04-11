import DataTableComponent from '@/components/DataTable'
import { Breadcrumbs, CardContent, Grid2 } from '@mui/material'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import * as React from 'react'
// import Search from '@components/SearchForm'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'


export default function Page() {
  const breadcrumbs = [
    <Link underline='hover' key='1' color='inherit' href='/home'>
      <h4> หน้าแรก </h4>
    </Link>,
    <Link underline='hover' key='2' color='inherit' href='/about' className='h3'>
      <h4> ระบบปรับปรุงโครงสร้างหนี้ </h4>
    </Link>,
    <h4 key='3' style={{color: '#182f5f'}}>
      รออนุมัติปรับปรุงโครงสร้างหนี้
    </h4>
  ]

  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize='small' />} aria-label='breadcrumb' className='my-10'>
        {breadcrumbs}
      </Breadcrumbs>

      <Card className='mb-3'>
        <h3 className='p-4'>รออนุมัติปรับปรุงโครงสร้างหนี้</h3>
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

      {/* <Search /> */}
    </Box>
    </div>
  )
}
