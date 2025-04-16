import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Breadcrumb() {
    const breadcrumbPath = [
        { path: "/home", 
        name: "หน้าแรก" },
        { path: "/about", 
        name: "เกี่ยวกับ" },
        { path: "/WaitApproval", 
        name: <Typography sx={{ color: 'text.primary' }}>รออนุมัติ</Typography> }
        ] 

    return (
    <Breadcrumbs aria-label="breadcrumb" separator={<i className="ri-arrow-right-s-line" />}>
    {breadcrumbPath.map((breadcrumb, index) => (
    breadcrumb.path ? (
      <Link key={index} color="inherit" href={breadcrumb.path}>
        {breadcrumb.name } 
      </Link>
    ) : (
      <Typography key={index} sx={{ color: 'text.primary' }}>
        {breadcrumb.name}
      </Typography>
    )
        ))}
    </Breadcrumbs>
    );
}
