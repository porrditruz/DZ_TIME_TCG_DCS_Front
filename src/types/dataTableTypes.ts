/*
 ** DataTable Properties
 ** Create Date: 09/04/2025
 ** Updated Date: 09/04/2025
 ** Create By @porrditruz (Ditruz.co.ltd)
 */

import { GridColDef } from '@mui/x-data-grid'

export type DataTableProps = {
  /**
   * @default []
   * @description ข้อมูลทั้งหมดที่จะแสดงในตาราง
   * @type {unknown[]}
   * @static สามารถใช้งานได้
   */
  modelValue?: unknown[]

  /**
   * @default []
   * @description บอกว่าตารางมีคอลัมน์อะไรบ้าง เช่น field ชื่ออะไร, header ชื่ออะไร, style ฯลฯ
   * @type {GridColDef[]}
   * @static สามารถใช้งานได้
   */
  columns?: GridColDef[]

  /**
   * @default []
   * @description ใช้กรองข้อมูล เช่น filter คำในคอลัมน์ต่าง ๆ
   * @type {Array<{ field: string, value: string, matchMode: string }>}
   * @static กำลังทดสอบ
   */
  filters?: [String, Array<unknown>, Object]

  /**
   * @default false
   * @description เปิด/ปิดโหมดแก้ไขข้อมูลในเซลล์
   * @type {boolean}
   * @static กำลังทดสอบ
   */
  editMode?: boolean

  /**
   * @default false
   * @description แสดงเส้นแบ่งระหว่าง cell หรือไม่
   * @type {boolean}
   * @static กำลังทดสอบ
   */
  showGridlines?: boolean

  /**
   * @default true
   * @description กำหนดว่าจะ sort ตารางตาม field อะไรเริ่มต้น
   * @type {boolean}
   * @static กำลังทดสอบ
   */
  sortField?: boolean

  /**
   * @default true
   * @description กำหนดลำดับการเรียงข้อมูล
   * @type {boolean}
   * @static กำลังทดสอบ
   */
  sortOrder?: boolean

  /**
   * @default false
   * @description เปิด/ปิดให้ user ลากแถวเพื่อเรียงลำดับใหม่ได้
   * @type {boolean}
   * @static กำลังทดสอบ
   */
  rowReorder?: boolean

  /**
   * @default false
   * @description แสดง column “ลำดับที่” หรือไม่ (index ของ row)
   * @type {boolean}
   * @static กำลังทดสอบ
   */
  headerNo?: boolean

  /**
   * @default false
   * @description เปิดให้ตารางเลื่อนแนวตั้งได้
   * @type {boolean}
   * @static กำลังทดสอบ
   * */
  scrollable?: boolean

  /**
   * @default undefined
   * @description ความสูงของ table scroll ถ้าเปิด scrollable
   * @type {string}
   * @static กำลังทดสอบ
   */
  scrollHeight?: string

  /**
   * @default undefined
   * @description สลับสีแถวในตาราง (แถวเว้นแถว)
   * @type {string}
   * @static กำลังทดสอบ
   */
  stripedRows?: boolean

  /**
   * @default []
   * @description รายการ row ที่ถูกเลือกอยู่ (เช่น Checkbox)
   * @type {unknown[]}
   * @static กำลังทดสอบ
   */
  selections?: unknown[]

  /**
   * @default undefined
   * @description จำนวนข้อมูลทั้งหมด ใช้ในการคำนวณหน้าของ Paginator
   * @type {number}
   * @static กำลังทดสอบ
   */
  totalRecords?: number

  /**
   * @default undefined
   * @description จำนวนข้อมูลที่แสดงต่อหน้า
   * @type {number}
   * @static กำลังทดสอบ
   */
  rowsPaginator?: number

  /**
   * @default false
   * @description เปิด/ปิดการใช้ Pagination (แบ่งหน้า)
   * @type {boolean}
   * @static กำลังทดสอบ
   */
  paginator?: true | undefined

  /**
   * @default undefined
   * @description ฟังก์ชันที่ถูกเรียกเมื่อเลือก row ใหม่
   * @type {(event: unknown[]) => void}
   * @static กำลังทดสอบ
   */
  onSelectionChange?: (event: unknown[]) => void

  /**
   * @default undefined
   * @description ฟังก์ชันที่ถูกเรียกเมื่อมีการ reorder แถวใหม่ (ลาก row ย้ายตำแหน่ง)
   * @type {(event: unknown[]) => void}
   * @static กำลังทดสอบ
   */
  onRowReorder?: (event: unknown[]) => void

  /**
   * @default undefined
   * @description ฟังก์ชันที่ถูกเรียกเมื่อเปลี่ยนหน้าใน paginator
   * @type {(event: unknown[]) => void}
   * @static กำลังทดสอบ
   */
  onPage?: (event: unknown[]) => void
}
