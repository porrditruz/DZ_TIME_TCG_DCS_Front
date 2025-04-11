'use client'
import * as React from 'react'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

export default function AndorToggleButton() {
  const [alignment, setAlignment] = React.useState('/')

  const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setAlignment(newAlignment)
  }

  return (
    <ToggleButtonGroup color='primary' value={alignment} exclusive onChange={handleChange} aria-label='/'>
      <ToggleButton value='1'>AND</ToggleButton>
      <ToggleButton value='2'>OR</ToggleButton>
    </ToggleButtonGroup>
  )
}
