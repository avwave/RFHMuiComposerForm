import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import { FieldError, UseFormRegister } from 'react-hook-form';
import { FormValues, TextLikeFormFieldProps } from '../ComposableFormTypes';
import { useMemo, useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export interface TextFieldRendererProps<T extends string = string> {
  field: Omit<TextLikeFormFieldProps, 'name' | 'margin'> & { name: T },
  error?: FieldError,
  register: UseFormRegister<FormValues>
}

const TextFormField = <T extends string = string>({ field, error, register }: TextFieldRendererProps<T>) => {

  const errorMessage = useMemo(
    () => {
      const em =  error && (field.validationMessage ?? `${field.label} ${error?.message || error?.type}`)
      return `${em??''}`
    }, [field.label, field.validationMessage, error]
  );

  const [showPasswordHint, setShowPasswordHint] = useState(false);
  const passwordAdornments = useMemo(
    () => {
      if (field.type === 'password') {
        return {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPasswordHint(!showPasswordHint)}
                edge="end"
              >
                {showPasswordHint ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
        }
      }
      return {}
    }, [field.type, showPasswordHint]
  );
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: field.inline ? 'row' : 'column',
        alignItems: !field.inline ? 'flex-start' : 'center',
        gap: 1,
      }}

    >
      {
        field.inline &&
        <Box
          sx={{
            flex: '1 1 0'
          }}
        >{field.label} {field.validator.required && '*'}</Box>
      }

      <TextField
        sx={{
          flex: '1 1 75%'
        }}
        {...field}
        {...register(field.name, field.validator)}
        error={!!error}
        helperText={errorMessage}
        fullWidth
        InputProps={passwordAdornments}
        type={showPasswordHint ? 'text' : field.type}
        label={!field.inline ? `${field.label} ${field.validator.required ? '*' : ''}` : ''}
      />
    </Box>
  )


}
export default TextFormField