import type { Meta, StoryObj } from "@storybook/react";
import ComposableHookForm from "../components/ComposableHookForm";
import { ComposableFormFieldProps, ComposableFormProps } from "../components/ComposableHookForm/ComposableFormTypes";

const meta: Meta<typeof ComposableHookForm> = {
  title: "Example/ComposableHookForm/CheckboxField",
  component: ComposableHookForm,
};

export default meta;

type Story = StoryObj<typeof meta>;

const singleCheckbox: ComposableFormFieldProps[] = [
  {
    name: 'agreement', 
    label: 'I agree to the terms and conditions', 
    type: 'checkbox', 
    validator: { required: true },
    validationMessage: 'You must agree to the terms and conditions'
  }
];

const multipleCheckboxes: ComposableFormFieldProps[] = [
  {
    name: 'termsAgreement', 
    label: 'I agree to the terms and conditions', 
    type: 'checkbox', 
    validator: { required: true },
    validationMessage: 'You must agree to the terms and conditions'
  },
  {
    name: 'privacyPolicy', 
    label: 'I have read the privacy policy', 
    type: 'checkbox', 
    validator: { required: true },
    validationMessage: 'You must read the privacy policy'
  },
  {
    name: 'marketingConsent', 
    label: 'I would like to receive marketing emails', 
    type: 'checkbox', 
    validator: { required: false },
  }
];

const inlineCheckboxes: ComposableFormFieldProps[] = [
  {
    name: 'inlineCheckbox1', 
    label: 'Option 1', 
    type: 'checkbox', 
    validator: { required: false },
    inline: true
  },
  {
    name: 'inlineCheckbox2', 
    label: 'Option 2', 
    type: 'checkbox', 
    validator: { required: false },
    inline: true
  },
  {
    name: 'inlineCheckbox3', 
    label: 'Option 3', 
    type: 'checkbox', 
    validator: { required: false },
    inline: true
  }
];

const baseArgs: ComposableFormProps = {
  fields:[],
  variant: 'outlined',
  showSubmitButton: true,
  showResetButton: true,
  submitButtonText: 'Submit',
  resetButtonText: 'Reset',
  onSubmit: async (data) => alert(JSON.stringify(data)),
  onError: (errors) => alert(JSON.stringify(errors)),
};

export const SingleCheckbox: Story = { 
  args: {
    ...baseArgs,
    fields: singleCheckbox
  } 
};

export const MultipleCheckboxes: Story = { 
  args: {
    ...baseArgs,
    fields: multipleCheckboxes
  } 
};

export const InlineCheckboxes: Story = { 
  args: {
    ...baseArgs,
    fields: inlineCheckboxes,
  } 
};