import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button";


const meta:Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Contained: Story = {
  args: {
    variant: 'contained',
    children: "Button",
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: "Button",
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    children: "Button",
  },
};

export const Disabled: Story = {
  args: {
    variant: 'contained',
    children: "Button",
    disabled: true,
  },
};

export const Secondary: Story = {
  args: {
    variant: 'contained',
    children: "Button",
    color: 'secondary',
  },
};