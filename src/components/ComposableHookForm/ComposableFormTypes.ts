import { ButtonProps, FilledInputProps, GridProps, OutlinedInputProps, StandardTextFieldProps } from "@mui/material";
import { FieldErrors, RegisterOptions } from "react-hook-form";

type FormControlType =
  | "textfield"
  | "text"
  | "email"
  | "password"
  | "number"
  | "date"
  | "time"
  | "url"
  | "phone"
  | "file"
  | "hidden"
  | "checkbox"
  | "radio"
  | "single-select"
  | "multi-select"
  | "textarea"
  | "switch"
  | "slider"
  | "rating"

export type SelectOptionType = {
  label: string;
  value: string | number | boolean | object;
  key: string | number;
};

export type FormValues = Record<string, string>;

export type GenericComposableFormFieldProps = {
  name: string;
  type: FormControlType;
  label: string;
  validator: RegisterOptions;
  validationMessage?: string;
  placeholder?: string;
  defaultValue?: string | number | boolean | string[] | number[] | boolean[] | undefined | null;
  inline?: boolean;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
  size?: "small" | "medium";
  color?: "primary" | "secondary";
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  margin?: "none" | "dense" | "normal";
  variant?: "standard" | "outlined" | "filled";
  returnAsString?: boolean;
  className?: string;
  sx?: React.CSSProperties;
  min?: number;
  max?: number;
  step?: number;
  rows?: number;
  maxRows?: number;
  minRows?: number;
  options?: SelectOptionType[];
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  InputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  inputRef?: React.Ref<HTMLInputElement>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  freeSolo?: boolean;
  multiple?: boolean;
  multiline?: boolean;
  autocomplete?: boolean;
  disableFuture?: boolean;
  disablePast?: boolean;
  onFileUploadComplete?: (file: File) => void;
  onFileUploadError?: (error: Error) => void;
  accept?: string;
};

export type FileFormFieldProps = GenericComposableFormFieldProps & {
  type: "file";
  defaultValue?: File;
  accept?: string;
  multiple?: boolean;
  onFileUploadComplete?: (file: File) => void;
  onFileUploadError?: (error: Error) => void;
};

export type TextLikeFormFieldProps = GenericComposableFormFieldProps & {
  type:
  | "textfield"
  | "textarea"
  | "text"
  | "email"
  | "password"
  | "url"
  multiline?: boolean;
  rows?: number;
  maxRows?: number;
  minRows?: number;
  defaultValue?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  InputProps?: Partial<StandardTextFieldProps['InputProps']> |
  Partial<OutlinedInputProps> |
  Partial<FilledInputProps>;
};

export type PhoneFormFieldProps = GenericComposableFormFieldProps & {
  type: "phone";
  defaultValue?: string;
};

export type NumberFormFieldProps = GenericComposableFormFieldProps & {
  type: "number";
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
};

export type SelectFormFieldProps = Omit<GenericComposableFormFieldProps, 'type' | 'defaultValue'> & (
  | {
    type: "single-select";
    options: SelectOptionType[];
    defaultValue?: SelectOptionType;
    freeSolo?: boolean;
    autocomplete?: boolean;
  }
  | {
    type: "multi-select";
    options: SelectOptionType[];
    defaultValue?: SelectOptionType[];
    freeSolo?: boolean;
    autocomplete?: boolean;
  }
);

export type CheckboxFormFieldProps = GenericComposableFormFieldProps & {
  type: "checkbox";
  label?: string;
};

export type RadioFormFieldProps = GenericComposableFormFieldProps & {
  type: "radio";
  options: SelectOptionType[];
};


export type SwitchFormFieldProps = GenericComposableFormFieldProps & {
  type: "switch";
  label?: string;
};

export type DateFormFieldProps = GenericComposableFormFieldProps & {
  type: "date";
  defaultValue?: Date;
  minDate?: Date;
  maxDate?: Date;
  disableFuture?: boolean;
  disablePast?: boolean;
};


export type TimeFormFieldProps = GenericComposableFormFieldProps & {
  type: "time";
  defaultValue?: Date;
  minTime?: Date;
  maxTime?: Date;
  disableFuture?: boolean;
  disablePast?: boolean;
};

export type DateTimeFormFieldProps = GenericComposableFormFieldProps & {
  type: "datetime";
  defaultValue?: Date;
  minDateTime?: Date;
  maxDateTime?: Date;
  disableFuture?: boolean;
  disablePast?: boolean;
};

export type SliderFormFieldProps = GenericComposableFormFieldProps & {
  type: "slider";
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number | number[];
};


export type ComposableFormFieldProps =
  | TextLikeFormFieldProps
  | PhoneFormFieldProps
  | NumberFormFieldProps
  | SelectFormFieldProps
  | CheckboxFormFieldProps
  | RadioFormFieldProps
  | SwitchFormFieldProps
  | DateFormFieldProps
  | TimeFormFieldProps
  | DateTimeFormFieldProps
  | SliderFormFieldProps
  | FileFormFieldProps;

interface DefaultFormValues {
  [key: string]: string | undefined;
}
export type ComposableFormProps = {
  fields: ComposableFormFieldProps[];
  onSubmit: (data: Record<string, unknown>) => Promise<void>;
  onReset?: () => void;
  onError?: (errors: FieldErrors) => void;
  defaultValues?: DefaultFormValues;
  submitButtonText?: string;
  resetButtonText?: string;
  showResetButton?: boolean;
  showSubmitButton?: boolean;
  submitButtonProps?: ButtonProps;
  resetButtonProps?: ButtonProps;
  gridProps?: GridProps;
  variant?: "outlined" | "filled" | "standard";
  dense?: boolean;
  inline?: boolean;
};

