import { Meta, StoryFn } from '@storybook/react'
import Dropdown, { DropdownItem } from './index'

export default {
  title: 'Molecules/Dropdown',
  argTypes: {
    options: {
      control: { type: 'array' },
      description: 'ドロップダウンの選択肢',
      table: {
        type: { summary: 'array' },
      },
    },
    hasError: {
      control: { type: 'boolean' },
      description: 'エラーの有無',
      table: {
        type: { summary: 'boolean' },
      },
    },
    placeholder: {
      control: { type: 'string' },
      description: 'プレースホルダー',
      table: {
        type: { summary: 'string' },
      },
    },
    value: {
      control: { type: 'string' },
      description: 'ドロップダウンの初期値',
      table: {
        type: { summary: 'string' },
      },
    },
    onChange: {
      description: '値が変化した時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as Meta<typeof Dropdown>

const Template: StoryFn<typeof Dropdown> = (arg) => <Dropdown {...arg} />

export const Normal = Template.bind({})
Normal.args = {
  options: [
    { value: null, label: '-' },
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'three', label: 'Three' },
  ],
  placeholder: 'Please select items from the list',
}

export const InitialValue = Template.bind({})
InitialValue.args = {
  options: [
    { value: null, label: '-' },
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'three', label: 'Three' },
  ],
  placeholder: 'Please select items from the list',
  value: 'one',
}

export const Many = Template.bind({})
Many.args = {
  options: Array.from(Array(20), (_v, k) => {
    return { value: k.toString(), label: k.toString() }
  }),
  placeholder: 'Please select items from the list',
}

export const OnchangeShow = Template.bind({})
const test = (selected: DropdownItem | undefined) => {
  window.alert(selected?.value)
}
OnchangeShow.args = {
  options: [
    { value: null, label: '-' },
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'three', label: 'Three' },
  ],
  placeholder: 'Please select items from the list',
  onChange: test,
}
