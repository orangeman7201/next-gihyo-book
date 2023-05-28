import { Meta, StoryFn } from '@storybook/react'
import Input from './index'

export default {
  title: 'Atoms/Input',
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: 'プレースホルダー',
      table: {
        type: { summary: 'string' },
      },
    },
    hasBorder: {
      control: { type: 'bool' },
      defaultValue: true,
      description: 'ボーダーフラグ',
      table: {
        type: { summary: 'boolean' },
      },
    },
    hasError: {
      control: { type: 'bool' },
      defaultValue: false,
      description: 'バリデーションフラグ',
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
} as Meta<typeof Input>

const Template: StoryFn<typeof Input> = (arg) => <Input {...arg} />

export const Normal = Template.bind({})

export const Error = Template.bind({})
Error.args = { hasError: true }
