import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from '@mui/material'
import BioComponent from "../components/BioComponent";


const meta: Meta<typeof BioComponent> = {
  title: "Example/BioComponent",
  component: BioComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'contained',
    children: <Typography variant="h5">BioComponent Title</Typography>,
  },
};
