import { Box, Checkbox, FormControlLabel, FormHelperText } from '@mui/material';
import { Controller } from 'react-hook-form';
import { CheckboxFormFieldProps, FormValues } from '../ComposableFormTypes';
import { useMemo } from 'react';
import { FieldError, UseFormRegister, Control } from 'react-hook-form';

export interface CheckboxFieldRendererProps<T extends string = string> {
  field: Omit<CheckboxFormFieldProps, 'name'> & { name: T },
  error?: FieldError,
  register: UseFormRegister<FormValues>,
  control: Control<FormValues>
}

const CheckboxField = <T extends string = string>({ 
  field, 
  error, 
  control 
}: CheckboxFieldRendererProps<T>) => {

  const errorMessage = useMemo(
    () => {
      const em = error && (field.validationMessage ?? `${field.label} ${error?.message || error?.type}`)
      return `${em??''}`
    }, [field.label, field.validationMessage, error]
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
      <Controller
        name={field.name}
        control={control}
        rules={field.validator}
        render={({ field: controllerField }) => (
          <>
            <FormControlLabel
              control={
                <Checkbox
                  {...controllerField}
                  checked={!!controllerField.value}
                  onChange={(e) => {
                    controllerField.onChange(e.target.checked);
                    field.onChange?.(e);
                  }}
                  disabled={field.disabled}
                  color={field.color || 'primary'}
                  size={field.size}
                  sx={field.sx}
                />
              }
              label={field.label}
              disabled={field.disabled}
              sx={{ 
                flex: '1 1 0',
                ...(!!error && { color: 'error.main' }),
              }}
            />
            {error && (
              <FormHelperText error={true}>
                {errorMessage}
              </FormHelperText>
            )}
          </>
        )}
      />
    </Box>
  );
};

export default CheckboxField;