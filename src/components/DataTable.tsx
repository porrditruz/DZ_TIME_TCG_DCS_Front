/*
  DataTable Component
  Create Date: 04/04/2025
  Updated Date: 07/04/2025
  Create By Mr.Porramet Obthom (Ditruz.co.ltd)
*/

'use client'
import { Pagination, Paper, TablePagination } from '@mui/material'
import { DataGrid, GridColDef, GridPaginationModel } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'

// type

/*
  modelValue: data ทั้งหมดที่จะแสดงในตาราง
  columns: บอกว่าตารางมีคอลัมน์อะไรบ้าง เช่น field ชื่ออะไร, header ชื่ออะไร, style ฯลฯ
  filters: ใช้กรองข้อมูล เช่น filter คำในคอลัมน์ต่าง ๆ
  paginator: เปิด/ปิดการใช้ Pagination (แบ่งหน้า)
  editMode: เปิด/ปิดโหมดแก้ไขข้อมูลในเซลล์
  showGridlines: แสดงเส้นแบ่งระหว่าง cell หรือไม่
  sortField: กำหนดว่าจะ sort ตารางตาม field อะไรเริ่มต้น
  sortOrder: กำหนดลำดับการเรียงข้อมูล
  rowReorder: เปิด/ปิดให้ user ลากแถวเพื่อเรียงลำดับใหม่ได้
  headerNo: แสดง column “ลำดับที่” หรือไม่ (index ของ row)
  scrollable: เปิดให้ตารางเลื่อนแนวตั้งได้
  scrollHeight: ความสูงของ table scroll ถ้าเปิด scrollable
  stripedRows: สลับสีแถวในตาราง (แถวเว้นแถว)
  selections: รายการ row ที่ถูกเลือกอยู่ (เช่น Checkbox)
  totalRecords: จำนวนข้อมูลทั้งหมด ใช้ในการคำนวณหน้าของ Paginator
  rowsPaginator: กำหนดจำนวน row ต่อหน้า (default: 50)
  onSelectionChange: ฟังก์ชันที่ถูกเรียกเมื่อเลือก row ใหม่
  onRowReorder: ฟังก์ชันที่ถูกเรียกเมื่อมีการ reorder แถวใหม่ (ลาก row ย้ายตำแหน่ง)
  onPage: ฟังก์ชันที่ถูกเรียกเมื่อเปลี่ยนหน้าใน paginator
*/

type DataTableProps = {
  modelValue?: unknown[]
  columns?: GridColDef[]
  filters?: [String, Array<unknown>, Object]
  editMode?: boolean
  showGridlines?: boolean
  sortField?: boolean
  sortOrder?: boolean
  rowReorder?: boolean
  headerNo?: boolean
  scrollable?: boolean
  scrollHeight?: string
  stripedRows?: boolean
  selections?: unknown[]
  totalRecords?: number
  rowsPaginator?: number
  paginator?: true | undefined
  onSelectionChange?: (event: unknown[]) => void
  onRowReorder?: (event: unknown[]) => void
  onPage?: (event: unknown[]) => void
}

