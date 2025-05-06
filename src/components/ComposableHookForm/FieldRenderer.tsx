import { Box } from '@mui/material';
import { useMemo } from 'react';
import { FieldError, UseFormRegister, Control } from 'react-hook-form';
import { CheckboxFormFieldProps, ComposableFormFieldProps, FormValues, TextLikeFormFieldProps } from './ComposableFormTypes';
import TextFormField from './Fields/TextFormField';
import CheckboxField from './Fields/CheckboxField';

type WithName<T> = Omit<T, 'name'> & { name: string };

export interface FieldRendererProps<T extends string = string> {
  field: Omit<ComposableFormFieldProps, 'name'> & { name: T },
  error?: FieldError,
  register: UseFormRegister<FormValues>,
  control: Control<FormValues>
}

function isTextLikeField(
  field: WithName<ComposableFormFieldProps>
): field is WithName<TextLikeFormFieldProps> {
  return [
    'textfield',
    'text',
    'email',
    'password',
    'url',
    'textarea'
  ].includes(field.type);
}

function isNumberLikeField(
  field: WithName<ComposableFormFieldProps>
): field is WithName<TextLikeFormFieldProps> {
  return [
    'number',
  ].includes(field.type);
}

function isCheckboxField(
  field: WithName<ComposableFormFieldProps>
): field is WithName<CheckboxFormFieldProps> {
  return field.type === 'checkbox';
}


const FieldRenderer = <T extends string = string>({
  field,
  error,
  register,
  control
}: FieldRendererProps<T>) => {

  const renderField = useMemo(
    () => {
      switch (field.type) {
        case "text":
        case "textfield":
        case "email":
        case "password":
        case "url":
        case "number":
        case "textarea": {
          const typedField = field as WithName<ComposableFormFieldProps>;
          if (isTextLikeField(typedField) || isNumberLikeField(typedField)) {
            return (
              <TextFormField
                field={typedField}
                register={register}
                error={error}
              />
            );
          }
          return null;
        }
        case "checkbox": {
          const typedField = field as WithName<ComposableFormFieldProps>;
          if (isCheckboxField(typedField)) {
            return (
              <CheckboxField
                field={typedField}
                register={register}
                control={control}
                error={error}
              />
            );
          }
          return null;
        }
        default:
          return null;
      }
    }, [error, field, register, control]
  );
  return (
    <Box
      sx={{

      }}
    >
      {renderField}
    </Box>
  )
}

export default FieldRenderer
