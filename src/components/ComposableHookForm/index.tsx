import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import { ComposableFormProps } from "./ComposableFormTypes";
import FieldRenderer from "./FieldRenderer";
import React, { useMemo } from "react";
import { Button, Grid, Stack } from "@mui/material";

export default function ComposableHookForm({
  fields,
  onSubmit,
  onError,
  defaultValues,
  submitButtonText,
  resetButtonText,
  showResetButton,
  showSubmitButton,
  submitButtonProps,
  resetButtonProps,
  variant,
  inline,
  gridProps
}: ComposableFormProps) {

  type FieldNames = (typeof fields)[number]['name']
  type FormValues = {
    [key in FieldNames]: string
  }

  const { register, handleSubmit, reset, formState } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues,
    criteriaMode: 'all'
  })

  const errors = useMemo(
    () => {
      console.log(formState.errors)
      return formState.errors
    }, [formState]
  );

  const submitHandler: SubmitHandler<FormValues> = (data) => {
    onSubmit(data)
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <Stack container spacing={2} {...gridProps}>
        {fields.map((field) => (
          <FieldRenderer
            key={field.name}
            field={{
              inline,
              variant,
              ...field,
            }}
            error={errors[field.name]}
            register={register}
          />
        ))}
      </Stack>
      <Button
        type="submit"
        disabled={!formState.isValid}
        {...submitButtonProps}
      >
        {submitButtonText}
      </Button>
      {
        showResetButton &&
        <Button
          type="button"
          {...resetButtonProps}
          onClick={() => reset()}
        >
          {resetButtonText}
        </Button>
      }
    </form>
  )

}
