import { FieldError, UseFormRegister } from 'react-hook-form';
import { ComposableFormFieldProps, FormValues, TextLikeFormFieldProps } from './ComposableFormTypes';
import TextFormField from './Fields/TextFormField';
import { useMemo } from 'react';
import { Box } from '@mui/material';

type WithName<T> = Omit<T, 'name'> & { name: string };

export interface FieldRendererProps<T extends string = string> {
  field: Omit<ComposableFormFieldProps, 'name'> & { name: T },
  error?: FieldError,
  register: UseFormRegister<FormValues>
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


const FieldRenderer = <T extends string = string>({
  field,
  error,
  register
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
        default:
          return null;
      }
    }, [error, field, register]
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
