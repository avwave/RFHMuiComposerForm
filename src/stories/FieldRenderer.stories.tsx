import type { Meta, StoryObj } from "@storybook/react";
import { UseFormRegister } from "react-hook-form";
import { FormValues } from "../components/ComposableHookForm/ComposableFormTypes";
import TextFormField, { TextFieldRendererProps } from "../components/ComposableHookForm/Fields/TextFormField";

type StoryFieldName = 'textField';

type ControllableFieldFormArgs = React.ComponentProps<typeof TextFormField> & {
  variant: TextFieldRendererProps['field']['variant']
}

const meta: Meta<ControllableFieldFormArgs> = {
  title: "Example/ComposableHookForm/Fields",
  component: TextFormField,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: (code: string) => {
          return code
            .replace(/register={.*}/gm, '')
            .replace(/register:.*/gm, '')
            .replace(/^<.*/gm, '')
            .replace(/^\/>/gm, '')
        }
      }
    }
  },
  args: {
    variant: 'outlined',
  },
  tags: ["autodocs"],
  argTypes: {
    register: {
      control: false,
    },
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'standard'],
    }

  },
};

export default meta;

const mockRegister = ((name: StoryFieldName) => ({
  onChange: async () => { },
  onBlur: async () => { },
  ref: () => { },
  name
})) as UseFormRegister<FormValues>


type Story = StoryObj<ControllableFieldFormArgs>;
export const TextFieldRenderer: Story = {
  render: (args) => {
    const {
      variant,
      ...rest
    } = args

    const field = {
      ...rest.field,
      variant: variant || 'outlined',
    }
    return <TextFormField {...rest} field={field} />
  },
  args: {
    field: {
      type: 'text',
      label: 'Required Text Field',
      name: 'textField' as StoryFieldName,
      validator: { required: true },
    },
    register: mockRegister,
  },
};