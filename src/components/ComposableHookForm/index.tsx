import { Button, Stack } from "@mui/material";
import { useMemo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ComposableFormProps, FormValues } from "./ComposableFormTypes";
import FieldRenderer from "./FieldRenderer";

export default function ComposableHookForm({
  fields,
  onSubmit,
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

  const { register, handleSubmit, reset, formState, control } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: defaultValues as unknown as FormValues,
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
      <Stack spacing={2} {...gridProps}>
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
            control={control}
          />
        ))}
      </Stack>
      {
        showSubmitButton &&
        <Button
          type="submit"
          disabled={!formState.isValid}
          {...submitButtonProps}
        >
          {submitButtonText}
        </Button>
      }
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
