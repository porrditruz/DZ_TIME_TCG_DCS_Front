/*
  SearchForm Component
  Create Date: 04/04/2025
  Updated Date: 07/04/2025
  Create By Mr.Porramet Obthom (Ditruz.co.ltd)
*/
'use client'
import React, { useState, useEffect } from 'react'
import {
  TextField,
  Autocomplete,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  Collapse,
  Typography,
  Card,
  CardContent,
  IconButton,
  Grid,
  Grid2
} from '@mui/material'
import { ExpandLess, ExpandMore, Note } from '@mui/icons-material'
import dayjs from 'dayjs'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField'

// type

/*
  modelValue: ข้อมูลที่ถูก bind อยู่ เช่นค่าฟิลด์
  fields: ฟิลด์ที่ต้องการแสดง (เป็น array ของ object)
  buttonCols, classAttr: ใช้ปรับ layout
  onModelChange: callback เวลาข้อมูลใน form เปลี่ยน
  onSubmit: callback เมื่อกดปุ่ม "ค้นหา"
  onReportButtonClick: callback เมื่อคลิกปุ่มรายงาน
*/

type SearchFormProps = {
  modelValue?: unknown[]
  fields?: Field[]
  buttonCols?: unknown[]
  classAttr?: string
  onModelChange?: (event: Record<string, unknown>) => void
  onSubmit?: (event: unknown[]) => void
  onReportButtonClick?: (event: unknown[]) => void
}

type Field = {
  name: string
  type: string
  label?: string
  placeholder?: string
  default?: unknown
  items?: Array<{ id: string; value: string; label: string; [key: string]: any }>
  rules?: Array<(value: any) => string | undefined>
  title?: string
  value?: string
}

const DynamicSearchForm: React.FC<SearchFormProps> = ({
  modelValue = {},
  fields = [],
  buttonCols = { xl: 1, lg: 1, md: 2, sm: 12, cols: 12 },
  classAttr = '',
  onModelChange,
  onSubmit,
  onReportButtonClick
}) => {
  const [show, setShow]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(true)
  const [values, setValues]: [Record<string, unknown>, React.Dispatch<React.SetStateAction<Record<string, unknown>>>] =
    useState<Record<string, unknown>>({})

  // Init default values
  useEffect(() => {
    const initial: Record<string, any> = {}
    const allFields = fields.flat() as Array<{ name: string; type: string; default?: any; items?: any[] }>

    for (const field of allFields) {
      switch (field.type) {
        case 'number':
          initial[field.name] = field.default || 0
          break
        case 'date':
          initial[field.name] = field.default || dayjs().format('YYYY-MM-DD')
          break
        case 'dateRange':
          initial[field.name] = field.default || [dayjs(), dayjs()]
          break
        case 'select':
          initial[field.name] = field.default || (field.items?.length ? field.items[0].id : '')
          break
        default:
          initial[field.name] = field.default || ''
      }
    }

    setValues({ ...(modelValue as Record<string, unknown>), ...initial })
  }, [modelValue, fields])

  useEffect(() => {
    onModelChange && onModelChange(values)
  }, [values])

  const handleChange: (name: string | number | symbol, value: unknown) => void = (
    name: string | number | symbol,
    value: unknown
  ) => {
    setValues(prev => ({ ...prev, [name]: value }))
  }

  const getErrorMessages: (field: Field) => string[] = (field: Field): string[] => {
    if (field.rules) {
      const value = values[field.name]
      return field.rules.map(rule => rule(value)).filter((msg): msg is string => typeof msg === 'string')
    }
    return []
  }

  const renderField = (field: Field, index: number): JSX.Element | null => {
    switch (field.type) {
      case 'text':
        return (
          <TextField
            fullWidth
            key={index}
            label={field.label}
            placeholder={field.placeholder}
            value={values[field.name] as string}
            onChange={e => handleChange(field.name, e.target.value)}
            error={!!getErrorMessages(field).length}
            helperText={getErrorMessages(field).join(', ')}
            className='my-2'
          />
        )
      case 'textNumber':
        return (
          <TextField
            fullWidth
            key={index}
            label={field.label}
            placeholder={field.placeholder}
            value={values[field.name] as string}
            onChange={e => handleChange(field.name, e.target.value.replace(/\D/g, ''))}
            error={!!getErrorMessages(field).length}
            helperText={getErrorMessages(field).join(', ')}
            className='my-2'
          />
        )
      case 'radio':
        return (
          <div key={index} className='my-2'>
            <Typography>{field.label}</Typography>
            <RadioGroup
              row
              value={values[field.name] as string}
              onChange={e => handleChange(field.name, e.target.value)}
            >
              {field.items?.map((opt, idx) => (
                <FormControlLabel key={idx} value={opt.value} control={<Radio color='primary' />} label={opt.label} />
              ))}
            </RadioGroup>
          </div>
        )
      case 'select':
        return (
          <Autocomplete
            key={index}
            options={field.items || []}
            getOptionLabel={(opt: Record<string, any>) => opt[field.title || ''] || ''}
            isOptionEqualToValue={(opt: Record<string, any>, val: Record<string, any>) =>
              opt[field.value || ''] === val[field.value || '']
            }
            onChange={(e, newVal) => handleChange(field.name, newVal ? newVal[field.value || ''] : '')}
            renderInput={params => (
              <TextField
                {...params}
                label={field.label}
                placeholder={field.placeholder}
                error={!!getErrorMessages(field).length}
                helperText={getErrorMessages(field).join(', ')}
                className='my-2'
              />
            )}
          />
        )
      case 'reportButton':
        return (
          <Button
            key={index}
            variant='outlined'
            startIcon={<Note />}
            onClick={() => onReportButtonClick?.([field.name])}
            className='my-2'
          >
            {field.label}
          </Button>
        )
      case 'dateRange':
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['SingleInputDateRangeField']}>
              <DateRangePicker slots={{ field: SingleInputDateRangeField }} />
            </DemoContainer>
          </LocalizationProvider>
        )
      default:
        return null
    }
  }

  return (
    <Card className={`my-4 ${classAttr}`}>
      <div className='flex justify-between items-center cursor-pointer p-4' onClick={() => setShow(!show)}>
        <Typography variant='h3'>ค้นหาข้อมูล</Typography>
        <IconButton>{show ? <ExpandLess /> : <ExpandMore />}</IconButton>
      </div>
      <Collapse in={show}>
        <CardContent>
          <Grid container spacing={2}>
            {(fields.flat() as Field[]).map((field, i) => (
              <Grid item xs={12} sm={6} md={6} key={i}>
                {renderField(field, i)}
              </Grid>
            ))}

            {!fields.some((f: Field) => f.type === 'reportButton') && (
              <Grid item xs={12} className='text-center mt-4'>
                <Button variant='contained' onClick={() => onSubmit?.(Object.entries(values))}>
                  ค้นหา
                </Button>
              </Grid>
            )}
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default DynamicSearchForm
