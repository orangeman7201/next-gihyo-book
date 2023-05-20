/* eslint-disable */

import styled from "styled-components";
import type { Responsive } from '@/types/styles';
import { toPropValue, Color, Space } from "@/utils/styles";


/**
 * 以下のように使用する
 * <Box marginTop='10px'>
 *    <ChildComponent>
 * </Box>
 * 
 * <Box marginTop={1}> 8pxのmarginになる
 *    <ChildComponent>
 * </Box>
 * 
 *  <Box marginTop={{base: 1, md: 2}}> 768px以上は16pxのマージン、それ以外は8pxのマージン
 *    <ChildComponent>
 * </Box>
 */
export type BoxProps = {
  color?: Responsive<Color>
  backgroundColor?: Responsive<Color>
  width?: Responsive<String>
  height?: Responsive<String>
  minWidth?: Responsive<String>
  minHeight?: Responsive<String>
  display?: Responsive<String>
  border?: Responsive<String>
  overflow?: Responsive<String>
  margin?: Responsive<Space>
  marginTop?: Responsive<Space>
  marginRight?: Responsive<Space>
  marginBottom?: Responsive<Space>
  marginLeft?: Responsive<Space>
  padding?: Responsive<Space>
  paddingTop?: Responsive<Space>
  paddingRight?: Responsive<Space>
  paddingBottom?: Responsive<Space>
  paddingLeft?: Responsive<Space>
}

const Box = styled.div<BoxProps>`
  ${(props) => toPropValue('color', props.color, props.theme)}
  ${(props) => toPropValue('background-color', props.backgroundColor, props.theme)}
  ${(props) => toPropValue('width', props.width, props.theme)}
  ${(props) => toPropValue('height', props.height, props.theme)}
  ${(props) => toPropValue('min-width', props.minWidth, props.theme)}
  ${(props) => toPropValue('min-height', props.minHeight, props.theme)}
  ${(props) => toPropValue('display', props.display, props.theme)}
  ${(props) => toPropValue('border', props.border, props.theme)}
  ${(props) => toPropValue('overflow', props.overflow, props.theme)}
  ${(props) => toPropValue('margin', props.margin, props.theme)}
  ${(props) => toPropValue('margin-top', props.marginTop, props.theme)}
  ${(props) => toPropValue('margin-left', props.marginLeft, props.theme)}
  ${(props) => toPropValue('margin-bottom', props.marginBottom, props.theme)}
  ${(props) => toPropValue('margin-right', props.marginRight, props.theme)}
  ${(props) => toPropValue('padding', props.padding, props.theme)}
  ${(props) => toPropValue('padding-top', props.paddingTop, props.theme)}
  ${(props) => toPropValue('padding-left', props.paddingLeft, props.theme)}
  ${(props) => toPropValue('padding-bottom', props.paddingBottom, props.theme)}
  ${(props) => toPropValue('padding-right', props.paddingRight, props.theme)}
`
export default Box