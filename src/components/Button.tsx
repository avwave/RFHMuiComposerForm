import React from 'react';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';


export const Button = ({ ...rest }: MuiButtonProps) => (
  <MuiButton {...rest}></MuiButton>
);