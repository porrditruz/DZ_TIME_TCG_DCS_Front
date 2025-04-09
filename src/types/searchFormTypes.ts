/*
 ** SearchForm Properties
 ** Create Date: 09/04/2025
 ** Updated Date: 09/04/2025
 ** Create By @porrditruz (Ditruz.co.ltd)
 */

export type SearchFormProps = {
  /**
   * @default []
   * @description ข้อมูลที่ถูก bind อยู่ เช่นค่าฟิลด์
   * @type {unknown[]}
   * @static กำลังทดสอบ
   */
  modelValue?: unknown[]

  /**
   * @default []
   * @description ฟิลด์ที่ต้องการแสดง (เป็น array ของ object)
   * @type {Field[]}
   * @static สามารถใช้งานได้
   */
  fields?: Field[]

  /**
   * @default { xl: 1, lg: 1, md: 2, sm: 12, cols: 12 }
   * @description ใช้ปรับ layout ของปุ่มค้นหา
   * @type {unknown[]}
   * @static กำลังทดสอบ
   */
  buttonCols?: unknown[]

  /**
   * @default ''
   * @description ใช้ปรับ layout ของฟิลด์ค้นหา
   * @type {string}
   * @static กำลังทดสอบ
   */
  classAttr?: string

  /**
   * @default true
   * @description ใช้แสดง header หรือไม่
   * @type {boolean}
   * @static สามารถใช้งานได้
   */
  showHeader?: true | undefined

  /**
   * @default true
   * @description ใช้แสดง header หรือไม่
   * @type {boolean}
   * @static กำลังทดสอบ
   */
  showArrow?: true | undefined

  /**
   * @default true
   * @description callback เวลาข้อมูลใน form เปลี่ยน
   * @type {boolean}
   * @static กำลังทดสอบ
   */
  onModelChange?: (event: Record<string, unknown>) => void

  /**
   * @default true
   * @description callback เมื่อกดปุ่ม "ค้นหา"
   * @type {boolean}
   * @static กำลังทดสอบ
   */
  onSubmit?: (event: unknown[]) => void

  /**
   * @default true
   * @description callback เมื่อคลิกปุ่มรายงาน
   * @type {boolean}
   * @static กำลังทดสอบ
   */
  onReportButtonClick?: (event: unknown[]) => void
}

export type Field = {
  /**
   * @default ''
   * @description ชื่อของฟิลด์
   * @type {string}
   * @static สามารถใช้งานได้
   */
  name: string

  /**
   * @default 'text'
   * @description ประเภทของฟิลด์ เช่น text, number, date, select, checkbox
   * @type {string}
   * @static สามารถใช้งานได้
   */
  type: string

  /**
   * @default ''
   * @description ป้ายข้อความที่แสดงอยู่บนฟิลด์
   * @type {string}
   * @static กำลังทดสอบ
   */
  label?: string

  /**
   * @default ''
   * @description ป้ายข้อความที่อยู่ในฟิลด์
   * @type {string}
   * @static กำลังทดสอบ
   */
  placeholder?: string

  /**
   * @default ''
   * @description กำหนดค่าเริ่มต้นของฟิลด์
   * @type {string}
   * @static กำลังทดสอบ
   */
  default?: unknown

  /**
   * @default ''
   * @description ???
   * @type {string}
   * @static กำลังพัฒนา ไม่สามารถใช้งานได้
   */
  items?: Array<{ id: number; value: string; label: string; [key: string]: any }>

  /**
   * @default ''
   * @description ???
   * @type {string}
   * @static กำลังพัฒนา ไม่สามารถใช้งานได้
   */
  rules?: Array<(value: any) => string | undefined>

  /**
   * @default ''
   * @description ???
   * @type {string}
   * @static กำลังพัฒนา ไม่สามารถใช้งานได้
   */
  title?: string

  /**
   * @default ''
   * @description ???
   * @type {string}
   * @static กำลังพัฒนา ไม่สามารถใช้งานได้
   */
  value?: string
}
