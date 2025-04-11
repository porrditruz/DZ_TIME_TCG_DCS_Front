'use client'

import Typography from '@mui/material/Typography'
import Link from 'next/link'
import * as React from 'react'

type TBreadCrumbProps = {
  pathname: string //ชื่อพาธ
  homeElement: React.ReactNode //ลิงค์แรก
  containerClasses?: string
  listClasses?: string
  activeClasses?: string
  capitalizeLinks?: boolean
}

const NextBreadcrumb = ({
  pathname,
  homeElement,
  containerClasses,
  listClasses,
  activeClasses,
  capitalizeLinks
}: TBreadCrumbProps) => {
  const pathNames = pathname.split('/').filter(path => path)

  return (
    <div>
      <ul className={(containerClasses = 'flex py-5 list-none')}>
        <li className={(listClasses = 'font-bold fontSize-small')}>
          <Link href={'/'}>{homeElement}</Link>
        </li>
        {pathNames.length > 0 && <i className='ri-arrow-right-s-line' />}
        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join('/')}`
          let isLast = index === pathNames.length - 1
          let itemClasses = isLast ? `${listClasses} ${activeClasses}` : listClasses
          let itemLink = capitalizeLinks ? link[0].toUpperCase() + link.slice(1) : link
          return (
            <React.Fragment key={index}>
              <li className={itemClasses}>
                {isLast ? (
                  <Typography className={(activeClasses = 'text-primary font-bold')}>{itemLink}</Typography>
                ) : (
                  <Link href={href}>{itemLink}</Link>
                )}
              </li>
              {!isLast && <i className='ri-arrow-right-s-line' />}
            </React.Fragment>
          )
        })}
      </ul>
    </div>
  )
}

export default NextBreadcrumb
