"use client";
import * as React from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function toTitleCase(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function DynamicBreadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x); 

  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" component={RouterLink} to="/">
          Home
        </Link>

        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return isLast ? (
            <Typography key={to} color="text.primary">
              {toTitleCase(decodeURIComponent(value))}
            </Typography>
          ) : (
            <Link
              key={to}
              underline="hover"
              color="inherit"
              component={RouterLink}
              to={to}
            >
              {toTitleCase(decodeURIComponent(value))}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
}
