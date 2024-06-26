import { TextFieldProps } from '@mui/material/TextField';

export type MuiTextFieldType = {
  sx?: object;
  type?: string;
  message?: string;
  validate?: { onChange: (event: any) => void };
} & TextFieldProps;
