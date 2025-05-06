import type { Meta, StoryObj } from "@storybook/react";
import ComposableHookForm from "../components/ComposableHookForm";
import { ComposableFormFieldProps } from "../components/ComposableHookForm/ComposableFormTypes";
import { ComposableFormProps } from "../components/ComposableHookForm/ComposableFormTypes";

const meta: Meta<typeof ComposableHookForm> = {
  title: "Example/ComposableHookForm",
  component: ComposableHookForm,

};

export default meta;

type Story = StoryObj<typeof meta>;

const fields: ComposableFormFieldProps[] = [
  {
    name: 'name', label: 'Name', type: 'text', validator: { required: true, maxLength: 3 },
    validationMessage: 'Name is required and must be less than 3 characters'
  },
  {
    name: 'age', label: 'Age', type: 'number', validator: { required: false },
  },
  {
    name: 'email', label: 'Email', type: 'email',
    validator: { required: true, pattern: /\S+@\S+\.\S+/ },
    validationMessage: 'Please enter a valid email address'
  },
  {
    name: 'password', label: 'Password', type: 'password', validator: { required: true },
    validationMessage: 'Password is required'
  },
]

const args: ComposableFormProps = {
  variant: 'outlined',
  fields,
  showSubmitButton: true,
  showResetButton: true,
  submitButtonText: 'Submit',
  resetButtonText: 'Reset',
  onSubmit: async (data) => alert(JSON.stringify(data)),
  onError: (errors) => alert(JSON.stringify(errors)),
}

export const Default: Story = { args };