const DataTableComponent: React.FC<DataTableProps> = ({
  modelValue = [],
  columns = [
    {
      field: 'id',
      headerName: 'การจัดการ',
      flex: 1,
      sortable: false,
      renderCell: params => <span>{params.value}</span>,
      headerClassName: 'header-action'
    },
    {
      field: 'firstName',
      headerName: 'ลำดับที่',
      flex: 1,
      renderCell: params => <span>{params.value}</span>
    },
    {
      field: 'lastName',
      headerName: 'CIF',
      flex: 1,
      renderCell: params => <span>{params.value}</span>
    },
    {
      field: 'age',
      headerName: 'เลข LG',
      type: 'number',
      flex: 1,
      renderCell: params => <span>{params.value}</span>
    },
    {
      field: 'fullName',
      headerName: 'รหัสลูกหนี้',
      description: 'นี่คือคอลัมน์ของรหัสลูกหนี้.',
      sortable: false,
      flex: 1,
      valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
      renderCell: params => <span>{params.value}</span>
    }
  ],
  paginator = false,
  editMode = false,
  showGridlines = false,
  sortField = true,
  sortOrder = true,
  rowReorder = false,
  headerNo = true,
  scrollable = true,
  scrollHeight = '600px',
  stripedRows = true,
  // selections = [],
  // filters
  totalRecords = 50,
  rowsPaginator = 50,
  onSelectionChange,
  onRowReorder,
  onPage
}) => {
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: 'contains' }
  })

  const [selections, setSelections] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [currentRowPerPage, setCurrentRowPerPage] = useState(rowsPaginator)
  const [total, setTotal] = useState(totalRecords)
  const [paginationModel, setPaginationModel]: [
    GridPaginationModel,
    React.Dispatch<React.SetStateAction<GridPaginationModel>>
  ] = useState({ page: 0, pageSize: 50 })

  // useEffect(() => {
  //   if (typeof initialFilters === 'string') {
  //     setFilters({
  //       global: { value: initialFilters, matchMode: 'contains' }
  //     })
  //   } else {
  //     setFilters(initialFilters || {})
  //   }
  // }, [initialFilters])

  // useEffect(() => {
  //   setFiltersValue(props.filters); // ถ้า props.filters เปลี่ยนแปลง
  // }, [props.filters]);

  useEffect(() => {
    if (selections?.length > 0) {
      setSelections(selections)
    }
  }, [selections])

  useEffect(() => {
    if (totalRecords !== undefined) {
      setTotal(totalRecords)
    } else {
      setTotal(0)
      setCurrentPage(0)
      setCurrentRowPerPage(0)
    }
  }, [totalRecords])

  const onCellEditComplete = (e: { preventDefault?: any; rowData?: any; newValue?: string; field?: any }) => {
    let { rowData, newValue, field } = e
    if (newValue && newValue.trim().length > 0) {
      rowData[field] = newValue
    } else {
      e.preventDefault()
    }
  }

  const rawIndex = (index: number) => {
    return currentPage === 0 ? index : currentPage * currentRowPerPage + index
  }

  const handlePageChange = (event: any) => {
    setCurrentPage(event.page)
    setCurrentRowPerPage(event.rows)
    onPage?.(event)
  }

  const handleRowsPerPageChange = (e: { target: { value: string } }) => {
    const newPageSize = parseInt(e.target.value, 10)
    setCurrentRowPerPage(newPageSize)
    setPaginationModel({
      page: 0, // รีเซ็ตหน้าเป็นหน้าแรก
      pageSize: newPageSize // เปลี่ยนแปลงจำนวนแถวต่อหน้า
    })
  }

  const handleRowReorder = (e: unknown[]) => {
    onRowReorder?.(e)
  }

  return (
    <>
      <Paper sx={{ height: '100%', width: '100%' }}>
        <DataGrid
          rows={modelValue}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel
            }
          }}
          checkboxSelection
          sx={{
            border: 0
          }}
          hideFooterPagination
          hideFooter
          localeText={{
            // Toolbar
            toolbarDensity: 'ความหนาแน่น',
            toolbarColumns: 'คอลัมน์',
            toolbarFilters: 'ตัวกรอง',
            // Filter Panel
            filterPanelAddFilter: 'เพิ่มตัวกรอง',
            filterPanelDeleteIconLabel: 'ลบ',
            // Column menu
            columnMenuShowColumns: 'แสดงคอลัมน์',
            columnMenuFilter: 'ตัวกรอง',
            columnMenuHideColumn: 'ซ่อนคอลัมน์',
            columnMenuUnsort: 'ยกเลิกการเรียงลำดับ',
            columnMenuSortAsc: 'เรียงลำดับจากน้อยไปมาก',
            columnMenuSortDesc: 'เรียงลำดับจากมากไปน้อย',
            // No rows
            noRowsLabel: 'ไม่มีข้อมูล'
          }}
          onPaginationModelChange={handlePageChange}
        />
        {paginator && (
          <TablePagination
            component='div'
            count={modelValue.length}
            page={currentPage}
            onPageChange={(e, newPage) => setCurrentPage(newPage)}
            rowsPerPage={currentRowPerPage}
            onRowsPerPageChange={handleRowsPerPageChange}
            labelDisplayedRows={({ from, to, count }) => `รายการ ${from}-${to} ถึง ${count}`}
            rowsPerPageOptions={[50, 100, 200]}
            labelRowsPerPage='จำนวนรายการ'
          />
        )}
      </Paper>
    </>
  )
}

export default DataTableComponent
