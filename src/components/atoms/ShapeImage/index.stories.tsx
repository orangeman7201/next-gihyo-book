import { Meta, StoryFn } from '@storybook/react'
import ShapeImage from './index'

export default {
  title: 'Atoms/ShapeImage',
  argTypes: {
    shape: {
      options: ['circle', 'square'],
      control: { type: 'radio' },
      defaultValue: 'square',
      table: {
        type: { summary: 'circle | square' },
        defaultValue: { summary: 'square' },
      },
    },
    src: {
      control: { type: 'text' },
      description: '画像url',
      table: {
        type: { summary: 'string' },
      },
    },
    width: {
      control: { type: 'number' },
      defaultValue: 320,
      description: '横幅',
      table: {
        type: { summary: 'number' },
      },
    },
    height: {
      control: { type: 'number' },
      defaultValue: 320,
      description: '縦幅',
      table: {
        type: { summary: 'number' },
      },
    },
    alt: {
      control: { type: 'string' },
      defaultValue: '',
      description: 'alt',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} as Meta<typeof ShapeImage>

const Template: StoryFn<typeof ShapeImage> = (arg) => <ShapeImage {...arg} />

export const Circle = Template.bind({})
Circle.args = {
  src: '/images/sample/1.jpg',
  shape: 'circle',
  width: 320,
  height: 320,
  alt: '',
}

export const Square = Template.bind({})
Square.args = {
  src: '/images/sample/1.jpg',
  shape: 'square',
  width: 320,
  height: 320,
  alt: '',
}
